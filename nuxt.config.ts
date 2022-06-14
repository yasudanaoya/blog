import { defineNuxtConfig } from "nuxt";
import visualizer from "rollup-plugin-visualizer";

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

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxt/content"],

  generate: {
    fallback: "404.html",
    routes: ["/"],
  },

  supabase: {},

  vite: {
    plugins: [visualizer()],
  },
});
