import React, { FC } from 'react'

import { Wrapper } from '.'

interface IProps {
  data: any
  isActive: boolean
}

const Item: FC<IProps> = ({ data, isActive }) => {
  return (
    <Wrapper isActive={isActive}>
      {data.label}
    </Wrapper>
  )
}

export default Item

