<template>
  <div class="content-wrapper">
    <slot/>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>

// import $ from '~/assets/scripts/jquery-3.4.1.min.js';

import Footer from '~/components/Footer.vue';
import '~/assets/sass/style.scss'

// import $ from '~/assets/scripts/jquery-3.4.1.min.js';
// import moment from 'vue-moment';

// import '~/assets/scripts/googleanalytics.js';
import { page } from 'vue-analytics';

export default {
	components: {
		Footer
	},

  mounted(){

  		// Do this for any emailLink
          var username = "jackieleeliu";
          var hostname = "gmail.com";
          $(".emailLink").attr("href", "mailto:" +username+"@"+hostname);


      },

     methods: {
        track () {
          this.$ga.page('/')
        }
     }
 
}



</script>

