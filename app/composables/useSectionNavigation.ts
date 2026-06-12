export function useSectionNavigation() {
  const route = useRoute()
  const localePath = useLocalePath()
  const { isHomePath } = usePortfolio()
  const { syncSectionHash } = useSectionHash()

  const isHome = computed(() => isHomePath(route.path))

  function navigateToSection(href: string) {
    const sectionId = href.replace('#', '')

    if (isHome.value) {
      syncSectionHash(sectionId)
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    navigateTo(localePath({ path: '/', hash: href }))
  }

  function goHome() {
    if (isHome.value) {
      syncSectionHash('')
      document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigateTo(localePath('/'))
    }
  }

  return { isHome, navigateToSection, goHome }
}
