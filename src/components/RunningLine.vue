<script setup>
import runningLine from '@/assets/data/runningLine'
import UiContainer from './UiContainer.vue'
</script>

<template>
  <UiContainer class="running-line__wrapper">
    <p class="running-line">{{ runningLine.line }}</p>
  </UiContainer>
</template>

<style scoped>
@keyframes runningLine {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.running-line__wrapper {
  display: flex;
  width: fit-content;
  height: 30px;
  background-color: #1b1f26f0;
  color: #fcad1b;
  overflow: hidden;
}
.running-line {
  font-size: 24px;
  right: -1000px;
  position: relative;
  /* animation: runningLine 10s linear infinite; */
  -webkit-transform-style: preserve-3d; /* Фикс возможного глюка с морганием в Сафари */
}
</style>>