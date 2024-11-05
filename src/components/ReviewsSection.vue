<script setup>
import UiBlockTitle from './UiBlockTitle.vue'
import UiContainer from './UiContainer.vue'
</script>

<template>
  <UiContainer class="reviews">
    <UiContainer class="reviews__title">
      <UiBlockTitle :width="'197px'" :title="'Отзывы'" />
    </UiContainer>
    <div class="sw-app" data-app="18ee9241488ad549e5b3c0183d5c59b6"></div>
    <UiContainer class="helper" />
  </UiContainer>
</template>

<style scoped>
.reviews {
  /* height: 100%; */
  scroll-snap-align: start;
}

.reviews__title {
  max-width: 1440px;
  padding: 10px 100px 60px 100px;
  margin-left: auto;
  margin-right: auto;
}
.helper {
  margin-top: -40px;
  width: 100%;
  height: 40px;
  background-color: #131313;
  background-image: url('@/assets/noise.png');
  position: relative;
  z-index: 100;
}
</style>
