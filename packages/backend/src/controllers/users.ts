import { Request, Response } from "express";
import { JwtRequest, TokenPayload } from "../app";
import { getUser, newUser } from "../models/User";


export const createUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    // TODO: check required fields
    try {
        const user = await newUser(req.body)

    } catch (err) {
        console.error("ERR", err)
        res.status(409).json({ error: "User already exists" })
    }
    res.json({ message: "User created!" })
}

export const getMe = async (req: JwtRequest<TokenPayload>, res: Response) => {
    const userId: string | undefined = req.user?.userId


    try {
        const user = await getUser(userId as string)

        res.json(user)
    } catch (err) {
        res.status(404).json({ error: 'cant find user' })
    }

}