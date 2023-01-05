<template lang="pug">
div(class="lg:grid lg:grid-cols-[1fr_auto] p-10")
  div.flex.flex-col.justify-center
    article(class="doc prose break-words lg:prose-xl font-sawarabi self-center")
      h1 {{ data.title }}
      content-doc
    div(
      class="flex lg:hidden mt-10 justify-center"
    )
      button.btn.rounded-full.btn-outline(
        @click="onClickShare"
      )
        font-awesome-icon(icon="share-alt")
  div(class="w-60 sticky top-48 self-start pl-4 mr-12 hidden lg:block")
    template(v-if="data.body")
      table-of-contents(
        :toc="toc"
      )
      .flex.justify-center.mt-10
        button.btn.rounded-full.btn-outline(
          @click="onClickShareTwitter"
        )
          font-awesome-icon(:icon="['fab', 'twitter']")

    template(v-else)
      div.flex.justify-center
        div.animate-spin.h-10.w-10.border-4.border-blue-500.rounded-full.border-t-transparent
</template>

<script setup lang="ts">
const { path } = useRoute()
const config = useRuntimeConfig()

const { data } = await useAsyncData('blog', () => {
  const filename = path.split('/').pop()
  return queryContent('blog', filename).findOne()
})

// const img = `${config.public.BASE_URL}/thumbnail/${data.value.image}`

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
    // { hid: "og:image", property: "og:image", content: img },
    { hid: 'twitter:title', property: 'twitter:title', content: data.value.title },
    { hid: 'twitter:description	', property: 'twitter:description	', content: data.value.description },
    // { hid: 'twitter:image', property: 'twitter:image', content: img },
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

const onClickShare = () => {
  if (navigator.share) {
    navigator.share({
      title: data.value.title,
      text: data.value.title,
      url: location.href,
    })
  }
}

const onClickShareTwitter = () => {
  const baseUrl = 'https://twitter.com/intent/tweet?'
  const text = ['text', data.value.title]
  const url = ['url', location.href]
  const parameter = new URLSearchParams([text, url]).toString()
  const shareUrl = `${baseUrl}${parameter}`
  window.open(shareUrl, 'twitter', 'top=200,left=300,width=600,height=400')
}

</script>

<style lang="scss">
  .doc {
    max-width: 30ch;

    h1 {
      line-height: 1.2;
    }
  }
  @media screen and (min-width: 1024px) {
    .doc {
      max-width: 64ch;
    }
  }
</style>
