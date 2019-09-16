<template>
  <div class="content-wrapper">
    <slot/>
    <Footer />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>

// import $ from '~/assets/scripts/jquery-3.4.1.min.js';

import Footer from '~/components/Footer.vue';
import moment from "moment";

export default {
	components: {
		Footer
	},

  mounted(){

  		// Do this for any emailLink
          var username = "jackieleeliu";
          var hostname = "gmail.com";
          $(".emailLink").attr("href", "mailto:" +username+"@"+hostname);


        window.dataLayer = window.dataLayer || [];
	    function gtag(){dataLayer.push(arguments);}
	    gtag('js', new Date());

	    gtag('config', 'UA-125828289-1');
      },

     methods: {

     }
 
}



</script>

