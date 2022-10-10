import React from 'react'
import PropTypes from 'prop-types'

import Structure from '../../layout/Structure'

import Down from './Down'
import Button, { A } from './Styling'

export const execScrollTo = (id) => document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })

export const Anchor = ({ id }) => (
  <A id={id} />
)
Anchor.propTypes = {
  id: PropTypes.string.isRequired,
}

const ScrollTo = ({ id }) => (
  <Button onClick={() => execScrollTo(id)}>
    <Structure.IconMedium color='black'>
      <Down />
    </Structure.IconMedium>
  </Button>
)
ScrollTo.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ScrollTo
