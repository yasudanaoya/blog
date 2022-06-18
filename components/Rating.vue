<template lang="pug">
.rating
  input.mask.mask-star(
    v-for="i in props.length"
    :key="i"
    disabled
    type="radio"
    :checked="i === props.value"
  )
</template>

<script setup lang="ts">
const props = defineProps({
  length: {
    type: Number,
    default: 5,
  },
  value: {
    type: Number,
    required: true,
  }
})
</script>
