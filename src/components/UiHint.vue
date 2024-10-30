<script setup>
import UiButton from './UiButton.vue'
import UiContainer from './UiContainer.vue'
import hintData from '@/assets/data/hintData'
</script>

<template>
  <UiContainer class="hint">
    <UiButton
      v-for="hint in hintData.hint"
      :key="hint.key"
      class="hint__button"
    >
      <img :src="hint.icon" alt="icon" />
      <p>{{ hint.value }}</p>
    </UiButton>
  </UiContainer>
</template>

<style scoped>
.hint {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 752px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 40px 0;
  background-color: #121212b2;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  /* justify-self: center; */
}
.hint__button {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
}
</style>