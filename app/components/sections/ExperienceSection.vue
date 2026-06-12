<script setup lang="ts">
const { experience, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
</script>

<template>
  <section
    id="experience"
    class="section-padding"
  >
    <div class="container">
      <div
        :ref="setRevealRef"
        class="reveal"
      >
        <UiSectionHeading
          :label="t('sections.experience.label')"
          :title="t('sections.experience.title')"
        />

        <div>
          <UiExperienceItem
            v-for="(item, i) in experience"
            :key="item.company"
            :item="item"
            :is-last="i === experience.length - 1"
          />
        </div>
      </div>
    </div>
  </section>
</template>
