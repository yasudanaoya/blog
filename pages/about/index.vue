<template lang="pug">
div(class="flex flex-col justify-center items-center content-center p-10 z-0")
  article(class="prose lg:prose-xl w-full flex flex-col items-center")
    span VSCode 生まれ Neovim 育ち
    span HHKB 使ってるやつは大体友達

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
