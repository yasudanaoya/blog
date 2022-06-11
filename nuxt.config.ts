import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: "static",

  buildModules: ["nuxt-vite", "@nuxtjs/google-analytics"],

  css: ["quasar/dist/quasar.prod.css"],

  modules: ["@nuxt/content"],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
});
