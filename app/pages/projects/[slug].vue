<script setup lang="ts">
const route = useRoute();
const localePath = useLocalePath();
const slug = route.params.slug as string;
const {
  getProjectBySlug,
  getAdjacentProjects,
  profile,
  t,
  formatProjectTimeline,
} = usePortfolio();

const project = getProjectBySlug(slug);
const imageFailed = ref(false);

if (!project) {
  throw createError({ statusCode: 404, statusMessage: t("ui.notFound") });
}

const { prev, next } = getAdjacentProjects(slug);

useSeoMeta({
  title: () => `${project.title} — ${profile.value.name}`,
  description: () => project.description,
  ogTitle: () => `${project.title} — ${profile.value.name}`,
  ogDescription: () => project.description,
  ogType: "article",
  ogImage: project.image,
  twitterCard: "summary_large_image",
  twitterTitle: () => `${project.title} — ${profile.value.name}`,
  twitterDescription: () => project.description,
});
</script>

<template>
  <article>
    <div class="border-b border-[var(--color-border)]">
      <div class="container py-4">
        <NuxtLink
          :to="localePath({ path: '/', hash: '#projects' })"
          class="link-accent inline-flex items-center gap-2"
        >
          <SolarAltArrowLeft class="size-4" />
          {{ t("caseStudy.backToProjects") }}
        </NuxtLink>
      </div>
    </div>

    <header class="section-padding">
      <div class="container max-w-3xl">
        <p class="type-label">
          {{ formatProjectTimeline(project.caseStudy) }} ·
          {{ project.caseStudy.role }}
        </p>

        <h1 class="type-section mt-4">
          {{ project.title }}
        </h1>

        <p class="type-body-lg mt-6">
          {{ project.description }}
        </p>

        <div class="mt-6 flex flex-wrap gap-2">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>

        <div class="btn-row mt-8">
          <a
            v-if="project.liveUrl !== '#'"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            <SolarSquareArrowRightUp class="size-4" />
            {{ t("caseStudy.liveDemo") }}
          </a>
        </div>
      </div>
    </header>

    <div class="container pb-[var(--space-7)] md:pb-[var(--space-8)]">
      <div>
        <img
          v-if="project.image && !imageFailed"
          :src="project.image"
          :alt="project.title"
          class="size-full object-contain"
          loading="eager"
          @error="imageFailed = true"
        />
        <div
          v-else
          class="flex size-full items-center justify-center bg-[var(--color-surface)]"
        >
          <SolarGallery
            class="size-16 text-[var(--color-text-muted)] opacity-30"
          />
        </div>
      </div>
    </div>

    <div class="section-padding bg-[var(--color-surface)]">
      <div class="container max-w-3xl space-y-12 md:space-y-16">
        <section>
          <h2 class="type-label mb-4">
            {{ t("caseStudy.overview") }}
          </h2>
          <p class="type-body">
            <UiTextWithLinks :text="project.caseStudy.overview" />
          </p>
        </section>

        <section>
          <h2 class="type-label mb-4">
            {{ t("caseStudy.challenge") }}
          </h2>
          <p class="type-body">
            <UiTextWithLinks :text="project.caseStudy.challenge" />
          </p>
        </section>

        <section>
          <h2 class="type-label mb-4">
            {{ t("caseStudy.solution") }}
          </h2>
          <p class="type-body">
            <UiTextWithLinks :text="project.caseStudy.solution" />
          </p>
        </section>

        <section v-if="project.caseStudy.features">
          <h2 class="type-label mb-4">
            {{ t("caseStudy.features") }}
          </h2>
          <ul class="mt-4 space-y-3">
            <li
              v-for="feature in project.caseStudy.features"
              :key="feature"
              class="type-body flex gap-3"
            >
              <span
                class="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"
              />
              {{ feature }}
            </li>
          </ul>
        </section>

        <section v-if="project.caseStudy.outcome">
          <h2 class="type-label mb-4">
            {{ t("caseStudy.outcome") }}
          </h2>
          <ul class="mt-4 space-y-3">
            <li
              v-for="item in project.caseStudy.outcome"
              :key="item"
              class="type-body rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)] p-5"
            >
              <UiTextWithLinks :text="item" />
            </li>
          </ul>
        </section>
      </div>
    </div>

    <nav class="border-t border-[var(--color-border)] py-12 md:py-16">
      <div class="container grid gap-4 md:grid-cols-2 md:gap-6">
        <NuxtLink
          v-if="prev"
          :to="localePath(`/projects/${prev.slug}`)"
          class="card group block p-5 md:p-6"
        >
          <span class="type-label">
            {{ t("caseStudy.previous") }}
          </span>
          <p
            class="type-card-title mt-2 transition-colors group-hover:text-[var(--color-primary)]"
          >
            {{ prev.title }}
          </p>
        </NuxtLink>
        <div v-else class="hidden md:block" />

        <NuxtLink
          v-if="next"
          :to="localePath(`/projects/${next.slug}`)"
          class="card group block p-5 md:col-start-2 md:p-6 md:text-right"
        >
          <span class="type-label">
            {{ t("caseStudy.next") }}
          </span>
          <p
            class="type-card-title mt-2 transition-colors group-hover:text-[var(--color-primary)]"
          >
            {{ next.title }}
          </p>
        </NuxtLink>
      </div>
    </nav>
  </article>
</template>
