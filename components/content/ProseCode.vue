<template lang="pug">
div.relative
  slot
  label(
    class="absolute top-0 right-4 normal-case btn btn-ghost rounded-btn hover:text-rose-600  dark:hover:text-sky-300 hover:bg-inherit"
    ref='btn'
    @click="onClick"
  )
    span.mr-2(v-if="copied") Copied code!
    span.mr-2(v-else="copied") Copy
    font-awesome-icon(icon="copy")
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const { copy, copied } = useClipboard();

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: ''
  },
  filename: {
    type: String,
    default: ''
  }
})

const onClick = () => {
  copy(props.code)
}

</script>

<style lang="scss">
  pre code .line {
    display: block;
    min-height: 1rem;
  }
</style>
