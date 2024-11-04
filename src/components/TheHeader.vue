<script setup>
import { ref } from "vue";
import NavigationList from "./NavigationList.vue";
import headerData from "@/assets/data/headerData.js";
import UiContainer from "./UiContainer.vue";
import UiButton from "./UiButton.vue";
import { useWindowSizeShared } from "@/composables/useWindowSizeShared";
import MobileBurger from "./MobileBurger.vue";

const data = ref(headerData);
const { width } = useWindowSizeShared();
const animationClass = ref(false);
const isVisible = ref(false);

const openMobileMenu = () => {
  animationClass.value = !animationClass.value;
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <header class="header">
    <UiContainer class="header__wrapper">
      <UiButton href="/"><img src="../assets/logo.png" alt="logo" /></UiButton>
      <div class="header__content">
        <NavigationList
          v-show="width > 1330"
          class="navigation"
          :navigation-list="data.navigation"
        />
        <UiButton class="header__button" :href="'tel:' + data.telephone">{{
          data.telephone
        }}</UiButton>
        <MobileBurger
          v-show="width <= 1330"
          @click="openMobileMenu"
          :animation="animationClass"
        />
      </div>

      <UiContainer
        v-show="width <= 1330"
        class="navigation-mobile__wrapper"
        :class="{ navvis: isVisible }"
      >
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
.header__content {
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
@media (max-width: 1330px) {
  .header__wrapper {
    padding: 22px 32px;
  }
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
/* @media (max-width: 1100px) {
  .navigation {
    display: none;
  }
} */
.navigation-mobile__wrapper {
  /* display: none; */
  position: absolute;
  padding: 60px 95px;
  background-color: #131313;
  top: 101px;
  transform: translateX(500px);
  z-index: 1;
  right: -500px;
  transition: all 0.7s ease-in-out;
  border-bottom-left-radius: 115px;
}
.navvis {
  right: 0;
  transform: translateX(0);
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
