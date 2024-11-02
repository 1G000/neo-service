<script setup>
import UiButton from './UiButton.vue'
import heroData from '@/assets/data/heroData.js'
import UiContainer from './UiContainer.vue'
import UiHint from './UiHint.vue'
</script>

<template>
  <UiContainer class="hero">
    <h1 class="hero__text">{{ heroData.hero.text }}</h1>
    <UiButton class="hero__button">{{ heroData.hero.buttonText }}</UiButton>
  </UiContainer>
  <UiHint />
</template>

<style scoped>
.hero {
  max-width: 1440px;
  padding: 142px 100px 0;
  margin-left: auto;
  margin-right: auto;
}
.hero__text {
  max-width: 845px;
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: -0.4px;
  padding-bottom: 48px;
  color: #ffffff;
}
.hero__button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 529px;
  height: 80px;
  background-color: #fcad1b;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  margin-bottom: 187px;
  color: #ffffff;
  transition: 0.5s;
}
@media (hover: hover) {
  .hero__button:hover {
    background-color: #2b2d2e;
    color: #ffac12;
  }
}
</style>
