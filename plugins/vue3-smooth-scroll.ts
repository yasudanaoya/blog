import VueSmoothScroll from "vue3-smooth-scroll";

export default defineNuxtPlugin((nuxtApp) => {
  const config = {
    duration: 700,
    easing: [0, 0, 0.1, 1],
    offset: -100,
  };
  nuxtApp.vueApp.use(VueSmoothScroll, config);
});
