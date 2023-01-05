---
title: Nuxt Content で作ってるブログにある、コードブロックの内容をコピーできるボタンを用意した
date: 2022-09-10
tags:
  - Nuxt Content
  - vueuse
icon: 📎
---

Qiita とかを見てると、コードブロックの内容をコピーできるボタンが右上にくっついてることが多い。

けど僕のブログにはない。
よくない。

作ろう。

## Override Default Component

https://github.com/nuxt/content/issues/1421#issuecomment-1218167791

`./components/content/` 配下にファイルを作成すると、
Nuxt Content で用意されている default の Component を上書きすることができる。

今回は
`./components/content/ProseCode.vue` を作成した。

### まずは雛形を作成

作成するにあたって、
https://github.com/nuxt/content/blob/main/src/runtime/components/Prose/ProseCode.vue の内容をコピーする。

```vue[./components/Prose/ProseCode.vue]
<template lang="pug">
  slot
</template>

<style lang="scss">
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
```

### コピーボタンを用意する

コピーボタンを用意するにあたって、準備が必要である。
VueUse を使う。

https://vueuse.org/

ここでは、VueUse の `useClipboard` を使う

```vue{1,2}[./components/Prose/ProseCode.vue]
<template lang="pug">
  div.code-block
    slot
    button(@click="onClick")
</template>

<script lang="ts">
import { useClipboard } from '@vueuse/core';

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
})

const { copy } = useClipboard();

const onClick = () => {
  copy(props.code)
}

</script>

<style lang="scss">
  .code-block {
    pre {
      padding-top: 2.1111111em !important;
      code .line {
        display: block;
        min-height: 1rem;
      }
    }
  }
</s>
```

これで終わり。

#### 簡単な解説

`useClipboard` から `copy` を取得している。

copy は文字通り、コピーをしてくれる関数である。
引数にコピーしたい値を渡すと、クリップボードにコピーしてくれる。

ので、今回は props から受け取った `code` を渡して、click event でコピーを実行するようにした。

以上。

### せっかくなので色々やる

- ファイル名を表示
- ファイル名がない場合は、ファイルタイプを表示
- コピーボタンをホバーしたら、「コピーできるよー」ってテキストを表示
- コピーが完了したら、終わった旨を表示

```vue[./components/Prose/ProseCode.vue]
<template lang="pug">
div.code-block.relative
  span(
    v-if="filename"
    class="absolute top-0 py-2 px-4 text-xs text-gray-100 bg-zinc-500 dark:bg-gray-800 rounded-br-lg"
  ) {{ filename }}
  span(
    v-else-if="language"
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

const isHovered = ref(false)
function onHover(state: boolean) {
  isHovered.value = state
}

const { copy, copied } = useClipboard();

const onClick = () => {
  copy(props.code)
}

</script>

<style lang="scss">
  .code-block {
    pre {
      padding-top: 2.1111111em !important;
      code .line {
        display: block;
        min-height: 1rem;
      }
    }
  }
</style>
```

#### 簡単な解説

vueuse/components の `vElementHover` を使って、
ホバーしたらうんぬんを実装した。

さらに props に filename や language を追加して、
それらがあったらうんぬんってのも実装した。

Nuxt Content の仕様で、

````md
```language{number[]}[filename]
// JavaScript のコード
```
````

というのがある

name|value
---|---
language|コードの言語
number|ハイライトする行番号 {1,2,3}みたいな感じで指定<br>span タグに highlight ってクラスがつく
filename|ファイル名

って感じです。
なので、今度時間ある時は `highlight` class に style をつけなくちゃ

#### yasumemo

Markdown のコードブロックの中で、
`` ``` `` をテキストで表示する方法

` 4つで書こうとできます。

ちなみにこれは 5つで囲って、その下に4つ、最後に3つです。

`````
````md
```js
```
````
`````


以上

## おわりに

これが今回のコードです。

https://github.com/yanskun/blog/blob/main/components/content/ProseCode.vue
