// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  nitro: {
    // Only use bun preset when not in Vercel environment
    // preset: "node",
  },
  runtimeConfig: {
    public: {
      helloWorld: "NOPE",
    },
  },
});
