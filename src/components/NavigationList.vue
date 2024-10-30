<script setup>
defineProps({
  navigationList: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul>
    <li v-for="item in navigationList" :key="item.key">
      <a :href="`#${item.value}`" class="navigation-item"> {{ item.value }}</a>
    </li>
  </ul>
</template>
