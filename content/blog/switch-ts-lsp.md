---
title: (nvim-lspconfig を使用) denops と tsserver を切り替える
date: 2022-06-29
tags:
  - Neovim
  - LSP
icon: 🎚️
---

n番煎じである

## 構成

```
.config/vim/lua/lsp/
├── denols.lua
├── tsserver.lua
...(ry
```

```lua
if vim.fn.exepath('deno') ~= '' then
  vim.g.markdown_fenced_languages = {
    'ts=typescript'
  }

  local lspconfig = require('lspconfig')
  local util = require('libraries._set_lsp')

  lspconfig.denols.setup{
    cmd = { 'deno', 'lsp' },
    root_dir = lspconfig.util.root_pattern("deno.json", "denops"),
    on_attach = function(client, bufnr)
      client.server_capabilities.document_formatting = false
      util.on_attach(client, bufnr)
    end,
    capabilities = util.capabilities,
    flags = util.flags,
  }
else
  print('asdf install deno latest')
end
```

tsserver.lua
```lua
if vim.fn.exepath('typescript-language-server') ~= '' then
  local lspconfig = require('lspconfig')
  local util = require('libraries._set_lsp')

  lspconfig.tsserver.setup {
    root_dir = lspconfig.util.root_pattern("package.json"),
    on_attach = util.on_attach,
    capabilities = util.capabilities,
    flags = util.flags,
  }
else
  print('npm install -g typescript-language-server')
end
```

## 解説

最初の if 分岐は、LSP がなかったら、動かせないので
それの確認と、なければインストールコマンドを吐き出すようにしています。

### ポイント

`root_dir` です

ここがキモ


denols だと
```lua
root_dir = lspconfig.util.root_pattern("deno.json", "denops"),
```

root に deno.json か denops ってファイル or フォルダがあったら、動かすよ。
で

tsserver だと
```lua
root_dir = lspconfig.util.root_pattern("package.json"),
```

root に package.json があったら動かすよ。

にそれぞれしています。

### denols

正直 deno.json は僕はガッツリ Deno の開発をしないので、なんのこっちゃわからないです。  
ただ、調べると割と使ってるプロジェクトが見つかったので、一応入れておきました。

じゃあ僕はいつ denols を使うのか、  

denops を使った、Vim の Plugin 開発の時ですね。

denops で作る Vim Plugin は root に `denops/` を配置するので、こうしました。


### tsserver

説明不要。
package.json があればそれはもう Node です。


## 以上

これで切り替えができました。  

なんか難しく考えてたけど、結構簡単でした。  
できてよかった
