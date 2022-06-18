<template lang="pug">
drawer(:tabs="tabs" :links="links")
  div(class="flex flex-col justify-center items-center content-center")

    div(class="mockup-code w-1/2")
      pre(data-prefix="$")
        code {{ `ls ~/${requestValue}` }}
      pre.bg-error.text-error-content(data-prefix=">")
        code {{ `ls: ~/${requestValue}: No such file or directory` }}
  app-footer(:links="links")
</template>

<script setup lang="ts">
const { path } = useRoute()
const requestValue = path.replace('/', '')

const tabs = [
  {
    name: 'TOP',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Photo',
    path: '/photo',
  },
]

const links = [
  {
    icon: ['fab', 'twitter'],
    href: 'https://twitter.com/708yasuda',
  },
  {
    icon: ['fab', 'github'],
    href: 'https://github.com/yasudanaoya'
  },
  {
    icon: ['fab', 'facebook'],
    href: 'https://www.facebook.com/naoya.yasuda.50'
  },
  {
    icon: 'feed',
    href: 'https://rss.app/feeds/IHpvnKKhP0zP0f4i.xml'
  }
]
</script>
