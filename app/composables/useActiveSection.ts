import { homeSectionIds } from '~/data/sections'

export function useActiveSection() {
  const route = useRoute()
  const { primaryNavLinks, isHomePath } = usePortfolio()
  const { syncSectionHash, resetHashCache } = useSectionHash()
  const activeSection = ref('')
  const navSectionIds = computed(() =>
    primaryNavLinks.value.map(link => link.href.replace('#', ''))
  )

  function resolveActiveSection() {
    if (!isHomePath(route.path)) {
      activeSection.value = ''
      return
    }

    const marker = window.innerHeight * 0.32
    let navSection = ''
    let hashSection = ''

    for (const id of homeSectionIds) {
      const el = document.getElementById(id)
      if (!el) continue

      if (el.getBoundingClientRect().top <= marker) {
        hashSection = id
        if (navSectionIds.value.includes(id)) {
          navSection = id
        }
      }
    }

    activeSection.value = navSection
    syncSectionHash(hashSection)
  }

  let raf = 0

  function onScroll() {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(resolveActiveSection)
  }

  function bind() {
    resolveActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  }

  function unbind() {
    cancelAnimationFrame(raf)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  }

  onMounted(() => {
    const waitForSections = (attempts = 0) => {
      const found = homeSectionIds.some(id => document.getElementById(id))
      if (found || attempts > 30) {
        bind()
        return
      }
      requestAnimationFrame(() => waitForSections(attempts + 1))
    }
    waitForSections()
  })

  watch(() => route.path, () => {
    resetHashCache()
    nextTick(() => resolveActiveSection())
  })

  onUnmounted(unbind)

  return { activeSection }
}
