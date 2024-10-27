<script setup>
import { ref } from 'vue'
import NavigationList from './NavigationList.vue'
import headerData from '@/assets/data/headerData.js'
import UiContainer from './UiContainer.vue'
import UiButton from './UiButton.vue'

const data = ref(headerData)
</script>

<template>
  <header class="header">
    <UiContainer class="header__wrapper">
      <a href="/"><img src="../assets/logo.png" alt="logo" /></a>
      <NavigationList
        class="navigation"
        :navigationList="data.navigation"
        :itemStyle="{ color: 'white' }"
      />
      <UiButton class="header__button" :text="data.telephone" />
    </UiContainer>
  </header>
</template>

<style scoped>
.header {
  height: 80px;
  background-color: #1b1f26f0;
}
.header__wrapper {
  max-width: 1440px;
  padding: 10px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header__button {
  padding: 5px 20px;
  color: #000000;
  font-size: 36px;
  background-color: #fcad1b;
  border: none;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
  font-family: 'Jockey One', sans-serif;
  font-weight: 400;
  transition: 0.5s;
  cursor: pointer;
}
.header__button:hover {
  color: #ffffff;
}
.navigation {
  display: flex;
  flex-direction: row;
  gap: 36px;
}
</style>