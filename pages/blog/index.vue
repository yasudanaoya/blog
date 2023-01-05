<template lang="pug">
div(class="container mx-auto px-4 py-5")
  div(class="mx-auto")
    card.my-5(
      v-for="d in data"
      :to="d._path"
      :key="d._path"
      :icon="d.icon"
      :title="d.title"
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
