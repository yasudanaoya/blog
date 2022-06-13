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
      div(class="block md:hidden")
        Menu
          div
            menu-button(class="btn btn-ghost rounded-btn hover:text-sky-300")
              font-awesome-icon(icon="bars")
          transition(
            enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
          )
            menu-items(
              class="absolute right-0 p-2 shadow bg-base-300 rounded-box ring-opacity-5 focus:outline-none"
            )
              .px-1.py-1
                menu-item(
                  v-for="tab in tabs"
                  :key="tab.path"
                  v-slot="{ active }"
                )
                  nuxt-link(
                    :class="{ 'text-sky-300': active }"
                    class="my-1 text-sm font-medium group flex w-full px-2 transition-colors duration-200 transform md:mx-4 md:my-0"
                    :to="tab.path"
                  ) {{ tab.name }}

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
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
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
