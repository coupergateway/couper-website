import styled from 'styled-components'
import { mq } from '../../lib/theme'

export default styled.div`
  margin: 0 auto;
  min-height: calc(100vh - 180px);
  width: 100%;
  min-width: ${({ theme }) => theme.breakpoints.mobile.min}px;
  padding: 0 ${({ theme }) => theme.dist.mobile}px;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    max-width: ${({ theme }) => theme.breakpoints.desktop.min}px;
    padding: 0 ${({ theme }) => theme.dist.tablet}px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    max-width: ${({ theme }) => theme.breakpoints.desktop.max}px;
    padding: 0 ${({ theme }) => theme.dist.desktop}px;
  }
`

export const NotchPadding = styled.div`
  padding: 0;

  @media only screen and (orientation: landscape) {
    padding-left: env(safe-area-inset-left); /* Apply safe area */
    padding-right: env(safe-area-inset-right);
  }
`
