import mongoose from "mongoose";
import { MessageItem } from "@my-fullstack-app/shared";

const messageSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  messageText: { type: String, required: true },
  timeStamp: { type: Date, required: true },
});
const messageModel = mongoose.model<MessageItem>("messages", messageSchema);

export const loadMessages = async (): Promise<MessageItem[]> =>
  messageModel.find({}).exec();

export const createNewMessage = async (
  messageItem: MessageItem
): Promise<void> => {
  messageModel.create(messageItem);
};
