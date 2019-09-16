<template>
  <Layout class="portfolio-page">
    <MainHeader :showNavName="true" />
    <div class="articleContent">
      <div class="breadcrumb">
        <a href="/projects/" class="dark-link">projects</a>&nbsp;
        <i class="fas fa-chevron-right"></i>&nbsp;
        <span>{{$context.title}}</span>
      </div>
      <h1 class='title'>{{$context.title}}</h1>
      <p>
        <span>{{$context.timePeriod}} &middot; {{$context.workType}}</span>
      </p>
      <img class="padding-top" v-bind:src="$context.coverphoto">
      <div v-html=body class="padding-top-20" />
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
      body() {
        const md = new MarkdownIt();
        return marked(this.$context.description);
      },
    }
  };
</script>

<style lang="scss" scoped>
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


