<script setup>
defineProps({
  text: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <button>{{ text }}</button>
</template>