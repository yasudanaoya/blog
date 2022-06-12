<template lang="pug">
div(class="container my-12 mx-auto px-4 md:px-12")
  div(class="flex flex-wrap -mx-1 lg:-mx-4")
    card(
      v-for="d in data"
      :to="`/blog/${d.slug}`"
      :key="d.slug"
      :src="d.image"
      :title="d.title"
      :tags="d.tags"
    )

</template>

<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryContent('/blog').find())
</script>
