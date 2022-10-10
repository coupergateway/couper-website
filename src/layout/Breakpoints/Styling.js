import styled from 'styled-components'
import { mq } from '../../lib/theme'

export const OnlyOnMobile = styled.div`
  height: 100%;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    display: none;
  }
`

export const OnlyOnMobileMenu = styled.div`
  height: 100%;

  ${mq((breakpoints) => breakpoints.tablet.menu)} {
    display: none;
  }
`

export const OnlyOnTablet = styled.div`
  height: 100%;
  display: none;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    display: block;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    display: none;
  }
`

export const OnlyOnTabletMenu = styled.div`
  height: 100%;
  display: none;

  ${mq((breakpoints) => breakpoints.tablet.menu)} {
    display: block;
  }

  ${mq((breakpoints) => breakpoints.desktop.menu)} {
    display: none;
  }
`

export const OnlyOnDesktop = styled.div`
  height: 100%;
  display: none;

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    display: block;
  }
`

export const OnlyOnDesktopMenu = styled.div`
  height: 100%;
  display: none;

  ${mq((breakpoints) => breakpoints.desktop.menu)} {
    display: block;
  }
`

export const NotOnMobile = styled.div`
  height: 100%;
  display: none;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    display: block;
  }
`

export const NotOnDesktop = styled.div`
  height: 100%;
  display: block;

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    display: none;
  }
`
