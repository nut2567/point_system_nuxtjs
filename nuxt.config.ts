// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  target: 'static',
  head: {
    title: 'Point System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },
  // css: ['@/assets/tailwind.css'],
  buildModules: [],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ], 
  nitro: {
    // เพิ่ม middleware ที่เราเขียนลงใน nitro
    routeRules: {
      '/api/**': { appMiddleware: ['logger'] },
    },
  },
  build: {},
})
