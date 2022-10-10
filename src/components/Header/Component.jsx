import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Breakpoints from '../../layout/Breakpoints'
import Couper from '../../assets/images/Couper'

import NavToggle from './NavToggle'
import Cta from '../Cta'

import IconGithub from './IconGithub'

import Wrapper, {
  Container,
  HideAll,
  Navigation,
  Menu,
  MenuItem,
  Logo,
  NotchPadding,
} from './Styling'

export default function Header({
  menuOpen,
  setMenuOpen,
  lang,
  path,
}) {
  return (
    <Wrapper menuOpen={menuOpen}>
      {menuOpen && (
        <HideAll
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(false)}
        />
      )}
      <Container>
        <NotchPadding>
          <Logo to={`/${lang}/`} data-e2e='header-logo'>
            <Couper />
          </Logo>
          <Navigation menuOpen={menuOpen}>
            <Menu>
              <MenuItem active={path === '/en/use-cases/'}>
                <Link
                  className='text'
                  data-e2e='use-cases'
                  to='/en/use-cases/'
                >
                  Use Cases
                </Link>
              </MenuItem>
              <MenuItem active={path === '/en/features/'}>
                <Link
                  className='text'
                  data-e2e='features'
                  to='/en/features/'
                >
                  Features
                </Link>
              </MenuItem>
              <MenuItem active={path === '/en/docs/'}>
                <Link
                  className='text'
                  data-e2e='docs'
                  to='/en/docs/'
                >
                  Docs
                </Link>
              </MenuItem>
              <MenuItem active={path === '/en/subscriptions/'}>
                <Link
                  className='text'
                  data-e2e='subscriptions'
                  to='/en/subscriptions/'
                >
                  Subscriptions
                </Link>
              </MenuItem>
              <MenuItem active={path === '/en/open-id-connect-gateway/'}>
              <Link
                  className='text'
                  data-e2e='open-id-connect-gateway'
                  to='/en/open-id-connect-gateway/'
                >
                  OIDC Gateway
                </Link>
              </MenuItem>
              <MenuItem>
                <Cta
                  e2e='button-github-header'
                  name='button-github-header'
                  href='https://github.com/avenga/couper/'
                >
                  <Breakpoints.OnlyOnMobileMenu>
                    <div className='icon'>
                      View on GitHub
                      <IconGithub />
                    </div>
                  </Breakpoints.OnlyOnMobileMenu>
                  <Breakpoints.OnlyOnTabletMenu>
                    <IconGithub />
                  </Breakpoints.OnlyOnTabletMenu>
                  <Breakpoints.OnlyOnDesktopMenu>
                    <div className='icon'>
                      View on GitHub
                      <IconGithub />
                    </div>
                  </Breakpoints.OnlyOnDesktopMenu>
                </Cta>
              </MenuItem>
            </Menu>
          </Navigation>
          <NavToggle
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </NotchPadding>
      </Container>
    </Wrapper>
  )
}
Header.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
