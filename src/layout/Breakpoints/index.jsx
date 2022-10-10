import React from 'react'
import PropTypes from 'prop-types'

import {
  OnlyOnMobile,
  OnlyOnMobileMenu,
  OnlyOnTablet,
  OnlyOnTabletMenu,
  OnlyOnDesktop,
  OnlyOnDesktopMenu,
  NotOnMobile,
  NotOnDesktop,
} from './Styling'

const Breakpoints = () => <span />

Breakpoints.OnlyOnMobile = ({ children }) => <OnlyOnMobile>{children}</OnlyOnMobile>
Breakpoints.OnlyOnMobile.propTypes = { children: PropTypes.any.isRequired }

Breakpoints.OnlyOnMobileMenu = ({ children }) => <OnlyOnMobileMenu>{children}</OnlyOnMobileMenu>
Breakpoints.OnlyOnMobileMenu.propTypes = { children: PropTypes.any.isRequired }

Breakpoints.OnlyOnTablet = ({ children }) => <OnlyOnTablet>{children}</OnlyOnTablet>
Breakpoints.OnlyOnTablet.propTypes = { children: PropTypes.any.isRequired }

Breakpoints.OnlyOnTabletMenu = ({ children }) => <OnlyOnTabletMenu>{children}</OnlyOnTabletMenu>
Breakpoints.OnlyOnTabletMenu.propTypes = { children: PropTypes.any.isRequired }

Breakpoints.OnlyOnDesktop = ({ children }) => <OnlyOnDesktop>{children}</OnlyOnDesktop>
Breakpoints.OnlyOnDesktop.propTypes = { children: PropTypes.any.isRequired }

Breakpoints.OnlyOnDesktopMenu = ({ children }) => <OnlyOnDesktopMenu>{children}</OnlyOnDesktopMenu>
Breakpoints.OnlyOnDesktopMenu.propTypes = { children: PropTypes.any.isRequired }

Breakpoints.NotOnMobile = ({ children }) => <NotOnMobile>{children}</NotOnMobile>
Breakpoints.NotOnMobile.propTypes = { children: PropTypes.any.isRequired }

Breakpoints.NotOnDesktop = ({ children }) => <NotOnDesktop>{children}</NotOnDesktop>
Breakpoints.NotOnDesktop.propTypes = { children: PropTypes.any.isRequired }

export default Breakpoints
