export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    // Allow access from local network.
    // host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'H.G.M. France',

    htmlAttrs: {
      lang: 'fr',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Conception, fabrication et réalisation de systèmes pour lignes de conditionnement incluant le convoyage, le contrôle vision ou des machines spéciales.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://hgmfrance.fr/',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'H.G.M. France — Conception de systèmes pour lignes de conditionnement',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Conception, fabrication et réalisation de systèmes pour lignes de conditionnement incluant le convoyage, le contrôle vision ou des machines spéciales.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://hgmfrance.fr/og-image.jpg',
      },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Source+Sans+Pro:wght@300;400;600&display=swap',
        rel: 'stylesheet',
      },
    ],

    script: [
      {
        async: true,
        defer: true,
        'data-domain': 'hgmfrance.fr',
        src: 'https://hello.jsgarden.co/js/script.js',
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://tailwindcss.nuxtjs.org
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
      ],
    },
  },
};
