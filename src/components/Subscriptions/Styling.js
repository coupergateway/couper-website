import styled from 'styled-components'
import { mq } from '../../lib/theme'

export default styled.div`
  margin: 0 auto;
  font-size: 12px;

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    font-size: 17px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    font-size: 20px;
  }

  & > table {
    margin-bottom: 10px;
  }
`

export const Th = styled.th`
  background: ${({ theme }) => theme.color.grayLight};
  border-left: ${({ theme, color }) => `2px solid ${theme.color[color || 'gray']}`};
  border-top: ${({ theme, color }) => `2px solid ${theme.color[color || 'gray']}`};
  border-right: ${({ theme, color }) => `2px solid ${theme.color[color || 'gray']}`};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0;
`

export const ThContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4px;

  & svg {
    width: 20px;
    height: 20px;
  }

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    padding: 8px;
    & svg {
      width: 30px;
      height: 30px;
    }
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding: 16px;
    & svg {
      width: 40px;
      height: 40px;
    }
  }
`

export const Tr = styled.tr`
  &:first-of-type {
    & > td {
      border-top: ${({ theme }) => `2px solid ${theme.color.gray}`};    }
    & > td:first-of-type {
      border-top-left-radius: 10px;
    }
  }

  & > td {
    font-size: inherit;
    &.nopadding {
      padding: 0;
    }
    &:first-of-type {
      border-left: ${({ theme }) => `2px solid ${theme.color.gray}`};
    }
    &:nth-child(2) {
      border-right: ${({ theme }) => `2px solid ${theme.color.gray}`};
      border-left: ${({ theme }) => `2px solid ${theme.color.gray}`};
    }
    &:nth-child(3) {
      background: ${({ theme }) => theme.color.white};
    }
    &:nth-child(4) {
      border-right: ${({ theme }) => `2px solid ${theme.color.orange}`};
      border-left: ${({ theme }) => `2px solid ${theme.color.orange}`};
    }
    &:nth-child(5) {
      background: ${({ theme }) => theme.color.white};
    }
    &:last-of-type {
      border-right: ${({ theme }) => `2px solid ${theme.color.green}`};
      border-left: ${({ theme }) => `2px solid ${theme.color.green}`};
    }
  }

  &:nth-child(odd) {
    background: ${({ theme }) => theme.color.grayLight};
  }

  &:nth-child(even) {
    background: ${({ theme }) => theme.color.white};
  }

  &:last-of-type {
    & > td {
      border-bottom: ${({ theme }) => `2px solid ${theme.color.gray}`};
      &:first-of-type {
        border-bottom-left-radius: 10px;
      }
      &:nth-child(4) {
        border-bottom: ${({ theme }) => `2px solid ${theme.color.orange}`};
      }
      &:last-of-type {
        border-bottom-right-radius: 10px;
        border-bottom: ${({ theme }) => `2px solid ${theme.color.green}`};
      }
    }
  }
`

export const Td = styled.td`
  font-size: 20px;
  padding: 10px;
  min-width: 10px;
  text-align: center;

  &:first-of-type {
    text-align: left;
  }
`

export const FeaturesDesc = styled.div`
  padding: 5px 0;
  font-size: inherit;
  line-height: 22px;

  & > ul {
    padding-left: 20px;
  }

  ${mq((breakpoints) => breakpoints.tablet.min)} {
    padding-left: 30px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    padding-left: 40px;
  }

`
