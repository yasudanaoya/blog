<template lang="pug">
div(class="flex flex-col justify-center items-center content-center")

  div(class="mockup-code w-1/2")
    pre(data-prefix="$")
      code whoami
    pre.text-success(data-prefix=">")
      code yasudanaoya

  <div class="rating">
    <input disabled type="radio" name="rating-1" class="mask mask-star" />
    <input disabled type="radio" name="rating-1" class="mask mask-star" checked />
    <input disabled type="radio" name="rating-1" class="mask mask-star" />
    <input disabled type="radio" name="rating-1" class="mask mask-star" />
    <input disabled type="radio" name="rating-1" class="mask mask-star" />
  </div>

</template>
