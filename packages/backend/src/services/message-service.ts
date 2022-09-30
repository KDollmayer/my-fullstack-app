import MessageItem from "@my-fullstack-app/shared";
import { resolve } from "path";
import { loadMessages, saveMessages } from "../models/messages-repository";


export const saveMessage = async (messageItem: MessageItem): Promise<MessageItem[]> => {

    const message = messageItem.messageText
    const user = messageItem.userName

    if (!message || message == '' && !user || user == '') {
        throw new Error("Invalid message");

    }
    messageItem.timeStamp = new Date()
    await saveMessages(messageItem)

    return await loadMessages()
}


