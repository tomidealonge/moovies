import Vue from 'vue'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MarqueeText from 'vue-marquee-text-component'

Vue.component('marquee-text', MarqueeText)
Vue.use( VueSplide );
