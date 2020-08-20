import React, { FC, ReactNode } from 'react'

import { Wrapper } from '.'

interface IProps {
  children: ReactNode
}

const Items: FC<IProps> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Items

