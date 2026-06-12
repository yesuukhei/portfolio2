<script setup lang="ts">
const { profile } = usePortfolio()

useSeoMeta({
  title: () => `${profile.value.name} — ${profile.value.role}`,
  description: () => profile.value.tagline,
  ogTitle: () => `${profile.value.name} — ${profile.value.role}`,
  ogDescription: () => profile.value.tagline,
  ogType: 'website',
  ogImage: '/og-image.svg',
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${profile.value.name} — ${profile.value.role}`,
  twitterDescription: () => profile.value.tagline,
  twitterImage: '/og-image.svg'
})
</script>

<template>
  <div>
    <SectionsHeroSection />
    <SectionsAboutSection />
    <SectionsWhyMeSection />
    <SectionsProjectsSection />
    <SectionsExperienceSection />
    <SectionsSkillsSection />
    <SectionsFaqSection />
    <SectionsContactSection />
  </div>
</template>
