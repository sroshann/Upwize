import { createClient } from "redis"

export let redisClient
export const connectRedis = async () => {

    try {

        redisClient = createClient({

            socket: {

                host: process.env.REDIS_URL,
                port: process.env.REDIS_PORT

            }

        })

        redisClient.on('ready', () => console.log('Redis connected'))
        redisClient.on('error', error => console.log('Error on connecting redis ', error))
        await redisClient.connect()

    } catch (error) { console.log('Error occured on connecting redis') }

}

export const redisCollections = {

    associations: 'associations',
    positions: 'positions',
    candidates: 'candidates'

}

// Store a single data into redis as hash set
// collection - redis collection name
// data - data array to be stored
// expireTime - redis expiry time 
export const setRedisHash = async ( collection, data, expireTime ) => {

    await redisClient.hSet( collection, data?._id.toString(), JSON.stringify( data ) )
    await redisClient.expire( collection, expireTime )

}

// It stores data into redis, one by one as redis hashes
// collection - redis collection name
// data - data array to be stored
// expireTime - redis expiry time
export const setRedisHashAll = async ( collection, data, expireTime ) => {

    // multi() creates a Redis transaction: a way to queue up several commands 
    // and send them to Redis together as a single batch, 
    // which Redis then runs one after another without any other client’s commands interleaving.
    if( !data.length ) return
    const multi = redisClient.multi()
    for( const item of data ) multi.hSet( collection, item?._id.toString(), JSON.stringify( item ) )
    multi.expire( collection, expireTime )
    await multi.exec()

}

// It gives all the data stored in redis collection
// collection - redis collection name
export const getRedisAllData = async ( collection ) => {

    const dataObject = await redisClient.hGetAll( collection )
    const dataArray = Object.values( dataObject ).map( value => JSON.parse( value ) )
    if( dataArray && dataArray.length > 0 ) return dataArray
    else return null

}