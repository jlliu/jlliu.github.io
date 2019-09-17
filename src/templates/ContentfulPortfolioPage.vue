<template>
  <Layout class="portfolio-page">
    <MainHeader :showNavName="true" />
    <div class="articleContent">
      <div class="breadcrumb">
        <a href="/projects/" class="dark-link">projects</a>&nbsp;
        <i class="fas fa-chevron-right"></i>&nbsp;
        <span>{{$context.title}}</span>
      </div>
      <h1 v-scroll-reveal class='scroll-reveal title'>{{$context.title}}</h1>
      <p>
        <span>{{$context.timePeriod}} &middot; {{$context.workType}}</span>
      </p>
      <img v-scroll-reveal class="scroll-reveal padding-top" v-bind:src="$context.coverphoto">
      <div v-scroll-reveal class="scroll-reveal padding-top-20 bodyText" v-html=body />
      <div class="padding-top-20 center-align"><a href="/projects/"><i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Back to all projects</a></div>    
    </div>

  </Layout>
</template>

<page-query>

</page-query>

<script>
  import MarkdownIt from "markdown-it";
  import marked from "marked";
  import MainHeader from '~/components/MainHeader.vue'
  import WorkpageHeader from '~/components/WorkpageHeader.vue'
  import EndOfPageDemo from '~/components/EndOfPageDemo.vue'
  // import VueScrollReveal from 'vue-scroll-reveal';
  // import Vue from 'vue';


  export default {
    components:{
      WorkpageHeader,
      MainHeader,
      EndOfPageDemo
    },
    data: {
      description: '',
},
    computed: {
      body: function () {
        const md = new MarkdownIt();
        if (this.$context.description==null){
          return "";
        } else {
          return marked(this.$context.description);
        }
      },
    },
    mounted(){

      // Vue.use(VueScrollReveal, {
      //   class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
      //   duration: 700,
      //   scale: .94,
      // });


    }
  };
</script>

<style lang="scss" >

  .bodyText .scroll-reveal, .bodyText v-scroll-reveal{
    visibility: visible !important;
  }
  .breadcrumb{
    margin:0px;
  }
  .title{
    margin-top:16px;
  }
  .hero-image {
    width: 100%;
  }

  .articleContent{
    max-width: $article-content-width;
    margin:auto;
  }

  li {
    line-height: 1.8;
  }

</style>


