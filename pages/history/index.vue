<template lang="pug">
.container.mx-auto.px-8.py-10
  div(
    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 self-center"
  )
    div(v-for="video in videos")
      a(:href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank")
        img(
          :src="`http://img.youtube.com/vi/${video.id}/hqdefault.jpg`"
        )
      .flex.justify-center.text-m.mt-2
        | {{ video.name }}

</template>

<script setup lang="ts">
const videos = [
  {
    id: "15bb4jO1Bd0",
    name: "775"
  },
  {
    id: "c7apuNjIRe0",
    name: "八十八ヶ所巡礼"
  },
  {
    id: "F4GAkjShwjE",
    name: "UVERworld"
  },
  {
    id: "364sC__BJ5Y",
    name: "The BONEZ"
  },
  {
    id: "l-33SkD_tnw",
    name: "マキシマム ザ ホルモン"
  },
  {
    id: "9rMRXyX11WE",
    name: "MIDICRONICA"
  },
  {
    id: "z6jU3xS7x9M",
    name: "Fuma no KTR & DJ WA-TA"
  },
  {
    id: "fsF9gvnmTWE",
    name: "TARO SOUL & KEN THE 390"
  },
  {
    id: "B-6Fb_zAofs",
    name: "ふぁんく"
  },
  {
    id: "ix9YBgjXcn0",
    name: "CHICO CARLITO"
  },
  {
    id: "VM4PrhgDZ7k",
    name: "テークエム"
  },
  {
    id: "N-e-uoy1-20",
    name: "FACT"
  },
  {
    id: "Jzg0oBf-47A",
    name: "BiSH"
  },
  {
    id: "xAYDP1RXwqk",
    name: "SKRYU"
  },
  {
    id: "1tO5Bifw6U4",
    name: "重盛さと美"
  },
  {
    id: "TAcyEyReKz0",
    name: "TABOO1 feat. 志人"
  },
  {
    id: "zFaV_FczgCE",
    name: "Mr.Children"
  },
  {
    id: "ueq2QFIIpu0",
    name: "不可思議/wonderboy"
  },
  {
    id: "ECIOEuRKCEA",
    name: "I Don't Like Mondays."
  },
  {
    id: "YXMIpk9cIc4",
    name: "MAN WITH A MISSION"
  },
  {
    id: "NUTGr5t3MoY",
    name: "Green Day"
  },
  {
    id: "V6LLSgyd7Cw",
    name: "Zebrahead"
  },
  {
    id: "m2a51Bx7WoU",
    name: "tacica"
  },
  {
    id: "0M3HoC2uGhM",
    name: "My Hair is Bad"
  },
  {
    id: "W7Kfli9c7lU",
    name: "The Mirraz"
  },
  {
    id: "JBmzU_qn_G8",
    name: "King Gnu"
  },
  {
    id: "scqDV8X5-Xk",
    name: "Hi-STANDARD"
  },
  {
    id: "DJZwSNPLxfc",
    name: "ELLEGARDEN"
  },
  {
    id: "f92VWkYl8CI",
    name: "the pillows"
  },
  {
    id: "9UBvB8joUeE",
    name: "ねごと"
  },
  {
    id: "--pQC5XH2-E",
    name: "パスピエ"
  },
  {
    id: "Y2MGtwB-oFc",
    name: "銀杏BOYZ"
  },
  {
    id: "z3rhE3kDpU0",
    name: "植田真梨恵"
  },
  {
    id: "nZK-M0BFmEI",
    name: "サンボマスター"
  },
  {
    id: "FjG4A3_whXY",
    name: "T-BOLAN"
  },
  {
    id: "2IZbzRj3CJk",
    name: "SOUL'd OUT"
  },
  {
    id: "Em-d1f55NPg",
    name: "WANIMA"
  },
  {
    id: "UVaZf3GliDs",
    name: "Creepy Nuts"
  },
  {
    id: "9C8hLpR4Aok",
    name: "しゅーじまん"
  },
]
</script>
