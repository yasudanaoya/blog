<template lang="pug">
q-page(padding)
  h1.title {{ content.title }}

</template>

<script setup lang="ts">
export type Content = {
  title: string;
  body: string;
  slug: string;
  thumbnail: string;
  tag: string[];
  created_at: string;
};

const client = useSupabaseClient()
const route = useRoute()

const slug = route.params.slug

const { data: content } = await useAsyncData('contents', async () => {
  const { data } = await client.from<Content>('contents').select('*').eq('slug', slug).limit(1).single()

  return data
})

console.log(content)
</script>
