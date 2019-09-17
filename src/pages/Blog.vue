<template>
  <Layout>

    <MainHeader :showNavName='true' />

    <h1 class="highlight yellow highlight">Blog</h1>
    <h4 class="show-by-category caption padding-top-20">Show by category:</h4>
    <div class="categories grid-container">
    <div class="third" v-for="edge in $page.tags.edges">
      <g-link :to="'/blog/'+linkSlug(edge.node.name)"><h4>{{ edge.node.name }}</h4></g-link>
    </div>
   </div>
    <h4 class="caption">All posts:</h4>
    <div v-for="edge in $page.posts.edges" :key="edge.node.createdAt">
      <g-link :to="'/blog/'+linkSlug(edge.node.title)"><h3>{{ edge.node.title }}</h3></g-link>
      <span v-html=convertDate(edge.node.createdAt)></span> &middot; <span v-for="tag in edge.node.tags"> {{tag.name}} </span>
      <div class="bottom-divider"></div>
    </div>
    
  </Layout>
</template>

<script>
   import WorkpageHeader from '~/components/WorkpageHeader.vue';
   import MainHeader from '~/components/MainHeader.vue';
   import moment from 'moment';

    export default {
      components:{
        WorkpageHeader,
        MainHeader

      },
      computed: {
      },
     methods:{
        convertDate(content){
          return moment(content).format("LL");
        },
        linkSlug(name){
          return name.replace(/ /g,"-").toLowerCase();
        }
      }

    }
</script>
<style lang="scss" >
.categories{
  margin:0px !important;
  padding:0px;
}
.show-by-category{

  margin-bottom:0px;
}
  .bottom-divider{
    border-bottom:solid rgba(0,0,0,.1) 1px;
    width:100%;
    padding-top:20px;
    padding-bottom:8px;
  }

  #listOfProjects{
    list-style-type:none;
    margin: 0;
  }

  .itemWrapper{
    display:inline-block;
    vertical-align:top;
  }
  .gallerySection{
    margin:24px 0px 24px 0px !important;
    .yearDivider{
      .icon-accent{
        font-size: small;
        vertical-align: middle;
        height: 16px;
      }
    
    }
  }

</style>
<page-query>

query Post {
  posts: allContentfulBlogPost {
    edges {
      node {
        id
        title
        bodyText
        createdAt
        tags{
         name
        }
      }
    }
  },
  tags: allContentfulBlogTag {
    edges {
      node {
        name

      }
    }
  }
}


</page-query>