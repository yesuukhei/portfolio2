import type {
  AboutContent,
  Education,
  Experience,
  NavLink,
  Profile,
  Project,
  ProjectCaseStudy,
  SocialLink,
  SkillGroup,
  WhyMePoint
} from '~/data/types'

export function usePortfolio() {
  const { t, tm, locale } = useI18n()

  const profile = computed(() => tm('portfolio.profile') as Profile)
  const about = computed(() => tm('portfolio.about') as AboutContent)
  const projects = computed(() => tm('portfolio.projects') as Project[])
  const experience = computed(() => tm('portfolio.experience') as Experience[])
  const education = computed(() => tm('portfolio.education') as Education[])
  const skills = computed(() => tm('portfolio.skills') as SkillGroup[])
  const whyMeLead = computed(() => t('portfolio.whyMeLead'))
  const whyMe = computed(() => tm('portfolio.whyMe') as WhyMePoint[])

  const socialLinks = computed<SocialLink[]>(() => [
    {
      name: 'Facebook',
      brand: 'facebook',
      url: profile.value.socials.facebook,
      external: true
    },
    {
      name: 'Phone',
      brand: 'phone',
      url: `tel:+976${profile.value.socials.phone}`,
      external: false
    }
  ])

  const primaryNavLinks = computed<NavLink[]>(() => [
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.contact'), href: '#contact' }
  ])

  const footerNavLinks = computed<NavLink[]>(() => [
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.education'), href: '#education' },
    { label: t('nav.whyMe'), href: '#why-me' }
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

  function formatProjectTimeline(caseStudy: ProjectCaseStudy) {
    let yearPart = ''

    if (caseStudy.year) {
      if (caseStudy.yearEnd) {
        const end =
          caseStudy.yearEnd === 'present'
            ? t('ui.presentNow')
            : caseStudy.yearEnd
        yearPart = `${caseStudy.year} – ${end}`
      } else {
        yearPart = caseStudy.year
      }
    }

    if (yearPart && caseStudy.duration) {
      return `${yearPart} · ${caseStudy.duration}`
    }

    return caseStudy.duration || yearPart
  }

  return {
    locale,
    t,
    profile,
    about,
    projects,
    experience,
    education,
    skills,
    whyMeLead,
    whyMe,
    socialLinks,
    primaryNavLinks,
    footerNavLinks,
    getProjectBySlug,
    getAdjacentProjects,
    isHomePath,
    formatProjectTimeline
  }
}
