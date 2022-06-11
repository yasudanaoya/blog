<template lang="pug">
div
  .card.cursor-pointer(
    v-for="d in data"
    :key="d.slug"
  )
    nuxt-link(:to="`/blog/${d.slug}`")
      img(:src="d.image")
      div
        | {{ d.title }}

</template>

<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryContent('/blog').find())
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 33%;
}
</style>
