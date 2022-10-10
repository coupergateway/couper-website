import styled from 'styled-components'
import { mq } from '../../lib/theme'

export default styled.div`
  margin: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ src }) => `url(${src})`};
  background-position: ${({ align, valign }) => `${align || 'center'} ${valign || 'top'}`};

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
`
