import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { createServer } from 'http'
import { connectDB } from './util/database.js'
import beforeElection from './routes/admin/before-election.js'
import { connectRedis } from './lib/redis.lib.js'

dotenv.config()
const app = express()
const server = createServer(app)

app.use(cors({

    origin: 'http://localhost:5173',
    credentials: true

}))
app.use(express.json({ limit: "3mb" }))

// Routes
app.use('/admin/before-election', beforeElection)

server.listen(process.env.PORT, () => {

    console.log('Server is runnning')
    connectDB()
    connectRedis()

})