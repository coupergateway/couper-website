import React, { useEffect, useContext } from 'react'

import { mainContext } from '../layout/Frame/MainProvider'
import Structure from '../layout/Structure'
import Typography from '../layout/Typography'
import Breakpoints from '../layout/Breakpoints'

import Brands from '../components/Brands'
import News from '../components/News'
import Checklist from '../components/Checklist'
import Cta from '../components/Cta'
import Img from '../components/Img'


import HomeDesktop from '../assets/images/en/HomeDesktop'
import HomeMobileTablet from '../assets/images/en/HomeMobileTablet'
import Award from '../assets/images/IBA21_Bronze_Winner.png'

import Couper from '../assets/images/Couper'
import Experience from '../assets/icons/Experience'
import OpenSource from '../assets/icons/OpenSource'
import Support from '../assets/icons/Support'

const IndexEn = () => {
  const { setTitle } = useContext(mainContext)
  useEffect(() => {
    setTitle('Welcome')

    // in case the initial page display is scrolled down (y !== 0) it is scrolled up again
    if (typeof window !== 'undefined'
      && document && document.body
      && document.body.getBoundingClientRect()
      && document.body.getBoundingClientRect().y
    ) {
      window.setTimeout(() => window.scrollTo(0, 0), 1)
    }
  }, [setTitle])

  return (
    <>
      <Structure.Wrapper>
        <Structure.Hero>
          <Couper />
          <Structure.Container>
            <Structure.Distance />
            <Typography.H1>
              Meet Couper
            </Typography.H1>
            <Structure.Distance />
            <Typography.Paragraph>
              Avenga&apos;s lightweight open source API gateway designed to support developers in
              building and running API-driven Web projects.
            </Typography.Paragraph>
            <Structure.Distance />
            <Structure.Distance />
            <Cta to='/en/docs#getting-started'>Get Started</Cta>
            <News />
          </Structure.Container>
        </Structure.Hero>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.TwoColumns>
          <Structure.Container>
            <Typography.H2line>
              The Challenge of Digitalization
            </Typography.H2line>
            <Typography.Paragraph>
              Existing IT infrastructures make it hard for many organizations to meet growing customer
              expectations while at the same time maintaining pace and quality.
            </Typography.Paragraph>
          </Structure.Container>
          <div />
        </Structure.TwoColumns>
        <Structure.Distance />
        <Structure.Distance />
        <Structure.ThreeColumns>
          <Structure.Container>
            <Typography.H3>
              The foundation:
              <br />
              your existing infrastructure
            </Typography.H3>
            <Typography.Paragraph>
              Having grown over the years, your existing infrastructure is likely to consist of different IT
              systems, functioning processes, and different teams. This living microcosm is the foundation of
              your digital products.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Companies have to provide flexible interfaces to their existing data and processes.
            </Typography.Paragraph>
          </Structure.Container>
          <Structure.Container>
            <Typography.H3>
              The demand:
              <br />
              convincing applications
            </Typography.H3>
            <Typography.Paragraph>
              Due to rapid technological advantages, changing social trends and large online platforms providing
              outstanding customer experiences, consumers nowadays have very high standards when it comes to digital
              applications and services.
            </Typography.Paragraph>
            <Typography.Paragraph>
              To meet their expectations, companies must be able to bring appealing products to market quickly.
            </Typography.Paragraph>
          </Structure.Container>
          <Structure.Container>
            <Typography.H3>
              The challenge:
              <br />
              delivering quality in time
            </Typography.H3>
            <Typography.Paragraph>
              Adapting your existing infrastructure to steadily changing market demands can have a significant
              impact on your entire organization. All too often, this results in long development cycles and
              late product launch.
            </Typography.Paragraph>
            <Typography.Paragraph>
              To clear the path for a sustainable digitalization, you need a flexible solution that allows you
              to bypass given dependencies.
            </Typography.Paragraph>
          </Structure.Container>
        </Structure.ThreeColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.TwoColumns>
          <Structure.Container>
            <Typography.H2line color='orange'>
              Couper Supports Your Digital Journey
            </Typography.H2line>
            <Typography.Paragraph>
              The Couper architecture creates a flexible connection between digital products and your existing
              infrastructure.
            </Typography.Paragraph>
            <Typography.Paragraph>
              This allows you to retain proven systems and processes while building apps much faster and deliver
              immediate value to your customers.
            </Typography.Paragraph>
            <Breakpoints.OnlyOnMobile>
              <Structure.Distance />
              <Structure.ImageContainer>
                <HomeMobileTablet />
              </Structure.ImageContainer>
            </Breakpoints.OnlyOnMobile>
            <Typography.Paragraph>
              <Cta
                to='/en/use-cases/'
                left
              >
                Browse Use Cases
              </Cta>
            </Typography.Paragraph>
          </Structure.Container>
          <Breakpoints.NotOnMobile>
            <Breakpoints.OnlyOnTablet>
              <Structure.ImageContainer>
                <HomeMobileTablet />
              </Structure.ImageContainer>
            </Breakpoints.OnlyOnTablet>
            <Breakpoints.OnlyOnDesktop>
              <Structure.ImageContainer>
                <HomeDesktop />
              </Structure.ImageContainer>
            </Breakpoints.OnlyOnDesktop>
          </Breakpoints.NotOnMobile>
        </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.ContainerHalf>
          <Typography.H2>
            Developed for Your Needs
          </Typography.H2>
          <Structure.Distance />
          <Typography.Paragraph>
            With 20 years of experience, Avenga has developed Couper to support your tactical customer interface
            development and at the same time enable your strategic system modernization.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Couper is precisely tailored to the needs of front-end development and pays special attention to the
            non-functional requirements of the customer.
          </Typography.Paragraph>
        </Structure.ContainerHalf>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.FourColumnsCenter>
          <Structure.ContainerCenter>
            <Structure.IconLarge color='purple'>
              <Experience />
            </Structure.IconLarge>
            <Structure.Distance />
            <Typography.Paragraph>
              <strong>20+ Years of Experience</strong>
            </Typography.Paragraph>
          </Structure.ContainerCenter>
          <Structure.ContainerCenter>
            <Structure.IconLarge color='orange'>
              <OpenSource />
            </Structure.IconLarge>
            <Structure.Distance />
            <Typography.Paragraph>
              <strong>Open Source</strong>
            </Typography.Paragraph>
          </Structure.ContainerCenter>
          <Structure.ContainerCenter>
            <Structure.IconLarge color='blue'>
              <Support />
            </Structure.IconLarge>
            <Structure.Distance />
            <Typography.Paragraph>
              <strong>Professional Support</strong>
            </Typography.Paragraph>
          </Structure.ContainerCenter>
          <Structure.ContainerCenter>
            <Structure.IconLarge color='red'>
              <Trusted />
            </Structure.IconLarge>
            <Structure.Distance />
            <Typography.Paragraph>
              <strong>Trusted by Customers</strong>
            </Typography.Paragraph>
          </Structure.ContainerCenter>
        </Structure.FourColumnsCenter>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.Container>
          <Structure.Distance />
          <Typography.H2line color='blue'>
            Your Benefits with Couper
          </Typography.H2line>
        </Structure.Container>
        <Structure.TwoColumns>
          <Structure.Container>
            <Checklist>
              <Checklist.Entry>
                Gain fast and flexible development of single page applications through the provision of
                dedicated front-end APIs
                <Structure.Distance />
              </Checklist.Entry>
              <Checklist.Entry>
                Obtain architectural prerequisites for a parallel, step-by-step modernization of your back-end systems
              </Checklist.Entry>
            </Checklist>
          </Structure.Container>
          <Structure.Container>
            <Checklist>
              <Checklist.Entry>
                Add security and observability to your project and meet all non-functional requirements.
                <Structure.Distance />
              </Checklist.Entry>
              <Checklist.Entry>
                Connect legacy IT and delight your developers with modern technology
              </Checklist.Entry>
            </Checklist>
          </Structure.Container>
        </Structure.TwoColumns>
        <Structure.Distance />
        <Structure.ContainerHalf>
          <Cta to='/en/use-cases/'>
            Explore Use Cases
          </Cta>
        </Structure.ContainerHalf>
      </Structure.Wrapper>

      <Structure.Wrapper>
      <Structure.TwoColumns>
        <Structure.Container>
          <Typography.H2line color='purple'>
            Do You Have Questions?
          </Typography.H2line>
          <Typography.Paragraph>
            With 20+ years of experience, Avenga solves your digital transformation challenges. We understand
            the complexity of modern markets and develop customized solutions. With Couper, we have already
            successfully implemented over a dozen projects for our clients.
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Cta
              name='button-contact'
              // eslint-disable-next-line max-len
              href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#99;&#111;&#117;&#112;&#101;&#114;&#46;&#105;&#111;'
            >
              Get in Touch
            </Cta>
          </Typography.Paragraph>
        </Structure.Container>
        <Structure.Container>
          <Typography.H2line color='green'>
            Bronze Stevie® Award Winner
          </Typography.H2line>  
          <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://stevieawards.com/iba'
            >
            <Img src={Award} height={200} />
          </a>
        </Structure.Container>
        </Structure.TwoColumns>
      </Structure.Wrapper>
    </>
  )
}

export default IndexEn
