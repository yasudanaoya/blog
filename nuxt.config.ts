import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",

  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
      },
    ],
  },

  components: true,

  css: ["@/assets/styles/tailwind.css"],

  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],

  generate: {
    fallback: "404.html",
    routes: ["/"],
  },
});
