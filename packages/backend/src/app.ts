import express, { Application, json, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { setUpMongoDb, } from './models/common'
import messageController from './api/message-controller'
import userController from './api/user-controller'
import { authenticateToken, loginUser, requireLogin } from './services/auth'

dotenv.config()
const app: Application = express()

app.use(cors())
app.use(json())

const port: number = parseInt(process.env.SERVER_MY_FULLSTACK_APP || '4000')
const mongoUrl: string = process.env.MONGODB_URL || 'mongodb://localhost:27017'

app.use('/', authenticateToken);
app.use('/create-user', userController)
app.use('/login', loginUser)

app.use('/messages', requireLogin, messageController)


app.listen(port, async function () {
    await setUpMongoDb(mongoUrl)
    console.log(`App is listening on port ${port} !`)
})
