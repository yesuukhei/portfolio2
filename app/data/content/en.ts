export default {
  profile: {
  name: 'Your Name',
  role: 'Full-Stack Developer',
  tagline: 'I build bold digital experiences that leave a mark.',
  image: '/sky.jpg',
  email: 'hello@example.com',
  location: 'Ulaanbaatar, Mongolia',
  available: true,
  yearsExperience: 4,
  bio: [
    'I\'m a developer who cares about craft — clean architecture, thoughtful UX, and code that\'s a pleasure to maintain. I turn complex problems into elegant solutions.',
    'My work spans full-stack web apps, from pixel-perfect interfaces to robust APIs and databases. I thrive at the intersection of design and engineering.',
    'When I\'m not coding, you\'ll find me exploring new frameworks, contributing to open source, or chasing the perfect cup of coffee.'
  ],
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://x.com/yourusername'
  }
},
  about: {
    focus: ['UX', 'Architecture', 'Speed'],
    mindset:
      'Great products balance thoughtful UX, clean code, and shipping fast — I optimize for all three.'
  },
  projects: [
  {
    slug: 'nebula-dashboard',
    title: 'Nebula Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, role-based access, and WebSocket live updates.',
    tags: ['Vue', 'Nuxt', 'PostgreSQL', 'D3.js'],
    image: '/projects/nebula.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudy: {
      role: 'Lead Developer',
      year: '2024',
      overview: 'Nebula is an internal analytics platform built for a SaaS company tracking 50k+ daily active users. The team needed a single source of truth for product metrics, replacing scattered spreadsheets and manual SQL queries.',
      challenge: 'Legacy reporting was slow (30s+ load times), lacked real-time data, and had no role-based access. Different teams needed different views without seeing sensitive revenue data.',
      solution: 'Built a Nuxt SPA with WebSocket-powered live charts, a PostgreSQL + TimescaleDB backend for time-series data, and a granular RBAC system. D3.js powers custom visualizations that standard chart libraries couldn\'t handle.',
      outcome: [
        'Reduced report load time from 30s to under 2s',
        'Adopted by 4 teams within the first month',
        'Cut ad-hoc data requests to the engineering team by 60%'
      ],
      features: [
        'Real-time WebSocket chart updates',
        'Role-based dashboard views',
        'Custom D3.js visualizations',
        'Export to CSV and PDF',
        'Saved filter presets per user'
      ]
    }
  },
  {
    slug: 'pulse-api',
    title: 'Pulse API',
    description: 'High-performance REST API with rate limiting, JWT auth, and auto-generated OpenAPI documentation.',
    tags: ['Node.js', 'TypeScript', 'Redis', 'Docker'],
    image: '/projects/pulse.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudy: {
      role: 'Backend Developer',
      year: '2024',
      overview: 'Pulse API is the backbone for a mobile fitness app serving 100k requests per minute. It handles user profiles, workout tracking, and social features with strict latency requirements.',
      challenge: 'The existing monolithic API couldn\'t scale past 10k RPM without timeouts. Documentation was outdated, onboarding new developers took weeks, and there was no rate limiting.',
      solution: 'Designed a modular Node.js + TypeScript API with Redis caching, JWT refresh tokens, and sliding-window rate limiting. OpenAPI specs are generated from Zod schemas, keeping docs always in sync.',
      outcome: [
        'Handles 100k+ RPM with p99 latency under 80ms',
        'API documentation auto-updates on every deploy',
        'Zero downtime deployments via blue-green strategy'
      ],
      features: [
        'JWT auth with refresh token rotation',
        'Redis-backed rate limiting',
        'Auto-generated OpenAPI docs',
        'Docker + Kubernetes deployment',
        'Structured logging with request tracing'
      ]
    }
  },
  {
    slug: 'forma-design-system',
    title: 'Forma Design System',
    description: 'Component library with 40+ accessible UI primitives, theming support, and Storybook documentation.',
    tags: ['Vue', 'Tailwind', 'Storybook', 'Figma'],
    image: '/projects/forma.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudy: {
      role: 'Design Systems Lead',
      year: '2023',
      overview: 'Forma unifies UI across three product teams that had diverged into inconsistent, duplicated components. The goal was one shared library with strong accessibility and theming.',
      challenge: 'Each team had forked their own button, modal, and form components. Bug fixes in one team never reached the others. WCAG compliance was inconsistent.',
      solution: 'Built 40+ Vue components with Tailwind CSS, full keyboard navigation, and ARIA attributes. Storybook documents every variant. Figma Code Connect bridges design and dev.',
      outcome: [
        'Reduced UI-related bugs by 45% across all products',
        'New feature UI build time cut in half',
        'Achieved WCAG 2.1 AA compliance across all components'
      ],
      features: [
        '40+ accessible Vue components',
        'Light/dark theme tokens',
        'Storybook with visual regression tests',
        'Figma Code Connect integration',
        'Semantic versioning with changelog'
      ]
    }
  },
  {
    slug: 'echo-chat',
    title: 'Echo Chat',
    description: 'Real-time messaging app with end-to-end encryption, file sharing, and presence indicators.',
    tags: ['Nuxt', 'Socket.io', 'MongoDB', 'WebRTC'],
    image: '/projects/echo.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudy: {
      role: 'Full-Stack Developer',
      year: '2023',
      overview: 'Echo is a privacy-focused team messaging app for remote startups. It combines Slack-like channels with E2E encryption for sensitive conversations.',
      challenge: 'Existing tools either lacked encryption or were too complex for small teams. We needed sub-100ms message delivery, file sharing up to 50MB, and offline message sync.',
      solution: 'Nuxt frontend with Socket.io for real-time messaging, MongoDB for message persistence, and WebRTC for optional voice calls. Signal Protocol handles E2E encryption for DMs.',
      outcome: [
        'Message delivery under 80ms globally',
        '500+ beta users in first 8 weeks',
        'Featured in a privacy-focused startup newsletter'
      ],
      features: [
        'End-to-end encrypted direct messages',
        'Channel-based team chat',
        'File sharing with preview',
        'Online/offline presence indicators',
        'WebRTC voice calls'
      ]
    }
  },
  {
    slug: 'terrain-maps',
    title: 'Terrain Maps',
    description: 'Interactive 3D terrain visualization using WebGL, with elevation data and custom shader effects.',
    tags: ['Three.js', 'WebGL', 'Mapbox', 'GLSL'],
    image: '/projects/terrain.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudy: {
      role: 'Frontend Developer',
      year: '2022',
      overview: 'Terrain Maps is an interactive visualization for an outdoor gear brand, letting users explore hiking trails in 3D with elevation profiles and weather overlays.',
      challenge: 'Standard 2D maps didn\'t convey trail difficulty. The client wanted an immersive 3D experience that worked on mobile browsers without killing performance.',
      solution: 'Built with Three.js and custom GLSL shaders for terrain rendering. Mapbox provides base tiles; elevation data from USGS is processed into heightmap textures. LOD system keeps mobile framerates above 30fps.',
      outcome: [
        'Average session time increased 3x vs. the old 2D map',
        'Runs at 30+ fps on mid-range mobile devices',
        'Won the client\'s internal "best campaign" award'
      ],
      features: [
        '3D terrain with elevation shading',
        'Interactive trail highlighting',
        'Weather overlay layer',
        'Mobile-optimized LOD rendering',
        'Custom GLSL shader effects'
      ]
    }
  },
  {
    slug: 'vault-cms',
    title: 'Vault CMS',
    description: 'Headless CMS with markdown editor, media management, and webhook integrations for static sites.',
    tags: ['Nuxt', 'Content', 'Cloudinary', 'Vercel'],
    image: '/projects/vault.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    caseStudy: {
      role: 'Solo Developer',
      year: '2022',
      overview: 'Vault is a lightweight headless CMS built for developers who want markdown-based content management without the overhead of enterprise platforms like Contentful.',
      challenge: 'Static site clients needed a simple way to edit blog posts and upload images without touching Git. Existing CMS options were either too expensive or too complex for solo developers.',
      solution: 'Nuxt full-stack app with a TipTap markdown editor, Cloudinary for media, and webhook triggers that rebuild connected Vercel sites on publish. Content stored as JSON in PostgreSQL.',
      outcome: [
        'Used by 12 freelance developers within 6 months',
        'Average content publish-to-live time under 90 seconds',
        'Open-sourced with 200+ GitHub stars'
      ],
      features: [
        'Rich markdown editor with live preview',
        'Cloudinary media library',
        'Webhook-triggered static rebuilds',
        'Multi-site content management',
        'Role-based editor permissions'
      ]
    }
  }
],
  experience: [
  {
    company: 'Tech Studio Co.',
    role: 'Senior Full-Stack Developer',
    period: '2023 — Present',
    highlights: [
      'Led migration of legacy monolith to microservices, reducing deploy time by 70%',
      'Built design system adopted across 3 product teams',
      'Mentored junior developers and established code review practices'
    ]
  },
  {
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: '2021 — 2023',
    highlights: [
      'Delivered 15+ client projects with Vue and Nuxt',
      'Improved Core Web Vitals scores to 90+ across all projects',
      'Introduced automated testing, cutting regression bugs by 40%'
    ]
  },
  {
    company: 'Startup Inc.',
    role: 'Junior Developer',
    period: '2020 — 2021',
    highlights: [
      'Built MVP from scratch that secured seed funding',
      'Implemented CI/CD pipeline and Docker containerization',
      'Collaborated directly with founders on product direction'
    ]
  }
],
  skills: [
  {
    category: 'Frontend',
    items: ['Vue.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Three.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs']
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Figma', 'Vercel', 'Linux', 'CI/CD']
  }
],
  whyMeLead: 'What you get — fast delivery, clean architecture, and UX that users feel.',
  whyMe: [
    {
      title: 'Fast delivery',
      description:
        'Speed without cutting corners. Ship the right version early, then refine with real feedback.'
    },
    {
      title: 'Clean architecture',
      description:
        'Maintainable, scalable code your team can extend. Clear structure from day one.'
    },
    {
      title: 'UX focused',
      description:
        'User flows drive every decision — interfaces and backends built toward the same goal.'
    },
    {
      title: 'Full ownership',
      description:
        'From scoping to deploy, I drive work forward with clear communication and reliable delivery.'
    }
  ],
  faq: [
  {
    question: 'What kind of projects do you take on?',
    answer:
      'I work on full-stack web apps, product dashboards, marketing sites, and MVPs. If it needs a thoughtful interface and solid engineering underneath, it is likely a good fit.'
  },
  {
    question: 'How do you usually work with clients?',
    answer:
      'We start with a short discovery call, align on scope and timeline, then move in focused iterations with regular check-ins. You get clear updates, working demos, and room to refine as we go.'
  },
  {
    question: 'Do you work remotely?',
    answer:
      'Yes. I collaborate with teams and clients remotely across time zones using async updates and scheduled syncs when needed.'
  },
  {
    question: 'Are you available for freelance or full-time roles?',
    answer:
      'Both. I am open to contract work, part-time collaborations, and full-time opportunities depending on the project and team.'
  },
  {
    question: 'What is the best way to get started?',
    answer:
      'Send a note with a bit about your project, timeline, and budget range. I will reply with next steps and whether I am a good fit.'
  }
],
  faqIntro: 'Quick answers before we connect. Still curious? Reach out anytime.'
}
