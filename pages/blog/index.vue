<template lang="pug">
div(class="container mx-auto px-4 py-5")
  div(class="mx-auto")
    card.my-5(
      v-for="d in currentArticles"
      :to="d._path"
      :key="d._path"
      :icon="d.icon"
      :title="d.title"
      :tags="d.tags"
      :date="d.date"
    )
    .btn-group
      //- button.btn.btn-active
      button.btn(
        v-for="i in articles.length/10"
        :key="i"
        @click="onClick(i)"
        :class="{ 'btn-active': current === i - 1}"
      ) {{ i }}

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

const current = ref(0)
const currentArticles = computed(() => {
  const start = current.value === 0 ? 0 : current.value * 10
  const end = current.value * 10 + 10
  if (end > articles.value.length) {
    return articles.value.slice(current.value)
  }
  return articles.value.slice(start, end)
})

const onClick = (i: number) => {
  current.value = i - 1
}

onMounted(() => {
  if (contents.value && !contents.value.length) {
    location.reload()
  }
})
</script>
