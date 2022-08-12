<template lang="pug">
.container.mx-auto.px-4.py-5
  div(
    class="columns-2 md:columns-3 lg:columns-4"
  )
    img.mb-4(
      v-for="img in imgs"
      :src="img"
    )
</template>

<script setup lang="ts">
useHead({
  title: 'Photo'
})

// TODO: supabase storage から取得
const imgs = [
  "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/79659325-0B00-4321-A27A-19D44C9108CF_1_105_c.jpeg",
  "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/36A88942-9029-4C22-A780-15C8D76BCB4C_1_105_c.jpeg",
  "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/FC97D139-1CA7-46B4-9E63-797ACE4A45EE_1_105_c.jpeg",
  "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/954E28BD-3B91-4733-BEF7-21FD0450FE5F_1_105_c.jpeg",
  "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/D521B25F-7D18-4909-BFCC-7DEC787021EC_1_105_c.jpeg",
  "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/18F12F7B-0ED7-4A52-9BB2-1765147BC82D_1_105_c.jpeg",
  "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/E9EE9CB9-A7E0-457A-A970-445296BC2E47_1_105_c.jpeg",
]
</script>
