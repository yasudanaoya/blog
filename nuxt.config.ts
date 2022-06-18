import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",

  components: true,

  publicRuntimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://yasudanaoya.com/"
        : "http://localhost:3000",
  },

  css: [
    "@/assets/styles/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxt/content"],

  generate: {
    fallback: "404.html",
    routes: ["/"],
  },
});
