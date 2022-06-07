<template lang="pug">
div
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

      q-toggle(
        v-model="darkMode"
        size="xl"
        checked-icon="dark_mode"
        unchecked-icon="light_mode"
        @click="changeMode"
      )
  slot
  q-footer(elevated)
    q-toolbar
      q-toolbar-title
        | Footer
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
const q = useQuasar();

const darkMode = ref(false);

const changeMode = async (): Promise<void> => {
  q.dark.set(darkMode.value);
};
</script>

<style lang="scss" scoped>
.q-tabs__arrow {
  // NOTE: this is a workaround for the issue with the q-tabs component
  display: none;
}
</style>
