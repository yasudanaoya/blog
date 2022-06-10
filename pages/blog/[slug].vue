<template lang="pug">
q-page(padding)
  content-doc

</template>

<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData('blog', () => {
  const slug = path.split('/').pop()
  return queryContent('blog').where({ slug: slug }).findOne()
})

console.log(data.value)

useHead({
  title: data.value.title,
  meta: [
    {
      name: 'description',
      content: data.value.description,
    },
    { hid: 'og:image', name: 'og:image', property: 'og:image', content: data.value.image },
    { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
  ]
})

</script>
