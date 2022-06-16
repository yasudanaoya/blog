<template lang="pug">
.drawer.drawer-end
  input#nav-drawer.drawer-toggle(type='checkbox')
  .drawer-content.flex.flex-col.h-full.justify-between
    Navbar(:tabs="props.tabs" ref="navbar")
    slot

  .drawer-side
    label.drawer-overlay(for='nav-drawer')
    ul.menu.p-4.overflow-y-auto.bg-base-100.rounded-l-2xl
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
})

const navbar = ref(null)
const click = () => {
  navbar.value.click()
}
</script>
