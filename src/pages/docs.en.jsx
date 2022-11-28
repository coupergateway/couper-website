import React, { useEffect, useContext } from 'react'

import { mainContext } from '../layout/Frame/MainProvider'
import Structure from '../layout/Structure'
import Typography from '../layout/Typography'
import Breakpoints from '../layout/Breakpoints'

import Cta from '../components/Cta'
import Changelog from '../components/Changelog'
import Checklist from '../components/Checklist'
import CodeBlock from '../components/CodeBlock'
import { Anchor } from '../components/ScrollTo'

import WebServingExample from '../components/CodeBlock/web_serving.hcl'
import ProxyExample from '../components/CodeBlock/proxy.hcl'
import JWTValidationExample from '../components/CodeBlock/jwt_validation.hcl'
import HelloWorld from '../components/CodeBlock/hello_world.hcl'

import RunCouperNative from '../components/CodeBlock/run_couper_native.sh'
import RunCouperOutput from '../components/CodeBlock/run_couper_output.sh'

import OverviewTabletDesktop from '../assets/images/en/OverviewTabletDesktop'
import OverviewMobile from '../assets/images/en/OverviewMobile'

const DocsEn = () => {
  const { setTitle } = useContext(mainContext)

  useEffect(() => {
    setTitle('Docs')

    if (window.location.hash && document.querySelector(window.location.hash)) {
      document.querySelector(window.location.hash).scrollIntoView({ behavior: 'smooth' })
    }
  }, [setTitle])

  return (
    <>
      <Structure.Wrapper>
        <Structure.ContainerHalfLeft>
          <Typography.H2line color='blue'>
            Overview
          </Typography.H2line>
          <Structure.Distance />
          <Typography.Paragraph>
            Couper is a lightweight open-source API gateway that acts as an entry point for clients to
            your application and an exit point to upstream services.
          </Typography.Paragraph>
          <Typography.Paragraph>
            It adds access control, observability, and back-end
            connectivity on a separate layer. This will keep your core application code more simple.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Couper does not need any special development skills and offers easy configuration and integration.
          </Typography.Paragraph>
          <br/>
          <Cta href='https://docs.couper.io/'>
            Visit docs.couper.io
          </Cta>
        </Structure.ContainerHalfLeft>
        <Structure.Distance />
        <Structure.Distance />
        <Structure.ImageContainer>
          <Breakpoints.OnlyOnMobile>
            <OverviewMobile />
          </Breakpoints.OnlyOnMobile>
          <Breakpoints.NotOnMobile>
            <OverviewTabletDesktop />
          </Breakpoints.NotOnMobile>
        </Structure.ImageContainer>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Anchor id='getting-started' />
        <Structure.Container>
          <Typography.H1>
            Getting Started
          </Typography.H1>
          <Structure.Distance />
          <Typography.Paragraph>
            Couper is available as
            {' '}
            <a href='https://github.com/avenga/couper-examples/tree/master/docker'>container image</a>
            {' '}
            or as binary from the <a href='https://github.com/avenga/couper/releases/latest'>latest release on GitHub.</a>
            <br />

            To download/install Couper with
            {' '}
            <a href='https://brew.sh/'>homebrew</a>
            {' '}
            open your terminal and execute:
            <Structure.Distance />
            <CodeBlock language='ssh'>$ brew tap avenga/couper && brew install couper</CodeBlock>
            <Structure.Distance />
            <br />
            Couper needs a configuration file to know what to do.
            Create an empty
            {' '}
            <code>couper.hcl</code>
            {' '}
            file.
            <br />
            <br />
            Copy/paste the following configuration to the file and save it:
            <Structure.Distance />
            <CodeBlock language='hcl'>{HelloWorld}</CodeBlock>
            <Structure.Distance />
            <br />
            Then start Couper:
            <Structure.Distance />
            <CodeBlock language='ssh'>{RunCouperNative}</CodeBlock>
            <Structure.Distance />
            <br />
            <Structure.Distance />
            <CodeBlock language='ssh'>{RunCouperOutput}</CodeBlock>
            <Structure.Distance />
            Now Couper is serving on your computer&apos;s port
            {' '}
            <code>8080</code>
            {' '}
            . Point your browser or
            {' '}
            <code>curl</code>
            {' '}
            to
            {' '}
            <a href='http://localhost:8080/'>http://localhost:8080/</a>
            {' '}
            to see what&apos;s going on.
            <br /><br />
            Press
            {' '}
            <code>CTRL+c</code>
            {' '}
            to stop process. Visit the Couper
            {' '}
            <a href='https://github.com/avenga/couper/tree/master/docs'>repository</a>
            {' '}
            for reference or go on with the
            {' '}
            <a href='https://github.com/avenga/couper-examples'>examples</a>
            .
          </Typography.Paragraph>
        </Structure.Container>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.TwoColumns>
          <Structure.TileBorder color='white' border='gray'>
            <Structure.Container>
              <Typography.H2line>
                Beautiful Configuration
              </Typography.H2line>
              <Typography.Paragraph minHeight={150}>
                The syntax of the configuration file is based on HCL 2.0, a configuration language by HashiCorp.
                <br />
                <br />
                The result is easy to read, yet powerful and expressive.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <Cta href='https://marketplace.visualstudio.com/items?itemName=AvengaGermanyGmbH.couper'>
                  Get VS Code Extension
                </Cta>
              </Typography.Paragraph>
            </Structure.Container>
          </Structure.TileBorder>
          <Structure.TileBorder color='white' border='gray'>
            <Structure.Container>
              <Typography.H2line color='blue'>
                Full Example Repository
              </Typography.H2line>
              <Typography.Paragraph minHeight={150}>
                Our example repository consists of small, ready-to-use examples that guide you through the
                configuration step by step. Configure your file and SPA serving, create virtual endpoints,
                group them in APIs, and protect them with JSON Web Tokens.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <Cta href='https://github.com/avenga/couper-examples/tree/master/'>
                  Full Example Repository
                </Cta>
              </Typography.Paragraph>
            </Structure.Container>
          </Structure.TileBorder>
        </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.ContainerHalfLeft>
          <Typography.H2line color='purple'>
            Configuration Examples
          </Typography.H2line>
          <Typography.Paragraph>
            The following examples are intended to give you a glance of Couper&apos;s core concepts and functionality.
            See for yourself what a few lines of configuration can do for you.
          </Typography.Paragraph>
        </Structure.ContainerHalfLeft>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.TwoColumns>
          <Breakpoints.NotOnMobile>
            <Structure.Distance />
            <Structure.Container>
              <CodeBlock language='hcl'>{WebServingExample}</CodeBlock>
            </Structure.Container>
          </Breakpoints.NotOnMobile>
          <Structure.Container>
            <Typography.H3>
              SPA Web serving
            </Typography.H3>
            <Typography.Paragraph>
              Every Web application begins with a client loading a HTML page.
              That&apos;s why Couper contains a Web server for simple file serving.
              Couper also takes care of the more complex web serving of SPA assets.
            </Typography.Paragraph>
            <Typography.Paragraph>
              The
              {' '}
              <code>files</code>
              {' '}
              block configures Couper&apos;s file server. It needs to know which directory to serve (
              <code>document_root</code>
              ).  That&apos;s all it takes!
            </Typography.Paragraph>
            <Typography.Paragraph>
              The
              {' '}
              <code>spa</code>
              {' '}
              block  is responsible for serving the bootstrap document for all paths that match the paths list.
            </Typography.Paragraph>
            <Breakpoints.OnlyOnMobile>
              <Structure.Distance />
              <Structure.Container>
                <CodeBlock language='hcl'>{WebServingExample}</CodeBlock>
              </Structure.Container>
            </Breakpoints.OnlyOnMobile>
            <Structure.Distance />
            <Cta href='https://github.com/avenga/couper-examples/tree/master/simple-fileserving'>
              Browse Full Example
            </Cta>
          </Structure.Container>
        </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.TwoColumns>
          <Structure.Container>
            <Typography.H3>
              Proxy API requests
            </Typography.H3>
            <Typography.Paragraph>
              Most modern web applications use APIs to get information for display, trigger actions,
              or check if a user is authorized to see or do certain things. These APIs may be part of
              your application or a third-party service running elsewhere.
            </Typography.Paragraph>
            <Typography.Paragraph>
              This basic configuration defines an upstream backend service (
              <code>https://httpbin.org</code>
              ) and &quot;mounts&quot; it on the local API endpoint
              {' '}
              <code>/public/**</code>
              .
            </Typography.Paragraph>
            <Breakpoints.OnlyOnMobile>
              <Structure.Distance />
              <Structure.Container>
                <CodeBlock language='hcl'>
                  {ProxyExample}
                </CodeBlock>
              </Structure.Container>
            </Breakpoints.OnlyOnMobile>
            <Structure.Distance />
            <Cta href='https://github.com/avenga/couper-examples/tree/master/api-proxy'>
              Browse Full Example
            </Cta>
          </Structure.Container>
          <Breakpoints.NotOnMobile>
            <Structure.Distance />
            <Structure.Container>
              <CodeBlock language='hcl'>
                {ProxyExample}
              </CodeBlock>
            </Structure.Container>
          </Breakpoints.NotOnMobile>
        </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.TwoColumns>
          <Breakpoints.NotOnMobile>
            <Structure.Distance />
            <Structure.Container>
              <CodeBlock language='hcl'>{JWTValidationExample}</CodeBlock>
            </Structure.Container>
          </Breakpoints.NotOnMobile>
          <Structure.Container>
            <Typography.H3>
              JWT access control
            </Typography.H3>
            <Typography.Paragraph>
              Most certainly, you don&apos;t want anyone to use your application without permission.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Couper offers JWT access control: configure your access control in the
              {' '}
              <code>definitions</code>
              {' '}
              block and secure your private endpoint by referencing the label.
            </Typography.Paragraph>
            <Breakpoints.OnlyOnMobile>
              <Structure.Distance />
              <Structure.Container>
                <CodeBlock language='hcl'>{JWTValidationExample}</CodeBlock>
              </Structure.Container>
            </Breakpoints.OnlyOnMobile>
            <Structure.Distance />
            <Cta href='https://github.com/avenga/couper-examples/tree/master/jwt-access-control'>
              Browse Full Example
            </Cta>
          </Structure.Container>
        </Structure.TwoColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.Distance />
        <Structure.ContainerHalf>
          <Typography.H2>
            Reasons for Couper
          </Typography.H2>
        </Structure.ContainerHalf>
        <Structure.Distance />
        <Structure.Distance />
        <Structure.FourColumns>
          <Structure.Container>
            <Checklist>
              <Checklist.Entry>
                Intuitive Configuration
              </Checklist.Entry>
              <Checklist.Entry>
                Open Source
              </Checklist.Entry>
            </Checklist>
          </Structure.Container>
          <Structure.Container>
            <Checklist>
              <Checklist.Entry>
                Language Independent
              </Checklist.Entry>
              <Checklist.Entry>
                Don&apos;t Reinvent the Wheel
              </Checklist.Entry>
            </Checklist>
          </Structure.Container>
          <Structure.Container>
            <Checklist>
              <Checklist.Entry>
                IDE Extension Available
              </Checklist.Entry>
              <Checklist.Entry>
                Easy Integration
              </Checklist.Entry>
            </Checklist>
          </Structure.Container>
          <Structure.Container>
            <Checklist>
              <Checklist.Entry>
                Cloud Native
              </Checklist.Entry>
              <Checklist.Entry>
                Painless Re-Architecting
              </Checklist.Entry>
            </Checklist>
          </Structure.Container>
        </Structure.FourColumns>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Anchor id='changelog' />
        <Structure.TwoColumns>
          <Structure.Container>
            <Changelog />
          </Structure.Container>
          <Structure.Container>
            <Typography.H2line color='orange'>
              Simple Integration
            </Typography.H2line>
            <Typography.Paragraph>
              Couper releases are also provided as containers on DockerHub.
            </Typography.Paragraph>
            <Typography.Paragraph>
              They are ready to use for your Continuous Integration builds and Kubernetes deployment.
              All settings can be configured via environment variables.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Due to its small resource foot-print you have many integration options regarding
              the required scaling or architecture setup.
            </Typography.Paragraph>
            <Structure.Distance />
            <Typography.Paragraph>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/avenga/couper-examples/blob/master/kubernetes-configuration/README.md'
              >
                Example: Kubernetes configuration
              </a>
            </Typography.Paragraph>
            <Structure.Distance />
            <Typography.Paragraph>
              <Cta href='https://hub.docker.com/r/avenga/couper'>
                Get Docker Image
              </Cta>
            </Typography.Paragraph>
          </Structure.Container>
        </Structure.TwoColumns>
      </Structure.Wrapper>
    </>
  )
}

export default DocsEn
