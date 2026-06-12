<script setup lang="ts">
const { skills, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
</script>

<template>
  <section
    id="skills"
    class="section-padding bg-[var(--color-surface)]"
  >
    <div class="container">
      <div
        :ref="setRevealRef"
        class="reveal"
      >
        <UiSectionHeading
          :label="t('sections.skills.label')"
          :title="t('sections.skills.title')"
        />

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="group in skills"
            :key="group.category"
          >
            <h3 class="type-label mb-4">
              {{ group.category }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in group.items"
                :key="item"
                class="tag font-bold transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-text)]"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
