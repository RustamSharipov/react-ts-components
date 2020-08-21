import styled, { css } from 'styled-components'

interface IProps {
  leftOffset: number
}

export default styled.div<IProps>`
  ${({ leftOffset = 0 }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(${leftOffset}px);
  `}
`
