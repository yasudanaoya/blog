import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",

  components: true,

  publicRuntimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    QIITA_TOKEN: process.env.QIITA_TOKEN,
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://yanskun.com/"
        : "http://localhost:3000",
  },

  css: [
    "@/assets/styles/tailwind.css",
    "@/assets/styles/app.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@nuxt/content",
    "@vueuse/nuxt",
  ],

  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },

  content: {
    highlight: {
      theme: "nord",
      preload: [
        "bash",
        "diff",
        "json",
        "lua",
        "js",
        "ts",
        "css",
        "shell",
        "html",
        "md",
        "vue",
        "yaml",
      ],
    },
  },

  generate: {
    fallback: "404.html",
    routes: ["/", "/404.html"],
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml", "/rss.xml"],
    },
  },
});
