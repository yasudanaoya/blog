<template lang="pug">
nav.w-full.navbar.sticky.top-0.backdrop-blur
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
    div(class="hidden lg:flex")
      div(class="tabs flex-none hidden lg:block")
        nuxt-link(
          v-for="tab in props.tabs"
          :key="tab.path"
          :to="tab.path"
          class="tab hover:text-rose-600  dark:hover:text-sky-300"
          :class="{ 'tab-active hover:text-inherit': isActive(tab.path) }"
        ) {{ tab.name }}
      .divider.divider-horizontal
      label.swap.swap-rotate
        input(type="checkbox" @click="onClick" :value="isDark")
        font-awesome-icon(
          class="swap-off fill-current w-10 h-10"
          icon="sun"
        )
        font-awesome-icon(
          class="swap-on fill-current w-10 h-10"
          icon="moon"
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
})

const colorMode = useColorMode()
const isDark = ref(colorMode.preference === 'dark')
const onClick = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}

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
