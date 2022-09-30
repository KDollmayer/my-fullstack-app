import { connect } from 'mongoose'

export const setUpMongoDb = async (url: string) => {
    connect(url);

}

export const loadMessages = () => {

}
export const saveMessages = () => {

}