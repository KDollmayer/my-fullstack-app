import { MessageItem } from "@my-fullstack-app/shared"
import express, { Request, Response } from "express"
import { JwtRequest } from "../services/auth"

import { loadAllMessages, saveMessage } from "../services/message-service"

const messageController = express.Router()

messageController.get('/', async (req: Request, res: Response<MessageItem[]>) => {

    res.send(await loadAllMessages())
})


messageController.post('/', async (req: JwtRequest<MessageItem>, res: Response<MessageItem[]>) => {
    try {

        const token = req.jwt
        if (!token) {
            throw new Error("invalid token");

        }
        res.send(await saveMessage(req.body))
    } catch (e) {
        res.sendStatus(400)
    }

})

export default messageController