import React, { FC, useState } from 'react'

import { Group, Item, Items, Wrapper } from '.'

interface IProps {
  items: any[]
}

const DrumNav: FC<IProps> = ({ items }) => {
  const [isSwipe, setSwipe] = useState(false)
  const [currentPosition, setCurrentPosition] = useState<number>()

  const handleSwipeStart = () => {
    setSwipe(true)
  }

  const handleSwipeStop = () => {
    setSwipe(false)
  }

  const handleCursorPosition = (event: any) => {
    if (isSwipe) {
      const { clientX } = event
      setCurrentPosition(clientX)
    }
  }

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
  console.log(currentPosition)
  return (
    <Wrapper
      onMouseMove={handleCursorPosition}
      onMouseDown={handleSwipeStart}
      onMouseUp={handleSwipeStop}
      onMouseLeave={handleSwipeStop}
    >
      <Items>
        {renderItems()}
        {renderItems()}
        {renderItems()}
      </Items>
    </Wrapper>
  )
}

export default DrumNav
