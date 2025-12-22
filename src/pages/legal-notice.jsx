import React, { useEffect, useContext } from 'react'

import { mainContext } from '../layout/Frame/MainProvider'
import Structure from '../layout/Structure'
import Typography from '../layout/Typography'

const LegalNoticeEn = () => {
  const { setTitle } = useContext(mainContext)
  useEffect(() => {
    setTitle('Legal Notice')
  }, [setTitle])

  return (
    <>
      <Structure.Wrapper>
        <Typography.H1>
          Legal Notice
        </Typography.H1>
        <br />
        couper.io
        <br />
        <br />
        <br />
        <br />
        <Typography.H3line>
        Marcel Ludwig
        </Typography.H3line>
        <a href='https://github.com/malud'>https://github.com/malud</a>
        <br />
        ---
        <br />
        <br />
        ---
        <br />
        ---
        <br />
        E-Mail:
        {' '}
        <a
          data-e2e='mobile-contact'
          target='_blank'
          rel='noopener noreferrer'
          // eslint-disable-next-line max-len
          href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#99;&#111;&#117;&#112;&#101;&#114;&#46;&#105;&#111;'
        >
          contact@couper.io
        </a>
        <br />
        Homepage:
        {' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.couper.io/'
        >
          www.couper.io
        </a>
      </Structure.Wrapper>
    </>
  )
}

export default LegalNoticeEn
