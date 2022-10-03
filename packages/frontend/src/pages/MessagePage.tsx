import MessageItem from '@my-fullstack-app/shared'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import MainContent from '../components/MainContent'


axios.defaults.baseURL = process.env.REACT_APP_API_KEY

const fetchMessages =async (): Promise<MessageItem[]> => {
   const response = await axios.get<MessageItem[]>('/messages')
   return response.data
} 

export default function HomePage() {
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
                <div key={item._id}>
                <h3>{item.userName}</h3>
                <p>{item.messageText}</p>
                </div>
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
     <MainContainer>
      <Header  />
      <MainContent>
        
      {output()}

      <div className=''>
        <input type="text" placeholder='Message' value={messageText} onChange={(e) => setMessageText(e.target.value)} />
        <input type="text" placeholder='Username' required value={userText} onChange={(e) => setUserText(e.target.value)} />
        <button onClick={(e) => createMessage(messageText, userText)}>Send</button>
      </div>
     
    </MainContent>
    </MainContainer>
      
      

    
  )
}
