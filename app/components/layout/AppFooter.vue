<script setup lang="ts">
const { profile, footerNavLinks, t } = usePortfolio()
const { navigateToSection } = useSectionNavigation()

const year = new Date().getFullYear()

const socials = computed(() => [
  { name: 'GitHub', brand: 'github' as const, url: profile.value.socials.github },
  { name: 'LinkedIn', brand: 'linkedin' as const, url: profile.value.socials.linkedin },
  { name: 'X', brand: 'x' as const, url: profile.value.socials.twitter }
])
</script>

<template>
  <footer class="footer-shell">
    <div class="container">
      <nav
        v-if="footerNavLinks.length"
        class="footer-nav"
        :aria-label="t('ui.footerNav')"
      >
        <button
          v-for="link in footerNavLinks"
          :key="link.href"
          type="button"
          class="footer-link"
          @click="navigateToSection(link.href)"
        >
          {{ link.label }}
        </button>
      </nav>

      <div class="footer-bottom">
        <p class="type-body-sm font-medium">
          &copy; {{ year }} {{ profile.name }}
        </p>
        <div class="footer-socials">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            class="footer-social-link"
          >
            <UiSocialIcon :name="social.brand" class="size-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
