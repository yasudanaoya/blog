<template lang="pug">
.rounded-lg.overflow-hidden.shadow-lg
  img.w-full.h-full(:src="props.src")
</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
  desc: String,
})
</script>
