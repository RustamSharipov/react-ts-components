import styled, { css } from 'styled-components'

interface IProps {
  isActive: boolean
}

export default styled.div<IProps>`
  ${({ isActive }) => css`  
    padding: 1rem;

    ${isActive && css`
      font-weight: 600;
    `}
  `}
`
