<template>
  <div class="projectElement grid-container">

    <a class="half" v-if='workSlug.includes("http")' v-bind:href=workSlug target="_blank">
      <div class="imageContainer" :style="backgroundImage">
        <div class="colorOverlay"></div>
      </div>
    </a>
   
    <a class="half" v-else v-bind:href="'/projects/'+workSlug">
      <div class="imageContainer" :style="backgroundImage">
        <div class="colorOverlay"></div>
      </div>
    </a>

    <div class="half description scroll-reveal" v-scroll-reveal>
      <a><h2 class="workTitle">{{workTitle}}</h2></a>
      <h5 class="work-detail"><i>{{workType}}</i></h5>
      <p class="short-description">{{shortDescription}}</p>
      <a class="link-with-arrow" v-if='workSlug.includes("http")' v-bind:href=workSlug target="_blank">
        learn more &nbsp;&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i>
      </a>
      <a class="half link-with-arrow" v-else v-bind:href="'/projects/'+workSlug">
       learn more &nbsp;&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i>
      </a>
    </div>

    </div>
</template>

<page-query>

</page-query>

<script>

export default {
  props: ['workId','workTitle','workSlug', 'coverPhotoPath', 'workType','shortDescription'],
  computed: {
    backgroundImage () {
      return 'background-image: url('+this.coverPhotoPath+');'
    }
  }
}
</script>

<style lang="scss" scoped>

.projectElement{
  margin:56px 0px;
  .imageContainer{
    /*width: calc(100% + 60px);*/
    background-color:rgba(255,0,255,.6);
    background-blend-mode:screen;
    /*opacity:.2;*/
    position:relative;
    z-index:-1;
    top:-32px;
    height:280px;
    background-position:center;
    background-size:cover;
    right:0px;
    transition:.3s all;
  }

  .description{
    .workTitle{
        position:relative;
        right:48px;
        color: $dark-color;
        padding-bottom:0px;
        margin-top:16px;
        margin-bottom:8px;
        transition:.3s all;
      .fas {
        font-size:15px;
        bottom:1px;
        position:relative;
      }

    }



    .work-detail{
      margin:0px;
      font-size:16px;
    }

    
  }


}

  .projectElement.hover{
    .workTitle {
      
      right:0px;
    }
    .imageContainer{
      right:24px;
      opacity:1;
       background-color:rgba(255,0,255,0);
    }
    
  }


@media screen and (max-width: $small-breakpoint) {
  .description{
      /*padding-left:40px;*/
      .workTitle{
          right:0px !important;
      }

    }
    .imageContainer{
      top:0px !important;
      background-color:rgba(0,0,0,0) !important;
    }
  .projectElement.hover{
    
      .imageContainer{
        right:0px;

        opacity:1;
         background-color:rgba(255,0,255,0);
      }
      
    }
  }

/** CSS for project page**/
#projectContainer{
  .grid-container{
    margin:28px 0px;
  }
  .projectElement{
      display:inline;
    a{
      position:relative;
    }
    text-align:center;
    position:relative;

    .img-container{
      background-image: url('');
      background-size:cover;
      background-position:center;
      max-width: 100%;
      height:260px;
        margin:auto;
        transition:.3s all;
        position:relative;

    }
    .img-container:hover{
      cursor:pointer;
      
    }
    .title{
      
        position:absolute;
        z-index:4;
        background-color:rgba(0,0,0,0);
        transition:.2s all;
        width:100%;
        height:100%;
        top:0px;
        left:0px;
        display:table;
        
        color:rgba(0,0,0,0);
        

        
        .overlay{
          /*margin-top:20px;*/
        font-weight: bold;
          font-family: "Space Mono";
          font-size:22px;
          display: table-cell; 
          vertical-align: middle; 
          text-align: center; 
          .title-text{
            padding:30px;
          }

        }
    }

    .title:hover{
      background-color:rgba(200,0,200,.6);
      color:white;
    }

  }

  @media screen and (max-width: $medium-breakpoint) {
    .img-container{
      .title .overlay{
        font-size:18px;
      }
    }
  }
  @media screen and (max-width: $small-breakpoint) {
    .img-container{
      height:300px;
      max-width:400px;
    }
    

  }

}

</style>

