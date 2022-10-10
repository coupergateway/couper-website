import React from 'react'

import Checklist from '.'

export default {
  title: 'Components/Checklist',
  component: Checklist,
}

const TemplateLoading = () => (
  <Checklist>
    <Checklist.Entry>Entry 1</Checklist.Entry>
    <Checklist.Entry>Entry 2</Checklist.Entry>
    <Checklist.Entry>Entry 3</Checklist.Entry>
    <Checklist.Entry>Entry 4</Checklist.Entry>
  </Checklist>
)

export const Full = TemplateLoading.bind({})
