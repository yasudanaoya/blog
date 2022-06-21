<template lang="pug">
div(class="flex flex-col justify-center items-center content-center p-10 z-0")
  .avatar.py-6
    .w-24.mask.mask-squircle
      img(src="/icon/illust.jpeg")
  article(class="prose lg:prose-xl w-full flex flex-col items-center")
    span VSCode 生まれ Neovim 育ち
    span HHKB 使ってるやつは大体友達

    .divider

    h2 History

    .relative.max-w-2xl
      div(class="absolute top-0 h-5/6 border-r-2 left-3 border-gray-500 dark:border-gray-400 my-4")
      template(v-for="history in histories")
        .flex.items-center
          span(class="w-6 h-6 rounded-full bg-gray-500 dark:bg-gray-400")
          h5(class="ml-4 font-bold text-gray-600 dark:text-gray-300")
            | {{ history.title }}
            span(class="text-sm text-gray-500 dark:text-gray-400 ml-2")
              | {{ history.term }}
        .ml-12
          p(class="text-sm whitespace-pre-wrap text-gray-500 dark:text-gray-400")
            | {{ history.body }}

    .divider

    div.flex.flex-col.justify-center.w-full
      div(class="flex flex-col w-full lg:flex-row")
        //- div(class="grid flex-grow card bg-base-300 rounded-box place-items-center")
        div(class="w-full md:w-1/2")
          h3 Tools

          .overflow-x-auto
            table.table.table-zebra.w-full
              thead
                tr
                  th Name
                  th Value
              tbody
                tr(
                  v-for="(item) in items"
                )
                  td {{ item.name }}
                  td {{ convertItemValue(item.value) }}

        div(class="divider lg:divider-horizontal")

        //- div(class="grid flex-grow card bg-base-300 rounded-box place-items-center")
        div(class="w-full md:w-1/2")
          h3 Skill
          .overflow-x-auto
            table.table.table-zebra.w-full
              thead
                tr
                  th Name
                  th Level
              tbody
                tr(
                  v-for="skill in skills"
                )
                  td {{ skill.name }}
                  td
                    rating(:value="skill.value")

    .divider
    h2 Resume
    p 詳しくは、
      a.link(href="https://yasudanaoya.github.io/resume/" target="_blank") こちら
      | をご覧ください
    //- a.link(href="https://yasudanaoya.github.io/resume/" target="_blank")
      | Resume

</template>

<script setup lang="ts">
type History = {
  title: string
  term: string
  body: string
}

const histories: History[] = [
  {
    title: 'セラク',
    term: '2017/4 ~ 2018/9',
    body: `Infrastructure`
  },
  {
    title: 'シアトルコンサルティング',
    term: '2018/10 ~ 2020/11',
    body: `WEB Application`
  },
  {
    title: 'WED',
    term: '2020/12 ~',
    body: `WEB Application`
  },
]

type Item = {
  name: string
  value: string | string[]
}

const items: Item[] = [
  { name: 'Keyboard', value: 'HHKB' },
  { name: 'Editor', value: ['Neovim', 'VSCode'] },
  { name: 'Terminal', value: ['iTeam2', 'Tmux'] },
  { name: 'Shell', value: 'zsh' },
  { name: 'PC', value: 'macOS' },
]

const convertItemValue = (value: string | string[]): string => {
  if (Array.isArray(value)) {
    return value.join(', ')
  } else {
    return value
  }
}

type Skill = {
  name: string
  value: number
}

const skills: Skill[] = [
  { name: 'JavaScript', value: 4 },
  { name: 'TypeScript', value: 4 },
  { name: 'Vue.js', value: 4 },
  { name: 'Nuxt.js', value: 4 },
  { name: 'React', value: 3 },
  { name: 'Go', value: 3 },
  { name: 'Lua', value: 2 },
  { name: 'Ruby', value: 1 },
  { name: 'Flutter', value: 1 },
]
</script>
