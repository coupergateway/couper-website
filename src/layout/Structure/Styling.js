import styled from 'styled-components'
import { mq } from '../../lib/theme'

export default styled.section`
  margin-top: ${({ theme }) => theme.dist.mobile * 4}px;
  margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;

  &:first-of-type {
    margin-top: ${({ theme }) => theme.dist.mobile}px;
  }

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    margin-top: ${({ theme }) => theme.dist.tablet}px;
    margin-bottom: ${({ theme }) => theme.dist.tablet * 2}px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    margin-top: ${({ theme }) => theme.dist.desktop}px;
    margin-bottom: ${({ theme }) => theme.dist.desktop * 3}px;
  }
`

export const Hero = styled.div`
  margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;

  & > svg {
    display: block;
    height: 250px;
    width: 250px;
    margin: ${({ theme }) => `${theme.dist.mobile}px auto !important`};
  }

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    margin-bottom: ${({ theme }) => theme.dist.tablet * 3}px;

    display: -ms-grid;
    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 2fr`};

    display: grid;
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 2fr`};
    align-items: center;

    & > :nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 1;
      grid-column: 3 / 4;
      padding-right: 40px;
    }
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    margin-bottom: ${({ theme }) => theme.dist.desktop * 2}px;

    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 2fr`};
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 2fr`};

    & > :nth-child(2) {
      padding-right: 80px;
    }
  }
`

export const HeroSmall = styled.div`
  margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;

  display: -ms-grid;
  -ms-grid-columns: ${({ theme }) => `30px ${theme.dist.mobile}px 1fr`};
  -ms-grid-rows: ${({ theme }) => `40px ${theme.dist.mobile}px max-content`};

  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: ${({ theme }) => `30px ${theme.dist.mobile}px 1fr`};
  grid-template-rows: ${({ theme }) => `40px ${theme.dist.mobile}px max-content`};
  align-items: center;

  & > :nth-child(1) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-row-align: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    & svg {
      margin-top: 4px;
      width: 30px;
      height: 30px;
      display: block;
    }
  }

  & > :nth-child(2) {
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-row-align: center;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  & > :nth-child(3) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-column: 1 / 4;
    grid-row: 3 / 4;
  }

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    margin-bottom: ${({ theme }) => theme.dist.tablet * 3}px;

    -ms-grid-columns: ${({ theme }) => `150px ${theme.dist.tablet}px 1fr`};
    grid-template-columns: ${({ theme }) => `150px ${theme.dist.tablet}px 1fr`};
    align-items: center;

    & > :nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
      grid-column: 1 / 2;
      grid-row: 1 / 4;

      & svg {
        margin-top: 0;
        width: 150px;
        height: 150px;
      }
    }

    & > :nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 1;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }

    & > :nth-child(3) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 1;
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      grid-column: 3 / 4;
      grid-row: 3 / 4;
    }
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    margin-bottom: ${({ theme }) => theme.dist.desktop * 2}px;
    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 2fr`};
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 2fr`};

    & > :nth-child(1) {
      & svg {
        margin-top: 0;
        width: 200px;
        height: 200px;
      }
    }

    & > :nth-child(2) {
      padding-right: 80px;
    }

    & > :nth-child(3) {
      padding-right: 80px;
    }
  }
`

export const TwoColumns = styled.div`
  margin-top: ${({ theme }) => theme.dist.mobile * 6}px;
  margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;

  & > :nth-child(2) {
    margin-top: ${({ theme }) => theme.dist.mobile * 4}px;
    margin-bottom: ${({ theme }) => theme.dist.mobile * 4}px;
  }

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    display: -ms-grid;
    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 1fr`};

    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 1fr`};
    align-items: ${({ alignItems }) => alignItems || 'start'};

    & > :nth-child(1) {
      -ms-grid-row-align: ${({ alignItems }) => alignItems || 'start'};
    }

    & > :nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 1;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      -ms-grid-row-align: ${({ alignItems }) => alignItems || 'start'};
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 1fr`};
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 1fr`};
  }
`

