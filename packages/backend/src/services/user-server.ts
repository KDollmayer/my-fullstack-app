import { UserItem } from "@my-fullstack-app/shared";
import { saveUser, userExists, userModel } from "../models/user-reposetory";





export const saveUsers = async (userItem: UserItem): Promise<void> => {



    const user = userItem.userName
    const userInfo = await userExists(user)



    if (!userItem) {
        throw new Error("Invalid Username or password");

    } else if (userInfo) {
        throw new Error('Username already exists')
    }

    await saveUser(userItem)


}

