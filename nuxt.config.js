export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Moovies",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.jpg" }],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/styles/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: '@/plugins/components', mode: 'client'}],

  // pageTransition: 'transition-page',

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    enter(el, done) {
        this.$gsap.timeline({
          onComplete: done
        })
      .to('.c-overlay', {
        opacity: 1,
        height: '100%',
        duration: 0.9,
        ease: 'back',
      })
      .to('.c-overlay', {
        opacity: 0,
        height: '0%',
        duration: 0.9,
        ease: 'power2.inOut'
      })
      
    },
    leave(el, done) {
        this.$gsap.timeline({
          onComplete: done
        })
      .to('.c-overlay', {
        opacity: 0,
        height: '0%',
        duration: 0.9,
        ease: 'power2.inOut'
      })
      
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-gsap-module'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    'vue-social-sharing/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