export const TwoColumnsMulti = styled.div`
  & > div {
    padding: ${({ theme }) => `0 0 ${theme.dist.mobile}px 0`};

    ${mq((breakpoints) => breakpoints.tablet.min)} {
      padding: ${({ theme }) => `0 0 ${theme.dist.tablet}px 0`};
    }
    ${mq((breakpoints) => breakpoints.desktop.min)} {
      padding: ${({ theme }) => `0 0 ${theme.dist.desktop}px 0`};
    }
  }

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    display: -ms-grid;
    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 1fr`};

    display: grid;
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 1fr`};
    align-items: start;

    & > :nth-child(odd) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      -ms-grid-row-align: start;
      grid-column: 1 / 2;
    }

    & > :nth-child(even) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 1;
      -ms-grid-row-align: start;
      grid-column: 3 / 4;
    }

    & > :nth-child(3), > :nth-child(4) {
      -ms-grid-row: 2;
    }
    & > :nth-child(5), > :nth-child(6) {
      -ms-grid-row: 3;
    }
    & > :nth-child(7), > :nth-child(8) {
      -ms-grid-row: 4;
    }
    & > :nth-child(9), > :nth-child(10) {
      -ms-grid-row: 5;
    }
    & > :nth-child(11), > :nth-child(12) {
      -ms-grid-row: 6;
    }
    & > :nth-child(13), > :nth-child(14) {
      -ms-grid-row: 7;
    }
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 1fr`};
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 1fr`};
  }
`

export const ThreeColumns = styled.div`
  & > :nth-child(2) {
    margin-top: ${({ theme }) => theme.dist.mobile * 2}px;
    margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;
  }

  & > :nth-child(3) {
    margin-top: ${({ theme }) => theme.dist.mobile}px;
    margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;
  }

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    & > :nth-child(2) {
      margin-top: ${({ theme }) => theme.dist.tablet * 2}px;
      margin-bottom: ${({ theme }) => theme.dist.tablet * 2}px;
    }

    & > :nth-child(3) {
      margin-top: ${({ theme }) => theme.dist.tablet * 2}px;
      margin-bottom: ${({ theme }) => theme.dist.tablet * 2}px;
    }
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    display: -ms-grid;
    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 1fr ${theme.dist.desktop}px 1fr`};
    -ms-grid-rows: auto;

    grid-auto-rows: 1fr;
    align-items: ${({ alignItems }) => alignItems || 'start'};
    display: grid;
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 1fr ${theme.dist.desktop}px 1fr`};
    grid-template-rows: auto;

    & > :nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 1;
      grid-column: 3 / 4;
      margin-top: 0;
      margin-bottom: 0;
    }

    & > :nth-child(3) {
      -ms-grid-column: 5;
      -ms-grid-column-span: 1;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1 / 2;
      grid-column: 5 / 6;
      margin-top: 0;
      margin-bottom: 0;
      -ms-grid-row-align: ${({ alignItems }) => alignItems || 'start'};
    }
  }
`

