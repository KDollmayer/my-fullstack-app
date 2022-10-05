import { UserItem } from '@my-fullstack-app/shared'
import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'



import MainContent from '../MainContent'

import * as s from './styles'

axios.defaults.baseURL = process.env.REACT_APP_API_KEY
// eslint-disable-next-line react-hooks/rules-of-hooks


export default function SignUp() {

  const navigate = useNavigate()
 

  const [userText, setUserText] = useState<string>('')  
  const [password, setPassword] = useState<string>('')  
  

  function createUser(user: string, passwordText: string): void {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
      const userItem: UserItem = {
        userName: user,
        password: passwordText
      }


        axios.post<UserItem>('/create-user', userItem).then((res) => navigate('/login')).catch((error) => alert(error.response.data.error))

     
       
        
      

      

      
  }
    
  


  return (
    <MainContent>
    <s.InputDiv>
      <s.InputUser type="text" placeholder='Username'  value={userText} onChange={(e) => {setUserText(e.target.value)}}/>
      <s.InputUser type='password' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
      <s.Button onClick={(e) => createUser(userText, password)} >Create user</s.Button>

    </s.InputDiv>
    </MainContent>
  )
    
}
