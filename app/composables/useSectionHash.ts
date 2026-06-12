let lastSyncedHash: string | null = null

export function useSectionHash() {
  const route = useRoute()
  const { isHomePath } = usePortfolio()

  function syncSectionHash(sectionId: string) {
    if (!import.meta.client || !isHomePath(route.path)) return

    const hash = sectionId ? `#${sectionId}` : ''
    if (hash === lastSyncedHash) return

    lastSyncedHash = hash
    history.replaceState(history.state, '', `${window.location.pathname}${hash}`)
  }

  function resetHashCache() {
    lastSyncedHash = null
  }

  return { syncSectionHash, resetHashCache }
}
