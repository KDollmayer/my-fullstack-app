
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyUser } from "../models/User";
import dotenv from 'dotenv'

import { JwtRequest, TokenPayload } from "../app";

dotenv.config()

export const requireLogin = (req: JwtRequest<TokenPayload>, res: Response, next: NextFunction) => {
    req.user ? next() : res.status(401).json({ error: "Unauthorized" });
};

export const logInUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;


    try {
        const user = await verifyUser(username, password);


        if (user) {
            const token = jwt.sign(
                { userId: user._id, name: user.username },
                process.env.JWT_SECRET as string,
                { expiresIn: "1h", subject: username }
            );

            res.json(token)
        } else {
            res.status(401).json({ error: 'Invalid email or password' })
        }
    } catch (err) {
        console.error("ERROR: ", err);
        res.json({ error: "User not found" });
    }
};