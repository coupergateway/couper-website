import React, { useEffect, useContext } from 'react'

import { mainContext } from '../layout/Frame/MainProvider'
import Structure from '../layout/Structure'
import Typography from '../layout/Typography'
import Cta from '../components/Cta'
import { Distance } from '../layout/Structure/Styling'

const FeaturesEn = () => {
  const { setTitle } = useContext(mainContext)
  useEffect(() => setTitle('Features'))

  return (
    <>
      <Structure.Wrapper>
        <Structure.ContainerHalfLeft>
          <Typography.H1>
            Discover Couper
          </Typography.H1>
          <Structure.Distance />
          <Typography.Paragraph>
            Couper is a lightweight API gateway for developers. It reduces the complexity of
            the core application code by adding access control, observability and service connectivity
            on a separate architectural component.
          </Typography.Paragraph>
        </Structure.ContainerHalfLeft>
      </Structure.Wrapper>

      <Structure.Wrapper>
        <Structure.TwoColumnsMulti>
          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='orange'>
                HTTP Request Routing / Forwarding
              </Typography.H3line>
              <Typography.Paragraph>
                Couper is a proxy component forwarding requests and responses bidirectionally between
                clients and upstream services.
                Create virtual endpoints and configure the upstream URLs based on the original client request.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/api-proxy/README.md'
                >
                  Example: Proxy API Requests
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/tree/master/sequences/README.md'
                >
                  Example: Request Sequences
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>

          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='blue'>
                Custom Requests and Responses
              </Typography.H3line>
              <Typography.Paragraph>
                Couper is more than a proxy component as it lets you define custom requests to any remote
                or upstream service. You can also send custom responses back to the client.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/custom-requests/README.md'
                >
                  Example: Custom Requests
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/tree/master/multiple-requests'
                >
                  Example: Multiple Requests
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/tree/master/static-responses'
                >
                  Example: Static Responses
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>

          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='purple'>
                Request / Response Manipulation
              </Typography.H3line>
              <Typography.Paragraph>
                Couper lets you decide which headers and path parameters you want to send to the upstream
                service and which headers you want to send back to the client.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/path-params/README.md'
                >
                  Example: Path Parameters
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/query/README.md'
                >
                  Example: Query Parameters
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/tree/master/sending-json'
                >
                  Example: Sending JSON Content
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/tree/master/sending-form'
                >
                  Example: Sending Form Content
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>

          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='red'>
                Access Control
              </Typography.H3line>
              <Typography.Paragraph>
                Couper acts as a centralized access control layer that is easy to configure. It offers
                Basic Authentication, JWT signing, validation, and header passing as well as SAML and
                OAuth 2.0 Client Credentials.
                {' '}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/jwt-access-control/README.md'
                >
                  Example: JWT Access Control
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/sending-jwt-upstream/README.md'
                >
                  Example: Sending JWT Claims Upstream
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/creating-jwt/README.md'
                >
                  Example: Creating JWT
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/saml/README.md'
                >
                  Example: Single-Sign-On with SAML
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/oauth2-client-credentials/README.md'
                >
                  Example: OAuth2 Client Credentials
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/oidc/README.md'
                >
                  Example: OIDC
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>

          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='orange'>
                Configurable Service Connectivity
              </Typography.H3line>
              <Typography.Paragraph>
                Couper helps you to overcome the challenges associated with distributed computing.
                Fight unreliable networks and long latencies by configuring your timeouts and connection pools.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/backend-configuration/README.md'
                >
                  Example: Backend Configuration
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>
          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='blue'>
                Upstream Validation &amp; CORS
              </Typography.H3line>
              <Typography.Paragraph>
                Couper secures your communication by validating upstream requests and responses against an
                OpenAPI 3 schema. CORS behaviour can also be configured.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/backend-validation/README.md'
                >
                  Example: Backend Validation
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>

          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='purple'>
                SPA &amp; Web Serving
              </Typography.H3line>
              <Typography.Paragraph>
                Couper comes with a good old web server that serves static files on the clients’ demand and
                allows you to easily handle SPA bootstrap document serving.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/simple-fileserving/README.md'
                >
                  Example: Simple File Serving
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/spa-serving/README.md'
                >
                  Example: SPA Serving
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>

          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='red'>
                Error Handling
              </Typography.H3line>
              <Typography.Paragraph>
                Couper offers uniform error handling across different back-end services and lets you send your
                own project-related HTML errors. You can also create custom errors.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/error-handling-ba/README.md'
                >
                  Example: Error Handling for Access Controls
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper/blob/master/docs/ERRORS.md'
                >
                  Documentation: Errors
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>

          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='orange'>
                Easy Configuration &amp; Deployment
              </Typography.H3line>
              <Typography.Paragraph>
                Couper pays special attention to developer experience: we have chosen HCL as an easily
                understandable configuration language. Besides, we support you with the tools you require
                but also give you the freedom you need.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/kubernetes-configuration/README.md'
                >
                  Example: Kubernetes configuration
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/docker-compose/README.md'
                >
                  Example: Using docker-compose
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/linking-docker-containers/README.md'
                >
                  Example: Linking Docker Containers
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/env-var/README.md'
                >
                  Example: Environment Variables
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://marketplace.visualstudio.com/items?itemName=couper.couperconf'
                >
                  Get the Couper Extension from the Visual Studio Marketplace
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>

          <Structure.Container>
            <Structure.TileBorder color='white' border='gray'>
              <Typography.H3line color='blue'>
                Observability
              </Typography.H3line>
              <Typography.Paragraph>
                Couper offers standard logs with request context IDs for analysis and monitoring and provides
                a health check for Couper. Further monitoring can be achieved with enabled metrics and our Grafana
                dashboard.
              </Typography.Paragraph>
              <Typography.Paragraph>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper-examples/blob/master/custom-logging/README.md'
                >
                  Example: Custom Logging
                </a>
                <br />
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper/blob/master/docs/LOGS.md'
                >
                  Documentation: Logging
                </a>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/coupergateway/couper/blob/master/docs/METRICS.md'
                >
                  Documentation: Metrics
                </a>
              </Typography.Paragraph>
            </Structure.TileBorder>
          </Structure.Container>
        </Structure.TwoColumnsMulti>

        <Structure.Container>
          <Structure.ContainerCenter>
            <Typography.H2>
              Try Couper
            </Typography.H2>
            <Typography.Paragraph>
              Visit the
              {' '}
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/coupergateway/couper-examples'
              >
                example repository
              </a>
              {' '}
              to learn about Couper&apos;s features in detail.
              {' '}
              If you prefer a quick dive in, have a look at our getting started tutorial.
            </Typography.Paragraph>
            <Distance />
            <Cta to='/en/docs#getting-started'>
              Get Started
            </Cta>
          </Structure.ContainerCenter>
        </Structure.Container>

      </Structure.Wrapper>
    </>
  )
}

export default FeaturesEn
