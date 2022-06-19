import { defineNuxtConfig } from "nuxt";

const baseUrl = "https://yasudanaoya.com/";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",

  components: true,

  publicRuntimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    BASE_URL:
      process.env.NODE_ENV === "production" ? baseUrl : "http://localhost:3000",
  },

  css: [
    "@/assets/styles/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@nuxt/content",
    "@nuxtjs/feed",
  ],

  generate: {
    fallback: "404.html",
    routes: ["/", "/404.html"],
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

  feed: [
    {
      path: "/feed.xml",
      async create(feed) {
        const { $content } = require("@nuxt/content");
        feed.options = {
          title: "yasudanaoya's Site",
          description:
            "I write about technologyブログを投稿したり、写真を投稿したりします。",
          link: baseUrl,
        };
        const blogs = await $content("blog").fetch();
        blogs.forEach((blog) => {
          const url = `${baseUrl}/${blog.slug}`;
          feed.addItem({
            title: blog.title,
            id: url,
            link: url,
            date: blog.date,
            description: blog.description,
            content: blog.description,
          });
        });
      },
      cacheTime: 1000 * 60 * 15,
      type: "rss2",
    },
  ],
});
