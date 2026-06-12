<script setup lang="ts">
const { profile, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
</script>

<template>
  <section
    id="about"
    class="section-padding"
  >
    <div class="container">
      <div
        :ref="setRevealRef"
        class="reveal"
      >
        <UiSectionHeading
          :label="t('sections.about.label')"
          :title="t('sections.about.title')"
        />

        <div class="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-12">
          <div class="flex flex-col items-start">
            <div class="flex size-36 items-center justify-center rounded-3xl bg-[var(--color-surface)] md:size-48">
              <SolarUser class="size-16 text-[var(--color-text-muted)] opacity-30 md:size-20" />
            </div>
            <div class="mt-6 space-y-3">
              <p class="type-body-sm flex items-center gap-2 font-bold">
                <SolarMapPoint class="size-4 shrink-0 text-[var(--color-accent)]" />
                {{ profile.location }}
              </p>
              <p class="type-body-sm flex items-center gap-2 font-bold">
                <SolarSuitcase class="size-4 shrink-0 text-[var(--color-accent)]" />
                {{ t('ui.yearsExperience', { n: profile.yearsExperience }) }}
              </p>
            </div>
          </div>

          <div class="space-y-4 md:space-y-5">
            <p
              v-for="(paragraph, i) in profile.bio"
              :key="i"
              class="type-body"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
