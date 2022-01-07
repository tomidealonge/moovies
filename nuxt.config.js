export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Moovies | Bringing back the best scenes from your favorite movies, series & TV shows",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
       {
        hid: 'description',
        name: 'description',
        content:
          'Our main aim is bringing back the best scenes from your favorite movies, series & TV shows, you know, that nostalgic feeling'
      },
       {
        name: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        content:
          'Moovies | Bringing back the best scenes from your favorite movies, series & TV shows'
      },
      {
        name: 'og:title',
        property: 'og:title',
        content:
          'Moovies | Bringing back the best scenes from your favorite movies, series & TV shows'
      },
      {
        name: 'og:site_name',
        property: 'og:site_name',
        content:
          'Moovies | Bringing back the best scenes from your favorite movies, series & TV shows'
      },
      {
        name: 'og:image',
        property: 'og:image',
        content:'/webclip.jpg'
      },
      {
        name: 'twitter:title',
        property: 'og:title',
        content:
          'Moovies | Bringing back the best scenes from your favorite movies, series & TV shows'
      },
      {
        name: 'twitter:site_name',
        property: 'og:site_name',
        content:
          'Moovies | Bringing back the best scenes from your favorite movies, series & TV shows'
      },
      {
        name: 'twitter:description',
        property: 'twitter:description',
        content:
          'Our main aim is bringing back the best scenes from your favorite movies, series & TV shows, you know, that nostalgic feeling'
      },
      {
        name: 'twitter:image',
        content:'/webclip.jpg'
      }
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

    beforeEnter(el, done) {
      this.$gsap.timeline({
        onComplete: done
      })
      .to('.c-overlay', {
        opacity: 1,
        height: '100%',
        duration: 1,
        ease: 'back',
      })
      .to('.c-overlay', {
        opacity: 0,
        height: '0%',
        duration: 1,
        ease: 'power2.inOut'
      })
      
    },
    // leave(el, done) {
    //     this.$gsap.timeline({
    //       onComplete: done
    //     })
    //   .to('.c-overlay', {
    //     opacity: 0,
    //     height: '0%',
    //     duration: 0.6,
    //     ease: 'power2.inOut'
    //   })
    // }
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