export const FourColumns = styled.div`
  & > :nth-child(1) {
    margin-top: ${({ theme }) => theme.dist.mobile * 2}px;
    margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;
  }

  & > :nth-child(2) {
    margin-top: ${({ theme }) => theme.dist.mobile * 2}px;
    margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;
  }

  & > :nth-child(3) {
    margin-top: ${({ theme }) => theme.dist.mobile}px;
    margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;
  }

  & > :nth-child(4) {
    margin-top: ${({ theme }) => theme.dist.mobile}px;
    margin-bottom: ${({ theme }) => theme.dist.mobile * 2}px;
  }

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    display: -ms-grid;
    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 1fr`};
    -ms-grid-rows: ${({ theme }) => `max-content ${theme.dist.tablet}px max-content`};

    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.tablet}px 1fr`};
    grid-template-rows: ${({ theme }) => `max-content ${theme.dist.tablet}px max-content`};
    align-items: ${({ alignItems }) => alignItems || 'start'};

    & > :nth-child(1) {
      margin-top: 0;
      -ms-grid-row-align: ${({ alignItems }) => alignItems || 'start'};
    }
  
    & > :nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 1;
      grid-column: 3 / 4;
      margin-top: 0;
      -ms-grid-row-align: ${({ alignItems }) => alignItems || 'start'};
    }

    & > :nth-child(3) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      margin-top: 0;
      -ms-grid-row-align: ${({ alignItems }) => alignItems || 'start'};
    }

    & > :nth-child(4) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 1;
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      grid-column: 3 / 4;
      grid-row: 3 / 4;
      margin-top: 0;
      -ms-grid-row-align: ${({ alignItems }) => alignItems || 'start'};
    }
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    -ms-grid-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 1fr 
    ${theme.dist.desktop}px 1fr ${theme.dist.desktop}px 1fr`};
    -ms-grid-rows: auto;
  
    grid-template-columns: ${({ theme }) => `1fr ${theme.dist.desktop}px 1fr 
    ${theme.dist.desktop}px 1fr ${theme.dist.desktop}px 1fr`};
    grid-template-rows: auto;

    & > :nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 1;
      grid-column: 3 / 4;
      margin-top: 0;
    }

    & > :nth-child(3) {
      -ms-grid-column: 5;
      -ms-grid-column-span: 1;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1 / 2;
      grid-column: 5 / 6;
      margin-top: 0;
    }

    & > :nth-child(4) {
      -ms-grid-column: 7;
      -ms-grid-column-span: 1;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1 / 2;
      grid-column: 7 / 8;
      margin-top: 0;
    }
  }
`

export const Container = styled.div`
  height: 100%;
  text-align: ${({ textAlign }) => (textAlign || 'left')};

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    max-width: ${({ theme, maxWidth }) => (maxWidth || `${theme.breakpoints.desktop.max}px`)};
    margin: ${({ margin }) => (margin || '0')};
  }
`

export const Tile = styled.div`
  height: 100%;
  background: ${({ theme, color }) => theme.color[(color || 'white')]};
  border: ${({ theme, border }) => (border ? `${theme.dist.border}px solid ${theme.color[border]}` : '0')};
  border-radius: ${({ theme }) => theme.dist.radius}px;
  padding: ${({ theme }) => theme.dist.mobile}px;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    padding: ${({ theme }) => theme.dist.tablet}px;
  }
  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: ${({ theme }) => theme.dist.desktop}px;
  }
`

export const TileClick = styled.a`
  display: block;
  height: 100%;
  background: ${({ theme, color }) => theme.color[(color || 'white')]};
  border: ${({ theme, border }) => (border ? `${theme.dist.border}px solid ${theme.color[border]}` : '0')};
  border-radius: ${({ theme }) => theme.dist.radius}px;
  padding: ${({ theme }) => theme.dist.mobile}px;
  cursor: pointer;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    padding: ${({ theme }) => theme.dist.tablet}px;
  }
  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: ${({ theme }) => theme.dist.desktop}px;
  }

  color: ${({ theme }) => theme.color.black};

  &:hover, :focus {
    text-decoration: none;

    & svg[data-icon="angle-down"] {
      color: ${({ theme }) => theme.color.green};
    }
  }
`

export const Distance = styled.div`
  height: ${({ theme }) => theme.dist.mobile}px;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    height: ${({ theme }) => theme.dist.tablet / 2}px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    height: ${({ theme }) => theme.dist.desktop / 2}px;
  }
`

export const Icon = styled.div`
  color: ${({ theme, color }) => theme.color[color || 'green']};

  & > svg {
    margin: auto;
    width: ${({ width }) => width || 40}px;
    height: ${({ height }) => height || 40}px;
  }
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    max-width: ${({ theme }) => theme.breakpoints.desktop.max}px;
    margin: 0;
  }

  & > svg {
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
    min-height: 200px;
    max-height: ${({ height }) => (height || '200')}px;

    ${mq((breakpoints) => breakpoints.tablet.min)} {
      max-height: ${({ height }) => (height || '500')}px;
    }

    ${mq((breakpoints) => breakpoints.desktop.min)} {
      min-height: ${({ height }) => (height ? '0' : '330')}px;
      max-height: ${({ height }) => (height || '800')}px;
    }
  }
`
