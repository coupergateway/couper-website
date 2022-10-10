/* eslint-disable max-len */
import React from 'react'

import Structure from '../../layout/Structure'
import Typography from '../../layout/Typography'

import Img from '../Img'

import alex from './alexanderLapp.png'

export default () => (
  <Structure.Container>
    <Typography.H2>
      Questions?
    </Typography.H2>
    <Structure.TwoColumns>
      <Structure.Container>
        <Structure.Distance />
        <Img src={alex} height={220} />
      </Structure.Container>
      <Structure.Container>
        <Typography.H3>
          Alexander Lapp
        </Typography.H3>
        <Typography.Paragraph>
          Vice President Account Management
          <br />
          Avenga Germany GmbH
        </Typography.Paragraph>
        <Typography.Paragraph>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#108;&#101;&#120;&#97;&#110;&#100;&#101;&#114;&#46;&#108;&#97;&#112;&#112;&#64;&#97;&#118;&#101;&#110;&#103;&#97;&#46;&#99;&#111;&#109;'
          >
            &#97;&#108;&#101;&#120;&#97;&#110;&#100;&#101;&#114;&#46;&#108;&#97;&#112;&#112;&#64;&#97;&#118;&#101;&#110;&#103;&#97;&#46;&#99;&#111;&#109;
          </a>
          <br />
          <br />
          <a href='tel:+49 162 284 94 60'>+49 162 284 94 60</a>
        </Typography.Paragraph>
      </Structure.Container>
    </Structure.TwoColumns>
  </Structure.Container>
)
