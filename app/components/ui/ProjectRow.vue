<script setup lang="ts">
import type { Project } from "~/data/types";

const props = defineProps<{
  project: Project;
  index: number;
}>();

const { t, formatProjectTimeline } = usePortfolio();
const localePath = useLocalePath();
const imageFailed = ref(false);
const isReversed = computed(() => props.index % 2 === 1);
</script>

<template>
  <article
    class="grid grid-cols-1 items-center gap-[var(--space-6)] md:grid-cols-2 md:gap-[var(--space-8)]"
  >
    <NuxtLink
      :to="localePath(`/projects/${project.slug}`)"
      class="group relative block rounded-3xl bg-[var(--color-surface)]"
      :class="isReversed ? 'md:col-start-2' : 'md:col-start-1'"
    >
      <img
        v-if="project.image && !imageFailed"
        :src="project.image"
        :alt="project.title"
        class="size-full object-contain"
        loading="lazy"
        @error="imageFailed = true"
      />
      <div
        v-else
        class="flex size-full items-center justify-center bg-[var(--color-bg)]"
      >
        <SolarGallery
          class="size-14 text-[var(--color-text-muted)] opacity-30 md:size-16"
        />
      </div>
      <div
        class="absolute inset-0 bg-[var(--color-primary)]/0 transition-colors duration-300 group-hover:bg-[var(--color-primary)]/5"
      />
    </NuxtLink>

    <div
      class="flex flex-col"
      :class="isReversed ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2'"
    >
      <p class="type-label">
        {{ formatProjectTimeline(project.caseStudy) }} / {{ project.caseStudy.role }}
      </p>

      <NuxtLink :to="localePath(`/projects/${project.slug}`)">
        <h3
          class="type-card-title mt-3 transition-colors hover:text-[var(--color-accent)] md:mt-4"
        >
          {{ project.title }}
        </h3>
      </NuxtLink>

      <p class="type-body mt-4">
        {{ project.description }}
      </p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="tag font-bold">
          {{ tag }}
        </span>
      </div>

      <div class="mt-6 flex flex-wrap items-center gap-5 justify-end">
        <a
          v-if="project.liveUrl !== '#'"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="type-body-sm font-bold transition-colors hover:text-[var(--color-accent)]"
        >
          {{ t("ui.live") }}
        </a>
        <NuxtLink
          :to="localePath(`/projects/${project.slug}`)"
          class="link-accent inline-flex items-center gap-1.5"
        >
          {{ t("ui.caseStudy") }}
          <SolarArrowRight class="size-4" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
