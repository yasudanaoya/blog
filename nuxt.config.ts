import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",

  css: ["@/assets/styles/tailwind.css"],

  modules: ["@nuxt/content"],

  buildModules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    darkMode: "media",
    theme: {
      extend: {},
    },
    plugins: [],
  },
});
