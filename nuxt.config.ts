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
})
