import React, { useState } from 'react'
import MainContent from '../MainContent'
import * as s from './styles'

export default function Login() {

    const [user, setUser] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    function loginUser(user: string, userPassword: string): void {
        
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
