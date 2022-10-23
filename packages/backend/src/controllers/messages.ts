import { Request, Response } from "express";
import { JwtRequest, TokenPayload } from "../app";
import { createNewMessage, loadMessages } from "../models/Messages";



export const getMessages = async (req: Request, res: Response) => {
    try {
        const messages = await loadMessages();
        res.json(messages);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const createMessage = async (req: JwtRequest<TokenPayload>, res: Response) => {




    const message = {
        userId: req.user?.userId as string,
        username: req.user?.name as string,
        messageText: req.body.messageItem as string,
        timeStamp: new Date()
    }



    try {
        await createNewMessage(message)

    } catch (err) {
        console.error('err', err)
        res.status(400).json({ error: 'Bad Request' })

    }
    res.json({ message: 'Message created' })
}