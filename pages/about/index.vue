<template lang="pug">
div(class="flex flex-col justify-center items-center content-center")

  div(class="mockup-code w-1/2")
    pre(data-prefix="$")
      code whoami
    pre.text-success(data-prefix=">")
      code yasudanaoya

    //- br
    //- pre(data-prefix="$")
    //-   code tree $LANG -L 1
    //- pre.text-success
    //-   code JavaScript
    //- pre.text-success
    //-   code TypeScript
    //- pre.text-success
    //-   code Go
    //- pre.text-success
    //-   code Ruby
    //- pre.text-success
    //-   code Lua

    //- br
    //- pre(data-prefix="$")
    //-   code vim skill.dev

  //- div(class="mockup-code w-1/2 my-2")
  //-   pre(data-prefix="1")
  //-     code.text-success front:  Vue.js, Nuxt.js, React
  //-   pre(data-prefix="2")
  //-     code.text-warning server: Go, Ruby
  //-   pre(data-prefix="3")
  //-     code.text-error infra:  Inprogress...
  //-   pre(data-prefix="4")
  //-     code.text-error native: Inprogress...
  //-   pre(data-prefix="5")
  //-     code.text-success others: Lua
  <div class="rating">
    <input disabled type="radio" name="rating-1" class="mask mask-star" />
    <input disabled type="radio" name="rating-1" class="mask mask-star" checked />
    <input disabled type="radio" name="rating-1" class="mask mask-star" />
    <input disabled type="radio" name="rating-1" class="mask mask-star" />
    <input disabled type="radio" name="rating-1" class="mask mask-star" />
  </div>

</template>
