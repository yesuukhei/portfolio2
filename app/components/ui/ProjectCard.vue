<script setup lang="ts">
import type { Project } from '~/data/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="card group flex flex-col overflow-hidden">
    <NuxtLink
      :to="`/projects/${project.slug}`"
      class="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg)]"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <SolarGallery class="size-12 text-[var(--color-text-muted)] opacity-30" />
      </div>
      <div class="absolute inset-0 bg-[var(--color-primary)]/0 transition-colors duration-300 group-hover:bg-[var(--color-primary)]/10" />
    </NuxtLink>

    <div class="flex flex-1 flex-col p-6">
      <NuxtLink :to="`/projects/${project.slug}`">
        <h3 class="type-card-title transition-colors group-hover:text-[var(--color-accent)]">
          {{ project.title }}
        </h3>
      </NuxtLink>
      <p class="type-body-sm mt-3 flex-1">
        {{ project.description }}
      </p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>

      <div class="mt-5 flex items-center gap-5">
        <NuxtLink
          :to="`/projects/${project.slug}`"
          class="link-accent inline-flex items-center gap-1.5"
        >
          <SolarArrowRight class="size-4" />
          Case study
        </NuxtLink>
        <a
          v-if="project.liveUrl !== '#'"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="type-body-sm font-bold transition-colors hover:text-[var(--color-accent)]"
          @click.stop
        >
          Live
        </a>
        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="type-body-sm font-bold transition-colors hover:text-[var(--color-accent)]"
          @click.stop
        >
          Code
        </a>
      </div>
    </div>
  </article>
</template>
