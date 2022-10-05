import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContent from '../MainContent'
import * as s from './styles'


 

export default function Login() {
  const navigate = useNavigate()
    const [user, setUser] = useState<string>('')
    const [isLogedIn, setIsLogedIn] = useState<boolean>(false)
    const [userPassword, setUserPassword] = useState<string>('')
    

    const  loginUser = async (user: string, userPassword: string): Promise<void> =>  {
      
      const loginResponse = await axios.post("/login", {
        username: user.toLocaleLowerCase(),
        password: userPassword,
      });
      if (loginResponse && loginResponse.status === 200) {
        localStorage.setItem("jwt", loginResponse.data);
        setIsLogedIn(true)
        navigate('/messages')
        
        
      }
    }

  return (
    <MainContent>
        <s.InputDiv>
            <s.InputUser value={user} onChange={(e) => setUser(e.target.value)} placeholder='Username'/>
            <s.InputUser value={userPassword} onChange={(e) => setUserPassword(e.target.value)} placeholder='Password'/>
            <s.Button onClick={(e) => loginUser(user, userPassword)}> Log In </s.Button>
        </s.InputDiv>
    </MainContent>
  )
}
