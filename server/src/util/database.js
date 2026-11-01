import mongoose from 'mongoose'
import { getRedisAllData, redisClient, setRedisHashAll } from '../lib/redis.lib.js';

export const connectDB = async () => {

    try {

        await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log("database connected");

    } catch (error) { console.error('database error') }

}

/** This function is used to find any data is already present in database or not
 * @param { Database model } Model - The model in which data duplication checked
 * @param { { key: value } } data - The data which should be checked for duplication
 * @returns { string | null } - Duplicate value or null
 * */
export const isAlreadyInDB = async ( Model, data ) => {

    const conditions = Object.entries(data)
        .filter(([, value]) => value)
        .map(([field, value]) => ({ [field]: value }))

    const existing = await Model.findOne({ $or: conditions }).lean()
    if (!existing) return null

    const matchedFields = conditions
        .map(cond => Object.keys(cond)[0])
        .filter(field => String(existing[field]) === String(data[field]))

    return data[matchedFields[0]]

}

/** Fetching all data from a collection and from redis
 * @param { Database model } Model - The model in which data should be retreived
 * @param { string } redisCollection - The redis collection in which change should be altered
 * @returns { { message: string, error: boolean } }
 * */
export const fetchAllData = async ( Model, redisCollection ) => {

    try {

        const redisData = await getRedisAllData( redisCollection )
        if( redisData ) return { data: redisData, error: false }
        else {

            const data = await Model.find().lean()
            const formatted = data?.map(({ __v, ...rest }) => rest)
            await setRedisHashAll( redisCollection, formatted, 1800 )
            return { data: formatted, error: false }

        }

    } catch ( error ) { return { message: 'Error on getting data', error: false } }

}

/** Deleting a document from a collection
 * @param { string } id - The mongo object id of item which should be deleted
 * @param { Database model } Model - The model in which deletion should be performed
 * @param { string } redisCollection - The redis collection in which change should be altered
 * @param { string } content - The string that should be included in returning messages
 * @returns { { message: string, error: boolean } }
 * */
export const deleteDocument = async ( id, Model, redisCollection, content = '' ) => {

    try {

        const deleteStatus = await Model.findByIdAndDelete(id)
        await redisClient.hDel( redisCollection, id )
        if( !deleteStatus ) return { message: `${ content } not found`, error : true }
        else return { message: `${ content } deleted successfully`, error: false }

    } catch ( error ) { return { message: `Error on removing ${ content }`, error: true } }

}