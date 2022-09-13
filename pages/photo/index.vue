<template lang="pug">
.container.mx-auto.px-4.py-5
  div(
    class="columns-2 md:columns-3 lg:columns-4"
  )
    img.mb-4(
      v-for="img in imgPaths()"
      :src="img"
    )
</template>

<script setup lang="ts">
useHead({
  title: 'Photo'
})

// TODO: supabase storage から取得
const imgs = [
  "202205_shizuoka.jpeg",
  "202205_shizuoka2.jpeg",
  "202205_shizuoka3.jpeg",
  "2020_kyoto.jpeg",
  "2022_gyoen.jpeg",
  "2022_chofu_ airfield.jpeg",
  "snowborad.jpeg",
  "2022_ sunset.jpeg",
  "2022_Mt_fuji.jpeg",
  "2022_Mt_fuji2.jpeg",
  "2022_okinawa.jpeg",
  "2022_solo_camp.jpeg",
]
const imgPaths = () => {
  return imgs.map((img) => {
    return `https://icxboltnnvznqlpuzkyg.supabase.co/storage/v1/object/public/photos/${img}`
  })
}
</script>
