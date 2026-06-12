<script setup lang="ts">
const { profile, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()

const socials = computed(() => [
  { name: 'GitHub', brand: 'github' as const, url: profile.value.socials.github },
  { name: 'LinkedIn', brand: 'linkedin' as const, url: profile.value.socials.linkedin },
  { name: 'X', brand: 'x' as const, url: profile.value.socials.twitter }
])
</script>

<template>
  <section
    id="contact"
    class="section-padding"
  >
    <div class="container">
      <div
        :ref="setRevealRef"
        class="reveal"
      >
        <UiSectionHeading
          :label="t('sections.contact.label')"
          :title="t('sections.contact.title')"
        />

        <div>
          <p class="type-body-lg">
            {{ t('contact.intro') }}
          </p>

          <a
            :href="`mailto:${profile.email}`"
            class="type-email mt-6 inline-flex items-start gap-3 transition-colors hover:text-[var(--color-accent)] md:mt-8 md:items-center"
          >
            <SolarLetter class="mt-1 size-6 shrink-0 text-[var(--color-accent)] md:mt-0 md:size-8" />
            {{ profile.email }}
          </a>

          <div class="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex size-12 items-center justify-center rounded-3xl bg-[var(--color-surface)] transition-colors hover:text-[var(--color-accent)] md:size-14"
              :aria-label="social.name"
            >
              <UiSocialIcon :name="social.brand" class="size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
