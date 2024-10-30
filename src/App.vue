<script setup>
import TheHeader from './components/TheHeader.vue'
// import TheFooter from './components/TheFooter.vue'
import TheHero from './components/TheHero.vue'
</script>

<template>
  <div class="common-background">
    <TheHeader />
    <TheHero />
  </div>
  <main>
    <!-- <TheWelcome /> -->
  </main>
  <!-- <TheFooter /> -->
</template>

<style scoped>
.common-background {
  background: url('./assets/hero-img.jpg') no-repeat top left / cover;
  min-height: 100vh;
  position: relative;
}
</style>
