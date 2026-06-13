<script setup lang="ts">
const { projects, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
</script>

<template>
  <section
    id="projects"
    class="section-padding"
  >
    <div class="container">
      <div
        :ref="setRevealRef"
        class="reveal"
      >
        <UiSectionHeading
          :label="t('sections.projects.label')"
          :title="t('sections.projects.title')"
        />

        <div class="mt-10 flex flex-col gap-[var(--space-8)] md:mt-12 md:gap-[var(--section-gap)]">
          <div
            v-for="(project, i) in projects"
            :key="project.slug"
            :ref="setRevealRef"
            :class="['reveal', `reveal-delay-${(i % 4) + 1}`]"
          >
            <UiProjectRow
              :project="project"
              :index="i"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
