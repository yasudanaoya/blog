<template lang="pug">
.container.mx-auto.px-4.py-5
  div(
    class="mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3"
  )
    photo-card(
      :src="src"
      desc="very nice shoes"
    )
    photo-card(
      :src="src"
      desc="very nice shoes"
    )
    photo-card(
      :src="src"
      desc="very nice shoes"
    )
    photo-card(
      :src="src"
      desc="very nice shoes"
    )
    photo-card(
      :src="src"
      desc="very nice shoes"
    )
    photo-card(
      :src="src"
      desc="very nice shoes"
    )
</template>

<script setup lang="ts">
const src = 'https://api.lorem.space/image/shoes?w=400&h=225'
</script>
