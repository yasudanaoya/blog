<template lang="pug">
drawer(:tabs="tabs" :links="links")
  slot
  app-footer(:links="links")
</template>

<script setup lang="ts">
import { tabs, links } from '@/assets/scripts/link'
</script>
