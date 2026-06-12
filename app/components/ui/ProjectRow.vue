<script setup lang="ts">
import type { Project } from '~/data/types'

const props = defineProps<{
  project: Project
  index: number
}>()

const { t } = usePortfolio()
const localePath = useLocalePath()
const imageFailed = ref(false)
const isReversed = computed(() => props.index % 2 === 1)
</script>

<template>
  <article
    class="zigzag-row"
    :class="{ 'zigzag-row--reverse': isReversed }"
  >
    <NuxtLink
      :to="localePath(`/projects/${project.slug}`)"
      class="zigzag-visual group relative"
    >
      <img
        v-if="project.image && !imageFailed"
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        @error="imageFailed = true"
      >
      <div
        v-else
        class="zigzag-visual-placeholder"
      >
        <SolarGallery class="size-14 text-[var(--color-text-muted)] opacity-30 md:size-16" />
      </div>
      <div class="absolute inset-0 bg-[var(--color-primary)]/0 transition-colors duration-300 group-hover:bg-[var(--color-primary)]/10" />
    </NuxtLink>

    <div class="zigzag-content">
      <p class="type-label">
        {{ project.caseStudy.year }} / {{ project.caseStudy.role }}
      </p>

      <NuxtLink :to="localePath(`/projects/${project.slug}`)">
        <h3 class="type-card-title mt-3 transition-colors hover:text-[var(--color-accent)] md:mt-4">
          {{ project.title }}
        </h3>
      </NuxtLink>

      <p class="type-body mt-4">
        {{ project.description }}
      </p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="tag font-bold"
        >
          {{ tag }}
        </span>
      </div>

      <div class="mt-6 flex flex-wrap items-center gap-5">
        <NuxtLink
          :to="localePath(`/projects/${project.slug}`)"
          class="link-accent inline-flex items-center gap-1.5"
        >
          <SolarArrowRight class="size-4" />
          {{ t('ui.caseStudy') }}
        </NuxtLink>
        <a
          v-if="project.liveUrl !== '#'"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="type-body-sm font-bold transition-colors hover:text-[var(--color-accent)]"
        >
          {{ t('ui.live') }}
        </a>
        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="type-body-sm font-bold transition-colors hover:text-[var(--color-accent)]"
        >
          {{ t('ui.code') }}
        </a>
      </div>
    </div>
  </article>
</template>
