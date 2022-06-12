<template lang="pug">
ul.text-sm
  li(
    v-for="item in props.toc"
    class="pl-3 my-1 truncate w-64"
  )
    a(
      :href="`#${item.id}`"
      class="w-2 truncate hover:text-sky-300"
      v-smooth-scroll
    ) {{ item.text }}
    ul(v-if='item.children')
      li(
        v-for="child in item.children"
        class="pl-3 my-1 truncate w-60"
      )
        a(
          :href="`#${child.id}`"
          class="hover:text-sky-300"
          v-smooth-scroll
        ) {{ child.text }}

</template>

<script setup lang="ts">
type ToC = {
  id: String,
  text: String,
  children?: ToC[]
}

const props = defineProps({
  toc: Array<ToC>,
})
</script>
