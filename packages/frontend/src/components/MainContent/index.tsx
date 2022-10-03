
import React from 'react'

import * as s from './styles'

type Props = {children: React.ReactNode}

export default function MainContent({children}: Props) {
  return (
    <s.Container>
      <s.ChatContainer>{children}</s.ChatContainer>
    </s.Container>
  )
}
