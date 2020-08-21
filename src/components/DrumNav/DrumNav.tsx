import React, { FC, useState } from 'react'

import { Group, Item, Items, Wrapper } from '.'

interface IProps {
  items: any[]
}

const DrumNav: FC<IProps> = ({ items }) => {
  const [isSwipe, setSwipe] = useState(false)
  const [lastPosition, setLastPosition] = useState(0)
  const [leftOffset, setLeftOffset] = useState(0)

  const handleSwipeStart = () => {
    setSwipe(true)
  }

  const handleSwipeStop = () => {
    setSwipe(false)
  }

  const handleCursorPosition = (event: any) => {
    if (isSwipe) {
      const { clientX } = event

      setTimeout(
        () => {
          setLastPosition(clientX)
          setLeftOffset(clientX - lastPosition)
        },
        100,
      )
    }
  }

  const renderItems = () =>
    <Group leftOffset={leftOffset}>
      {items.map(item => (
        <Item
          key={item.value}
          data={item}
          isActive={false}
        />
      ))}
    </Group>

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
