// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr:true,
  //写这个可以被页面上的小插件监听到。相当于集成了下面的模块
//   modules: ['@nuxtjs/tailwindcss'],
css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})