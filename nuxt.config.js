export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Quiero Compu',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Quiero Compu ofrece un servicio de recomendación y asesoramiento en la compra de laptops en Uruguay.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/thumb.png',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Quiero Compu',
      },
      {
        name: 'og:site_name',
        content: 'web developer',
      },
      {
        prefix: 'og: https://ogp.me/ns#',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Quiero Compu ofrece un servicio de recomendación y asesoramiento en la compra de laptops en Uruguay.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      'nuxt-social-meta',
      {
        url: '',
        title: 'Quiero Compu',
        site_name: 'Quiero Compu',
        description:
          'Quiero Compu ofrece un servicio de recomendación y asesoramiento en la compra de laptops en Uruguay.',
        img: 'thumb.png',
        img_size: { width: '800px', height: '600px' },
        locale: 'en_US',
        twitter: '@silvesterwali',
        twitter_card: 'Quiero Compu',
        theme_color: '#54bd95',
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
