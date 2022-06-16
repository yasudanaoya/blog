import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",

  components: true,

  publicRuntimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },

  css: [
    "@/assets/styles/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
    "@nuxt/content",
  ],

  colorMode: {
    preference: "dark", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    classSuffix: "",
  },

  generate: {
    fallback: "404.html",
    routes: ["/"],
  },
});
