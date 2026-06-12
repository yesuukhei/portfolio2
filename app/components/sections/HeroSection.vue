<script setup lang="ts">
const { profile, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
const { navigateToSection } = useSectionNavigation()

const nameWords = computed(() => profile.value.name.split(' '))
</script>

<template>
  <section
    id="hero"
    class="section-padding flex min-h-[calc(100dvh-5rem)] items-center md:min-h-[calc(100vh-6rem)]"
  >
    <div class="container">
      <div
        :ref="setRevealRef"
        class="reveal mx-auto max-w-4xl text-center"
      >
        <p class="role-badge mb-6 md:mb-8">
          {{ profile.role }}
        </p>

        <h1 class="type-display">
          <span
            v-for="(word, i) in nameWords"
            :key="word"
            class="block"
            :class="
              i === nameWords.length - 1 && nameWords.length > 1
                ? 'text-[var(--color-accent)]'
                : ''
            "
          >
            {{ word }}
          </span>
        </h1>

        <p class="type-body-lg mx-auto mt-6 max-w-2xl md:mt-10">
          {{ profile.tagline }}
        </p>

        <div class="btn-row mt-8 items-center justify-center md:mt-10">
          <button class="btn-primary" @click="navigateToSection('#projects')">
            {{ t('ui.viewWork') }}
            <SolarArrowDown class="size-4" />
          </button>
          <button class="btn-secondary" @click="navigateToSection('#contact')">
            {{ t('ui.getInTouch') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
