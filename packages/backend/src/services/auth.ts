import { UserItem } from '@my-fullstack-app/shared';
import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken'
import { UserInfo } from 'os';
import { authUser, } from '../models/user-reposetory';


const secret: string = process.env.JWT_SECRET || 'ölksjdfh198721391876fdlajhgsadlkjhfg29876521349765219786534jkhgvadsjhvdasjhgvdjhasgvkjhsadgfasdljkkljh1238074612387943218796432198735241978453291jhgsdfaghjdfsghjdfaslfgs'

export type TokenPayload = {
    sub: string,
    name: string,
    roles: string[]
}

export interface JwtRequest<T> extends Request<T> {

    jwt?: TokenPayload;
}

export const authenticateToken = (
    req: JwtRequest<any>,
    res: Response,
    next: NextFunction
) => {
    const token: string | undefined = req.header("authorization")?.split(" ")[1];

    if (token) {
        try {
            const decoded = jsonwebtoken.verify(token, secret) as TokenPayload;
            console.log(decoded)
            req.jwt = decoded;
        } catch (err) {
            return res.sendStatus(403); // Bad token!
        }
    }

    next();
};

export const loginUser = async (
    req: JwtRequest<UserItem>,
    res: Response<string>
) => {
    const user = req.body;

    const userInfo = await performUserAuthentication(user);
    if (!userInfo) {
        return res.sendStatus(403);
    }

    console.log("Got user:", user);
    const token = jsonwebtoken.sign(
        { sub: userInfo.username },
        secret,
        { expiresIn: "1800s" }
    );

    res.status(200).send(token);
};

const performUserAuthentication = async (
    user: UserItem
): Promise<UserItem | null> => {

    const userInfo = await authUser(user.username, user.password);


    // TODO Use bcrypt to check that password is maching
    return userInfo;
};
export const requireLogin = (req: JwtRequest<any>, res: Response, next: NextFunction) => {
    req.jwt ? next() : res.status(401).json({ error: "Unauthorized" });
};