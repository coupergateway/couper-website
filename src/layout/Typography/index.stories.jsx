import React from 'react'

import Typography from '.'

export default {
  title: 'Layout/Typography',
  component: Typography,
}

const TemplateH1 = (args) => <Typography.H1 {...args} />
export const H1 = TemplateH1.bind({})
H1.args = {}

const TemplateH2 = (args) => <Typography.H2 {...args} />
export const H2 = TemplateH2.bind({})
H2.args = {}

const TemplateH2line = (args) => <Typography.H2line {...args} />
export const H2line = TemplateH2line.bind({})
H2line.args = {
  color: 'orange',
}

const TemplateH3 = (args) => <Typography.H3 {...args} />
export const H3 = TemplateH3.bind({})
H3.args = {}

const TemplateH4 = (args) => <Typography.H4 {...args} />
export const H4 = TemplateH4.bind({})
H4.args = {}

const TemplateParagraph = (args) => <Typography.Paragraph {...args} />
export const Paragraph = TemplateParagraph.bind({})
Paragraph.args = {}
