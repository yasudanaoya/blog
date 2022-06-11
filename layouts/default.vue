<template lang="pug">
q-layout
  q-header(reveal elevated)
    q-toolbar
      q-tabs
        q-route-tab(name="home" icon="home" label="Home" to="/")
        q-route-tab(name="about" icon="face" label="About" to="/about")
        q-route-tab(name="blog" icon="newspaper" label="Blog" to="/blog")

      q-toolbar-title.absolute-center
        | My Blog

      div.fixed-right
        q-toggle(
          v-model="darkMode"
          size="xl"
          checked-icon="dark_mode"
          unchecked-icon="light_mode"
          @click="changeMode"
        )
  q-page-container
    slot
  q-footer(reveal elevated)
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
