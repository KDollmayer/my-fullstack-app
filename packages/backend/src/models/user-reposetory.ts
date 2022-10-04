import { UserItem } from "@my-fullstack-app/shared";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const salt = parseInt(process.env.SALT_NUM || "10")

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true }
})


const userModel = mongoose.model<UserItem>('users', userSchema)

userSchema.pre('save', async function (next) {
    if (this.modifiedPaths().includes("password")) {
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
})

export const saveUser = async (userItem: UserItem): Promise<void> => {
    const newModel = new userModel(userItem)
    newModel.save()
}



