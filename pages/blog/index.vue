<template lang="pug">
div(class="container mx-auto px-4 py-5")
  div(class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4")
    card(
      v-for="d in data"
      :to="`/blog/${d.slug}`"
      :key="d.slug"
      :src="d.image"
      :title="d.title"
      :desc="d.description"
      :tags="d.tags"
    )

</template>

<script setup lang="ts">
useHead({
  title: 'Blog'
})

const { data } = await useAsyncData('blog', () => queryContent('/blog').sort({ date: -1 }).find())

onMounted(() => {
  if (!data.value.length) {
    location.reload()
  }
})
</script>
