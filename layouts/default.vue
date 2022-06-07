<template lang="pug">
q-header(elevated)
  q-toolbar
    q-avatar
      img(src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg")
    q-toolbar-title
      | Quasar Framework

    q-tabs
      q-route-tab(name="home" icon="home" label="Home" to="/")
      q-route-tab(name="about" icon="face" label="About" to="/about")
      q-route-tab(name="blog" icon="newspaper" label="Blog" to="/blog")

</template>

<style lang="scss" scoped>
.q-tabs__arrow {
  // NOTE: this is a workaround for the issue with the q-tabs component
  display: none;
}
</style>
