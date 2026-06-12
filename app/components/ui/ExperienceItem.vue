<script setup lang="ts">
import type { Experience } from '~/data/types'

defineProps<{
  item: Experience
  isLast?: boolean
}>()
</script>

<template>
  <div class="relative flex gap-6 pb-12">
    <div class="flex flex-col items-center">
      <div class="z-10 size-4 rounded-full bg-[var(--color-primary)]" />
      <div
        v-if="!isLast"
        class="w-0.5 flex-1 bg-[var(--color-primary)]/30"
      />
    </div>

    <div class="flex-1 pb-2">
      <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 class="type-card-title">
          {{ item.role }}
        </h3>
        <span class="type-body-sm font-bold uppercase tracking-wider">
          {{ item.period }}
        </span>
      </div>
      <p class="mt-1 text-sm font-bold text-[var(--color-accent)]">
        {{ item.company }}
      </p>
      <ul class="mt-4 space-y-2">
        <li
          v-for="(highlight, i) in item.highlights"
          :key="i"
          class="type-body-sm flex gap-3"
        >
          <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
          {{ highlight }}
        </li>
      </ul>
    </div>
  </div>
</template>
