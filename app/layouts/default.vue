<template>
  <div class="min-h-screen bg-[var(--color-bg)]">
    <LayoutAppHeader />
    <main class="pt-[4.5rem] md:pt-20">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
