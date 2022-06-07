import { Quasar } from "quasar";
import * as All from "quasar";
import langJa from "quasar/lang/ja";

import "quasar/src/css/index.sass";
import "@quasar/extras/material-icons/material-icons.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    config: {},
    components: All,
    plugins: {},
    lang: langJa,
  });
});
