/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import Wrapper, {
  Columns,
  HeadDescription,
  HeadLeft,
  HeadRight,
  Description,
  MenuLeft,
  MenuRight,
  Copyright,
  Icons,
  BottomLeft,
  BottomRight,
  NotchPadding,
} from './Styling'

import IconTwitter from './IconTwitter'
import IconGithub from './IconGithub'
import IconMail from './IconMail'

import Breakpoints from '../../layout/Breakpoints'
import Cta from '../Cta'

export default function Footer() {
  const [year, setYear] = useState('')
  useEffect(() => setYear(new Date().getFullYear()), [setYear])

  return (
    <Wrapper>
      <NotchPadding>
        <Columns>
          <HeadDescription data-e2e='head-description'>
            Couper
          </HeadDescription>
          <Description data-e2e='description'>
            Avenga&apos;s lightweight open source API gateway designed to support
            developers in building and running API-driven Web projects.
          </Description>
          <Icons>
            <a
              data-e2e='social-twitter'
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/couper_io'
              alt='Find couper on Twitter'
              title='Find couper on Twitter'
            >
              <IconTwitter />
            </a>
            <a
              data-e2e='social-github'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/avenga/couper'
              alt='Find couper on GitHub'
              title='Find couper on GitHub'
            >
              <IconGithub />
            </a>
            <a
              data-e2e='social-mail'
              target='_blank'
              rel='noopener noreferrer'
              alt='Send us an Email'
              title='Send us an Email'
              href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#99;&#111;&#117;&#112;&#101;&#114;&#46;&#105;&#111;'
            >
              <IconMail />
            </a>
          </Icons>
          <HeadLeft data-e2e='headerLeft'>
            Content
          </HeadLeft>
          <MenuLeft>
            <div>
              <Link
                to='/en/use-cases/'
                data-e2e='footer-use-cases'
              >
                Use Cases
              </Link>
            </div>
            <div>
              <Link
                to='/en/features/'
                data-e2e='footer-features'
              >
                Features
              </Link>
            </div>
            <div>
              <Link
                to='/en/docs/'
                data-e2e='footer-docs'
              >
                Docs
              </Link>
            </div>
            <div>
              <Link
                to='/en/subscriptions/'
                data-e2e='footer-subscriptions'
              >
                Subscriptions
              </Link>
            </div>
            <div>
              <Link
                to='/en/open-id-connect-gateway/'
                data-e2e='footer-oidc-gateway'
              >
                OIDC Gateway
              </Link>
            </div>
          </MenuLeft>
          <HeadRight data-e2e='headerRight'>
            Support
          </HeadRight>
          <MenuRight>
            <div>
              <a
                data-e2e='github-couper'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/avenga/couper/'
              >
                Open Source
              </a>
            </div>
            <div>
              <a
                data-e2e='github-issues'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/avenga/couper/issues/'
              >
                Report a Problem
              </a>
            </div>
            <div>
              <a
                data-e2e='github-discussions'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/avenga/couper/discussions'
              >
                Ask a Question
              </a>
            </div>
          </MenuRight>
          <BottomLeft data-e2e='bottomLeft'>
            <Breakpoints.NotOnDesktop>
              <div>
                <a
                  data-e2e='mobile-contact'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#99;&#111;&#117;&#112;&#101;&#114;&#46;&#105;&#111;'
                >
                  Contact
                </a>
              </div>
            </Breakpoints.NotOnDesktop>
            <Breakpoints.OnlyOnDesktop>
              <Cta
                e2e='desktop-contact'
                name='button-contact'
                href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#99;&#111;&#117;&#112;&#101;&#114;&#46;&#105;&#111;'
              >
                Contact
              </Cta>
            </Breakpoints.OnlyOnDesktop>
          </BottomLeft>
          <BottomRight>
            <div>
              <Link
                to='/en/legal-notice/'
                data-e2e='legal-notice'
              >
                Legal Notice
              </Link>
            </div>
            <div>
              <a
                data-e2e='privacy-policy'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.avenga.com/privacy-policy/'
              >
                Privacy Policy
              </a>
            </div>
          </BottomRight>
          <Copyright data-e2e='copyright'>
            &copy;&nbsp;
            {year}
            &nbsp;Avenga. All&nbsp;rights&nbsp;reserved
          </Copyright>
        </Columns>
      </NotchPadding>
    </Wrapper>
  )
}
