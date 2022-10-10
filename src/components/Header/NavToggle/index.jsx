import React from 'react'
import PropTypes from 'prop-types'

import IconBurger from './IconBurger'
import IconClose from './IconClose'
import Wrapper from './Styling'

export default function NavToggle({ menuOpen, setMenuOpen }) {
  return (
    <Wrapper
      data-e2e='burger-menu-button'
      menuOpen={menuOpen}
      onClick={() => setMenuOpen((current) => !current)}
    >
      {menuOpen ? <IconClose /> : <IconBurger />}
    </Wrapper>
  )
}
NavToggle.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
}
