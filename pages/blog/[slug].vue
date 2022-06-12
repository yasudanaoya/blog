<template lang="pug">
div(class="lg:grid lg:grid-cols-[1fr_auto]")
  div.flex.justify-center
    content-doc(
      class="m-10 prose lg:prose-xl font-notosanjp"
    )
  div(class="w-60 sticky top-48 self-start mr-12 hidden lg:block")
    template(v-if="data.body")
      table-of-contents(
        :toc="toc"
      )
    template(v-else)
      div.flex.justify-center
        div.animate-spin.h-10.w-10.border-4.border-blue-500.rounded-full.border-t-transparent
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

const toc = ref([])
onMounted(() => {
  if (data.value.body) {
    toc.value = data.value.body.toc.links
  } else {
    location.reload()
  }
})

</script>
