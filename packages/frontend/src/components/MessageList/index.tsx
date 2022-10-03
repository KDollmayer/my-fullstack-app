import MessageItem from '@my-fullstack-app/shared'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import * as s from './styles'

axios.defaults.baseURL = process.env.REACT_APP_API_KEY

const fetchMessages =async (): Promise<MessageItem[]> => {
   const response = await axios.get<MessageItem[]>('/messages')
   return response.data
} 



export default function MessageList() {
  const [messages, setMessages] = useState<MessageItem[]>([])
  const [error, setError] = useState<string | undefined>()
  const [messageText, setMessageText] = useState<string>('')
  const [userText, setUserText] = useState<string>('')

  const waitingMessage: string = 'Waiting for messages...' 

  const createMessage = (messageText: string, userText: string): void => {
    localStorage.setItem('username', JSON.stringify(userText));
    const messageItem: MessageItem = {
      userName: userText,
      messageText: messageText,
      timeStamp: new Date()
  
    }
   axios.post<MessageItem[]>('/messages', messageItem)
   .then((res) => {
      setMessages(res.data)
      setMessageText('')
   })
    
  }
  
  useEffect(() => {
    fetchMessages().then(setMessages).catch((error) => {
      setMessages([])
      setError('Something went wrong with fetching messages...')

    })
  }, [])

  const output = () => {
      if (error) {
        return( <div > <h2>{error}</h2></div> )
      } else if (messages) {
         return( <> {
            messages.map((item) => {
              return (
                <s.ItemDiv key={item._id}>
                <s.H2>{item.userName}</s.H2>
                <s.P>{item.messageText}</s.P>
                </s.ItemDiv>
              )
            })
          }
          </>
           )
      } else {
        return ( <div>
          <h2>{waitingMessage}</h2>
        </div> )
      }
  }
    return (
      <s.MessageDiv>

{output()}

<div className=''>
  <input type="text" placeholder='Message' value={messageText} onChange={(e) => setMessageText(e.target.value)} />
  <input type="text" placeholder='Username' required value={userText} onChange={(e) => setUserText(e.target.value)} />
  <button onClick={(e) => createMessage(messageText, userText)}>Send</button>
</div>
      </s.MessageDiv>
    )
  }