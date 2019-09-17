<template>
  <Layout>

    <MainHeader :showNavName='true' />

    <h1 class="highlight magenta highlight">Projects</h1>


    <div id="listOfProjects" class="">
      <div class="gallerySection scroll-reveal grid-container" v-for="year in Object.keys(yearsToProjects).sort().reverse()" v-scroll-reveal>
        <h3 class="yearDivider whole">
          <!-- <i class="far fa-moon icon-accent"></i> -->
           {{year}}
         </h3>
        <div class="itemWrapper third" v-for="item in yearsToProjects[year]" :key="item.dateCreated">
          <projectListElement :workId="item.id" :workTitle=item.title :workSlug=item.slug :coverPhotoPath=item.coverphoto.file.url :workType ="item.workType" />   
        </div>
      </div>
    </div>
    
  </Layout>
</template>

<script>
   import WorkpageHeader from '~/components/WorkpageHeader.vue'
   import projectListElement from '~/components/projectListElement.vue'
   import MainHeader from '~/components/MainHeader.vue'
    export default {
      components:{
        WorkpageHeader,
        projectListElement,
        MainHeader
      },
      computed: {
        
        yearsToProjects: function(){
          const years = [];
          const  projectLinks = this.$page.contentfulProjectsGallery.projectLink;
          for (var i = 0; i < projectLinks.length ; i++){
            var item = projectLinks[i];
            var thisYear = item.dateCreated.substring(0,4);
            if (years[thisYear]==null){
              years[thisYear]= [item];
            } else {
              years[thisYear].push(item);
            }
          }
          return years;
        }
      }

    }
</script>
<style lang="scss" >
  #listOfProjects{
    /*padding-top:60px;*/
    list-style-type:none;
    margin: 0;
    /*padding: 0;*/
  }

  .itemWrapper{
    display:inline-block;
    vertical-align:top;
/*    margin-right:20px;*/
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
  contentfulProjectsGallery(id: "7c8keFfrZvgRELrDGwh26k") {
        id
        title
        projectLink{
          ...on ContentfulPortfolioPage { 
            title
            id
            slug
            workType
            coverphoto{
              file{
                url
              }
            }
            dateCreated
          }
         ...on ContentfulPortfolioLink { 
            title
            id
            slug
            workType
            coverphoto{
              file{
                url
              }
            }
            dateCreated
          }
        } 
  }
}




</page-query>