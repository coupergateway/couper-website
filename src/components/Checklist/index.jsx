import React from 'react'
import PropTypes from 'prop-types'

import Checkmark from './Checkmark'
import Ul, { Li } from './Styling'

const Checklist = ({ children }) => <Ul>{children}</Ul>
Checklist.propTypes = {
  children: PropTypes.any.isRequired,
}

Checklist.Entry = ({ children }) => (
  <Li>
    <Checkmark />
    <div>
      {children || 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
    </div>
  </Li>
)
Checklist.Entry.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Checklist
