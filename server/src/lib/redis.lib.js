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