<template lang="pug">
q-page(padding)
  div.q-pa-md.row.items-start.q-gutter-md
    q-card.card.cursor-pointer(
      v-for="content of contents"
      :key="content.id"
    )
      nuxt-link(:to="`/blog/${content.slug}`")
        q-img(:src="content.thumbnail")
          div.absolute-bottom.text-subtitle2.text-center
            | {{ content.title }}

</template>

<script setup lang="ts">
type Content = {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  tag: string[]; // TODO: show tags
  created_at: string;
};

const client = useSupabaseClient()

const { data: contents } = await useAsyncData('contents', async () => {
  const { data } = await client.from<Content>('contents').select('*').order('created_at')

  return data
})
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 33%;
}
</style>
