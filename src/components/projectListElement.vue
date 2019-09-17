<template>
  <div class="projectElement">

    <a v-if='workSlug.includes("http")' v-bind:href="workSlug" target="_blank">
      <div  class=" imageContainer" :style="backgroundImage"> </div>
      <h4 class="workTitle">{{workTitle}} <i class="fas fa-external-link-alt"></i></h4>
     
    </a>
   
    <a v-else v-bind:href="'/projects/'+workSlug">
      <div class="imageContainer"  :style="backgroundImage"> </div>
      <h4 class="workTitle">{{workTitle}}</h4>
    </a>
    <h5 class="work-detail"><i>{{workType}}</i></h5>
  
    </div>
</template>

<page-query>

</page-query>

<script>
export default {
  props: ['workId','workTitle','workSlug', 'coverPhotoPath', 'workType'],
  computed: {
    backgroundImage () {
      return 'background-image: url('+this.coverPhotoPath+');'
    }
  }
}
</script>

<style lang="scss" scoped>

.projectElement{
  .imageContainer{
    width:100%;
    height:180px;
    background-position:center;
    background-size:cover;
  }
  .workTitle{
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
  }

}

  .projectElement:hover{
    .workTitle {
      color:$magenta;
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

  @media screen and (max-width: 1000px) {
    .img-container{
      .title .overlay{
        font-size:18px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .img-container{
      height:300px;
      max-width:400px;
    }
  }

}

</style>

