<template lang="pug">
div(class="lg:grid lg:grid-cols-[1fr_auto]")
  ContentRenderer(
    :value="data"
    class="m-10 prose lg:prose-xl font-notosanjp"
  )
  table-of-contents(
    :toc="data.body.toc.links"
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
