import styled from 'styled-components'
import { mq } from '../../lib/theme'

export default styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  & > svg {
    display: block;
    margin: 24px auto;
    padding: 0;
    width: 100%;
    max-width: 300px;
    max-height: 60px;
  }

  ${mq((breakpoints) => breakpoints.desktop.min)} {
    flex-direction: row;

    & > svg {
      margin: 0;
      width: 15vw;
      max-height: 60px;
    }
  }
`
