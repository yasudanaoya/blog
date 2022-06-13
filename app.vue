<template lang="pug">
nuxt-layout
  nuxt-page
</template>

<script setup lang="ts">
const baseUrl = "yasudanaoya.com";
const title = "yasudanaoya's Site";
const description = "ブログを投稿したり、写真を投稿したりします。";
const image = "https://avatars.githubusercontent.com/u/43776161?v=4"

useHead({
  title: title,
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
    { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: title },
    { hid: 'twitter:description	', name: 'twitter:description	', property: 'twitter:description', content: description },
    { hid: 'twitter:image', name: 'twitter:image', property: 'twitter:image', content: image },
    { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>
