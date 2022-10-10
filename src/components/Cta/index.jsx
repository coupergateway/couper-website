import React from 'react'
import PropTypes from 'prop-types'

import { Button, ExternalLink, InternalLink } from './Styling'

export default function Cta({
  name,
  e2e,
  onClick,
  center,
  children,
  href,
  to,
}) {
  const example = 'Click here!'

  if (href) {
    return (
      <ExternalLink
        center={center}
        data-e2e={e2e}
        name={name || 'button-cta'}
        href={href}
        target='_blank'
        rel='noopener'
      >
        {children || example}
      </ExternalLink>
    )
  }

  if (to) {
    return (
      <InternalLink
        center={center}
        data-e2e={e2e}
        name={name || 'button-cta'}
        to={to}
      >
        {children || example}
      </InternalLink>
    )
  }

  return (
    <Button
      center={center}
      data-e2e={e2e}
      name={name || 'button-cta'}
      onClick={onClick}
    >
      {children || example}
    </Button>
  )
}
Cta.propTypes = {
  name: PropTypes.string,
  e2e: PropTypes.string,
  onClick: PropTypes.func,
  center: PropTypes.bool,
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
}
