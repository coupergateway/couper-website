import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled.button`
  border: ${({ theme }) => `${theme.dist.border}px solid ${theme.color.green}`};
  width: ${({ theme }) => theme.dist.tablet * 10}px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.green};
  margin: ${({ center }) => (center ? '0 auto' : 0)};
  display: ${({ center }) => (center ? 'block' : 'inline-block')};
  border-radius: 5px;
  cursor: pointer;
  line-height: 1;
  color: ${({ theme }) => theme.color.white} !important;
  text-align: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;

  & > div > div.icon {
    margin: -6px auto 0;  
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-height: 32px;
    overflow: hidden;

    & > svg {
      width: 32px;
      height: 32px;
    }
  }

  &:hover, :focus {
    border: ${({ theme }) => `${theme.dist.border}px solid ${theme.color.greenDark}`};
    background-color: ${({ theme }) => theme.color.greenDark};
    text-decoration: none !important;
  }
`

export const ExternalLink = Button.withComponent('a')

export const InternalLink = Button.withComponent(Link)
