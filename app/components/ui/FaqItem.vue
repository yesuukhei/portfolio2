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
  <div
    class="faq-item"
    :class="{ 'is-open': open }"
  >
    <button
      :id="triggerId"
      type="button"
      class="faq-trigger"
      :aria-expanded="open"
      :aria-controls="panelId"
      @click="emit('toggle', index)"
    >
      <span>{{ item.question }}</span>
      <span class="faq-icon" aria-hidden="true">
        <SolarAddCircle class="size-4" />
      </span>
    </button>

    <div
      :id="panelId"
      class="faq-panel"
      role="region"
      :aria-labelledby="triggerId"
      :aria-hidden="!open"
    >
      <div class="faq-panel-inner">
        <p class="type-body">
          {{ item.answer }}
        </p>
      </div>
    </div>
  </div>
</template>
