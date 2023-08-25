import React, { useEffect, useContext } from 'react'

import { mainContext } from '../layout/Frame/MainProvider'
import Structure from '../layout/Structure'
import Typography from '../layout/Typography'
import Breakpoints from '../layout/Breakpoints'

import Cta from '../components/Cta'
import ScrollTo, { Anchor, execScrollTo } from '../components/ScrollTo'

import Modernize from '../assets/icons/Modernize'
import Security from '../assets/icons/Security'
import Customer from '../assets/icons/Customer'

import ModernizeDesktop from '../assets/images/en/ModernizeDesktop'
import ModernizeMobileTablet from '../assets/images/en/ModernizeMobileTablet'
import SecureYourApiDesktop from '../assets/images/en/SecureYourApiDesktop'
import SecureYourApiMobileTablet from '../assets/images/en/SecureYourApiMobileTablet'
import MoreThanOneDesktop from '../assets/images/en/MoreThanOneDesktop'
import MoreThanOneMobileTablet from '../assets/images/en/MoreThanOneMobileTablet'

const UseCasesEn = () => {
  const { setTitle } = useContext(mainContext)
  useEffect(() => setTitle('Use Cases'))

  return (
    <>
      <Structure.Wrapper>
        <Structure.ContainerHalfLeft>
          <Typography.H1>
            Use Cases
          </Typography.H1>
          <Structure.Distance />
          <Typography.Paragraph>
            Couper supports your company&apos;s digital journey in various ways. Whether you want to
            modernize your IT, enhance your customers’ digital experience or secure your APIs - Couper
            is the perfect fit.
          </Typography.Paragraph>
        </Structure.ContainerHalfLeft>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.ThreeColumns>
          <Structure.TileBorder
            color='white'
            border='gray'
            onClick={() => execScrollTo('modernize')}
          >
            <Structure.ContainerCenter>
              <Structure.IconLarge color='blue'>
                <Modernize />
              </Structure.IconLarge>
              <Breakpoints.NotOnDesktop>
                <Structure.Distance />
                <Structure.Distance />
              </Breakpoints.NotOnDesktop>
              <Typography.H3 minHeight={55}>
                Modernize your IT
              </Typography.H3>
              <Typography.Paragraph minHeight={200}>
                Imagine you can build digital products and modernize your IT at the same time. Sounds too
                good to be true? Find out how Couper helps.
              </Typography.Paragraph>
              <ScrollTo id='modernize' />
            </Structure.ContainerCenter>
          </Structure.TileBorder>
          <Structure.TileBorder
            color='white'
            border='gray'
            onClick={() => execScrollTo('secure')}
          >
            <Structure.ContainerCenter>
              <Structure.IconLarge color='red'>
                <Security />
              </Structure.IconLarge>
              <Breakpoints.NotOnDesktop>
                <Structure.Distance />
                <Structure.Distance />
              </Breakpoints.NotOnDesktop>
              <Typography.H3 minHeight={55}>
                Secure your APIs
              </Typography.H3>
              <Typography.Paragraph minHeight={200}>
                APIs are a critical part of modern applications. Couper simplifies securing them by adding
                a configurable access control layer that implements JWT, SAML and OAuth.
                {' '}
              </Typography.Paragraph>
              <ScrollTo id='secure' />
            </Structure.ContainerCenter>
          </Structure.TileBorder>
          <Structure.TileBorder
            color='white'
            border='gray'
            onClick={() => execScrollTo('prepare')}
          >
            <Structure.ContainerCenter>
              <Structure.IconLarge color='orange'>
                <Customer />
              </Structure.IconLarge>
              <Breakpoints.NotOnDesktop>
                <Structure.Distance />
                <Structure.Distance />
              </Breakpoints.NotOnDesktop>
              <Typography.H3 minHeight={55}>
                Target your audience
              </Typography.H3>
              <Typography.Paragraph minHeight={200}>
                Most companies have more than one target audience. With Couper you can perfectly meet their
                different needs by speeding up the time to market of new user interfaces for all your systems
                and services.
              </Typography.Paragraph>
              <ScrollTo id='prepare' />
            </Structure.ContainerCenter>
          </Structure.TileBorder>
        </Structure.ThreeColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Anchor id='modernize' />
        <Structure.TwoColumns>
          <Structure.Container>
            <Typography.H2line color='blue'>
              Modernize Your IT
            </Typography.H2line>
            <Typography.Paragraph>
              The development of digital products is often delayed by outdated systems and structures in the back end.
            </Typography.Paragraph>
            <Typography.Paragraph>
              By decoupling front and back ends, Couper enables businesses to start their product development
              right away and gradually modernize their existing IT infrastructure at the same time.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Extract services and functionalities step by step and make them available via APIs until your legacy
              IT is history.
            </Typography.Paragraph>
          </Structure.Container>
          <Structure.ImageContainer>
            <Breakpoints.NotOnDesktop>
              <ModernizeMobileTablet />
            </Breakpoints.NotOnDesktop>
            <Breakpoints.OnlyOnDesktop>
              <ModernizeDesktop />
            </Breakpoints.OnlyOnDesktop>
          </Structure.ImageContainer>
        </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Anchor id='secure' />
        <Structure.TwoColumns>
          <Structure.ImageContainer>
            <Breakpoints.OnlyOnTablet>
              <SecureYourApiMobileTablet />
            </Breakpoints.OnlyOnTablet>
            <Breakpoints.OnlyOnDesktop>
              <SecureYourApiDesktop />
            </Breakpoints.OnlyOnDesktop>
          </Structure.ImageContainer>
          <Structure.Container>
            <Typography.H2line color='red'>
              Secure Your APIs
            </Typography.H2line>
            <Typography.Paragraph>
              Security must play a vital part during all stages of application development, especially if the
              app is supposed to access critical business data and resources.
            </Typography.Paragraph>
            <Typography.Paragraph>
              However, implementing security measures is a highly complex matter. Changes in project requirements
              or responsibilities as well as the integration of third-party services make the work of developers
              challenging and thus endanger the security of sensitive data.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Couper offers various authentication and authorization mechanisms on a separate layer, facilitating
              security implementation and ensuring the protection of your systems.
            </Typography.Paragraph>
            <Breakpoints.OnlyOnMobile>
              <Structure.Distance />
              <Structure.Distance />
              <SecureYourApiMobileTablet />
            </Breakpoints.OnlyOnMobile>
          </Structure.Container>
        </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Anchor id='prepare' />
        <Structure.TwoColumns>
          <Structure.Container>
            <Typography.H2line color='orange'>
              Target Your Audience
            </Typography.H2line>
            <Typography.Paragraph>
              Too many applications are overloaded with features because they are supposed to
              simultaneously address the challenges of various target groups:
              just think of power users and regular users and their different needs when it
              comes to required functionalities or data.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Dedicated micro products can offer outstanding user experiences and enable you to
              meet the needs of your distinct user groups. However, replicating functionality and
              service integration seems to be a daunting task. Because the decoupling of front
              and back end implies big challenges, projects all too often take the route to a
              one-size-fits-no-one middle ground.
            </Typography.Paragraph>
            <Typography.Paragraph>
              With Couper, you can design dedicated front-end APIs that help you launch new
              products and specific user interfaces to your existing systems and services in a
              short amount of time.
            </Typography.Paragraph>
            <Breakpoints.OnlyOnMobile>
              <Structure.Distance />
              <Structure.Distance />
              <MoreThanOneMobileTablet />
            </Breakpoints.OnlyOnMobile>
          </Structure.Container>

          <Breakpoints.NotOnMobile>
            <Structure.ImageContainer>
              <Breakpoints.OnlyOnTablet>
                <MoreThanOneMobileTablet />
              </Breakpoints.OnlyOnTablet>
              <Breakpoints.OnlyOnDesktop>
                <MoreThanOneDesktop />
              </Breakpoints.OnlyOnDesktop>
            </Structure.ImageContainer>
          </Breakpoints.NotOnMobile>
        </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.ContainerHalf>
          <Typography.H2>
            What Can We Do For You?
          </Typography.H2>
          <Typography.Paragraph>
            With 20+ years of experience, Couper solves your digital transformation challenges. We understand
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
        </Structure.ContainerHalf>
      </Structure.Wrapper>
    </>
  )
}

export default UseCasesEn
