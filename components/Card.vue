<template lang="pug">
nuxt-link(
  class="rounded-lg overflow-hidden shadow-lg bg-base-300 flex mx-4"
  :to="props.to"
)
  .flex.justify-center.overflow-hidden.items-center(
    class="w-28 min-w-[7rem]"
  )
    .w-16.h-16.rounded-lg.bg-white.items-center.justify-center.flex
      span.text-3xl {{ props.icon }}
  .flex.flex-col
    .pr-6.py-4
      .font-bold.mb-4.line-clamp-2(
        class="text-base md:text-lx"
      )
        | {{ props.title }}
      span.badge.badge-outline.box-content.inline-block.rounded-full.font-semibold.mx-1.px-2.py-1(
        v-for="tag in props.tags"
        class="text-xs md:text-sm"
      ) {{ `#${tag}` }}

</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  tags: Array<String>,
  to: String,
  icon: String,
})

</script>
