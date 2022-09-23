import React, { useState, useEffect } from 'react';
import MessageItem from '@my-fullstack-app/shared'
import './App.css';
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_KEY

const fetchMessages =async (): Promise<MessageItem> => {
   const response = await axios.get<MessageItem>('/messages')
   return response.data
} 
function App() {
  const [message, setMessage] = useState<MessageItem | undefined>()
  const [error, setError] = useState<string | undefined>()
  const waitingMessage: string = 'Waiting for messages...' 
  
  useEffect(() => {
    fetchMessages().then(setMessage).catch((error) => {
      setMessage(undefined)
      setError('Something went wrong with fetching messages...')

    })
  }, [])

  const output = () => {
      if (error) {
        return( <div > <h2>{error}</h2></div> )
      } else if (message) {
         return( <div >
          <h4>{message.userName}</h4> 
          <p>{message.messageText}</p>
          </div> )
      } else {
        return ( <div>
          <h2>{waitingMessage}</h2>
        </div> )
      }
  }
  return (
    <div className="App">
      <header className="App-header">
        
       Chat-App
       
      </header>
      <div className='App-hero'>
       {output()}
       
      </div>
    </div>
  );
}

export default App;
