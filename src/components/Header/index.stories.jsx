import React from 'react'

import Header from './Component'

export default {
  title: 'Components/Header',
  component: Header,
}

const Template = (args) => (
  <Header
    menuOpen={false}
    setMenuOpen={() => {}}
    lang='en'
    path='/en/'
    {...args}
  />
)

export const Full = Template.bind({})
Full.args = {
  menuOpen: false,
  setMenuOpen: () => {},
  lang: 'en',
  path: '/en/',
}
