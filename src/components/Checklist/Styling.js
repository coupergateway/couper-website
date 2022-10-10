import styled from 'styled-components'

export default styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  margin-bottom: ${({ theme }) => theme.dist.mobile}px;
  padding: 0;
  display: -ms-grid;
  -ms-grid-columns: ${({ theme }) => `${theme.dist.tablet * 2}px 1fr`};

  display: grid;
  grid-template-columns: ${({ theme }) => `${theme.dist.tablet * 2}px 1fr`};

  align-items: top;
  line-height: 1.5;

  & > svg {
    color: ${({ theme }) => theme.color.green};
    display: block;
    width: 28px;
    height: 28px;
    margin: 2px auto;
    -ms-grid-row-align: 'top';
  }

  & > div {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2 / 3;
  }
`
