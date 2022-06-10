<template lang="pug">
q-page(padding)
  div.q-pa-md.row.items-start.q-gutter-md
    q-card.card.cursor-pointer(
      v-for="d in data"
      :key="d._id"
    )
      //- nuxt-link(:to="`/blog/${d.id}`")
      //- q-img(:src="d.src")
      //- q-img(src="https://gilberttanner.com/content/images/size/w1920/2020/10/post_page.png")
      q-img(:src="d.image")
        div.absolute-bottom.text-subtitle2.text-center
          | {{ d.title }}

</template>

<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryContent('/blog').find())
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 33%;
}
</style>
