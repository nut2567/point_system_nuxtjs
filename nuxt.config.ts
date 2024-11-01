// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  // ssr: false,
  target: 'static',
  app: {
    head: {
      title: 'Point System',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // รูปที่ใช้แสดงเมื่อแชร์บนโซเชียลมีเดีย
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/S__7667726_0.jpg'  // รูปภาพที่ใช้เมื่อแชร์ลิ้งค์
        }
      ],
      link: [
        // Favicon (ไอคอนของเว็บไซต์)
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico' // ไอคอนของเว็บไซต์
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        },
        // รูปแบบ Apple Touch Icon
        {
          rel: 'apple-touch-icon',
          href: '/tailwind-favicons/apple-touch-icon.png'  // ไอคอนสำหรับอุปกรณ์ Apple
        }
      ]
    }
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
      // '/api/**': { appMiddleware: ['logger'] },
      '/api/profile': { middleware: ['verifyToken'] },
    },
  },
  build: {},
  devServer: {
    port: 4000,
  },
})
