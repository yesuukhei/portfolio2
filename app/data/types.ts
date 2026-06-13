export interface Socials {
  github: string
  linkedin: string
  twitter: string
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
  year: string
  features: string[]
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
  highlights: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface WhyMePoint {
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface NavLink {
  label: string
  href: string
}
