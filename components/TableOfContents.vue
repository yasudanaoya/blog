<template lang="pug">
div(
  class="sticky top-48 self-start mr-4 hidden lg:block"
)
  ul.text-sm
    li(v-for="item in toc")
      a(
        :href="`#${item.id}`"
        class="hover:text-sky-300"
        v-smooth-scroll
      ) {{ item.text }}
      ul(v-if='item.children')
        li.pl-3(v-for="child in item.children")
          a(
            :href="`#${child.id}`"
            class="hover:text-sky-300"
            v-smooth-scroll
          ) {{ nestLinkText(item.text, child.text) }}

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

const toc = props.toc.map(item => {
  if (item.children) {
    return {
      ...item,
      children: item.children.map(child => {
        return {
          ...child,
          text: `${item.text} > ${child.text}`
        }
      })
    }
  }
  return {
    ...item,
    text: `${item.text}`
  }
})

const nestLinkText = (parent: String, child: String): string => {
  var re = new RegExp(`${parent} > `, 'g');
  return child.replace(re, '')
}
</script>
