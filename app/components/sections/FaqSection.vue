<script setup lang="ts">
const { faq, faqIntro, t } = usePortfolio()
const { setRevealRef } = useScrollReveal()
const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section
    id="faq"
    class="section-padding bg-[var(--color-surface)]"
  >
    <div class="container">
      <div
        :ref="setRevealRef"
        class="reveal"
      >
        <UiSectionHeading
          :label="t('sections.faq.label')"
          :title="t('sections.faq.title')"
        />

        <p class="type-body-lg max-w-3xl">
          {{ faqIntro }}
        </p>

        <div class="mt-8 flex max-w-3xl flex-col gap-[var(--space-3)] md:mt-10">
          <div
            v-for="(item, i) in faq"
            :key="item.question"
            :ref="setRevealRef"
            :class="['reveal', `reveal-delay-${(i % 4) + 1}`]"
          >
            <UiFaqItem
              :item="item"
              :index="i"
              :open="openIndex === i"
              @toggle="toggle"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
