<template lang="pug">
nav
  .navbar.sticky.top-0.backdrop-blur
    .navbar-start

    .navbar-center
      div(class="container py-4 md:flex md:justify-between md:items-center")
        div(class="flex items-center justify-between")
          div
            nuxt-link(
              class="text-xl font-dotgothic transition-colors duration-200 transform lg:text-3xl hover:text-sky-300"
              to="/"
            ) waino BLOG desu

    .navbar-end
      div(class="block md:hidden dropdown dropdown-end")
        label(
          class="btn btn-ghost rounded-btn hover:text-sky-300"
          tabindex="0"
        )
          font-awesome-icon(icon="bars")
        ul(
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-300 rounded-box"
        )
          li
            nuxt-link(
              v-for="tab in tabs"
              :key="tab.path"
              :to="tab.path"
              :class="{ 'text-sky-300': isActive(tab.path) }"
              class="my-1 text-sm font-medium transition-colors duration-200 transform hover:text-sky-300 md:mx-4 md:my-0"
            )
              | {{ tab.name }}

      div(class="tabs hidden md:block")
        nuxt-link(
          v-for="tab in tabs"
          :key="tab.path"
          :to="tab.path"
          :class="{ 'tab-active': isActive(tab.path) }"
          class="tab"
        ) {{ tab.name }}
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

const open = ref(false)
const onToggle = () => {
  open.value = !open.value
}
</script>
