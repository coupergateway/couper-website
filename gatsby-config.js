module.exports = {
  siteMetadata: {
    siteUrl: 'https://couper.io',
    title: 'couper.io',
  },
  proxy: {
    prefix: '/api',
    url: 'http://localhost:4080',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-PH17X7VL05'],
        gtagConfig: {
          send_page_view: true,
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'couper.io',
        short_name: 'couper.io',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#65B32E',
        display: 'standalone',
        icon: 'src/assets/images/icon.png',
        legacy: false, // no apple-touch
        include_favicon: false, // This will exclude favicon link tag
        crossOrigin: 'use-credentials',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layout/Frame/index.jsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: true,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://couper.io',
        sitemap: 'https://couper.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
}
