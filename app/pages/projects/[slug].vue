<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const slug = route.params.slug as string
const { getProjectBySlug, getAdjacentProjects, profile, t } = usePortfolio()

const project = getProjectBySlug(slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: t('ui.notFound') })
}

const { prev, next } = getAdjacentProjects(slug)

useSeoMeta({
  title: () => `${project.title} — ${profile.value.name}`,
  description: () => project.description,
  ogTitle: () => `${project.title} — ${profile.value.name}`,
  ogDescription: () => project.description,
  ogType: 'article',
  ogImage: project.image,
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${project.title} — ${profile.value.name}`,
  twitterDescription: () => project.description
})
</script>

<template>
  <article>
    <div class="bg-[var(--color-surface)]">
      <div class="container py-6">
        <NuxtLink
          :to="localePath({ path: '/', hash: '#projects' })"
          class="link-accent inline-flex items-center gap-2"
        >
          <SolarAltArrowLeft class="size-4" />
          {{ t('caseStudy.backToProjects') }}
        </NuxtLink>
      </div>
    </div>

    <header class="section-padding !pb-12">
      <div class="container">
        <div class="flex flex-wrap gap-3 type-body-sm font-bold uppercase tracking-wider">
          <span>{{ project.caseStudy.year }}</span>
          <span class="text-[var(--color-text-muted)]">/</span>
          <span class="text-[var(--color-accent)]">{{ project.caseStudy.role }}</span>
        </div>

        <h1 class="type-section mt-6">
          {{ project.title }}
        </h1>

        <p class="type-body-lg mt-6">
          {{ project.description }}
        </p>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="tag"
          >
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
            {{ t('caseStudy.liveDemo') }}
          </a>
          <a
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            <UiSocialIcon name="github" class="size-4" />
            {{ t('caseStudy.viewCode') }}
          </a>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="aspect-[16/9] overflow-hidden rounded-3xl bg-[var(--color-surface)]">
        <div class="flex h-full items-center justify-center bg-[var(--color-bg)]">
          <SolarGallery class="size-16 text-[var(--color-text-muted)] opacity-30" />
        </div>
      </div>
    </div>

    <div class="section-padding">
      <div class="container space-y-10 md:space-y-16">
        <section>
          <h2 class="type-label mb-4">
            {{ t('caseStudy.overview') }}
          </h2>
          <p class="type-body">
            {{ project.caseStudy.overview }}
          </p>
        </section>

        <section>
          <h2 class="type-label mb-4">
            {{ t('caseStudy.challenge') }}
          </h2>
          <p class="type-body">
            {{ project.caseStudy.challenge }}
          </p>
        </section>

        <section>
          <h2 class="type-label mb-4">
            {{ t('caseStudy.solution') }}
          </h2>
          <p class="type-body">
            {{ project.caseStudy.solution }}
          </p>
        </section>

        <section>
          <h2 class="type-label mb-4">
            {{ t('caseStudy.features') }}
          </h2>
          <ul class="mt-4 space-y-3">
            <li
              v-for="feature in project.caseStudy.features"
              :key="feature"
              class="type-body flex gap-3"
            >
              <SolarCheckCircle class="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
              {{ feature }}
            </li>
          </ul>
        </section>

        <section>
          <h2 class="type-label mb-4">
            {{ t('caseStudy.outcome') }}
          </h2>
          <ul class="mt-4 space-y-3">
            <li
              v-for="item in project.caseStudy.outcome"
              :key="item"
              class="type-body flex gap-3 rounded-3xl bg-[var(--color-surface)] p-5"
            >
              <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
              {{ item }}
            </li>
          </ul>
        </section>
      </div>
    </div>

    <nav class="bg-[var(--color-surface)] py-12">
      <div class="container grid gap-4 md:grid-cols-2 md:gap-6">
        <NuxtLink
          v-if="prev"
          :to="localePath(`/projects/${prev.slug}`)"
          class="card group p-5 md:p-6"
        >
          <span class="type-label">
            {{ t('caseStudy.previous') }}
          </span>
          <p class="type-card-title mt-2 transition-colors group-hover:text-[var(--color-accent)]">
            {{ prev.title }}
          </p>
        </NuxtLink>
        <div v-else class="hidden md:block" />

        <NuxtLink
          v-if="next"
          :to="localePath(`/projects/${next.slug}`)"
          class="card group p-5 text-left md:col-start-2 md:p-6 md:text-right"
        >
          <span class="type-label">
            {{ t('caseStudy.next') }}
          </span>
          <p class="type-card-title mt-2 transition-colors group-hover:text-[var(--color-accent)]">
            {{ next.title }}
          </p>
        </NuxtLink>
      </div>
    </nav>
  </article>
</template>
