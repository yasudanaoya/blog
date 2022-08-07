import VueTag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  const option = {
    appName: "yanskun's Site",
    pageTrackerScreenviewEnabled: true,
    config: { id: `G-9Y288YBFZ1` },
  };

  nuxtApp.vueApp.use(VueTag, option, router);
});
