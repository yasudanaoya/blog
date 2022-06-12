import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",

  components: true,

  css: [
    "@/assets/styles/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],

  generate: {
    fallback: "404.html",
    routes: ["/"],
  },
});
