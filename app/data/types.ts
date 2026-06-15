export interface Socials {
  facebook: string
  phone: string
}

export interface AboutContent {
  focus: string[]
  mindset: string
}

export interface Profile {
  name: string
  role: string
  tagline: string
  image?: string
  email: string
  location: string
  available: boolean
  yearsExperience: number
  bio: string[]
  socials: Socials
}

export interface ProjectCaseStudy {
  overview: string
  challenge: string
  solution: string
  outcome: string[]
  role: string
  year?: string
  yearEnd?: 'present' | string
  duration?: string
  features?: string[]
}

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl: string
  githubUrl: string
  caseStudy: ProjectCaseStudy
}

export interface Experience {
  company: string
  role: string
  period: string
  logo?: string
  link?: string
  highlights: string[]
}

export interface Education {
  institution: string
  degree: string
  field: string
  year: string
  link?: string
  logo?: string
  highlights?: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface WhyMePoint {
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  brand: 'facebook' | 'phone'
  url: string
  external: boolean
}
