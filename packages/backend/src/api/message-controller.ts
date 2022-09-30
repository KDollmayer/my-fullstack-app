import MessageItem from "@my-fullstack-app/shared"
import express, { Request, Response } from "express"
import { loadMessages } from "../models/messages-repository"
import { saveMessage } from "../services/message-service"

const messageController = express.Router()

messageController.get('/', async (req: Request, res: Response<MessageItem[]>) => {
    const messageItems = await loadMessages()
    res.send(messageItems)
})


messageController.post('/', async (req: Request<MessageItem>, res: Response<MessageItem[]>) => {
    res.send(await saveMessage(req.body))
})

export default messageController