<template lang="pug">
nuxt-link(
  class="card w-96 shadow-xl border bg-base-300 box-border transition ease-in-out hover:border-2 duration-300"
    :to="props.to"
  )
  figure
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
