import styled from 'styled-components'
import { mq } from '../../lib/theme'

export default styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.black};
  z-index: 100;
`

export const Content = styled.div`
  color: ${({ theme }) => theme.color.white};
  margin: auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop.max}px;
  flex-direction: column;
  padding: ${({ theme }) => theme.dist.desktop}px;
  text-align: center;
  justify-content: center;

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    justify-content: space-between;
    flex-direction: row;
    text-align: left;
  }
`
