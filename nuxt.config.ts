// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  runtimeConfig: {
    public: {
      serviceId: "",
      templateId: "",
      publicKey: ""
    }
  },
  modules: ['nuxt-icon', '@nuxtjs/color-mode'],
})