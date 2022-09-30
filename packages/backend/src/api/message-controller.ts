import MessageItem from "@my-fullstack-app/shared"
import express, { Request, Response } from "express"

import { loadAllMessages, saveMessage } from "../services/message-service"

const messageController = express.Router()

messageController.get('/', async (req: Request, res: Response<MessageItem[]>) => {

    res.send(await loadAllMessages())
})


messageController.post('/', async (req: Request<MessageItem>, res: Response<MessageItem[]>) => {
    try {
        res.send(await saveMessage(req.body))
    } catch (e) {
        res.sendStatus(400)
    }

})

export default messageController