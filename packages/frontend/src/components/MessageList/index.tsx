import {MessageItem, UserItem} from '@my-fullstack-app/shared'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo'

import * as s from './styles'

axios.defaults.baseURL = process.env.REACT_APP_API_KEY

axios.interceptors.request.use((config) => {
  if (!config?.headers) {
    config.headers = {};
  }
  const jwt = localStorage.getItem("access_token");
  if (jwt) {
    config.headers["authorization"] = `Bearer ${jwt}`;
  }
  return config;
});

const fetchMessages =async (): Promise<MessageItem[]> => {
   const response = await axios.get<MessageItem[]>('/messages')
   return response.data
} 

const fetchMe =async (): Promise<UserItem | null> => {
  const response = await axios.get<UserItem>('/users/me')
 
    return response.data
}




export default function MessageList() {
  const [messageText, setMessageText] = useState<string>('')
  const [userText, setUserText] = useState<UserItem | null>()
  const [messages, setMessages] = useState<MessageItem[]>([])
  const [error, setError] = useState<string | undefined>()
  
  

  const waitingMessage: string = 'Waiting for messages...' 


  const createMessage = (messageText: string, ): void => {
    
    const messageItem: string = messageText
     
     
  
    
   axios.post<MessageItem[]>('/messages', {messageItem})
   .then(async (res)  => {
      setMessages(await fetchMessages())
      setMessageText('')
   })
  }

 
 
  useEffect(() => {
    setInterval(async () => { 
      
    
    
     fetchMe().then(setUserText).catch((error) => {
       setUserText(null)
       setError('Something went wrong with fetching user...')

     })
    fetchMessages().then(setMessages).catch((error) => {
      setMessages([])
      setError('Something went wrong with fetching messages...')

            
     

    })
  }, 3000)
  }, [])

 

  function output() {
    if (error) {
      return (<div> <h2>{error}</h2></div>)
    } else if (messages) {
      
      return (<> {messages.map((item) => (

       
       

            < > 

           {item.username === userText?.username && 

              <s.UserMessage key={item._id} >
                
                <s.DivRight>
                <h2 >{item.username}</h2>
              <p>{item.messageText}</p>
              <s.Ptime>{item.timeStamp as any}</s.Ptime>
                </s.DivRight>
              
              </s.UserMessage>
           
           }
           {item.username !== userText?.username && 

              <s.UserMessage1 key={item._id} >
                            
               <s.DivLeft>
              <h2  >{item.username} </h2>
              <p   >{item.messageText}</p>
              <s.Ptime>{item.timeStamp as any}</s.Ptime>
              </s.DivLeft>
              
              
              </s.UserMessage1>
           
           }
            
          
            </>
      )
         


        
      )}
      </>
      )
    } else {
      return (<div>
        <h2>{waitingMessage}</h2>
      </div>)
    }
  }
    return (
      
      <><s.MsnMessengerDiv>
        <s.MessengerWindow>
        <s.Head><Logo/></s.Head>
          <s.messageDiv>

          {output()}
          </s.messageDiv>
       



          <s.InputDiv>
      <s.InputMessage  placeholder='Message' value={messageText} onChange={(e) => setMessageText(e.target.value)} />
     
      <s.Button onClick={(e) => createMessage(messageText)}> Send </s.Button>
      </s.InputDiv>
      
      </s.MessengerWindow>
      
      </s.MsnMessengerDiv>
      
      
      </> 
      
    )
  }