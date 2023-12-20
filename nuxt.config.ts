// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/',
  },
  runtimeConfig: {
    public: {
      serviceId: "",
      templateId: "",
      publicKey: ""
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon', '@nuxtjs/color-mode'],
})
