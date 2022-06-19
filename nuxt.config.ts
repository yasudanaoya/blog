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

  feed() {
    const baseLinkFeedBlogs = "/feed/blogs";
    const feedFormats = {
      rss: { type: "rss2", file: "rss.xml" },
      atom: { type: "atom1", file: "atom.xml" },
      json: { type: "json1", file: "feed.json" },
    };
    const { $content } = require("@nuxt/content");
    const createFeedBlogs = async function (feed) {
      feed.options = {
        title: "My Blog",
        description: "I write about technology",
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
          author: "yasudanaoya",
        });
      });
    };
    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedBlogs}/${file}`,
      type: type,
      create: createFeedBlogs,
    }));
  },
});
