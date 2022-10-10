import React, { useEffect, useContext } from 'react'

import { mainContext } from '../layout/Frame/MainProvider'
import Structure from '../layout/Structure'
import Typography from '../layout/Typography'

import Cta from '../components/Cta'
import Img from '../components/Img'

import OpenId from '../assets/icons/OpenId'
import OIDC from '../assets/images/OIDC.png'

const OpenIdConnectGatewayEn = () => {
  const { setTitle } = useContext(mainContext)
  useEffect(() => setTitle('OpenID Connect Gateway'))

  return (
    <>
       <Structure.Wrapper>
        <Structure.Hero>
        <OpenId />
          <Structure.Container>
            <Structure.Distance />
            <Typography.H1>
            Couper OpenID Connect Gateway
            </Typography.H1>
            <Structure.Distance />
            <Typography.Paragraph>
            If you are a system administrator and want to implement Zero Trust in your infrastructure, learn about Couper's ready-to-use OpenID Connect (OIDC) Gateway.
            <br />
            It verifies the identity of an end-user based on the (two-factor) authentication performed by your OpenID Provider.
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Cta href='https://github.com/avenga/couper-oidc-gateway'>
                Gateway Repository
              </Cta>
            </Typography.Paragraph>
          </Structure.Container>
        </Structure.Hero>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.TwoColumns>
        <Structure.Container>
          <Typography.H2line color='purple'>
            How It Works
          </Typography.H2line>
         <Typography.Paragraph>
           <p>
          Couper's OIDC Gateway adds a new access control layer to Web applications and services.
          It is placed between Internet users and the application
          running in your network. No changes to the application are required. Therefore it is especially suitable for commercial off-the-shelve software (COTS) or legacy systems.
          </p>

          <p>
          Users connecting to your application must first authenticate themselves against an Identity Provider like Google API, Azure AD, Keycloak etc.
          Then, Couper OIDC Gateway will only allow verified users to access the secured application.
          </p>

          <p>
          In addition to securing applications in your network, e.g. as an alternative to VPN, the Couper OIDC gateway can help you comply with security policies such as multi-factor authentication (MFA).
          </p>
         </Typography.Paragraph>
        </Structure.Container>
        <Structure.ImageContainer>
          <br />
          <br />
        <Img src={OIDC} />
        </Structure.ImageContainer>
         </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
      <Structure.TileBorder color='white' border='gray'>
        <Structure.ContainerCenter>
          <Typography.H2>
            Configuration Step-By-Step
          </Typography.H2>
          <Typography.Paragraph>
            The Couper OIDC gateway only needs a few configuration settings to work:
          </Typography.Paragraph>
        </Structure.ContainerCenter>
        <Structure.ThreeColumns>
          <Structure.Container>
            <Typography.H3>Step 1</Typography.H3>
            <Typography.Paragraph>
              Login to your OpenID Provider (Google, Keycloak, Azure AD, ...) and create a configuration for a <em>Relying party</em>. (Depending on the product this could also be called client, application or connection).
            </Typography.Paragraph>
          </Structure.Container>
          <Structure.Container>
            <Typography.H3>Step 2</Typography.H3>
            <Typography.Paragraph>
              Configure the <em>callback URL</em> – where the Couper gateway is running.
              Note the provided <em>Client ID</em> and <em>Client Secret</em>.
            </Typography.Paragraph>
          </Structure.Container>
          <Structure.Container>
            <Typography.H3>Step 3</Typography.H3>
            <Typography.Paragraph>
              <p>
              Configure the Couper OIDC gateway with the OpenID provider's <em>OpenID configuration URL</em>,
              and the Client credentials from step 2.
              You have to generate a <em>token secret</em> and tell Couper how to connect to the actual application (<em>origin</em>) to be protected.
              </p>
              Done. That's all it takes!
            </Typography.Paragraph>
          <Structure.Distance />
          </Structure.Container>
        </Structure.ThreeColumns>
        <Structure.Distance/>
        <Structure.ContainerCenter>
          <Typography.Paragraph>
            <Cta href='https://github.com/avenga/couper-oidc-gateway'>
              Get Started
            </Cta>
          </Typography.Paragraph>
        </Structure.ContainerCenter>
        </Structure.TileBorder>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.Container>
          <Typography.H2line color="blue" >
            Why You Should Use Couper's OIDC Gateway
          </Typography.H2line>
        </Structure.Container>
        <Structure.TwoColumns>
        <Structure.Container>
          <Typography.H3>
            Bye-bye VPN...
          </Typography.H3>
          <Structure.Distance />
          <Typography.Paragraph>
            <p>
              For years virtual private networks (VPNs) were used to
              create Intranets or company networks to run applications
              for employees that should not be used by outsiders. They
              often grow into one big network zone where many services
              run.
            </p>
            <p>
              They create a false impression of security:
              The network is protected, so applications running there
              are automatically secure, too.
            </p>
            <p>
              The principle of least privilege mandates that access
              rights should be given deliberately.
              With remote and hybrid work models proliferating and
              increased collaboration with external contractors, it becomes
              nearly impossible to follow that rule, given access to a
              VPN opens up an entire network.
            </p>
          </Typography.Paragraph>
        </Structure.Container>
        <Structure.Container>
          <Typography.H3>
            ...hello Zero Trust!
          </Typography.H3>
          <Structure.Distance />
          <Typography.Paragraph>
            <p>
              Zero trust architectures work differently:
              They don't base trust on network connectivity or location.
              Every user needs to authorize with every service first -
              even if they are employees and use the office's local network.
            </p>
            <p>
              To manage the amount of permissions necessary to map all users'
              privileges to their applications, usually central systems
              providing identity and authorization services are
              deployed. They are often used together with enterprise
              user databases like Active Directories. Assigning
              permissions via group keeps everything manageable.
            </p>
            <p>
              The Couper OIDC Gateway helps you to apply the Zero Trust
              model in your infrastructure. It restricts access to
              applications based on the identity of the user. The
              authentication is delegated to an OIDC identity provider.
            </p>
          </Typography.Paragraph>
        </Structure.Container>
        </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.ContainerHalf>
          <Typography.H2 >
            What is OpenID Connect?
          </Typography.H2>
          <Structure.Distance />
          <Typography.Paragraph>
            <a href="https://openid.net/connect/">OpenID Connect</a> (OIDC) is an identity layer built upon the <a href="https://oauth.net/2/">OAuth 2.0</a> authorization framework.
            It combines the capability of Open ID in verifying the client's identity and OAuth's capability of accessing the client's resources.
         </Typography.Paragraph>
        </Structure.ContainerHalf>
      </Structure.Wrapper>
    </>
  )
}

export default OpenIdConnectGatewayEn
