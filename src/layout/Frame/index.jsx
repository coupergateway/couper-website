import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import MainProvider, { mainContext } from './MainProvider'
import Content, { NotchPadding } from './Styling'
import GlobalStyle from './GlobalStyle'
import theme from '../../lib/theme'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CookieLayer from '../../components/CookieLayer'

import OpenGraph from '../../assets/images/opengraph.png'

const txt = {
  title: {
    en: 'Couper - Avenga\'s lightweight API Gateway for Developers',
  },
  description: {
    // eslint-disable-next-line max-len
    en: 'Build digital products faster and deliver immediate value to your customers. Couper supports developers in building and running API-driven Web projects.',
  },
}

function Frame({ children, pageContext }) {
  const {
    title, description, lang, path, setLang, setPath,
  } = useContext(mainContext)

  useEffect(() => {
    if (lang !== pageContext?.langKey) {
      setLang(pageContext?.langKey || 'en')
    }
    if (path !== pageContext?.slug) {
      setPath(pageContext?.slug || '/en/')
    }
  }, [lang, pageContext, path, setLang, setPath])

  const name = 'couper.io'
  const url = 'https://couper.io'
  const siteDesc = description || txt.description[lang]
  const siteTitle = title ? `${name} - ${title}` : `${name} - ${txt.title[lang]}`

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <title>{siteTitle}</title>
        <base href='/' />
        <link hrefLang={lang} />
        {/*
          <link rel='alternate' href='/de/' hreflang='de' />
          <link rel='alternate' href='/en/' hreflang='en' />
        */}
        <link rel='canonical' href={`${url}${path}`} />
        <link rel='icon' href='/couper-logo-circle.svg' />

        <meta name='description' content={siteDesc} />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' />
        <meta name='robots' content='index,follow' />

        <meta property='twitter:title' content={siteTitle} />
        <meta property='twitter:description' content={siteDesc} />
        <meta property='twitter:card' content='summary' />
        <meta property='twitter:site' content='@couper_io' />
        <meta property='twitter:creator' content='@couper_io' />

        <meta property='og:url' content={url} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDesc} />
        <meta property='og:site_name' content={name} />
        <meta property='og:image' content={`${url}${OpenGraph}`} />
        <meta property='og:image:alt' content={siteTitle} />
        <meta property='og:type' content='website' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:type' content='image/png' />

        <script type='application/ld+json' data-e2e='structured-data'>
          {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "${url}",
          "name": "${name}",
          "contactPoint": {
            "@type": "ContactPoint",
            "url": "https://github.com/avenga/couper/discussions",
            "contactType": "Technical Support"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cologne, GER",
            "postalCode": "50667",
            "streetAddress": "Bahnhofsvorplatz 1"
          },
          "logo": "${url}/icons/icon-512x512.png",
          "email": "contact@couper.io",
          "description": "${siteDesc}",
          "sameAs": [
            "https://github.com/avenga/couper"
          ]
        }`}
        </script>
      </Helmet>
      <Header />
      <Content>
        <NotchPadding>
          {children}
        </NotchPadding>
      </Content>
      <Footer />
      <CookieLayer />
    </ThemeProvider>
  )
}
Frame.propTypes = {
  children: PropTypes.any.isRequired,
  pageContext: PropTypes.shape({
    langKey: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
}

export default (props) => (
  <MainProvider>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Frame {...props} />
  </MainProvider>
)
