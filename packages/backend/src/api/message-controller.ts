import MessageItem from "@my-fullstack-app/shared"
import express, { Request, Response } from "express"
import { loadMessages, saveMessages } from "../models/messages-repository"

const messageController = express.Router()

messageController.get('/', async (req: Request, res: Response<MessageItem[]>) => {
    const messageItems = await loadMessages()
    res.send(messageItems)
})


messageController.post('/', async (req: Request<MessageItem>, res: Response<MessageItem[]>) => {
    const messageItem = req.body
    await saveMessages(messageItem)

    const messageItems = await loadMessages()

    res.send(messageItems)

})

export default messageController