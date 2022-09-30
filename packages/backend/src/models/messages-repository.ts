import mongoose, { connect } from 'mongoose'
import MessageItem from '@my-fullstack-app/shared'

const messageSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    messageText: { type: String, required: true },
    timeStamp: { type: Date, required: true },

})
const messageModel = mongoose.model<MessageItem>('messages', messageSchema)

export const setUpMongoDb = async (url: string) => {
    connect(url);

}

export const loadMessages = async (): Promise<MessageItem[]> => {
    return messageModel.find({}).exec()


}
export const saveMessages = async (messageItem: MessageItem): Promise<void> => {
    const newModel = new messageModel(messageItem)
    newModel.save()
}