import express, { Application, json, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import MessageItem from '@my-fullstack-app/shared'

dotenv.config()
const app: Application = express()

app.use(cors())
app.use(json())

const port: number = parseInt(process.env.SERVER_MY_FULLSTACK_APP || '4003')

const MESSAGE_ITEMS: MessageItem[] = [{
    id: '12512',
    userName: 'karlDollmayer',
    messageText: 'hejsan hejsanhejsan',
    timeStamp: new Date()
}]

app.get('/messages', (req: Request, res: Response<MessageItem[]>) => {
    res.send(MESSAGE_ITEMS)
})


app.post('/messages', (req: Request<MessageItem>, res: Response<MessageItem[]>) => {
    const messageItem = req.body
    MESSAGE_ITEMS.push(messageItem)
    res.send(MESSAGE_ITEMS)

})


app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
