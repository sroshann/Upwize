import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { createServer } from 'http'
import { connectDB } from './util/database.js'

dotenv.config()
const app = express()
const server = createServer(app)

app.use(express.json())
app.use(cors({}))

server.listen(process.env.PORT, () => {

    console.log('Server is runnning')
    connectDB()

})