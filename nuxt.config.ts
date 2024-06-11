// https://nuxt.com/docs/api/configuration/nuxt-config
import itLocale from './locales/it.json'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './config/i18n.config.ts', // if you are using custom path, default
  },
  tailwindcss: {
    cssPath: './assets/scss/app.scss',
  },
  runtimeConfig: {
    directus: {
      url: '',
      token: '',
    },
  },
})
