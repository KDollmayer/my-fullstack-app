import { UserItem } from "@my-fullstack-app/shared";
import { resolve } from "path";
import { loadMessages, saveMessages } from "../models/messages-repository";
import { saveUser } from "../models/user-reposetory";


export const saveUsers = async (userItem: UserItem): Promise<void> => {



    if (!userItem) {
        throw new Error("Invalid Username or password");

    }

    await saveUser(userItem)


}

