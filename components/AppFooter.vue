<template lang="pug">
footer.footer.footer-center.p-6.bg-base-200.text-base-content.rounded.bottom-0
  div
    .grid.grid-flow-col.gap-4.h-16.content-center
      a(
        v-for="link in links"
        :href="link.href"
        target="_blank"
      )
        font-awesome-icon(
          :icon="link.icon"
          class="text-4xl transition duration-200 ease-in-out hover:scale-110"
        )
</template>

<script setup lang="ts">
const links = [
  {
    icon: ['fab', 'twitter'],
    href: 'https://twitter.com/708yasuda',
  },
  {
    icon: ['fab', 'github'],
    href: 'https://github.com/yasudanaoya'
  },
  {
    icon: ['fab', 'facebook'],
    href: 'https://www.facebook.com/naoya.yasuda.50'
  },
]
</script>

<style lang="scss">
// .icon:hover {
//   color: skyblue;
// }
</style>
