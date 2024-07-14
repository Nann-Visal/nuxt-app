// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@morev/vue-transitions/nuxt',
    'nuxt-headlessui',
    "@nuxt/image"
  ],

  tailwindcss: { exposeConfig: true },
  headlessui: { prefix: "H" },

  app: {
    head: {
      title: "Zii-Nuxt",
      link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/icon.svg" },
        //Inter font
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },
})