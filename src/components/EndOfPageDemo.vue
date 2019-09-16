<template>

    <div id="frameWrapper">
      <iframe  id="app" src="https://jackieis.online/collaboration-with-12-year-old-self"></iframe>
    </div>
</template>

<page-query>

</page-query>

<script>

  export default {
     name: 'EndOfPageDemo',
    components:{

    },
    mounted(){
      var heightIframe = $('iframe#app').contents().find("body").height();
      console.log($('iframe').contents().find("body"));
      $("iframe#app").css("min-height", heightIframe+120);
      console.log(heightIframe);

    }
  };
</script>

<style scoped>
  #frameWrapper{
    position:absolute;
    bottom:0px;
    left:0px;
    width:100vw;
  }
  iframe{

    border:none;
    max-width:1000px;
    width:100%;
    margin:auto;
    left:0px;
    right:0px;
    position:absolute;
   top:0px;
    /*height:2px;*/
    scrolling:no;
    min-height:1200px;

  }
  
</style>