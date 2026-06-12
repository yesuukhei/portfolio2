<script setup lang="ts">
defineProps<{
  label: string
  title: string
}>()
</script>

<template>
  <div class="section-heading">
    <p class="type-label mb-3 md:mb-4">
      {{ label }}
    </p>
    <h2 class="type-section">
      {{ title }}
    </h2>
    <div class="accent-line mt-4 md:mt-5" />
  </div>
</template>
