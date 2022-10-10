import React from 'react'

import Changelog from './Component'

const changelogData = {
  body: `## [1.1.1](https://github.com/avenga/couper/compare/1.1...1.1.1)
  
  2021-04-21
  
  ### Bug Fixes

  * Endpoint responses are written and logged with correct status-code
  * affected: a plain response without any additional headers or body configuration`,
  created_at: '2021-04-21T16:59:03Z',
  name: '1.1.1',
  published_at: '2021-04-21T17:00:28Z',
  tag_name: '1.1.1',
}

export default {
  title: 'Components/Changelog',
  component: Changelog,
}

const TemplateLoading = (args) => (
  <Changelog
    changelogLoading={false}
    changelogError={false}
    changelogData={false}
    {...args}
  />
)

export const Loading = TemplateLoading.bind({})
Loading.args = {
  changelogLoading: true,
}

export const Error = TemplateLoading.bind({})
Error.args = {
  changelogError: 'Test Error',
}

export const Full = TemplateLoading.bind({})
Full.args = {
  changelogData,
}
