<template lang="pug">
.navbar.sticky
  .navbar-start
  .navbar-center
    a.btn.btn-ghost.normal-case.text-xl.font-dotgothic
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
]

const route = useRoute()

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.match(new RegExp(path))
}
</script>
