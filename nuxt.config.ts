import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: "static",

  privateRuntimeConfig: {
    googleTagID: process.env.GOOGLE_ANALYTICS_ID,
  },

  buildModules: ["nuxt-vite"],

  css: ["quasar/dist/quasar.prod.css"],

  modules: ["@nuxt/content"],
});
