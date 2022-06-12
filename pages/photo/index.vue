<template lang="pug">
.container.mx-auto.px-4.py-5
  div(
    class="mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3"
  )
    photo-card(
      v-for="img in images"
      :src="img.src"
      :desc="img.desc"
    )
</template>

<script setup lang="ts">

// TODO: supabase storage から取得
const images = [
  {
    src: "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/8663C565-A04C-4387-8262-B22FF380309E_1_105_c.jpeg",
    desc: 'スノボに GitHub のステッカーを貼った'
  },
  {
    src: "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/954E28BD-3B91-4733-BEF7-21FD0450FE5F_1_105_c.jpeg",
    desc: '静岡旅行 薩埵峠からの景色',
  },
  {
    src: "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/D521B25F-7D18-4909-BFCC-7DEC787021EC_1_105_c.jpeg",
    desc: '年末の京都 自粛もあってかなり静か'
  }
]
</script>
