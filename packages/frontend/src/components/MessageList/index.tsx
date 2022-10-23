import {MessageItem, UserItem} from '@my-fullstack-app/shared'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  console.log(response.data)
    return response.data
}




export default function MessageList() {
  const [messageText, setMessageText] = useState<string>('')
  const [userText, setUserText] = useState<UserItem | null>()
  const [messages, setMessages] = useState<MessageItem[]>([])
  const [error, setError] = useState<string | undefined>()
  const navigate = useNavigate()
  

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
    fetchMe().then(setUserText).catch((error) => {
      setUserText(null)
      setError('Something went wrong with fetching user...')

    })
    fetchMessages().then(setMessages).catch((error) => {
      setMessages([])
      setError('Something went wrong with fetching messages...')

            
     

    })
  }, [])

 

  function output() {
    if (error) {
      return (<div> <h2>{error}</h2></div>)
    } else if (messages) {
      return (<> {messages.map((item) => (

       
       

            <> 

           {item.username === userText?.username && 

              <s.ItemDivGreen key={item._id} >
              <s.H2  >{item.username}</s.H2>
              <s.P>{item.messageText}</s.P>
              </s.ItemDivGreen>
           
           }
           {item.username !== userText?.username && 

              <s.ItemDiv key={item._id} >
              <s.H2  >{item.username} </s.H2>
              <s.P  >{item.messageText}</s.P>
              
              </s.ItemDiv>
           
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
      
      <><s.MessageDiv>

        {output()}



      </s.MessageDiv>
      <s.InputDiv>
      <s.InputText type="text" placeholder='Message' value={messageText} onChange={(e) => setMessageText(e.target.value)} />
     
      <s.SendButton onClick={(e) => createMessage(messageText)}> Send </s.SendButton>
      </s.InputDiv>
      
      
      </> 
      
    )
  }