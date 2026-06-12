import { projectSlugs } from './app/data/slugs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@vueuse/nuxt', '@solar-icons/nuxt', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'mn', language: 'mn-MN', name: 'Монгол', file: 'mn.ts' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.ts' }
    ],
    defaultLocale: 'mn',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root'
    }
  },
  solarIcons: {
    color: 'currentColor',
    size: 24,
    weight: 'Linear'
  },
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800, 900] }
    ]
  },
  app: {
    head: {
      title: 'Your Name — Developer',
      meta: [
        { name: 'description', content: 'Full-stack developer building bold digital experiences.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/en',
        ...projectSlugs.flatMap(slug => [`/projects/${slug}`, `/en/projects/${slug}`])
      ]
    }
  }
})
