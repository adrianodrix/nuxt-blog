export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */  
  head: {
    titleTemplate: titleChunk => {      
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} | Nuxt Blog` : 'Nuxt Blog'
    },
    htmlAttrs: {
      lang: 'pt_BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#66cdaa' },
      { name: 'theme-color', content: '#66cdaa' },
      { name: 'msapplication-TileImage', content: '/favicon.ico' },      
      { hid: 'description', name: 'description', content: 'Somos uma empresa que visa ajudar o pequeno empresário, alavancar suas vendas, neste blog terá uma infinidade de assuntos relacionados a Documentos Fiscais'},
      { hid: 'keywords', name: 'keywords', content: 'freeNFe, blog, nota, fiscal, notícias, SEFAZ, governo, gestão, empresas' },      
      { hid: 'image', name: 'image', content: '/cover.png' },
      // Meta Item
      { hid: 'name', itemprop: 'name', content: 'FreeNFe Blog' },
      { hid: 'description', itemprop: 'description', content: 'Somos uma empresa que visa ajudar o pequeno empresário, alavancar suas vendas, neste blog terá uma infinidade de assuntos relacionados a Documentos Fiscais' },
      { hid: 'image', itemprop: 'image', content: '/cover.png' },
      // Meta Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'FreeNFe Blog'},
      { hid: 'twitter:description', name: 'twitter:description', content: 'Somos uma empresa que visa ajudar o pequeno empresário, alavancar suas vendas, neste blog terá uma infinidade de assuntos relacionados a Documentos Fiscais' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@freenfe' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@freenfe'},
      { hid: 'twitter:image', name: 'twitter:image', content: '/cover.png'},
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'FreeNFe Blog'},
      // Meta OG
      { hid: 'og:title', property: 'og:title', content: 'FreeNFe Blog' },
      { hid: 'og:url', property: 'og:url', content: 'http://http://localhost:3000' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'FreeNFe Blog'},
      { hid: 'og:description', property: 'og:description', content: 'FreeNFe Blog'},      
      { hid: 'og:locale', property: 'og:locale', content: 'pt_BR' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: '/cover.png' },
      { hid: 'og:image:url', property: 'og:image:url', content: '/cover.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '628'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** PWA Configuration
  */
  manifest: {
    name: 'Nuxt Headless',
    short_name: 'Nuxt-headless',
    theme_color: '#000000',
    background_color: '#f2d636',
    display: 'standalone',
    description: ''
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
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        /*
        ** Run ESLint on save
        */
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            // fix: true
          }
        })
      }
    },
    render: {
      static: {
        maxAge: 2592000
      }
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/pluralize',
    '@/plugins/scrollTo',
    {
      src: '@/plugins/vueSelect',
      ssr: false
    }    
  ],
  /*
  ** Customize the progress-bar style
  */
  loading: {
    color: '#f4a261',
    height: '4px',
    failedColor: '#DF4661'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'cookie-universal-nuxt',
    ['@nuxtjs/moment', ['pt-br']],
    ['@nuxtjs/google-analytics', {id: 'UA-12301-2'}]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://5ceede1b1c2baf00142cc459.mockapi.io/api/v1/',
    https: true,
    
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://localhost:3000',
    cacheTime: 1000 * 60 * 15,
    exclude: ['/.git']
  },
  http: {
    retry: 3
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
