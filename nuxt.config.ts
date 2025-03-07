// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        bodyAttrs: {
            class: 'demo'
        },
        charset: 'utf-8',
        titleTemplate: '%s | IT Genius Engineering',
        meta: [
            {
                name: 'author',
                content: 'IT Genius Engineering Ltd., Thailand'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, maximum-scale=5'
            }
        ]
    }
},

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxt-icon'
],

  compatibilityDate: '2025-03-05'
})