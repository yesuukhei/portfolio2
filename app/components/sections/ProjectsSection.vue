<script setup lang="ts">
const { projects, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
</script>

<template>
  <section
    id="projects"
    class="section-padding bg-[var(--color-surface)]"
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

        <div class="zigzag-stack mt-10 md:mt-12">
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
