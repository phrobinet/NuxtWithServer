import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  serverMiddleware: [
    { path: '/', handler: '~/server-middleware/index.js' }
  ],
  runtimeConfig: {
    public: {
      dbConnect: process.env.DB_CONNECT,
      tokenSecret: process.env.TOKEN_SECRET,
    }
  },
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      },
    ],
    script: [ 
      {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
      }
    ],
  },
  buildModules: [
    '@pinia/nuxt',
  ],
})
