<script setup lang="ts">
const { whyMe, whyMeLead, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
</script>

<template>
  <section
    id="why-me"
    class="section-padding"
  >
    <div class="container">
      <div
        :ref="setRevealRef"
        class="reveal"
      >
        <UiSectionHeading
          :label="t('sections.whyMe.label')"
          :title="t('sections.whyMe.title')"
        />

        <p class="type-body-lg max-w-3xl">
          {{ whyMeLead }}
        </p>

        <div class="whyme-stack mt-10 md:mt-12">
          <div
            v-for="(item, i) in whyMe"
            :key="item.title"
            :ref="setRevealRef"
            :class="['reveal', `reveal-delay-${(i % 4) + 1}`]"
          >
            <UiWhyMeItem
              :item="item"
              :index="i"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
