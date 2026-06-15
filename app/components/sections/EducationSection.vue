<script setup lang="ts">
const { education, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
</script>

<template>
  <section
    id="education"
    class="section-padding"
  >
    <div class="container">
      <div
        :ref="setRevealRef"
        class="reveal"
      >
        <UiSectionHeading
          :label="t('sections.education.label')"
          :title="t('sections.education.title')"
        />

        <div>
          <UiEducationItem
            v-for="(item, i) in education"
            :key="item.institution"
            :item="item"
            :is-last="i === education.length - 1"
          />
        </div>
      </div>
    </div>
  </section>
</template>
