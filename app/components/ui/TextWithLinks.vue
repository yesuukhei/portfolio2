<script setup lang="ts">
import { parseTextWithLinks } from '~/utils/parseTextWithLinks'

const props = defineProps<{
  text: string
}>()

const parts = computed(() => parseTextWithLinks(props.text))
</script>

<template>
  <span>
    <template v-for="(part, index) in parts" :key="index">
      <a
        v-if="part.type === 'link'"
        :href="part.href"
        target="_blank"
        rel="noopener noreferrer"
        class="link-accent underline-offset-2 hover:underline"
      >
        {{ part.label }}
      </a>
      <span v-else>{{ part.value }}</span>
    </template>
  </span>
</template>
