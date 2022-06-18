<template lang="pug">
nav(class="w-full navbar sticky top-0 backdrop-blur z-10 h-10")
  .navbar-start

  .navbar-center
    div(class="container py-4 md:flex md:justify-between md:items-center")
      div(class="flex items-center justify-between")
        nuxt-link(
          class="text-xl font-dotgothic transition-colors duration-200 transform lg:text-3xl hover:text-rose-600  dark:hover:text-sky-300"
          to="/"
        ) waino BLOG desu

  .navbar-end
    div(class="flex-none lg:hidden")
      label(class="btn btn-ghost rounded-btn hover:text-rose-600  dark:hover:text-sky-300 hover:bg-inherit" for='nav-drawer' ref='btn')
        font-awesome-icon(icon="bars")
    div(class="flex-none hidden lg:block")
      div(class="tabs flex-none hidden lg:block")
        nuxt-link(
          v-for="tab in props.tabs"
          :key="tab.path"
          :to="tab.path"
          class="tab hover:text-rose-600  dark:hover:text-sky-300"
          :class="{ 'tab-active hover:text-inherit': isActive(tab.path) }"
        ) {{ tab.name }}
</template>

<script setup lang="ts">
type Tab = {
  name: string
  path: string
}

const props = defineProps({
  tabs: {
    type: Array<Tab>,
    required: true,
  },
})

const route = useRoute()
const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.match(new RegExp(path))
}

const btn = ref(null)
const click = () => {
  btn.value.click()
}
defineExpose({
  click,
})
</script>
