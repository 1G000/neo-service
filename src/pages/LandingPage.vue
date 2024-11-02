<script setup>
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import AgreementsSection from '@/components/AgreementsSection.vue'
import AdvantagesSection from '@/components/AdvantagesSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import FormSection from '@/components/FormSection.vue'
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
    <AdvantagesSection />
    <ServicesSection />
    <FormSection />
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
  background-color: #131313;
  scroll-snap-type: y mandatory;
}
</style>
