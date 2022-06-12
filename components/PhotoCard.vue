<template lang="pug">
.rounded-lg.overflow-hidden.shadow-lg
  img.w-full(:src="props.src")
  .px-6.py-4
    .text-gray-100.font-bold.text-xl.mb-2.line-clamp-2
      | {{ props.desc }}
</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
  desc: String,
})
</script>
