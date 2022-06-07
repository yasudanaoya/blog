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

</template>
