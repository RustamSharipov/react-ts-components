import React, { FC } from 'react'

import { Group, Item, Items, Wrapper } from '.'

interface IProps {
  items: any[]
}

const DrumNav: FC<IProps> = ({ items }) => {
  const renderItems = () =>
    <Group>
      {items.map(item => (
        <Item
          key={item.value}
          data={item}
          isActive={false}
        />
      ))}
    </Group>

  return (
    <Wrapper>
      <Items>
        {renderItems()}
        {renderItems()}
        {renderItems()}
      </Items>
    </Wrapper>
  )
}

export default DrumNav
