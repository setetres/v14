import tailwindConfig from './tailwind.config'

export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'select-none bg-red-700',
    },
    title: 'Sete Três — v14',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'v14.0 of my website.',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Sete Três — v14' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'v14.0 of my website.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://v14.setetres.st/share-v14.png',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://v14.setetres.st' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Sete Três — v14',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'v14.0 of my website.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://v14.setetres.st/share-v14.png',
      },
    ],
    link: [{ rel: 'icon', href: '/favicon.png' }],
  },
  loading: {
    color: '#000000',
    failedColor: '#000000',
    throttle: 0,
  },
  css: ['@/assets/css/application.css'],
  plugins: [
    {
      src: '~/plugins/ga.js',
      mode: 'client',
    },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
  tailwindcss: {
    exposeConfig: true,
  },
}
