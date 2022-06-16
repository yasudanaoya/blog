<template lang="pug">
.drawer.drawer-end
  input#nav-drawer.drawer-toggle(type='checkbox')
  .drawer-content.flex.flex-col.h-full.justify-between
    Navbar(:tabs="props.tabs" ref="navbar")
    slot

  .drawer-side
    label.drawer-overlay(for='nav-drawer')
    .menu.p-4.overflow-y-auto.bg-base-100.rounded-l-2xl.flex.flex-col.justify-between
      ul
        li(
          v-for="tab in props.tabs"
          :key="tab.path"
        )
          nuxt-link(
            @click.native="click"
            :to="tab.path"
            class="active:bg-inherit active:text-inherit hover:bg-inherit hover:text-rose-600  dark:hover:text-sky-300"
          )
            | {{ tab.name }}
      .grid.grid-cols-2.gap-2
        a(
          class="lg:mx-2 text-center"
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
  tabs: {
    type: Array<{
      name: string
      path: string
    }>,
    required: true,
  },
  links: {
    type: Array<{
      href: string,
      icon: string | string[]
    }>,
    required: true,
  }
})

const navbar = ref(null)
const click = () => {
  navbar.value.click()
}
</script>
