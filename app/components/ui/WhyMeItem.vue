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
  <article class="whyme-stack-item">
    <p class="whyme-step" aria-hidden="true">
      {{ stepLabel(index) }}
    </p>

    <div>
      <h3 class="whyme-title">
        {{ item.title }}
      </h3>
      <p class="type-body mt-4 md:mt-5">
        {{ item.description }}
      </p>
    </div>

    <div class="whyme-icon">
      <component
        :is="icons[index % icons.length]"
        class="size-5 md:size-6"
      />
    </div>
  </article>
</template>
