<template lang="pug">
footer.footer.footer-center.p-6.bg-base-300.text-base-content.rounded
  div(class="grid grid-flow-col gap-6 lg:h-16 content-center")
    a(
      class="lg:mx-2"
      v-for="link in props.links"
      :href="link.href"
      target="_blank"
    )
      font-awesome-icon(
        :icon="link.icon"
        class="text-lg lg:text-4xl transition duration-200 ease-in-out hover:scale-110"
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
