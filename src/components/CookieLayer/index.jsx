import React, { useEffect, useState } from 'react'

import Cta from '../Cta'
import Container, { Content } from './Styling'

export default function CookieLayer() {
  const [accepted, setAccepted] = useState(true)

  useEffect(() => {
    setAccepted(!!localStorage.getItem('cookiepolicyaccepted'))
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiepolicyaccepted', new Date().getTime())
    setAccepted(true)
  }

  return accepted ? null : (
    <Container id='cookie-layer'>
      <Content>
        <div>
          This website uses cookies to enhance your experience and our service.
          <br />
          <div>
            Learn more in our
            {' '}
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              alt='Privacy policy'
            >
              privacy policy
            </a>
          </div>
        </div>
        <div>&nbsp;</div>
        <Cta name='button-cookie-accept' onClick={handleAccept}>Accept Cookies</Cta>
      </Content>
    </Container>
  )
}
