<script setup>
import { ref } from "vue";
import NavigationList from "./NavigationList.vue";
import headerData from "@/assets/data/headerData.js";
import UiContainer from "./UiContainer.vue";
import UiButton from "./UiButton.vue";
// import MobileBurger from './MobileBurger.vue'

const data = ref(headerData);
</script>

<template>
  <header class="header">
    <UiContainer class="header__wrapper">
      <UiButton href="/"><img src="../assets/logo.png" alt="logo" /></UiButton>
      <div class="desktop-nav">
        <NavigationList class="navigation" :navigation-list="data.navigation" />
        <a class="header__button" :href="'tel:' + data.telephone">{{ data.telephone }}</a>
      </div>
      <!-- <MobileBurger /> -->
      <UiContainer class="navigation-mobile__wrapper">
        <NavigationList class="navigation-mobile" :navigation-list="data.navigation" />
      </UiContainer>
    </UiContainer>
  </header>
</template>

<style scoped>
.header {
  height: 108px;
  background-color: #131313;
  margin: 0 auto;
}
.desktop-nav {
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
}
.header__wrapper {
  position: relative;
  max-width: 1440px;
  padding: 22px 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header__button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 60px;
  line-height: 22.32px;
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #ffac12;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  font-weight: 300;
  font-size: 18px;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
}
@media (hover: hover) {
  .header__button:hover {
    /* background-color: #2b2d2e; */
    color: #ffac12;
  }
}

.navigation {
  display: flex;
  flex-direction: row;
  gap: 43px;
}
@media (max-width: 1100px) {
  .navigation {
    display: none;
  }
}
.navigation-mobile__wrapper {
  display: none;
  /* position: absolute;
  padding: 30px 60px;
  background-color: #1b1f26f0;
  top: 90px;
  right: -231px;
  z-index: 1; */
}
.navigation-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
:deep(.navigation-item) {
  text-decoration: none;
  position: relative;
  color: #ffffff;
  font-weight: 300;
  line-height: 20px;
  transition: 0.3s;
}

:deep(.navigation-item):after {
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
  content: "";
  transition: width 0.3s ease-out;
}

:deep(.navigation-item):hover:after,
:deep(.navigation-item):focus:after {
  width: 95%;
}

@media (hover: hover) {
  :deep(.navigation-item):hover:after {
    width: 95%;
  }
}
</style>
