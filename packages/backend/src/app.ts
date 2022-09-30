import express, { Application, json, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import MessageItem from '@my-fullstack-app/shared'
import { loadMessages, setUpMongoDb, saveMessages } from './db'

dotenv.config()
const app: Application = express()

app.use(cors())
app.use(json())

const port: number = parseInt(process.env.SERVER_MY_FULLSTACK_APP || '4000')
const mongoUrl: string = process.env.MONGODB_URL || 'mongodb://localhost:27017'

const MESSAGE_ITEMS: MessageItem[] = [{
    _id: '12512',
    userName: 'karlDollmayer',
    messageText: 'hejsan hejsanhejsan',
    timeStamp: new Date()
}]

app.get('/messages', async (req: Request, res: Response<MessageItem[]>) => {
    const messageItems = await loadMessages()
    res.send(messageItems)
})


app.post('/messages', async async (req: Request<MessageItem>, res: Response<MessageItem[]>) => {
    const messageItem = req.body
    const saveMessage = await saveMessages(messageItem)

    const messageItems = await loadMessages()

    res.send(messageItems)

})


app.listen(port, async function () {
    await setUpMongoDb(mongoUrl)
    console.log(`App is listening on port ${port} !`)
})
