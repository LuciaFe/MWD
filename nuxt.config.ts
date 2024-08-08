// https://nuxt.com/docs/api/configuration/nuxt-config
import itLocale from './locales/it.json'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@formkit/nuxt',
  ],

  i18n: {
    vueI18n: './config/i18n.config.ts', // if you are using custom path, default
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            customCollections: ['icons'],
          }),
        ],
        dts: true,
      }),
      Icons({
        customCollections: {
          icons: FileSystemIconLoader(
            fileURLToPath(new URL('./icons/', import.meta.url)),
            svg => {
              const viewBox = /viewBox="\d+ \d+ (\d+) (\d+)"/gi.exec(svg)
              if (!viewBox) return svg
              const w = viewBox?.[1]
              const h = viewBox?.[2]
              svg = svg.replace(/width=".*?"/, `width="${w}" `)
              svg = svg.replace(/height=".*?"/, `height="${h}" `)
              return svg
            }
          ),
        },
      }),
    ],
  },
  tailwindcss: {
    cssPath: './assets/scss/app.scss',
  },
  runtimeConfig: {
    directus: {
      url: process.env.NUXT_DIRECTUS_URL,
      token: process.env.NUXT_DIRECTUS_TOKEN,
    },
  },

  components: {
    dirs: [
      {
        path: '~/components/cms',
        global: true,
      },
      '~/components',
    ],
  },
})
