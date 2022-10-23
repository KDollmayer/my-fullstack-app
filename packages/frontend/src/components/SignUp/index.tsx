import { UserItem } from '@my-fullstack-app/shared'
import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

import Image from '../Image'
import Logo from '../Logo'
import * as s from './styles'

axios.defaults.baseURL = process.env.REACT_APP_API_KEY

axios.interceptors.request.use((config) => {
  if (!config?.headers) {
    config.headers = {};
  }
  const jwt = localStorage.getItem("jwt_token");
  if (jwt) {
    config.headers["authorization"] = `Bearer ${jwt}`;
  }
  return config;
});



export default function SignUp() {

  const navigate = useNavigate()
 

  const [userText, setUserText] = useState<string>('')  
  const [password, setPassword] = useState<string>('')  
  

  function createUser(user: string, passwordText: string): void {
    
    
      const userItem: UserItem = {
        username: user,
        password: passwordText
      }
      


        axios.post<UserItem>('/users', userItem).then((res) => navigate('/login')).catch((error) => alert(error.response.data.error))

      
  }
    
  


  return (

    <s.MsnLoginDiv>
   
    <s.MessengerWindow>
        
        <s.Head><Logo/></s.Head>
        <s.HighDiv><Image/></s.HighDiv>
        <s.InputDiv>
      <s.Lable>Username</s.Lable>
      <s.InputUser type="text" placeholder='Username'  value={userText} onChange={(e) => {setUserText(e.target.value)}}/>
      </s.InputDiv>
      <s.InputDiv>
        <s.Lable>Password</s.Lable>
      <s.InputUser type='password' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
      </s.InputDiv>
      <s.Button onClick={(e) => createUser(userText, password)} >Create user</s.Button>
      <s.Button onClick={(e) => navigate('/login')} >Go to Login</s.Button>

    </s.MessengerWindow>
    </s.MsnLoginDiv>
    
    )
    
    
}
