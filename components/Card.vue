<template lang="pug">
nuxt-link(
  class="rounded-lg overflow-hidden shadow-lg bg-base-300"
  :to="props.to"
)
  div.flex.justify-center.overflow-hidden.pt-4
    img.max-h-52.max-w-full.object-center.rounded-lg(:src="props.src")
  .px-6.py-4
    .font-bold.text-xl.mb-2.line-clamp-2
      | {{ props.title }}
    .text-base.line-clamp-3.px-2
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
