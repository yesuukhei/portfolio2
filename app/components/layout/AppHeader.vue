<script setup lang="ts">
import { useHeroBackground } from '~/composables/useHeroBackground'

const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()
const { profile, primaryNavLinks, t } = usePortfolio()
const { hasHeroImage } = useHeroBackground()
const { activeSection } = useActiveSection()
const { navigateToSection, goHome, isHome } = useSectionNavigation()
const mobileOpen = ref(false)

function onNavigate(href: string) {
  mobileOpen.value = false
  navigateToSection(href)
}

function onGoHome() {
  mobileOpen.value = false
  goHome()
}

function isActive(href: string) {
  return isHome.value && activeSection.value === href.replace('#', '')
}

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="header-shell"
    :class="{ 'header-shell--over-hero': hasHeroImage }"
  >
    <div class="header-bar">
      <button
        type="button"
        class="header-logo"
        @click="onGoHome"
      >
        {{ profile.name.split(' ')[0] }}<span class="text-[var(--color-primary)]">.</span>
      </button>

      <nav class="header-nav" :aria-label="t('nav.about')">
        <button
          v-for="link in primaryNavLinks"
          :key="link.href"
          type="button"
          class="nav-link"
          :class="{ 'is-active': isActive(link.href) }"
          @click="onNavigate(link.href)"
        >
          {{ link.label }}
        </button>
      </nav>

      <div class="header-actions">
        <div class="lang-switch" role="group" :aria-label="locale">
          <NuxtLink
            v-for="item in locales"
            :key="item.code"
            :to="switchLocalePath(item.code)"
            class="lang-link"
            :class="{ 'is-active': locale === item.code }"
          >
            {{ item.code === 'mn' ? 'MN' : 'EN' }}
          </NuxtLink>
        </div>

        <button
          type="button"
          class="header-cta"
          @click="onNavigate('#contact')"
        >
          {{ t('ui.letsTalk') }}
          <SolarArrowRight class="size-4" />
        </button>
      </div>

      <button
        type="button"
        class="header-menu-btn"
        :aria-label="mobileOpen ? t('ui.closeMenu') : t('ui.openMenu')"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = !mobileOpen"
      >
        <SolarCloseCircle v-if="mobileOpen" class="size-5" />
        <SolarHamburgerMenu v-else class="size-5" />
      </button>
    </div>
  </header>

  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        class="mobile-menu"
        @click.self="mobileOpen = false"
      >
        <button
          type="button"
          class="mobile-menu-close"
          :aria-label="t('ui.closeMenu')"
          @click="mobileOpen = false"
        >
          <SolarCloseCircle class="size-5" />
        </button>

        <div class="mobile-lang-switch">
          <NuxtLink
            v-for="item in locales"
            :key="item.code"
            :to="switchLocalePath(item.code)"
            class="lang-link"
            :class="{ 'is-active': locale === item.code }"
            @click="mobileOpen = false"
          >
            {{ item.code === 'mn' ? 'Монгол' : 'English' }}
          </NuxtLink>
        </div>

        <nav :aria-label="t('nav.contact')">
          <button
            v-for="link in primaryNavLinks"
            :key="link.href"
            type="button"
            class="mobile-nav-link block w-full"
            :class="{ 'is-active': isActive(link.href) }"
            @click="onNavigate(link.href)"
          >
            {{ link.label }}
          </button>
        </nav>

        <button
          type="button"
          class="btn-primary mobile-menu-cta"
          @click="onNavigate('#contact')"
        >
          {{ t('ui.letsTalk') }}
          <SolarArrowRight class="size-4" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>
