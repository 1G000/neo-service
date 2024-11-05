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
  background-color: #131313;
  background-image: url('@/assets/noise.png');
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
}
.hint__button {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
}

.hint__button:after {
  display: block;
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1),
    #fff 50%,
    rgba(255, 255, 255, 0.1)
  );
  content: '';
  transition: width 0.3s ease-out;
}

.hint__button:hover:after,
.hint__button:focus:after {
  width: 95%;
}

@media (hover: hover) {
  .hint__button:hover:after {
    width: 95%;
  }
}
</style>
