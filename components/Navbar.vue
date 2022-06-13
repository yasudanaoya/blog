<template lang="pug">
nav.sticky.top-0.backdrop-blur
  div(class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center")
    div(class="flex items-center justify-between")
      div
        nuxt-link(
          class="text-xl font-dotgothic transition-colors duration-200 transform lg:text-3xl hover:text-sky-300"
          to="/"
        ) waino BLOG desu
      div(class="flex md:hidden")
        button(
          type="button"
          class="hover:text-sky-300"
          aria-label="toggle menu"
          @click="onToggle"
        )
          font-awesome-icon(icon="bars")
    div(
      class="items-center md:flex"
      :class="open ? 'block' : 'hidden'"
    )
      div(class="flex flex-col md:flex-row md:mx-6")
        nuxt-link(
          v-for="tab in tabs"
          :key="tab.path"
          :to="tab.path"
          :class="{ 'text-sky-300': isActive(tab.path) }"
          class="my-1 text-sm font-medium transition-colors duration-200 transform hover:text-sky-300 md:mx-4 md:my-0"
        )
          | {{ tab.name }}

  //- .navbar-center
  //-   nuxt-link(
  //-     class="text-xl font-dotgothic hover:text-sky-300"
  //-   )
  //-     | waino BLOG desu

  //- .navbar-end
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

const open = ref(false)
const onToggle = () => {
  open.value = !open.value
}
</script>
