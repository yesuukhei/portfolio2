import type {
  AboutContent,
  Experience,
  FaqItem,
  NavLink,
  Profile,
  Project,
  SkillGroup,
  WhyMePoint
} from '~/data/types'

export function usePortfolio() {
  const { t, tm, locale } = useI18n()

  const profile = computed(() => tm('portfolio.profile') as Profile)
  const about = computed(() => tm('portfolio.about') as AboutContent)
  const projects = computed(() => tm('portfolio.projects') as Project[])
  const experience = computed(() => tm('portfolio.experience') as Experience[])
  const skills = computed(() => tm('portfolio.skills') as SkillGroup[])
  const whyMeLead = computed(() => t('portfolio.whyMeLead'))
  const whyMe = computed(() => tm('portfolio.whyMe') as WhyMePoint[])
  const faq = computed(() => tm('portfolio.faq') as FaqItem[])
  const faqIntro = computed(() => t('portfolio.faqIntro'))

  const primaryNavLinks = computed<NavLink[]>(() => [
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.contact'), href: '#contact' }
  ])

  const footerNavLinks = computed<NavLink[]>(() => [
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.whyMe'), href: '#why-me' },
    { label: t('nav.faq'), href: '#faq' }
  ])

  function getProjectBySlug(slug: string) {
    return projects.value.find(p => p.slug === slug)
  }

  function getAdjacentProjects(slug: string) {
    const index = projects.value.findIndex(p => p.slug === slug)
    return {
      prev: index > 0 ? projects.value[index - 1] : null,
      next: index < projects.value.length - 1 ? projects.value[index + 1] : null
    }
  }

  function isHomePath(path: string) {
    return path === '/' || path === '/en'
  }

  return {
    locale,
    t,
    profile,
    about,
    projects,
    experience,
    skills,
    whyMeLead,
    whyMe,
    faq,
    faqIntro,
    primaryNavLinks,
    footerNavLinks,
    getProjectBySlug,
    getAdjacentProjects,
    isHomePath
  }
}
