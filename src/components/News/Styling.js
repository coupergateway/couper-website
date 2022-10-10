import styled from 'styled-components'
import { Link } from 'gatsby'

export default styled(Link)`
  display: block;
  color: ${({ theme }) => theme.color.gray};
  font-size: 12px;
  margin-top: 20px;
`
