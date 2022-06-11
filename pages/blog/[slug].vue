<template lang="pug">
main
  content-doc(
    class="prose lg:prose-xl font-dotgothic"
  )
</template>

<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData('blog', () => {
  const slug = path.split('/').pop()
  return queryContent('blog').where({ slug: slug }).findOne()
})

useHead({
  title: data.value.title,
  meta: [
    {
      name: 'description',
      content: data.value.description,
    },
    { hid: 'og:image', name: 'og:image', property: 'og:image', content: data.value.image },
    { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: data.value.title },
    { hid: 'twitter:description	', name: 'twitter:description	', property: 'twitter:description	', content: data.value.description },
    { hid: 'twitter:image', name: 'twitter:image', property: 'twitter:image', content: data.value.image },
    { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
  ]
})

</script>
