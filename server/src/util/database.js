import mongoose from 'mongoose'
import { getRedisAllData, setRedisHashAll } from '../lib/redis.lib.js';

export const connectDB = async () => {

    try {

        await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log("database connected");

    } catch (error) { console.error('database error') }

}

// This function is used to find any data is already present in database or not
// Model -> The corresponding database model
// data -> The data to checked, as object
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

// Fetching all data from a collection and from redis
// Model -> The corresponding database model
// redisCollection -> The corresponding redis collection
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