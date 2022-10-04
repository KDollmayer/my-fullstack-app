import { UserItem } from "@my-fullstack-app/shared"
import express, { Request, Response } from "express"




import { saveUser } from "../models/user-reposetory"
import { saveUsers } from "../services/user-server"

const userController = express.Router()

userController.post('/', async (req: Request<UserItem>, res: Response<void>) => {
    try {
        res.send(await saveUsers(req.body))
    } catch (e) {
        res.sendStatus(409)
    }
})




export default userController