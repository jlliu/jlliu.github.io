<template>
  <Layout class="blog">
    <MainHeader :showNavName="true" />
    <div class="articleContent">
      <div class="breadcrumb">
        <a href="/blog/" class="dark-link">Blog</a>&nbsp;
        <i class="fas fa-chevron-right"></i>&nbsp;
        <span>{{$context.title}}</span>
      </div>
      <h1 class="blog-title">{{$context.title}}</h1>
      <p>
        <span class="" v-html=convertDate($context.createdAt)></span>
        <span class="tag " v-for="tag in $context.tags">{{ tag.name }} </span>
      </p>
      <div class="padding-top-20 divider"></div>
      <div class="padding-top-20" v-html=body />
      <div class="padding-top-20 center-align"><a href="/blog/"><i class="fas fa-chevron-left"></i>&nbsp;&nbsp;See all posts</a></div>
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
  import moment from 'moment';

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
        if (this.$context.bodyText==null){
          return "";
        } else {
        return marked(this.$context.bodyText);
        }
      }
    },
    methods: {
        richTextToHTML (content) {
          return documentToHtmlString(content, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => {
                return `<img v-scroll-reveal class="scroll-reveal" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`
              }
            },
            renderMark: {
              [MARKS.CODE]: text => { return `<code>${text}</code>` }
            }
          })
        },
        convertDate(content){
          return moment(content).format("LL");
        },
      }
  };
</script>

<style lang="scss" scoped>


  .blog-title{
    padding-top:0px;
    margin-top:8px;
    padding-bottom:0px;
    margin-bottom:0px;

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

<page-query>



</page-query>

