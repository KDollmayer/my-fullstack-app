import express, { Application, json, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import indexRouter from "./routes/index";

import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import { setupMongoDb } from './config/common';


dotenv.config()



const app: Application = express()
const port: number = parseInt(process.env.SERVER_MY_FULLSTACK_APP || '4000')
const mongoUrl: string = process.env.MONGODB_URL || 'mongodb://localhost:27017'


app.use(cors());
app.use(json());
app.use(cookieParser());

export type TokenPayload = {
    userId: string,
    name: string;

};

export interface JwtRequest<T> extends Request<T> {
    user?: TokenPayload | undefined;
}


app.use(
    async (req: JwtRequest<TokenPayload>, res: Response, next: NextFunction) => {
        const authHeader = req.header('authorization');

        if (authHeader) {
            const token = authHeader.split(' ')[1]

            try {
                req.user = jwt.verify(
                    token,
                    process.env.JWT_SECRET as string
                ) as TokenPayload;

            } catch (err) {
                if (err instanceof JsonWebTokenError) {
                    console.error(err);
                    err.message === "Invalid token" &&
                        res.status(400).json({ error: "Invalid token" });
                }
            }
        }

        next();
    }
);

app.use("/", indexRouter);

app.listen(port, async function () {
    try {
        await setupMongoDb(mongoUrl);
        console.log("connection to database successful");
    } catch (err) {
        console.log("could not connect to database");
    }
    console.log(`App is listening on port ${port}!`);
});
