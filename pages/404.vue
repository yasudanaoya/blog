<template lang="pug">
div(class="flex flex-col justify-center items-center content-center")

  div(class="mockup-code w-1/2")
    pre(data-prefix="$")
      code {{ `ls ~/${requestValue}` }}
    pre.bg-error.text-error-content(data-prefix=">")
      code {{ `ls: ~/${requestValue}: No such file or directory` }}
</template>

<script setup lang="ts">
const { path } = useRoute()
const requestValue = path.replace('/', '')
</script>
