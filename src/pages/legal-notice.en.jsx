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
        couper.io - developed and operated by Avenga Germany GmbH
        <br />
        <br />
        <br />
        <br />
        <Typography.H3line>
        Avenga Germany GmbH
        </Typography.H3line>
        Bahnhofsvorplatz 1
        <br />
        50667 Cologne, Germany
        <br />
        <br />
        Phone: +49 (0) 221 84 630 0
        <br />
        Fax: +49 (0) 221 84 630 165
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
          href='https://www.avenga.com/'
        >
          www.avenga.com
        </a>
        <br />
        <br />
        <br />
        <br />
        <Typography.H3line color="purple">
          Legal form
        </Typography.H3line>
        GmbH – limited liability company
        <br />
        Company registry: Cologne County Court HRB 79823
        <br />
        VAT ID.: DE815448435
        <br />
        <br />
        <br />
        <br />
        <Typography.H3line color="blue">
          Management
        </Typography.H3line>
        Thorsten May (CEO)
        <br />
        <br />
        <br />
        <Typography.H3line color="orange">
          DUNS / UPIK
        </Typography.H3line>
        342766551
        <br />
        <br />
        <br />
        <Typography.H3line color="red">
          Data Protection Officer (DPO)
        </Typography.H3line>
        Dirk Marwinski
      </Structure.Wrapper>
    </>
  )
}

export default LegalNoticeEn
