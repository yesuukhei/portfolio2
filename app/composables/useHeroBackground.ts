export function useHeroBackground() {
  const route = useRoute()
  const { profile, isHomePath } = usePortfolio()

  const hasHeroImage = computed(
    () => isHomePath(route.path) && !!profile.value.image
  )

  const heroImage = computed(() => profile.value.image ?? '')

  return { hasHeroImage, heroImage }
}
