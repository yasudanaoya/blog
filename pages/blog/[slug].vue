<template lang="pug">
div(class="lg:grid lg:grid-cols-[1fr_auto] p-10")
  div.flex.justify-center
    content-doc(
      class="prose lg:prose-xl font-notosanjp"
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
const config = useRuntimeConfig()

const { data } = await useAsyncData('blog', () => {
  const slug = path.split('/').pop()
  return queryContent('blog').where({ slug: slug }).findOne()
})

// const image = "https://lh3.googleusercontent.com/pw/AM-JKLXX1eYtNBXm1RUXXyT4R59fYtSNaFrb8nF6MMTGIyKYBt-bWI0fHojfwhGqOUc3OsSe-PRJEk7LRENqbE0kYfCjhm4UEfaxD-xpASTGE_SYnglW8iNO_QK2WyRUqYdcfE_QxRRZHzTlDNpDiWWRnE8=s822-no?authuser=0"
// const img = `https:${data.value.image}`
const img = data.value.image ? `${config.public.BASE_URL}/thumbnail/${data.value.image}` : `${config.public.BASE_URL}/ogp/${data.value.slug}.png`

useHead({
  title: data.value.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: data.value.description,
    },
    { hid: 'og:type', property: 'og:type', content: 'blog' },
    { hid: "og:title", property: "og:title", content: data.value.title },
    {
      hid: "og:description",
      property: "og:description",
      content: data.value.description,
    },
    { hid: 'og:url', property: 'og:url', content: `${config.public.BASE_URL}${path}` },
    { hid: "og:image", property: "og:image", content: img },
    { hid: 'twitter:title', property: 'twitter:title', content: data.value.title },
    { hid: 'twitter:description	', property: 'twitter:description	', content: data.value.description },
    { hid: 'twitter:image', property: 'twitter:image', content: img },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
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
