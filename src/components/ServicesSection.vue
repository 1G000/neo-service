<script setup>
import UiBlockTitle from './UiBlockTitle.vue'
import UiContainer from './UiContainer.vue'
import UiButton from './UiButton.vue'
import servicesData from '@/assets/data/servicesData'
</script>

<template>
  <UiContainer class="services">
    <UiContainer class="services__title">
      <UiBlockTitle :width="'190px'" :title="'Услуги'" />
    </UiContainer>
    <UiContainer class="services__group-buttons">
      <button
        v-for="button in servicesData.services.buttons"
        :key="button.key"
        :class="button.class"
      >
        {{ button.text }}
      </button>
    </UiContainer>
    <UiContainer
      v-for="item in servicesData.services.content"
      :key="item.key"
      class="services__content"
      :class="'services__content-' + item.key"
    >
      <img :src="item.image" />
      <UiContainer class="services__content-inner">
        <p class="services__text">{{ item.text }}</p>
        <UiButton class="services__button">{{ item.buttonText }}</UiButton>
      </UiContainer>
    </UiContainer>
  </UiContainer>
</template>

<style scoped>
.services {
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  min-height: 100vh;
  scroll-snap-align: start;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  padding: 0px 100px 66px 100px;
}
.services__title {
  padding-bottom: 66px;
}

.services__group-buttons {
  display: flex;
  flex-direction: row;
  border: 1px solid #ffac12;
  max-width: 1042px;
  height: 62px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  align-self: center;
}
.group-button {
  width: 347.33333px;
  height: 62px;
  background-color: transparent;
  border: 1px solid #ffac12;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.84px;
  text-align: left;
  color: #ffffff;
  transition: 0.5s;
}
@media (hover: hover) {
  .button-left:hover,
  .button-right:hover,
  .button-middle:hover {
    background-color: #ffac12;
  }
}
.button-left:focus,
.button-right:focus,
.button-middle:focus {
  background-color: #ffac12;
}

.button-left {
  border-top-left-radius: 24px;
}
.button-right {
  border-top-right-radius: 24px;
}
.services__content {
  max-width: 522px;
  padding: 81px 0px 20px 0px;
  align-self: center;
  display: flex;
  justify-content: center;
}
.services__content-inner {
  display: flex;
  flex-direction: column;
  padding: 17px 45px;
  background-color: #ffffff;
}
.services__text {
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.4px;
}
.services__button {
  width: 381px;
  display: flex;
  justify-content: center;
  margin-top: 23px;
  background-color: #ffac12;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: #2a292a;
  padding: 20px 0;
  border-bottom-left-radius: 32px;
  border-top-right-radius: 32px;
  transition: 0.5s;
}
@media (hover: hover) {
  .services__button:hover {
    background-color: #2b2d2e;
    color: #ffac12;
  }
}
.services__content-1,
.services__content-2 {
  display: none;
}
</style>
