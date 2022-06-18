<template lang="pug">
nuxt-layout
  nuxt-page
</template>

<script setup lang="ts">
const baseUrl = "yasudanaoya.com";
const title = "yasudanaoya's Site";
const description = "ブログを投稿したり、写真を投稿したりします。";
const image = "https://lh3.googleusercontent.com/pw/AM-JKLXX1eYtNBXm1RUXXyT4R59fYtSNaFrb8nF6MMTGIyKYBt-bWI0fHojfwhGqOUc3OsSe-PRJEk7LRENqbE0kYfCjhm4UEfaxD-xpASTGE_SYnglW8iNO_QK2WyRUqYdcfE_QxRRZHzTlDNpDiWWRnE8=s822-no?authuser=0"

useHead({
  htmlAttrs: {
    class: 'html-class'
  },
  bodyAttrs: {
    class: 'body-class'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk !== title ? `${titleChunk} - ${title}` : title;
  },
  title,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "ブログを投稿したり、写真を投稿したりします。",
    },
    {
      hid: "og:site_name",
      property: "og:site_name",
      content: title,
    },
    { hid: "og:type", property: "og:type", content: "website" },
    { hid: "og:url", property: "og:url", content: baseUrl },
    { hid: "og:title", property: "og:title", content: title },
    {
      hid: "og:description",
      property: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: image,
    },
    { hid: 'twitter:title', property: 'twitter:title', content: title },
    { hid: 'twitter:description', property: 'twitter:description', content: description },
    { hid: 'twitter:image', property: 'twitter:image', content: image },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<style lang="scss">
.body-class {
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
}

.html-class {
  height: -webkit-fill-available;
}
</style>
