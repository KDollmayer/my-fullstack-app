import { UserItem } from "@my-fullstack-app/shared";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const salt = parseInt(process.env.SALT_NUM || "10")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})


export const userModel = mongoose.model<UserItem>('users', userSchema)



export const userExists = async (username: string): Promise<UserItem | null> => {
    return await userModel.findOne({ username }).exec()
}
export const authUser = async (username: string, password: string): Promise<UserItem | null> => {
    const user = await userModel.findOne({ username }).exec()
    console.log(username, password)

    console.log(user)

    return user && password && (await bcrypt.compare(password, user.password)) ? user : null
}

export const saveUser = async (userItem: UserItem): Promise<void> => {
    userItem.password = await bcrypt.hash(userItem.password, salt)
    const newModel = new userModel(userItem)
    newModel.save()


}





