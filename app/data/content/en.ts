export default {
  profile: {
    name: 'Yesuukhei',
    role: 'Full-Stack Developer',
    tagline: 'Turning business ideas into real products.',
    image: '/sky.jpg',
    email: 'yesuukhei1028@gmail.com',
    location: 'Ulaanbaatar, Mongolia',
    available: true,
    yearsExperience: 2,
    profilePicture: '/me.jpg',
    bio: [
      "Hi, I'm Yesuukhei — a Full-Stack developer who enjoys turning business ideas into real products. Over the past two years, I've built web and mobile products across enterprise platforms, AI automation, e-commerce, and learning systems. My work is about understanding an idea expressed in a few sentences and shaping it into a system that works for real users. I value being involved at every stage — from defining requirements and planning architecture to building and improving what ships.",
    ],
    socials: {
      facebook: 'https://www.facebook.com/es.hej.g.158441/',
      phone: '96339198',
    },
  },
  about: {
    focus: ['UX/UI', 'Architecture', 'Automation', 'AI'],
    mindset:
      'To turn ideas into real products, I focus on understanding the problem clearly and building solutions that are simple and easy to extend.',
  },
  projects: [
    {
      slug: 'lera',
      title: 'Lera.mn',
      description: 'An internal enterprise management platform.',
      tags: [
        'Nuxt.js',
        'MongoDb',
        'Express.js',
        'TailwindCSS',
        'Flutter',
        'Firebase',
        'WebSocket',
      ],
      image: '/projects/lera.png',
      liveUrl: 'https://lera.mn',
      caseStudy: {
        role: 'Full-Stack Developer',
        year: '2024',
        yearEnd: 'present',
        duration: '2+ years',
        overview:
          'LERA is a web and mobile platform that centralizes internal company operations, combining communication, a knowledge base, training and development, and many other modules. It is actively used by 20+ organizations today. My role was to develop new modules, improve existing capabilities, and help scale the system.',
        challenge:
          'As the platform kept growing, we needed to integrate new modules with the existing system, define user requirements accurately, and align everything with a complex role-based permission structure.',
        solution:
          'Before development started, I took an active part in requirements sessions, translating business processes into technical solutions. I also used a scalable architecture and reusable components to speed up web and mobile delivery.',
        outcome: [
          'Successfully launched 7+ new modules across web and mobile.',
          'Improved performance and user experience across multiple existing modules.',
          'Understood user requirements more precisely and reduced development rework.',
        ],
        features: [
          'Role-based access control (RBAC)',
          'Employee records and organizational structure',
          'Attendance and time tracking',
          'Internal chat and announcements',
          'Training and exam modules',
          'Event and participation management',
          'Scalable architecture supporting 20+ business modules',
        ],
      },
    },
    {
      slug: 'boom',
      title: 'Boom.mn',
      description:
        'An online shopping system that lets customers order products directly from abroad.',
      tags: ['Express.js', 'TypeScript', 'Nuxt.js', 'Vuetify', 'MongoDb'],
      image: '/projects/boom.png',
      liveUrl: 'https://boom.mn',
      caseStudy: {
        role: 'Backend Developer',
        year: '2026',
        yearEnd: 'present',
        duration: '4 months',
        overview:
          'Boom.mn is a cross-border e-commerce platform that lets users order products from countries such as the United States and South Korea in one place. My role was to build the backoffice system and automate product management and pricing workflows.',
        challenge:
          'The backoffice relied heavily on manual work. Updating product prices, configuring discounts, and editing data were time-consuming and error-prone. The codebase was also bloated and difficult to extend.',
        solution:
          'I automated pricing and discount logic so the system could update itself based on clear rules. I also introduced a scraping-based price sync mechanism, replacing Excel-driven manual work.',
        outcome: [
          'Discounts and price updates became fully automated.',
          'Reduced manual backoffice work and human error.',
          'Significantly shortened the time needed to refresh product data.',
        ],
        features: [
          'Backoffice product management',
          'Automated pricing system',
          'Scraping-based price updates',
          'Discount automation engine',
        ],
      },
    },
    {
      slug: 'xpert',
      title: 'Xpert.mn',
      description: 'A community-based learning platform.',
      tags: ['Nuxt.js', 'MongoDb', 'Express.js', 'TailwindCSS'],
      image: '/projects/xpert.png',
      liveUrl: 'https://xpert.mn',
      caseStudy: {
        role: 'Full-Stack Developer',
        year: '2025',
        duration: '2 weeks',
        overview:
          'Xpert.mn is a community-based learning platform similar to Skool.com, where users can manage courses, posts, announcements, events, and members in one place. My role was to build the platform from scratch and implement the core features independently.',
        challenge:
          'For a community platform, user flows, member permissions, and content structure were tightly connected and complex. We also needed to bring many features together in a clean, cohesive UX.',
        solution:
          'I built on a clear architecture for role-based access and content structure, then developed core modules such as community posts, events, and member management in stages. I focused on keeping the UX simple and easy to follow.',
        outcome: [
          'Delivered the core community features end to end.',
          'Implemented the platform’s foundational architecture independently.',
          'Shipped a working MVP with a structure similar to Skool.',
        ],
      },
    },
    {
      slug: 'umbuild',
      title: 'Umbuild',
      description:
        'A marketing website for a construction management service backed by a CMS admin system.',
      tags: ['Nuxt.js', 'MongoDb', 'Express.js', 'TailwindCSS'],
      image: '/projects/umbuild.png',
      liveUrl: 'https://umbuild.digitalx.mn/',
      caseStudy: {
        role: 'Full-Stack Developer',
        year: '2026',
        duration: '2 weeks',
        overview:
          'Umbuild is a marketing website for a construction management service and project delivery platform with a CMS admin system. The system is designed to simplify content management, information delivery, and internal information flow. My role was to build the platform from scratch and implement the CMS and core web features.',
        challenge:
          'For a marketing site, we needed to meet both high visual quality and real business needs. The CMS also had to be simple and fast to use in day-to-day content management.',
        solution:
          'I designed a frontend architecture based on reusable UI components and implemented the CMS content flow with a straightforward CRUD structure. I integrated file upload and email template systems to make content management more automated.',
        features: [
          'CMS content management system',
          'Email templates (invitation sending system)',
          'File upload and management',
          'Responsive marketing website',
        ],
      },
    },
    {
      slug: 'chatly',
      title: 'chatly.boom.mn',
      description:
        'A system that automates chat and comments for Instagram and Facebook pages.',
      tags: ['Nuxt.js', 'MongoDb', 'Express.js', 'TailwindCSS'],
      image: '/projects/chatly.png',
      liveUrl: 'https://chatly.boom.mn/',
      caseStudy: {
        role: 'Full-Stack Developer',
        year: '2026',
        duration: '2 weeks',
        overview:
          'Chatly is an AI-powered communication system designed to automate chats and comments on Facebook and Instagram pages. My role was to build the platform from scratch and implement chat automation and the AI response system.',
        challenge:
          'Replying manually to chats and comments across multiple pages was time-consuming and repetitive, and it was hard to keep response speed and consistency high. Social platform API integration also came with limits and required careful event-based flow management.',
        solution:
          'I built chat and comment trigger systems using Meta’s event-based messaging flow and added an AI response layer powered by the OpenAI API. I also used a predefined reply system for comment automation to keep responses consistent.',
        outcome: [
          'Significantly reduced repetitive workload in customer support.',
          'Successfully implemented chat and comment response automation.',
          'Deployed as a production system across multiple Facebook and Instagram pages.',
        ],
      },
    },
    {
      slug: 'openbox',
      title: 'openbox.mn',
      description: 'An AI-powered marketplace for used goods.',
      tags: ['Nuxt.js', 'MongoDb', 'Express.js', 'TailwindCSS', 'OpenAI API'],
      image: '/projects/openbox.png',
      liveUrl: 'https://master.d27xbd5qcy9gfr.amplifyapp.com/shop',
      caseStudy: {
        role: 'Full-Stack Developer',
        year: '2026',
        duration: '2 weeks',
        overview:
          'This system is an e-commerce platform for used goods that can be managed through an AI-based chat interface. Users can search for products, get information, and complete purchases through chat. My role was to build the backend and AI integration.',
        challenge:
          'We needed to automatically import Excel-based product data into the system, align pricing logic with Mongolian currency and profit/cost calculations, process search and categorization intelligently, and connect the AI chat interface with the e-commerce flow. The project was paused due to changes in the supplier’s business operations.',
        solution:
          'I built an Excel import pipeline to convert product data into a structured database. I developed a pricing engine aligned with cost, profit, and currency conversion. Using the OpenAI API, I integrated chat-based product search and recommendations into the e-commerce flow.',
        outcome: [
          'Built a system to automatically import Excel-based product data.',
          'Implemented an automated pricing engine for profit and cost calculations.',
          'Successfully developed an AI chat-based product search MVP.',
          'The project was temporarily paused due to changes in the supplier’s business operations.',
        ],
      },
    },
    {
      slug: 'examy',
      title: 'Examy.mn',
      description: 'A quiz-based online exam system.',
      tags: ['Nuxt.js', 'MongoDb', 'Express.js', 'TailwindCSS'],
      image: '/projects/examy.png',
      liveUrl: 'https://examy.mn',
      caseStudy: {
        role: 'Full-Stack Developer',
        year: '2025',
        duration: '2 weeks',
        overview:
          'Examy.mn is an online exam system built around multiple quiz types, where users can take tests and view results in real time. My role was to build the system from scratch and implement the exam logic and core features.',
        challenge:
          'During online exams, we needed to monitor actions such as tab switching and loss of focus, and organize multi-quiz exam flows without errors. Scoring logic and exam state management also required a precise structure.',
        solution:
          'I built tab-switching detection and exam state management so exam progress could be monitored continuously. I implemented each quiz’s scoring and exam flow in a modular structure and calculated results in real time.',
        outcome: [
          'Successfully implemented an exam system with multiple quiz types.',
          'Delivered a stable exam flow and scoring system.',
          'Made the user exam experience more controlled and structured.',
        ],
      },
    },
  ],
  experience: [
    {
      company: 'Lera',
      role: 'Full-Stack Developer',
      logo: '/lera.ico',
      link: 'https://lera.mn',
      period: '2024 — Present',
      highlights: [
        'Contributed to web and mobile platform development.',
        'Built and improved an internal enterprise system with 20+ modules.',
        'Developed and launched 10+ new modules into production.',
        'Translated user requirements into technical solutions.',
        'Delivered development aligned with fast-changing requirements.',
      ],
    },
  ],
  education: [
    {
      institution:
        'MUST, School of Information and Communication Technology',
      logo: '/logos/shutis.png',
      link: 'https://www.sict.edu.mn/mn',
      degree: "Bachelor's",
      field: 'Software Engineering',
      year: '2022-2026',
      highlights: [
        'Core and advanced software engineering coursework.',
        'Project-based and hands-on development work.',
      ],
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: [
        'Nuxt.js',
        'Flutter',
        'Vue.js',
        'TypeScript',
        'Tailwind CSS',
        'React',
      ],
    },
    {
      category: 'Backend',
      items: ['Express.js', 'Node.js', 'MongoDB', 'REST API', 'Django'],
    },
    {
      category: 'Tools',
      items: ['Cursor', 'Git', 'AWS', 'Firebase', 'Postman'],
    },
    {
      category: 'AI',
      items: ['OpenAI API', 'Prompt Engineering', 'AI Automation'],
    },
  ],
  whyMeLead: 'The right solution, clean implementation, and real results.',
  whyMe: [
    {
      title: 'Fast delivery',
      description:
        'I ship the most important capabilities early and keep improving based on user feedback.',
    },
    {
      title: 'Clean architecture',
      description:
        'I build systems that are easy to extend, maintain, and hand off to a team.',
    },
    {
      title: 'User-centered thinking',
      description:
        'I align UX, business requirements, and technical decisions in one direction.',
    },
    {
      title: 'Full ownership',
      description:
        'I take responsibility from requirements definition through production launch.',
    },
  ],
  contact: {
    intro:
      'Always open to new products, collaborations, and interesting projects.',
  },
}
