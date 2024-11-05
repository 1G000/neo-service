<script setup>
import UiContainer from './UiContainer.vue'
import NavigationList from './NavigationList.vue'
import UiButton from './UiButton.vue'
import UiBlockTitle from './UiBlockTitle.vue'
import UiHint from './UiHint.vue'
import footerData from '@/assets/data/footerData'
</script>

<template>
  <footer class="footer">
    <UiContainer class="footer__wrapper">
      <UiContainer>
        <UiBlockTitle :width="'457px'" :title="''" />
      </UiContainer>
      <UiContainer class="footer__content">
        <UiButton href="/"
          ><img src="../assets/logo.svg" class="logo" alt="logo"
        /></UiButton>
        <NavigationList
          class="footer__navigation"
          :navigation-list="footerData.footer.navigation"
        />
        <UiHint />
      </UiContainer>
      <UiContainer class="footer__text"
        ><h3 class="footer__title" v-html="footerData.footer.coolText"></h3
      ></UiContainer>
    </UiContainer>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #131313;
  background-image: url('@/assets/noise.png');
}

.logo {
  width: 70px;
}

.footer__wrapper {
  max-width: 1440px;
  padding: 64px 100px 64px 100px;
  margin-left: auto;
  margin-right: auto;
}
.footer__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 65px;
  padding-bottom: 29px;
}
.footer__navigation {
  display: flex;
  gap: 24px;
}
:deep(.hint) {
  position: static;
  margin: 0;
  padding: 0;
}

:deep(.navigation-item) {
  font-size: 16px;
  text-decoration: none;
  position: relative;
  color: #ffffff;
  font-weight: 300;
  line-height: 19.84px;
  letter-spacing: -0.4px;
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
  content: '';
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
.footer__title {
  float: right;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.76px;
  letter-spacing: -0.4px;
  color: #ffffff;
}
.footer__text {
  padding-bottom: 44px;
}
</style>
