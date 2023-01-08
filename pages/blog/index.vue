<template lang="pug">
div(class="container mx-auto px-4 py-5")
  div(class="mx-auto")
    card.my-5(
      v-for="d in articles"
      :to="d._path"
      :key="d._path"
      :icon="d.icon"
      :title="d.title"
      :tags="d.tags"
      :date="d.date"
    )

</template>

<script setup lang="ts">
useHead({
  title: 'Blog'
})

const { data: contents } = await useAsyncData('blog', () => queryContent('/blog').sort({ date: -1 }).find())

const runtimeConfig = useRuntimeConfig()
const qiita = await useFetch('https://qiita.com/api/v2/users/yanskun/items?per_page=100', {
  headers: {
    Authorization: `Bearer ${runtimeConfig.QIITA_TOKEN}`
  },
}).then((res) => {
  const qiitaData = res.data.value as any[]
  return qiitaData.map((d) => {
    return {
      _path: d.url,
      title: d.title,
      date: d.created_at,
      tags: d.tags.map((t) => t.name),
      icon: '💚',
    }
  })
})

const articles = computed(() => {
  const data = [...contents.value, ...qiita]
  return data.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

onMounted(() => {
  if (contents.value && !contents.value.length) {
    location.reload()
  }
})
</script>
