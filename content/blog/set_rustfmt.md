---
title: Neovim で Rust の開発ができるようにした(format できるようにした)
date: 2022-07-16
tags:
  - Neovim
  - LSP
  - Rust
icon: 🦀
---
## 動機

流行ってるので、俺も Rust が書きたいって思った。  
そう思って、とりあえず OREILLY の Rust の本を買った。

そして、 Rust の Tutorial を開き、ちょっとだけ Hellow World だけした。

https://doc.rust-lang.org/book/ch01-02-hello-world.html

そしてそこにあったじゃないか

> If you want to stick to a standard style across Rust projects, you can use an automatic formatter tool called rustfmt to format your code in a particular style.

どうやら、`rustfmt` という標準の formatter があるらしい。

## LSP を入れる
vim で Rust file を開き、`:LspInstall` を実行する。  
すると、`rust_analyzer` と言う LSP があることがわかるので、とりあえず入れる。

これ https://rust-analyzer.github.io/

そして読み進めていると、Install 方法がわかる

https://rust-analyzer.github.io/manual.html#rust-analyzer-language-server-binary

### Install LSP Binary

ちなみに上記の手順をそのまま実行するとだめである。  
ちゃんと、読めばわかるが `download/*.gz` のファイルを MacOS 用に変更する必要がある。

いかが MacOS 用に変更したコマンドになる。

```shell
$ curl -L https://github.com/rust-lang/rust-analyzer/releases/latest/download/rust-analyzer-aarch64-apple-darwin.gz | gunzip -c - > ~/.local/bin/rust-analyzer
$ chmod +x ~/.local/bin/rust-analyzer
```

これで、LSP がある状態になった。

### nvim-lspconfig で rust-analyzer を使えるようにする

これは単純。  
他の LSP と同じです。

特に不思議なことは何もしてないです。  
ごちゃごちゃ書いてるけど、初期値を入れてるのとほぼ変わらないので...。  

```lua
  local lspconfig = require("lspconfig")
  local util = require("libraries._set_lsp")

  lspconfig.rust_analyzer.setup({
    cmd = { "rust-analyzer" },
    filetypes = { "rust" },
    root_dir = lspconfig.util.root_pattern("Cargo.toml", "rust-project.json"),
    -- https://rust-analyzer.github.io/manual.html#nvim-lsp
    settings = {
      ["rust-analyzer"] = {
        assist = {
          importGranularity = "module",
          importPrefix = "self",
        },
        cargo = {
          loadOutDirsFromCheck = true
        },
        procMacro = {
          enable = true
        },
      }
    },
    on_attach = util.on_attach,
    capabilities = util.capabilities,
    flags = util.flags,
  })
```

## いけない、fomatter を忘れていた。

前述したが、 `rustfmt` と言うものががる。

https://github.com/rust-lang/rustfmt

とりあえず、こいつを手に入れる  
`rustup component add rustfmt`

そして、これを Neovim で動かせるようにする。

...

さてそれはどうしたものかと言う感じで色々探した。

https://github.com/rust-lang

具体的には、Rust の Organization の Repository を探した。

### Get Vim Plugin

https://github.com/rust-lang/rust.vim

こんなものを見つけた。  
そして README を読んでると `Formatting with rustfmt` があった。

どうやらこの Plugin を使えば、`:RustFmt` を実行することで、`rustfmt` が実行されるらしい。

さらに読み進めていると、  

> Placing let g:rustfmt_autosave = 1 in your ~/.vimrc will enable automatic running of :RustFmt when you save a buffer.

これを Lua で書こうとすると
```lua
  vim.g.rustfmt_autosave = 1
```
こうなる

## 終わり

これで、 rs ファイルを開いて保存を行うと、rustfmt が実行される。  

感動すべきは(上がり前なのだが)公式に書いてあった

> First, Rust style is to indent with four spaces, not a tab.

の通り、 space4 で整形される。

やったー！

しかし、まだ僕はちゃんと LSP を入れた意味を見出せていない。  
なぜなら Hello World しかしてないから。  
もう少し高度なことをするようになれば、必要になるし、ダメだったら修正する。  
が、それはまだもう少し先のお話。
