import styled from 'styled-components'
import { mq } from '../../lib/theme'

export default styled.div`
  & > select {
    border: 0;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    font-weight: 300;
    outline: none;
  }

  position: absolute;
  top: 5px;
  right: 4px;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    right: ${({ theme }) => theme.dist.tablet}px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    right: ${({ theme }) => theme.dist.desktop}px;
  }
`
