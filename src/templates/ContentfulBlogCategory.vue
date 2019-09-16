<template>
  <Layout>

    <MainHeader :showNavName="true" />

    <h1 class="highlight yellow highlight"><a  href="/blog/" class="dark-link">Blog</a></h1>
   </div>
   <div class="padding-top-20"></div>
    <div class="padding-top-20 breadcrumb"><a href="/blog/" class=" dark-link">All posts</a>&nbsp;<i class="fas fa-chevron-right"></i>&nbsp;<span>{{ $context.name }}</span>
    </div>

    <div v-if="postsInCategory.length > 0">
      <div  v-for="post in postsInCategory" :key="post.createdAt">
        <g-link :to="'/blog/'+linkSlug(post.title)"><h3>{{ post.title }}</h3></g-link>
        <span v-html=convertDate(post.createdAt)></span> &middot; <span v-for="tag in post.tags"> {{tag.name}} </span>
        <div class="bottom-divider"></div>
      </div>
    </div>
    <div v-else class="padding-top" >
      No blog posts for this yet! :-)
    </div>
    <div class="padding-top-20 center-align"><a href="/blog/"><i class="fas fa-chevron-left"></i>&nbsp;&nbsp;See all posts</a></div>
    
  </Layout>
</template>

<script>
   import WorkpageHeader from '~/components/WorkpageHeader.vue';
   import MainHeader from '~/components/MainHeader.vue'
   import moment from 'moment';

    export default {
      components:{
        WorkpageHeader,
        MainHeader

      },
      computed: {
        // yearsToProjects: function(){
        //   const years = [];
        //   const  projectLinks = this.$page.contentfulProjectsGallery.projectLink;
        //   for (var i = 0; i < projectLinks.length ; i++){
        //     var item = projectLinks[i];
        //     var thisYear = item.dateCreated.substring(0,4);
        //     if (years[thisYear]==null){
        //       years[thisYear]= [item];
        //     } else {
        //       years[thisYear].push(item);
        //     }
        //   }
        //   return years;
        // }
        postsInCategory: function(){
          var allPosts = this.$page.posts.edges;
          var relevantPosts = [];
          var thisCategory = this.$context.name;
          for (var i = 0; i < allPosts.length; i++){
            var edge = allPosts[i];
            var thisNode = edge.node;
            var tags = edge.node.tags;
            for (var j = 0; j < tags.length; j++){
              
              var name = tags[j].name;

              if (name == thisCategory){
                relevantPosts.push(thisNode);
              }
            }
          }

          return relevantPosts;
        }

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
  }
}


</page-query>