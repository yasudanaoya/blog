---
title: Object の value を rename して取り出す
date: 2022-06-13
tags:
  - JavaScript
icon: 💼
---
## rename

今更なのだが、

```ts
const obj = {
  key: 'value'
}
const { key: hoge } = obj

console.log(hoge)
// -> 'value'
```

こうやって取り出せることを知った。


以前までは

```ts
const obj = {
  key: 'value'
}
const hoge = obj.key

console.log(hoge)
// -> 'value'
```

こうしていた。

## だけども

rename すると可読性が下がるので、お勧めできない。
