<script setup lang="ts">
import type { FaqItem } from '~/data/types'

const props = defineProps<{
  item: FaqItem
  index: number
  open: boolean
}>()

const emit = defineEmits<{
  toggle: [index: number]
}>()

const panelId = computed(() => `faq-panel-${props.index}`)
const triggerId = computed(() => `faq-trigger-${props.index}`)
</script>

<template>
  <div class="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]">
    <button
      :id="triggerId"
      type="button"
      class="flex w-full items-center justify-between gap-[var(--space-4)] px-[var(--space-5)] py-[var(--space-4)] text-left text-[clamp(1rem,3vw,1.25rem)] font-semibold leading-[var(--leading-tight)] tracking-[-0.02em] text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
      :aria-expanded="open"
      :aria-controls="panelId"
      @click="emit('toggle', index)"
    >
      <span>{{ item.question }}</span>
      <span
        class="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-bg)] text-[var(--color-text)] transition-[transform,background] duration-[250ms] ease-in-out"
        :class="open && 'rotate-45 bg-[var(--color-primary)] text-[var(--color-on-primary)]'"
        aria-hidden="true"
      >
        <SolarAddCircle class="size-4" />
      </span>
    </button>

    <div
      :id="panelId"
      class="grid transition-[grid-template-rows] duration-300 ease-in-out"
      :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      role="region"
      :aria-labelledby="triggerId"
      :aria-hidden="!open"
    >
      <div class="overflow-hidden">
        <p class="type-body px-[var(--space-6)] pb-[var(--space-5)]">
          {{ item.answer }}
        </p>
      </div>
    </div>
  </div>
</template>
