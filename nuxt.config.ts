// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
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
  modules: ['nuxt-icon', '@nuxtjs/color-mode', '@nuxt/image', '@vee-validate/nuxt'],
})
