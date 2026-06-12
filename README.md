# Portfolio

Bold, creative single-page portfolio built with Nuxt 4, Nuxt UI, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

All placeholder content lives in one file:

**`app/data/portfolio.ts`**

Edit `profile`, `projects`, `experience`, and `skills` with your real info. Swap social URLs and email there too.

Each project has a `slug` and `caseStudy` object — case studies render at `/projects/[slug]` (e.g. `/projects/nebula-dashboard`).

### Images

- Add your avatar as `public/avatar.jpg` (optional)
- Add project screenshots to `public/projects/` and update `image` paths in `portfolio.ts`
- Replace `public/og-image.svg` with a 1200×630 image for social sharing

## Deploy

Static export:

```bash
npm run generate
```

Output is in `.output/public`. Deploy to Vercel, Netlify, or any static host.

For SSR hosting:

```bash
npm run build
npm run preview
```

## Stack

- [Nuxt 4](https://nuxt.com)
- [Nuxt UI](https://ui.nuxt.com)
- [VueUse](https://vueuse.org)
- [Inter](https://fonts.google.com/specimen/Inter) via [@nuxt/fonts](https://fonts.nuxt.com) — bold typography, light theme
