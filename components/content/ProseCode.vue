<template lang="pug">
div.relative
  span(
    v-if="language"
    class="absolute top-0 py-2 px-4 text-xs text-gray-100 bg-zinc-500 dark:bg-gray-800 rounded-br-lg"
  ) {{ language }}
  slot
  label(
    class="absolute top-0 right-4 normal-case btn btn-ghost rounded-btn hover:text-rose-600  dark:hover:text-sky-300 hover:bg-inherit"
    ref='btn'
    @click="onClick"
  )
    span.mr-2(v-if="copied") Copied code!
    span.mr-2(v-else-if="isHovered") Copy
    font-awesome-icon(icon="copy" v-element-hover="onHover")
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';
import { vElementHover } from "@vueuse/components"

const isHovered = ref(false)
function onHover(state: boolean) {
  isHovered.value = state
}

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
  pre {
    padding-top: 2.1111111em !important;
    code .line {
      display: block;
      min-height: 1rem;
    }
  }
</style>
