<script setup>
defineProps({
  animation: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="menu-wrapper">
    <div class="hamburger-menu" :class="{ animate: animation }"></div>
  </div>
</template>

<style scoped>
.menu-wrapper {
  padding-top: 10px;
  padding-bottom: 10px;
  /* width: 50px; */
  height: 24px;
  cursor: pointer;
}
.hamburger-menu {
  width: 33px;
  height: 4px;
  cursor: pointer;
  border-radius: 10px;
}
.hamburger-menu:after,
.hamburger-menu:before {
  width: 43px;
  height: 4px;
  border-radius: 10px;
}

.hamburger-menu {
  position: relative;
  transform: rotate(180deg);
  background: #fcad1b;
  transition: all 0ms 300ms;
}
.hamburger-menu.animate {
  background: rgba(255, 255, 255, 0);
}

.hamburger-menu:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 15px;
  background: #fcad1b;
  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-menu:after {
  content: "";
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
