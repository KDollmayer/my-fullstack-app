import { UserItem } from "@my-fullstack-app/shared";
import { saveUser, userModel } from "../models/user-reposetory";





export const saveUsers = async (userItem: UserItem): Promise<void> => {



    const user = userItem.userName

    const userExists = await userModel.findOne({ userName: user })

    if (!userItem) {
        throw new Error("Invalid Username or password");

    } else if (userExists) {
        throw new Error('Username already exists')
    }

    await saveUser(userItem)


}

