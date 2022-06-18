<template lang="pug">
.container.mx-auto.px-4.py-5
  //- div(
  //-   class="mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3"
  //- )
    photo-card(
      v-for="img in images"
      :src="img.src"
      :desc="img.desc"
    )


  .carousel.rounded-box(
    :style="{ height: '37rem' }"
  )
    .carousel-item(
      v-for="img in images"
    )
      img(:src="img.src")
</template>

<script setup lang="ts">
useHead({
  title: 'PHOTO'
})

// TODO: supabase storage から取得
const images = [
  {
    src: "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/79659325-0B00-4321-A27A-19D44C9108CF_1_105_c.jpeg",
    desc: 'カメラを買って嬉しいので調布飛行場で飛行機を撮った'
  },
  {
    src: "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/36A88942-9029-4C22-A780-15C8D76BCB4C_1_105_c.jpeg",
    desc: 'スノボに GitHub のステッカーを貼った'
  },
  {
    src: "https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/FC97D139-1CA7-46B4-9E63-797ACE4A45EE_1_105_c.jpeg",
    desc: '春の終わりに御苑で'
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
