<script setup>
import UiContainer from './UiContainer.vue'

defineProps({
  advantageIcon: {
    type: String,
    required: true,
  },
  advantageText: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <UiContainer class="advantages__item">
    <img :src="advantageIcon" alt="icon" class="advantages__icon" />
    <p class="advantages__text">{{ advantageText }}</p>
  </UiContainer>
</template>

<style scoped></style>
