import { UserItem } from "@my-fullstack-app/shared";
import { saveUser } from "../models/user-reposetory";


export const saveUsers = async (userItem: UserItem): Promise<void> => {



    if (!userItem) {
        throw new Error("Invalid Username or password");

    }

    await saveUser(userItem)


}

