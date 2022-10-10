import React, { useEffect, useContext } from 'react'

import { mainContext } from '../layout/Frame/MainProvider'
import Structure from '../layout/Structure'
import Typography from '../layout/Typography'

import Subscriptions from '../components/Subscriptions'
import Cta from '../components/Cta'

const SubscriptionsEn = () => {
  const { setTitle } = useContext(mainContext)
  useEffect(() => setTitle('Subscriptions'))

  return (
    <>
      <Structure.Wrapper>
        <Structure.ContainerHalfLeft>
          <Typography.H1>Which Plan is Right for You?</Typography.H1>
          <Structure.Distance />
          <Typography.Paragraph>
            Couper offers a community, a professional, and an enterprise plan - the software is always
            the same. However, the professional and enterprise plans include a private communication channel,
            security updates, and various professional support possibilities. What&apos;s more, with the enterprise
            plan, you can use Couper for any number of projects.
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Cta
              name='button-contact'
              // eslint-disable-next-line max-len
              href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#99;&#111;&#117;&#112;&#101;&#114;&#46;&#105;&#111;'
            >
              Contact Us
            </Cta>
          </Typography.Paragraph>
        </Structure.ContainerHalfLeft>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Subscriptions />
      </Structure.Wrapper>
    </>
  )
}

export default SubscriptionsEn
