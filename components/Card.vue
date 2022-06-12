<template lang="pug">
nuxt-link(
  class="rounded-lg overflow-hidden shadow-lg"
  :to="props.to"
)
  img.w-full(:src="props.src")
  .px-6.py-4
    .text-gray-100.font-bold.text-xl.mb-2
      | {{ props.title }}
    .text-gray-400.text-base
      | {{ props.desc }}
  .px-6.py-4
    span.inline-block.bg-gray-200.rounded-full.px-3.py-1.text-sm.font-semibold.text-gray-700.mr-2.mb-2(
      v-for="tag in props.tags"
    ) {{ `#${tag}` }}

</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
  title: String,
  desc: String,
  tags: Array<String>,
  to: String,
})
</script>
