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
        ? "https://yanskun.com/"
        : "http://localhost:3000",
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

  feed: {
    async create() {
      const baseUrlArticles = "https://yanskun.com/blog";
      const baseLinkFeedArticles = "/feed/blog";
      const feedFormats = {
        rss: { type: "rss2", file: "rss.xml" },
        atom: { type: "atom1", file: "atom.xml" },
        json: { type: "json1", file: "feed.json" },
      };
      const { $content } = require("@nuxt/content");
      const createFeedArticles = async function (feed) {
        feed.options = {
          title: "My Blog",
          description: "I write about technology",
          link: baseUrlArticles,
        };
        const articles = await $content("blog").fetch();
        articles.forEach((article) => {
          const url = `${baseUrlArticles}/${article.slug}`;
          feed.addItem({
            title: article.title,
            id: url,
            link: url,
            date: article.date,
            description: article.description,
            content: article.description,
            author: "yanskun",
          });
        });
      };
      return Object.values(feedFormats).map(({ file, type }) => ({
        path: `${baseLinkFeedArticles}/${file}`,
        type: type,
        create: createFeedArticles,
      }));
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
