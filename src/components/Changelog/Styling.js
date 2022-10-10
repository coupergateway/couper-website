import styled from 'styled-components'

export const LastUpdated = styled.span`
  color: ${({ theme }) => theme.color.gray};
  font-size: 0.4em;
  font-weight: 200;
  white-space: nowrap;
`

export default styled.div`
  & > * {
    line-height: 1.5;
  }
`
