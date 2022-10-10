import styled from 'styled-components'
import { mq } from '../../../lib/theme'

export default styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  position: fixed;
  width: 40px;
  height: 40px;
  top: 20px;
  right: 25px;
  outline: none;
  cursor: pointer;

  ${mq((breakpoints) => breakpoints.tablet.menu)} {
    display: none;
  }
`
