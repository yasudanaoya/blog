<template lang="pug">
nuxt-link(
  class="rounded-lg overflow-hidden shadow-lg bg-base-300"
  :to="props.to"
)
  div.flex.justify-center.overflow-hidden.pt-4
    img.max-h-52.max-w-full.object-center.rounded-lg(
      :src="imgSrc"
    )
  .px-6.py-4
    .font-bold.text-xl.mb-2.line-clamp-2
      | {{ props.title }}
    .text-base.line-clamp-3.px-2
      | {{ props.desc }}
  .px-6.py-4
    span.badge.badge-outline.box-content.inline-block.rounded-full.font-semibold.mx-1.px-2.py-1(
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

const imgSrc = `/thumbnail/${props.src}`
</script>
