<script setup>
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import AgreementsSection from '@/components/AgreementsSection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="common-background">
    <TheHeader />
    <HeroSection />
  </div>
  <main class="main">
    <AboutSection />
    <AgreementsSection />
  </main>
  <TheFooter />
</template>

<style scoped>
.common-background {
  background: url('@/assets/hero-img.jpg') no-repeat top left / cover;
  min-height: 100vh;
  position: relative;
}
.main {
  /* height: 100vh; */
  background-color: #131313;
  scroll-snap-type: y mandatory;
}
</style>
