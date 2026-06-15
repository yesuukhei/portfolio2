<script setup lang="ts">
const { profile, socialLinks, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
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
            class="mt-6 inline-flex items-start gap-3 text-[clamp(1.25rem,5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] break-all transition-colors hover:text-[var(--color-primary)] md:mt-8 md:items-center md:break-normal md:tracking-[-0.04em]"
          >
            <SolarLetter class="mt-1 size-6 shrink-0 text-[var(--color-primary)] md:mt-0 md:size-8" />
            {{ profile.email }}
          </a>

          <div class="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :target="social.external ? '_blank' : undefined"
              :rel="social.external ? 'noopener noreferrer' : undefined"
              class="flex size-12 items-center justify-center rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:text-[var(--color-primary)] md:size-14"
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
