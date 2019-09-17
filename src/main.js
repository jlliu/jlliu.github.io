// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue';
import '~/assets/sass/style.scss'
import VueAnalytics from 'vue-analytics'


// import $ from '~/assets/scripts/jquery-3.4.1.min.js';
// import moment from 'vue-moment';

// import '~/assets/scripts/googleanalytics.js';



// Vue.prototype.moment = moment;

// OR specifying custom default options for all uses of the directive





export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);



  if (process.isClient) {
      const VueScrollReveal = require('vue-scroll-reveal').default;
      const $ = require('~/assets/scripts/jquery-3.4.1.min.js').default;
      const moment = require('vue-moment').default;
      // require('~/assets/scripts/googleanalytics.js');

      Vue.prototype.moment = moment;

      Vue.use(VueScrollReveal, {
        class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
        duration: 700,
        scale: .94,
      });



      Vue.use(VueAnalytics, {
        id: 'UA-125828289-1'
      })

  }

   // Add an external CSS file
  head.link.push({
     rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i&display=swap'
  })
  head.link.push({
     rel: 'stylesheet',
    href: 'https://cdnjs.Cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
  })

  // https://cdnjs.Cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css

  //  // Add an external CSS file
  head.link.push({
     rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
   	integrity:"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",
   	crossorigin:"anonymous"
  })

    // Add an external Javascript before the closing </body> tag
  head.script.push({
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    body: false,
  })


  head.script.push({
    src: 'https://kit.fontawesome.com/80b2304733.js',
    body: false,
  })

  head.script.push({
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-125828289-1',
    body: false,
  })

  // head.script.push({
  //   src: '~/assets/scripts/googleanalytics.js',
  //   body: false,
  // })

}
