module.exports = {
  mode: 'spa',
  target: 'static',

  dev: process.env.NODE_ENV !== 'production',

  env: {
    BASE_URL: process.env.BASE_URL || 'http://178.128.240.97:3000',
    ANALYTICS_ID: process.env.ANALYTICS_ID || 'G-51J0K3PNXR'
  },

  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/bettery-landing/' : '/'
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Bettery.app',
    meta: [
      { charset: 'utf-8' },

      { name: 'title', content: 'Bettery.app' },
      { hid: 'description', name: 'description', content: 'Твой личный коуч для лучшей жизни' },

      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },

      { name: 'apple-mobile-web-app-title', content: 'bettery.app' },
      { name: 'application-name', content: 'bettery.app' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#ffffff' },

      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://bettery.app/' },
      { property: 'og:title', content: 'Bettery.app' },
      { property: 'og:description', content: 'Твой личный коуч для лучшей жизни' },
      { property: 'og:image', content: '/preview.jpeg' },

      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://bettery.app/' },
      { property: 'twitter:title', content: 'Bettery.app' },
      { property: 'twitter:description', content: 'Твой личный коуч для лучшей жизни' },
      { property: 'twitter:image', content: '/preview.jpeg' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: false,
  loadingIndicator: false,

  generate: {
    fallback: false
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue|scss)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    { src: '~plugins/scroll', mode: 'client' },
    { src: '~plugins/analytics', mode: 'client' }
  ],

  css: [{ src: '~assets/css/main.scss', lang: 'scss' }]
}
