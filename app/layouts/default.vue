<script setup lang="ts">
import { useHeroBackground } from '~/composables/useHeroBackground'

const { hasHeroImage } = useHeroBackground()
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)]">
    <LayoutAppHeader />
    <main :class="hasHeroImage ? undefined : 'pt-[4.5rem] md:pt-20'">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
