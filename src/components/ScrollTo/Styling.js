import styled from 'styled-components'

export default styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin-top: 20px;
  &:hover, :focus {
    & svg {
      color: ${({ theme }) => theme.color.green};
    }
  }
`

export const A = styled.a`
  position: absolute;
  margin-top: -${({ theme }) => theme.dist.scrollTop}px;
`
