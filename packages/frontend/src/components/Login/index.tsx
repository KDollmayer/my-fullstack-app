import React from 'react'
import MainContent from '../MainContent'
import * as s from './styles'

export default function Login() {
  return (
    <MainContent>
        <s.InputDiv>
            <s.InputUser/>
            <s.InputUser/>
        </s.InputDiv>
    </MainContent>
  )
}
