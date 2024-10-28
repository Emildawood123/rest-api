import express from 'express';
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose';
import router from './router'

const app = express()
app.use(cors({
    credentials: true
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(compression())
const server = http.createServer(app)
server.listen(8080, () => {
    console.log("the server run at port http://127.0.0.1:8080/")
})
const MONGO_URL = "mongodb://localhost:27017/test"
mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))
app.use('/', router())
