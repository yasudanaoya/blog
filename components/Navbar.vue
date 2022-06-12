<template lang="pug">
nav.navbar.sticky.top-0.backdrop-blur
  .navbar-start
  .navbar-center
    nuxt-link(
      to="/"
      class="text-xl font-dotgothic hover:text-sky-300"
    )
      | waino BLOG desu

  .navbar-end
    .tabs
      nuxt-link.tab(
        v-for="tab in tabs"
        :to="tab.path"
        :class="{ 'tab-active': isActive(tab.path) }"
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

const route = useRoute()

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.match(new RegExp(path))
}
</script>
