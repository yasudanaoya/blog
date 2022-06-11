import { defineNuxtConfig } from "nuxt";
import getRoutes from "./utils/getRoutes";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: "static",

  privateRuntimeConfig: {
    googleTagID: process.env.GOOGLE_ANALYTICS_ID,
  },

  buildModules: ["nuxt-vite"],

  css: ["quasar/dist/quasar.prod.css"],

  modules: [
    "@nuxt/content",
    // always declare the sitemap module at end of array
    "@nuxtjs/sitemap",
  ],

  sitemap: {
    hostname: "https://yasudanaoya.com",
    routes() {
      return getRoutes();
    },
  },
});
