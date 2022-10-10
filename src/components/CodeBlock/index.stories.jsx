import React from 'react'

import CodeBlock from '.'

import proxy from './proxy.hcl'

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
}

const Template = () => (
  <CodeBlock language='hcl'>
    {proxy}
  </CodeBlock>
)

export const Full = Template.bind({})
