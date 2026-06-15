<script setup lang="ts">
import type { Education } from "~/data/types";

defineProps<{
  item: Education;
  isLast?: boolean;
}>();

const logoFailed = ref(false);
</script>

<template>
  <article
    class="flex items-start gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 md:gap-5 md:p-5"
    :class="!isLast && 'mb-4'"
  >
    <component
      :is="item.link ? 'a' : 'div'"
      v-if="item.logo && !logoFailed"
      :href="item.link || undefined"
      :target="item.link ? '_blank' : undefined"
      :rel="item.link ? 'noopener noreferrer' : undefined"
      class="flex w-14 shrink-0 aspect-square items-center justify-center overflow-hidden rounded-[var(--radius-card)] p-1.5 transition-opacity hover:opacity-80 md:w-16"
      :class="{ 'pointer-events-none': !item.link }"
    >
      <img
        :src="item.logo"
        :alt="item.institution"
        class="size-full object-contain"
        loading="lazy"
        @error="logoFailed = true"
      />
    </component>

    <div
      v-else
      class="flex w-14 shrink-0 aspect-square items-center justify-center rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)] md:w-16"
    >
      <span
        class="text-lg font-semibold tracking-tight text-[var(--color-text-muted)]"
      >
        {{ item.institution.charAt(0) }}
      </span>
    </div>

    <div class="min-w-0 flex-1">
      <div
        class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between"
      >
        <div>
          <component
            :is="item.link ? 'a' : 'h3'"
            :href="item.link || undefined"
            :target="item.link ? '_blank' : undefined"
            :rel="item.link ? 'noopener noreferrer' : undefined"
            class="type-card-title"
            :class="
              item.link &&
              'text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]'
            "
          >
            {{ item.institution }}
          </component>
          <p class="mt-0.5 text-sm font-medium text-[var(--color-text-body)]">
            {{ item.degree }} · {{ item.field }}
          </p>
        </div>
        <span
          class="type-body-sm shrink-0 font-medium text-[var(--color-text-muted)] sm:pt-0.5"
        >
          {{ item.year }}
        </span>
      </div>

      <ul
        v-if="item.highlights?.length"
        class="mt-4 list-disc space-y-2 pl-5"
      >
        <li
          v-for="(highlight, i) in item.highlights"
          :key="i"
          class="type-body-sm text-[var(--color-text-body)]"
        >
          {{ highlight }}
        </li>
      </ul>
    </div>
  </article>
</template>
