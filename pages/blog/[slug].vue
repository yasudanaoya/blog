<template lang="pug">
//- q-page(padding)
content-doc

</template>

<script setup lang="ts">
const { data } = await useAsyncData('hello', () => queryContent('/hello').findOne())
</script>
