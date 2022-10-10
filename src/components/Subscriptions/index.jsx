import React from 'react'

import Breakpoints from '../../layout/Breakpoints'
import Structure from '../../layout/Structure'
import Typography from '../../layout/Typography'

import Included from './Included'
import Excluded from './Excluded'
import Community from './Community'
import Professional from './Professional'
import Enterprise from './Enterprise'

import Wrapper, {
  FeaturesDesc,
  Th,
  ThContent,
  Tr,
  Td,
} from './Styling'

export default function Subscriptions() {
  return (
    <Wrapper>
      <table cellPadding={0} cellSpacing={0} width='100%'>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <Th>
              <ThContent>
                <Structure.IconMedium color='black'>
                  <Community />
                </Structure.IconMedium>
                <Breakpoints.NotOnDesktop>
                  <span>Comm-</span>
                  <br />
                  <span>unity</span>
                </Breakpoints.NotOnDesktop>
                <Breakpoints.OnlyOnDesktop>
                  Community
                </Breakpoints.OnlyOnDesktop>
              </ThContent>
            </Th>
            <th>&nbsp;</th>
            <Th color='orange'>
              <ThContent>
                <Structure.IconMedium color='orange'>
                  <Professional />
                </Structure.IconMedium>
                <Breakpoints.NotOnDesktop>
                  <span>Profes-</span>
                  <br />
                  <span>sional</span>
                </Breakpoints.NotOnDesktop>
                <Breakpoints.OnlyOnDesktop>
                  Professional
                </Breakpoints.OnlyOnDesktop>
              </ThContent>
            </Th>
            <th>&nbsp;</th>
            <Th color='green'>
              <ThContent>
                <Structure.IconMedium color='green'>
                  <Enterprise />
                </Structure.IconMedium>
                <Breakpoints.NotOnDesktop>
                  <span>Enter-</span>
                  <br />
                  <span>prise</span>
                </Breakpoints.NotOnDesktop>
                <Breakpoints.OnlyOnDesktop>
                  Enterprise
                </Breakpoints.OnlyOnDesktop>
              </ThContent>
            </Th>
          </tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Couper Software</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
          <Tr>
            <Td>Number of Projects</Td>
            <Td>
              <Breakpoints.OnlyOnMobile>unl.</Breakpoints.OnlyOnMobile>
              <Breakpoints.NotOnMobile>unlimited</Breakpoints.NotOnMobile>
            </Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td>1</Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td>
              <Breakpoints.OnlyOnMobile>unl.</Breakpoints.OnlyOnMobile>
              <Breakpoints.NotOnMobile>unlimited</Breakpoints.NotOnMobile>
            </Td>
          </Tr>
          <Tr>
            <Td>Online Documentation &amp; Examples</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
          <Tr>
            <Td>Open Community</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
          <Tr>
            <Td>Security Fixes &amp; Updates</Td>
            <Td><Structure.IconSmall color='red'><Excluded /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
          <Tr>
            <Td>Notifications about Updates</Td>
            <Td><Structure.IconSmall color='red'><Excluded /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
          <Tr>
            <Td>Limited Warranty for Documented Features</Td>
            <Td><Structure.IconSmall color='red'><Excluded /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
          <Tr>
            <Td>Private Communication Channel</Td>
            <Td><Structure.IconSmall color='red'><Excluded /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
          <Tr>
            <Td>2 h Support per Month Included</Td>
            <Td><Structure.IconSmall color='red'><Excluded /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
          <Tr>
            <Td>Prolongation of LTS beyond EOL*</Td>
            <Td><Structure.IconSmall color='red'><Excluded /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
          <Tr>
            <Td>
              Professional Support**
              <FeaturesDesc>
                <ul>
                  <li>Setup &amp; Configuration Review</li>
                  <li>Video Meetings for on-site Debugging</li>
                  <li>Developer Trainings</li>
                </ul>
              </FeaturesDesc>
            </Td>
            <Td><Structure.IconSmall color='red'><Excluded /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
            <Td className='nopadding'>&nbsp;</Td>
            <Td><Structure.IconSmall><Included /></Structure.IconSmall></Td>
          </Tr>
        </tbody>
      </table>
      <Typography.Paragraph color='gray'>
        * additional costs
        <br />
        ** T&amp;M basis
      </Typography.Paragraph>
    </Wrapper>
  )
}
