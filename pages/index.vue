<template lang="pug">
div(class="flex flex-col justify-center items-center content-center")
  div(class="mockup-code w-1/2")
    pre(data-prefix="$")
      code {{ command }}
      code(v-if="!typed") |
    template(v-if="!isFinish")
      pre.text-warning(v-if="typed" data-prefix=">")
        code installing...
      pre
        code {{ "#".repeat(inProgress) }}
    pre.text-success(v-if="isFinish" data-prefix=">")
      code Finish!

    template(v-if="hello")
      pre(class="hidden md:block")
        code  _   _      _ _
      pre(class="hidden md:block")
        code | | | | ___| | | ___
      pre(class="hidden md:block")
        code | |_| |/ _ \ | |/ _ \
      pre(class="hidden md:block")
        code |  _  |  __/ | | (_) |
      pre(class="hidden md:block")
        code |_| |_|\___|_|_|\___/

      pre(class="hidden md:block")
        code __        __         _     _
      pre(class="hidden md:block")
        code \ \      / /__  _ __| | __| |
      pre(class="hidden md:block")
        code  \ \ /\ / / _ \| '__| |/ _` |
      pre(class="hidden md:block")
        code   \ V  V / (_) | |  | | (_| |
      pre(class="hidden md:block")
        code    \_/\_/ \___/|_|  |_|\__,_|
</template>

<script setup lang="ts">
const command = ref("")
const typed = ref(false)

onMounted(() => {
  const value = "get yanskun".split("")
  const interval = setInterval(() => {
    command.value = command.value + value.shift()
    if (value.length === 0) {
      clearInterval(interval)
      setTimeout(() => {
        typed.value = true
      }, 400)
    }
  }, 30)
})


const inProgress = ref(0)
const isFinish = ref(false)
const hello = ref(false)

onMounted(() => {
  const itd = setInterval(() => {
    if (typed.value) {
      inProgress.value++
      if (inProgress.value > 20) {
        clearInterval(itd)
        setTimeout(() => {
          isFinish.value = true
          setTimeout(() => {
            hello.value = true
          }, 600)
        }, 600)
      }
    }
  }, 50)
})


</script>
