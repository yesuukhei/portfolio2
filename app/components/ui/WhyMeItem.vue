<script setup lang="ts">
import type { WhyMePoint } from '~/data/types'
import type { Component } from 'vue'
import { Code, Dialog, Rocket, ShieldCheck } from '#solar-icons'

defineProps<{
  item: WhyMePoint
  index: number
}>()

const icons: Component[] = [Code, Rocket, Dialog, ShieldCheck]

function stepLabel(index: number) {
  return String(index + 1).padStart(2, '0')
}
</script>

<template>
  <article
    class="grid grid-cols-1 gap-[var(--space-4)] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-5)] md:grid-cols-[clamp(3.5rem,8vw,6rem)_1fr_auto] md:items-start md:gap-[var(--space-6)] md:p-[var(--space-7)]"
    :class="index % 2 === 1 && 'md:ml-[clamp(1.5rem,6vw,4rem)]'"
  >
    <p
      class="text-[clamp(2.5rem,9vw,4.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--color-primary)]"
      aria-hidden="true"
    >
      {{ stepLabel(index) }}
    </p>

    <div>
      <h3
        class="text-[clamp(1.5rem,4.5vw,2.5rem)] font-semibold leading-none tracking-[-0.03em] text-[var(--color-text)]"
      >
        {{ item.title }}
      </h3>
      <p class="type-body mt-4 md:mt-5">
        {{ item.description }}
      </p>
    </div>

    <div
      class="flex size-12 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-surface)] text-[var(--color-primary)] ring-1 ring-[var(--color-border)] md:size-14"
    >
      <component
        :is="icons[index % icons.length]"
        class="size-5 md:size-6"
      />
    </div>
  </article>
</template>
