<template lang="pug">
nav.sticky.top-48.self-start.mr-4
  ul.text-sm
    li(v-for="item in toc")
      a.anchor-link(
        :href="`#${item.id}`"
        v-smooth-scroll
      )
        | {{ item.text }}
      ul(v-if='item.children')
        li.pl-3(v-for="child in item.children")
          a.anchor-link(:href="`#${child.id}`" v-smooth-scroll)
            | {{ nestLinkText(item.text, child.text) }}

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

const nestLinkText = (parent: string, child: string): string => {
  var re = new RegExp(`${parent} > `, 'g');
  return child.replace(re, '')
}
</script>
