<template lang="pug">
div.m-10
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
