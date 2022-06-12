<template lang="pug">
nuxt-link(
  class="card my-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 bg-base-300 border shadow-xl"
  :to="props.to"
)
  img(:src="props.src")
  .card-body
    h2.card-title.font-notosanjp
      | {{ props.title }}
    .card-actions.justify-end
      .badge.badge-outline(
        v-for="tag in props.tags"
      )
        | {{ tag }}

</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
  title: String,
  tags: Array<String>,
  to: String,
})
</script>
