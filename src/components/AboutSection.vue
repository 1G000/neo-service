<script setup>
import UiBlockTitle from './UiBlockTitle.vue'
import UiContainer from './UiContainer.vue'
import UiButton from './UiButton.vue'
import aboutData from '@/assets/data/aboutData'
</script>

<template>
  <UiContainer class="about">
    <UiContainer class="about__title">
      <UiBlockTitle :width="'169px'" :title="'О нас'" />
    </UiContainer>
    <UiContainer class="about__content">
      <UiContainer class="about__content-left" />
      <UiContainer class="about__content-right">
        <h4 class="about__content-title">{{ aboutData.about.title }}</h4>
        <p
          v-for="text in aboutData.about.texts"
          :key="text.key"
          class="about__content-text"
          v-html="text.text"
        ></p>
        <UiButton class="about__button">{{
          aboutData.about.buttonText
        }}</UiButton>
      </UiContainer>
      <UiContainer class="about__content-background" />
    </UiContainer>
  </UiContainer>
</template>

<style scoped>
.about {
  height: 100%;
  min-height: 100vh;
  padding-top: 64px;
  padding-bottom: 140px;
  scroll-snap-align: start;
}
.about__title {
  max-width: 1440px;
  padding-left: 100px;
  padding-right: 100px;
  margin-left: auto;
  margin-right: auto;
}
.about__content {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 74px;
  gap: 100px;
  position: relative;
  z-index: 1;
}
.about__content-left {
  background-image: url('@/assets/about-img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 46%;
  height: 520px;
}

.about__content-right {
  width: 33%;
  display: flex;
  flex-direction: column;
  margin-top: -6px;
}
.about__content-background {
  position: absolute;
  right: 0;
  top: 1px;
  z-index: -1;
  background-color: #ffffff;
  width: 66%;
  height: 111%;
}
.about__content-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.4px;
  margin-bottom: 19px;
}
.about__special {
  font-weight: 700;
}
.about__content-text {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: -0.4px;
  text-align: left;
  line-height: 32px;
  margin-bottom: 6px;
}
.about__button {
  margin-top: 37px;
  display: flex;
  justify-content: center;
  width: 111%;
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
  .about__button:hover {
    background-color: #2b2d2e;
    color: #ffac12;
  }
}
</style>
