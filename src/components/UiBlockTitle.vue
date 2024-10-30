<script setup>
import UiContainer from './UiContainer.vue'

defineProps({
  width: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <UiContainer class="block">
    <p class="block__title">{{ title }}</p>
    <div class="block__line"></div>
  </UiContainer>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: v-bind(width);
  align-items: center;
}
.block__title {
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -1.35px;
  color: #ffffff;
}
.block__line {
  height: 2px;
  width: v-bind(width);
  background: linear-gradient(90deg, #ffac12 47.96%, #ffffff 94.96%);
}
</style>