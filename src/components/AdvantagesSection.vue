<script setup>
import UiBlockTitle from './UiBlockTitle.vue'
import UiContainer from './UiContainer.vue'
import AdvantagesItem from './AdvantagesItem.vue'
import advantagesData from '@/assets/data/advantagesData'
</script>

<template>
  <UiContainer class="advantages">
    <UiContainer class="advantages__title">
      <UiBlockTitle :width="'409px'" :title="'Преимущества'" />
    </UiContainer>
    <UiContainer class="advantages__content">
      <AdvantagesItem
        v-for="advantage in advantagesData.advantages"
        :key="advantage.key"
        :advantage-icon="advantage.icon"
        :advantage-text="advantage.value"
      />
      <img
        v-for="line in advantagesData.lines"
        :key="line.line"
        :src="line.src"
        :class="
          line.line === 6
            ? 'rotating-image advantages__lines advantages__line-' + line.line
            : 'advantages__lines advantages__line-' + line.line
        "
      />
    </UiContainer>
  </UiContainer>
</template>

<style scoped>
.advantages {
  /* height: 100%; */
  scroll-snap-align: start;
  padding-bottom: 93px;
}

.advantages__title {
  max-width: 1440px;
  padding: 0px 100px 132px 100px;
  margin-left: auto;
  margin-right: auto;
}
.advantages__content {
  position: relative;
  padding-left: 100px;
  padding-bottom: 153px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 133px;
}
:deep(.advantages__item) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
:deep(.advantages__item):first-child {
  width: 180px;
  /* margin-right: 96px; */
  height: 320px;
}
:deep(.advantages__item):nth-child(2) {
  width: 180px;
  justify-content: end;
}
:deep(.advantages__item):nth-child(3) {
  width: 274px;
  /* margin-right: 65px; */
}
:deep(.advantages__item):nth-child(4) {
  width: 208px;
  justify-content: end;
}
:deep(.advantages__item):nth-child(5) {
  margin-top: 40px;
  width: 252px;
}
:deep(.advantages__item):nth-child(6) {
  width: 232px;
  height: 448px;
  justify-content: end;
  margin-left: -91px;
}
:deep(.advantages__item):nth-child(7) {
  margin-top: 42px;
  margin-left: -22px;
  width: 262px;
}

:deep(.advantages__icon) {
  width: 89px;
}
:deep(.advantages__text) {
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.36px;
  letter-spacing: -0.4px;
  text-align: center;
}
.advantages__content:first-child {
  margin-right: 154px;
}
.advantages__lines {
  position: absolute;
}
.advantages__line-1 {
  top: 164px;
  left: 180px;
}
.advantages__line-2 {
  top: -80px;
  right: 200px;
}
.advantages__line-3 {
  top: 332px;
  right: 204px;
}
.advantages__line-4 {
  bottom: 295px;
  left: 546px;
}
.advantages__line-5 {
  bottom: 100px;
  left: 206px;
}
.advantages__line-6 {
  bottom: 47px;
  right: 94px;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.rotating-image {
  animation: rotation 10s linear infinite;
}
</style>
