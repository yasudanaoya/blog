<template lang="pug">
footer(class="footer footer-center p-4 bg-base-300 text-base-content rounded invisible md:visible")
  div(class="grid grid-flow-col gap-6 lg:h-12 content-center")
    a(
      v-for="link in props.links"
      :href="link.href"
      target="_blank"
    )
      font-awesome-icon(
        :icon="link.icon"
        class="text-lg lg:text-3xl transition duration-200 ease-in-out hover:scale-110"
      )
</template>

<script setup lang="ts">
const props = defineProps({
  links: {
    type: Array<{
      href: string
      icon: string | string[]
    }>,
    required: true,
  },
})
</script>
