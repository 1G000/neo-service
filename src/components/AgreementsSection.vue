<script setup>
import UiBlockTitle from './UiBlockTitle.vue'
import UiContainer from './UiContainer.vue'
import UiButton from './UiButton.vue'
import agreementsData from '@/assets/data/agreementsData'
</script>

<template>
  <UiContainer class="agreements">
    <UiContainer class="agreements__title">
      <UiBlockTitle :width="'586px'" :title="'Оформление договора'" />
    </UiContainer>
    <UiContainer class="agreements__content">
      <UiContainer class="agreements__content-left">
        <p
          v-for="text in agreementsData.agreements.texts"
          :key="text.key"
          class="agreements__content-text"
          v-html="text.text"
        ></p>
        <UiButton class="agreements__button">{{
          agreementsData.agreements.buttonText
        }}</UiButton>
      </UiContainer>
      <UiContainer class="agreements__content-right" />

      <UiContainer class="agreements__content-background" />
    </UiContainer>
  </UiContainer>
</template>

<style scoped>
.agreements {
  min-height: 100vh;
  scroll-snap-align: start;
  padding-bottom: 64px;
}

.agreements__title {
  max-width: 1440px;
  padding: 0px 100px 18px 100px;
  margin-left: auto;
  margin-right: auto;
}
.agreements__content {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 161px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 84px;
  gap: 100px;
  position: relative;
  z-index: 1;
}
.agreements__content-right {
  background-image: url('@/assets/agreements-img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 44%;
  height: 481px;
}

.agreements__content-left {
  padding-left: 150px;
  width: 44%;
  display: flex;
  flex-direction: column;
}
.agreements__content-background {
  position: absolute;
  left: 0;
  top: 1px;
  z-index: -1;
  background-color: #ffffff;
  width: 66%;
  height: 114%;
}
.agreements__content-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.4px;
  margin-bottom: 19px;
}
.agreements__content-text {
  font-size: 14px;
  font-weight: 300;
  line-height: 32px;
  margin-bottom: 24px;
}
.agreements__button {
  display: flex;
  justify-content: center;
  width: 109%;
  padding: 30px 0px;
  background-color: #ffac12;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.4px;
  border-bottom-left-radius: 32px;
  border-top-right-radius: 32px;
  transition: 0.5s;
}
@media (hover: hover) {
  .agreements__button:hover {
    background-color: #2b2d2e;
    color: #ffac12;
  }
}
</style>
