import styled from 'styled-components'
import { mq } from '../../lib/theme'

export default styled.p`
  margin: 0;
  padding: 0;
  color: ${({ color, theme }) => (color ? theme.color[color] : 'inherit')};
  line-height: 1.5;

  &:not(:first-of-type) {
    margin-top: ${({ theme }) => theme.dist.tablet}px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    min-height: ${({ minHeight }) => (minHeight || 0)}px;
  }
`

export const H1 = styled.h1`
  padding: 0;
  display: block;
  position: relative;
  margin: 0;
  font-size: 1.8em;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    font-size: 2em;
  }
`

export const H2 = styled.h2`
  padding: 0;
  margin: ${({ theme }) => `${theme.dist.mobile * 2}px 0 ${theme.dist.mobile}px 0`};
  position: relative;
  font-size: 1.8em;
  min-height: ${({ minHeight }) => (minHeight || 0)}px;

  ${({
    line, theme, color, center,
  }) => (!line ? null : `
    &:before {
      content: "";
      position: absolute;
      top: -${theme.dist.tablet}px;
      left: ${center ? `calc((100% - ${theme.dist.tablet * 2}px) / 2)` : '0'};
      height: 5px;
      width: ${theme.dist.tablet * 2}px;
      background: ${theme.color[color || 'green']};
    }`)
}

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    font-size: 2em;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    margin: ${({ theme }) => `${theme.dist.tablet}px 0 ${theme.dist.tablet}px 0`};
  }
`

export const H3 = styled.h3`
  padding: 0;
  margin: ${({ line, theme }) => (line ? `${theme.dist.tablet}px 0 
  ${theme.dist.tablet}px 0` : `0 0 ${theme.dist.mobile}px 0`)};
  position: relative;
  font-size: 1.5em;

  ${({
    line, theme, color, center,
  }) => (!line ? null : `
    &:before {
      content: "";
      position: absolute;
      top: -${theme.dist.tablet}px;
      left: ${center ? `calc((100% - ${theme.dist.tablet * 2}px) / 2)` : '0'};
      height: 5px;
      width: ${theme.dist.tablet * 2}px;
      background: ${theme.color[color || 'green']};
    }`)
}

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    min-height: ${({ minHeight }) => (minHeight || 0)}px;
    margin: ${({ theme }) => `${theme.dist.tablet}px 0 ${theme.dist.tablet}px 0`};
  }
`

export const H4 = styled.h4`
  padding: 0;
  margin: ${({ theme }) => `0 0 ${theme.dist.mobile}px 0`};
  position: relative;
  font-size: 1.3em;

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    margin: ${({ theme }) => `0 0 ${theme.dist.tablet}px 0`};
  }
`
