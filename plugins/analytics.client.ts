import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  const $config = useRuntimeConfig();

  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: "blog",
      pageTrackerScreenviewEnabled: true,
      config: { id: $config.googleTagID },
    },
    router
  );
});
