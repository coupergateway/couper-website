import styled from 'styled-components'
import { mq } from '../../lib/theme'

export const Columns = styled.section`
  margin: 0 auto;
  width: 100%;
  min-width: ${({ theme }) => theme.breakpoints.mobile.min}px;
  padding: ${({ theme }) => theme.dist.mobile}px;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    max-width: ${({ theme }) => theme.breakpoints.desktop.min}px;
    padding: ${({ theme }) => theme.dist.tablet}px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    max-width: ${({ theme }) => theme.breakpoints.desktop.max}px;
    padding: ${({ theme }) => theme.dist.desktop}px;

    display: -ms-grid;
    -ms-grid-columns: ${({ theme }) => `2fr ${theme.dist.desktop}px 1fr ${theme.dist.desktop}px 1fr`};
    -ms-grid-rows: ${({ theme }) => `max-content ${theme.dist.mobile}px 2fr 
    ${theme.dist.mobile}px 1fr ${theme.dist.mobile}px 1fr`};

    display: grid;
    grid-template-columns: ${({ theme }) => `2fr ${theme.dist.desktop}px 1fr ${theme.dist.desktop}px 1fr`};
    grid-template-rows: ${({ theme }) => `max-content ${theme.dist.mobile}px 2fr 
    ${theme.dist.mobile}px 1fr ${theme.dist.mobile}px 1fr`};
  }
`

export const HeadDescription = styled.div`
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  -ms-grid-row-align: end;

  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: end;

  font-size: 40px;
  font-weight: 700;
  padding-bottom: ${({ theme }) => theme.dist.mobile}px;

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 0;
  }
`

export const HeadLeft = styled.div`
  -ms-grid-column: 3;
  -ms-grid-column-span: 1;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  -ms-grid-row-align: end;

  grid-column: 3 / 4;
  grid-row: 1 / 2;
  align-self: end;
  font-weight: 700;
  -ms-grid-row-align: end;
  padding: ${({ theme }) => theme.dist.mobile}px 0;
  
  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 0;
  }
`

export const HeadRight = styled.div`
  -ms-grid-column: 5;
  -ms-grid-column-span: 1;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  -ms-grid-row-align: end;

  grid-column: 5 / 6;
  grid-row: 1 / 2;
  font-weight: 700;
  align-self: end;
  padding: ${({ theme }) => theme.dist.mobile}px 0;
  
  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 0;
  }
`

export const Description = styled.p`
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 3;
  -ms-grid-row-span: 1;

  grid-column: 1 / 2;
  grid-row: 3 / 4;

  max-width: 290px;
  margin: 0;
  padding-bottom: ${({ theme }) => theme.dist.mobile}px;

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 0;
    padding-right: 100px;
    max-width: 1000px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding-right: 100px;
  }

  @media (min-width: 1200px) {
    padding-right: 160px;
  }
  @media (min-width: 1300px) {
    padding-right: 210px;
  }
`

export const MenuLeft = styled.div`
  -ms-grid-column: 3;
  -ms-grid-column-span: 1;
  -ms-grid-row: 3;
  -ms-grid-row-span: 1;

  grid-column: 3 / 4;
  grid-row: 3 / 4;
  padding-bottom: ${({ theme }) => theme.dist.mobile}px;
  
  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 0;
  }

  & a {
    color: ${({ theme }) => theme.color.white};
    line-height: 40px;

    ${mq((breakpoints) => breakpoints.desktop.min)} {
      line-height: 27px;
    }

    &:hover, :focus {
      color: ${({ theme }) => theme.color.green};
      text-decoration: none;
    }
  }
`

export const MenuRight = styled.div`
  -ms-grid-column: 5;
  -ms-grid-column-span: 1;
  -ms-grid-row: 3;
  -ms-grid-row-span: 1;

  grid-column: 5 / 6;
  grid-row: 3 / 4;
  padding-bottom: ${({ theme }) => theme.dist.mobile}px;
  
  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 0;
  }

  & a {
    color: ${({ theme }) => theme.color.white};
    line-height: 40px;

    ${mq((breakpoints) => breakpoints.desktop.min)} {
      line-height: 27px;
    }

    &:hover, :focus {
      color: ${({ theme }) => theme.color.green};
      text-decoration: none;
    }
  }
`

export const Icons = styled.div`
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 5;
  -ms-grid-row-span: 1;

  grid-column: 1 / 2;
  grid-row: 5 / 6;
  display: flex;
  max-width: 180px;
  justify-content:space-between;
  padding: ${({ theme }) => theme.dist.mobile}px 0;
  
  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 4px 0;
  }
  & > a {
    color: ${({ theme }) => theme.color.white};
    &:hover, :focus {
      color: ${({ theme }) => theme.color.green};
    }

    & > svg {
      width: 40px;
      height: 40px;
      display: block;
      margin-right: ${({ theme }) => theme.dist.mobile}px;
    }
  }
`

export const BottomLeft = styled.div`
  -ms-grid-column: 3;
  -ms-grid-column-span: 1;
  -ms-grid-row: 5;
  -ms-grid-row-span: 1;

  grid-column: 3 / 4;
  grid-row: 5 / 6; 

  padding-top: ${({ theme }) => theme.dist.mobile}px;

  & a {
    color: ${({ theme }) => theme.color.white};
    line-height: 40px;

    &:hover, :focus {
      color: ${({ theme }) => theme.color.green};
      text-decoration: none;
    }
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 0;
    & a {
      line-height: 24px;
    }
  }
`

export const BottomRight = styled.div`
  -ms-grid-column: 5;
  -ms-grid-column-span: 1;
  -ms-grid-row: 5;
  -ms-grid-row-span: 1;

  grid-column: 5 / 6;
  grid-row: 5 / 6; 

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    margin-top: -4px;
  }

  & a {
    color: ${({ theme }) => theme.color.white};
    line-height: 40px;

    ${mq((breakpoints) => breakpoints.desktop.min)} {
      line-height: 27px;
    }

    &:hover, :focus {
      color: ${({ theme }) => theme.color.green};
      text-decoration: none;
    }
  }
`

export const Copyright = styled.p`
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 7;
  -ms-grid-row-span: 1;

  grid-column: 1 / 2;
  grid-row: 7 / 8;

  padding-top: ${({ theme }) => theme.dist.mobile}px; 
  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 0;
  }
`

export default styled.footer`
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
`

export const NotchPadding = styled.div`
  padding: 0;
  
  @media only screen and (orientation: landscape) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
`
