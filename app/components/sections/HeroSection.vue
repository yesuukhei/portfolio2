<script setup lang="ts">
import { useHeroBackground } from "~/composables/useHeroBackground";

const { profile, t } = usePortfolio();
const { setRevealRef } = useScrollReveal();
const { navigateToSection } = useSectionNavigation();
const { hasHeroImage, heroImage } = useHeroBackground();

useHead(() =>
  hasHeroImage.value
    ? {
        link: [{ rel: "preload", as: "image", href: heroImage.value }],
      }
    : {},
);
</script>

<template>
  <section
    id="hero"
    class="section-padding relative isolate flex items-center overflow-hidden"
    :class="
      hasHeroImage
        ? 'min-h-dvh pt-[calc(4.5rem+var(--section-gap))] md:pt-[calc(5rem+var(--section-gap))]'
        : 'min-h-[calc(100dvh-4.5rem)] md:min-h-[calc(100dvh-5rem)]'
    "
  >
    <img
      v-if="hasHeroImage"
      :src="heroImage"
      alt=""
      aria-hidden="true"
      fetchpriority="high"
      decoding="async"
      class="pointer-events-none absolute inset-0 -z-20 size-full object-cover object-center transform-gpu"
    />

    <div
      v-if="hasHeroImage"
      class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[color-mix(in_srgb,var(--color-bg)_30%,transparent)] to-[color-mix(in_srgb,var(--color-bg)_94%,transparent)]"
      aria-hidden="true"
    />

    <div class="container relative z-[1]">
      <div :ref="setRevealRef" class="reveal mx-auto max-w-4xl text-center">
        <p class="text-sm font-medium text-[var(--color-text-muted)]">
          {{ profile.role }}
        </p>

        <h1
          class="mt-6 text-[clamp(3rem,10vw,6.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-text)]"
        >
          {{ profile.name }}
        </h1>

        <p class="mt-6 text-lg leading-relaxed text-[var(--color-text-body)]">
          {{ profile.tagline }}
        </p>

        <div class="btn-row mt-8 items-center justify-center md:mt-10">
          <button class="btn-primary" @click="navigateToSection('#projects')">
            {{ t("ui.viewWork") }}
          </button>
          <button class="btn-secondary" @click="navigateToSection('#contact')">
            {{ t("ui.getInTouch") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
