import styled from 'styled-components'
import { Link } from 'gatsby'

import { mq } from '../../lib/theme'

export default styled.header`
  background: ${({ theme }) => theme.color.white};
  height: ${({ theme, menuOpen }) => (menuOpen ? 370 : theme.dist.menu)}px;
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  box-shadow: 0 5px 10px 0 #cbcbcb;
`

export const Container = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.desktop.max}px;
  margin: auto;
  position: relative;
  padding-top: 10px;
  padding-left: ${({ theme }) => theme.dist.mobile}px;

  ${mq((breakpoints) => breakpoints.tablet.menu)} {
    padding-left: ${({ theme }) => theme.dist.tablet}px;
  }

  ${mq((breakpoints) => breakpoints.desktop.menu)} {
    padding-left: ${({ theme }) => theme.dist.desktop}px;
  }
`

export const HideAll = styled.button`
  position: fixed;
  top: ${({ theme }) => theme.dist.menu}px;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 0;
  z-index: 0;
  opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
  cursor: pointer;
`

export const Logo = styled(Link)`
  width: 50px;
  height: 56px;
  position: relative;
  
  &:after {
    content: "Couper";
    position: absolute;
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black};
    top: -17px;
    left: 62px;

    &:hover {
      text-decoration: none;
    }
  }

  & > svg {
    margin-top: 1px;
    height: 56px;
    width: 50px;
  }
`

export const Navigation = styled.nav`
  background: white;
  min-width: 100%;
  padding: 0 0 44px 0;
  margin-left: -16px;
  overflow: hidden;
  
  ${mq((breakpoints) => breakpoints.tablet.menu)} {
    right: 0;
    position: absolute;
    margin: 0;
    background: transparent;
    border: 0;
    height: ${({ theme }) => theme.dist.menu}px;
    top: 12px;
    padding: 0;
    min-width: 0;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  margin: 0;
  margin-top: ${({ menuOpen }) => (menuOpen ? 40 : 0)}px;
  padding: 0;

  ${mq((breakpoints) => breakpoints.tablet.menu)} {
    flex-direction: row;
    align-items: center;
    margin: 0;
  }
`

export const MenuItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  margin-top: 23px;
  margin-right: 0;
  text-align: center;

  & > a.text {
    color: ${({ theme, color, active }) => (active ? theme.color[color] : theme.color.black)};
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;

    &:hover, :focus {
      color: ${({ theme }) => theme.color.green};
    }
  }

  & > a.text[aria-current="page"] {
    position: relative;

    ${mq((breakpoints) => breakpoints.tablet.menu)} {
      &:after {
        content: "";
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        height: 5px;
        background: ${({ theme }) => theme.color.green};
      }
    }
  }

  & > a[name="button-github-header"] {
    margin-top: 6px;
    max-width: 600px;
    max-height: 48px;

    ${mq((breakpoints) => breakpoints.tablet.menu)} {
      max-width: 48px;
      padding: 5px 3px;
    }
    ${mq((breakpoints) => breakpoints.desktop.menu)} {
      padding: 10px;
      max-width: 600px;
    }
  }

  ${mq((breakpoints) => breakpoints.tablet.menu)} {
    text-align: left;
    margin-top: 0;
    margin-right: ${({ theme }) => theme.dist.tablet}px;
  }
  ${mq((breakpoints) => breakpoints.desktop.menu)} {
    margin-top: 0;
    margin-right: ${({ theme }) => theme.dist.desktop}px;
  }
`

export const NotchPadding = styled.div`
  padding: 0;
  
  @media only screen and (orientation: landscape) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
`
