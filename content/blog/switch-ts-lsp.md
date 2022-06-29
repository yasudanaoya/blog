---
title: (nvim-lspconfig を使用) denops と tsserver を切り替える
description: 
date: 2022-01-31
slug: switch-ts-lsp
image: Neovim@8.png
tags:
  - Neovim
  - LSP
---

n番煎じである

## 構成

```bash
.config/vim/lua/lsp/
├── denols.lua
├── tsserver.lua
...(ry
```

```lua:
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


```

```
