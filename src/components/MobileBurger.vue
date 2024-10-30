<script setup>
import { ref } from 'vue'
const animationClass = ref(false)
</script>

<template>
  <div class="menu-wrapper" @click="animationClass = !animationClass">
    <div class="hamburger-menu" :class="{ animate: animationClass }"></div>
  </div>
</template>

<style scoped>
.menu-wrapper {
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto; */
  width: 50px;
  height: 24px;
  cursor: pointer;
}

.hamburger-menu,
.hamburger-menu:after,
.hamburger-menu:before {
  width: 42px;
  height: 4px;
}

.hamburger-menu {
  position: relative;
  transform: translateY(25px);
  background: #fcad1b;
  transition: all 0ms 300ms;
}
.hamburger-menu.animate {
  background: rgba(255, 255, 255, 0);
}

.hamburger-menu:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 15px;
  background: #fcad1b;
  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu:after {
  content: '';
  position: absolute;
  left: 0;
  top: 15px;
  background: #fcad1b;
  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu.animate:after {
  top: 0;
  transform: rotate(45deg);
  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu.animate:before {
  bottom: 0;
  transform: rotate(-45deg);
  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
</style>