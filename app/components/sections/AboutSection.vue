<script setup lang="ts">
const { profile, about, t } = usePortfolio();
const { setRevealRef } = useScrollReveal();
const imageFailed = ref(false);
</script>

<template>
  <section id="about" class="section-padding">
    <div class="container">
      <div :ref="setRevealRef" class="reveal">
        <UiSectionHeading
          :label="t('sections.about.label')"
          :title="t('sections.about.title')"
        />

        <div class="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-12">
          <div class="flex flex-col items-start">
            <div
              class="flex size-36 items-center justify-center overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] md:size-48"
            >
              <img
                v-if="profile.profilePicture && !imageFailed"
                :src="profile.profilePicture"
                :alt="profile.name"
                class="size-full object-cover"
                loading="lazy"
                @error="imageFailed = true"
              />
              <SolarUser
                v-else
                class="size-16 text-[var(--color-text-muted)] opacity-30 md:size-20"
              />
            </div>
            <div class="mt-6 space-y-3">
              <p class="type-body-sm flex items-center gap-2 font-bold">
                <SolarMapPoint
                  class="size-4 shrink-0 text-[var(--color-accent)]"
                />
                {{ profile.location }}
              </p>
              <p class="type-body-sm flex items-center gap-2 font-bold">
                <SolarSuitcase
                  class="size-4 shrink-0 text-[var(--color-accent)]"
                />
                {{ t("ui.yearsExperience", { n: profile.yearsExperience }) }}
              </p>
            </div>
          </div>

          <div class="space-y-6 md:space-y-8">
            <div class="space-y-4 md:space-y-5">
              <p
                v-for="(paragraph, i) in profile.bio"
                :key="i"
                class="type-body"
              >
                {{ paragraph }}
              </p>
            </div>

            <div>
              <p class="type-label mb-3">
                {{ t("sections.about.focusLabel") }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="item in about.focus"
                  :key="item"
                  class="tag font-bold"
                >
                  {{ item }}
                </span>
              </div>
            </div>

            <div
              class="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:p-6"
            >
              <p class="type-label mb-3">
                {{ t("sections.about.mindsetLabel") }}
              </p>
              <p class="type-body-lg">
                {{ about.mindset }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
