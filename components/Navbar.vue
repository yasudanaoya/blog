<template lang="pug">
.drawer.drawer-end
  input#nav-drawer.drawer-toggle(type='checkbox')
  .drawer-content.flex.flex-col
    .w-full.navbar.bg-base-300
      .navbar-start

      .navbar-center
        div(class="container py-4 md:flex md:justify-between md:items-center")
          div(class="flex items-center justify-between")
            nuxt-link(
              class="text-xl font-dotgothic transition-colors duration-200 transform lg:text-3xl hover:text-sky-300"
              to="/"
            ) waino BLOG desu

      .navbar-end
        div(class="flex-none lg:hidden")
          label.btn.btn-square.btn-ghost(for='nav-drawer' ref='btn')
            font-awesome-icon(icon="bars")
        div(class="flex-none hidden lg:block")
          div(class="tabs flex-none hidden lg:block")
            nuxt-link(
              v-for="tab in tabs"
              :key="tab.path"
              :to="tab.path"
              :class="{ 'tab-active': isActive(tab.path) }"
              class="tab"
            ) {{ tab.name }}
    slot

  .drawer-side
    label.drawer-overlay(for='nav-drawer')
    ul.menu.p-4.overflow-y-auto.w-80.bg-base-100
      li(
        v-for="tab in tabs"
        :key="tab.path"
      )
        nuxt-link(
          @click.native="click"
          :to="tab.path"
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


const btn = ref(null)
const click = () => {
  btn.value.click()
}

const route = useRoute()
const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.match(new RegExp(path))
}
</script>
