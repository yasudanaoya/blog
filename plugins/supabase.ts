import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin((nuxtApp) => {
  const supabase = createClient(
    nuxtApp.$config.SUPABASE_URL as string,
    nuxtApp.$config.SUPABASE_ANON_KEY as string
  );

  nuxtApp.provide("supabase", supabase);
});
