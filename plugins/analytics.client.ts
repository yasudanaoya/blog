import VueTag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  const option = {
    appName: "yasudanaoya's Site",
    pageTrackerScreenviewEnabled: true,
    config: { id: `G-9Y288YBFZ1` },
  };

  nuxtApp.vueApp.use(VueTag, option, router);
});
