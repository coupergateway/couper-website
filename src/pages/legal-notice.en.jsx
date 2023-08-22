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
        ---
        </Typography.H3line>
        ---
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
        <br />
        <br />
        <br />
        <br />
        <Typography.H3line color="purple">
          Legal form
        </Typography.H3line>
        ---
        <br />
        ---
        <br />
        ---
        <br />
        <br />
        <br />
        <br />
        <Typography.H3line color="blue">
          Management
        </Typography.H3line>
        ---
        <br />
        <br />
        <br />
        <Typography.H3line color="orange">
          ---
        </Typography.H3line>
        ---
        <br />
        <br />
        <br />
        <Typography.H3line color="red">
          Data Protection Officer (DPO)
        </Typography.H3line>
        ---
      </Structure.Wrapper>
    </>
  )
}

export default LegalNoticeEn
