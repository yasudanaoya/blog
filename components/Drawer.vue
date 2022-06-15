<template lang="pug">
.drawer.drawer-end
  input#nav-drawer.drawer-toggle(type='checkbox')
  .drawer-content.flex.flex-col.min-h-screen.h-full.justify-between
    Navbar(:tabs="tabs" ref="navbar")
    slot

  .drawer-side
    label.drawer-overlay(for='nav-drawer')
    ul.menu.p-4.overflow-y-auto.bg-base-100.rounded-l-2xl
      li(
        v-for="tab in tabs"
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
const tabs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Photo',
    path: '/photo',
  },
]


const navbar = ref(null)
const click = () => {
  navbar.value.click()
}
</script>
