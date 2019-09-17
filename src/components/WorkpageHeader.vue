<template>

   <div class="placeholder">
   <div class="links nav" id="navbar">
    <div class="nav-wrapper">
    <a class="nav-name" href="/">jackie liu</a>
    <ul class="linkList">  
      <!-- <li><a href="/about" id="aboutLink"><span>about</span></a></li> -->
      <li><a href="/projects" id="workLink"><span>projects</span></a></li>
      <li><a href="/blog" target="_blank" id="blog"><span>blog</span></a></li>
      <li>
        <a class="email" target="_blank" href="" .="emailLink"><i class="far fa-envelope"></i></a>
        <a href="https://www.instagram.com/jacq_ilu/" target="_blank"  > <i class="fab fa-instagram"></i></a>
      </li>

     
    </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  mounted(){

      $(document).ready(function(){
          window.onscroll = function() {myFunction()};

          var navbar = document.getElementById("navbar");
          var sticky = navbar.offsetTop;

          function myFunction() {
            if (window.pageYOffset >= (sticky+600)) {
              navbar.classList.add("is-sticky")
            } else {
              navbar.classList.remove("is-sticky");
            }
          }

          $(".home .nav-name").click(function(){
            console.log("nav name clicked");
            $(window).scrollTop(0);
          })


          } );
  }
}
</script>

<style lang="scss" scoped>
$navbarHeight: 65px;
.placeholder{
  height:90px;

}

.nav{
  height:$navbarHeight;
  font-family:'Space Mono', monospace;
  font-size:14px;
  font-weight:bold;
  position:relative;
  margin:auto;
  width:100%;
  left:0px;
  z-index:9000 !important;

  
  .nav-wrapper{
    /*width:85%;*/
    height:100%;
    max-width:$max-content-width;
    margin:auto;
    position:relative;
    

    ul{
      display:inline-block;

      padding:0px;
      margin:0px;

    }
    .nav-name{
      padding-left:0px !important;
      position:relative;
      font-size:20px;
      font-weight:bold;
      color:black;
      line-height:65px;
      /*display:none;*/
    }
    ul{
      list-style-type:none;
      li{
      display:inline-block ;
       line-height:$navbarHeight;
       
      }
      li:not(:last-child){
        padding:0px 24px;
      }
      li.active a {
        color: black;
        font-weight:bolder;
        
      }
      a{
        color:black;
      }
      a:not(:last-child){

        padding:0px 16px;
      }

      a:hover, .nav-name:hover{
        color:magenta !important;
      }
    }

  }


}

.nav:not(.is-sticky){
  .linkList{
    float:right;
  }
}
.is-sticky.nav{
  transition:.2s background-color;
  transition-timing-function: ease;
  box-shadow: 0px 0px 5px 1px #00000021;
  background-color:white;
  left:0 !important;
  top:0px;
  position:fixed;
  .nav-name{
    display:inline-block;
    line-height:$navbarHeight;

  }
  ul{
    float:right;
    margin:0px;
  }
  .nav-wrapper{
      text-align:left;
  }
  /*width:100vw !important;*/

}
@media only screen and (max-width: $medium-breakpoint) {
/*  .nav-wrapper{
    width: calc( 100% - 32px);
  }*/
}


@media only screen and (max-width: $small-breakpoint) {

  .nav:not(.singlePage, .project-page){
    text-align:left;
    #nav-portfolioPageTitle {
      display:none !important;
      /*background-color:blue;*/
    }
    .nav-pagination{

      position: absolute;
        bottom: 0px !important;
        margin-bottom: 0px;
        right: 0px;

    }
    .nav-name{
      
      /*display:none !important;*/
      left:0px;
      padding-left:0px !important;
    }
    ul{
      padding-left:0px;
      li:not(:last-child){
        padding:0px 16px 0px 0px !important;
      }
      a{
        padding:0px;
      }
    }

    .nav-wrapper{
      /*width:100%;*/
      text-align:center;
    }
  }
  .nav.singlePage{
    .nav-wrapper {
      white-space:nowrap;
      overflow:hidden;
      height:65px;
      /*width:800px;*/
    }
  }
.is-sticky.nav{
    .nav-wrapper{
      text-align:left;
      width: calc( 100% - 32px);
    }
    ul{
      float:none;
      padding:0px;
    }
  }
  .home {
    .nav:not(.is-sticky) {
      .nav-name{
      display:none !important;
      }
      .nav-wrapper{
        width:100%;
      }
        ul{
          padding-left: 0px !important;
        }
    }
    .is-sticky.nav{
      .nav-name{
        display:block !important;
      }
      ul{
        display: none !important;
        
      }
    }
  }


  
   
}
</style>