<template>
  <Layout>
     <MainHeader :showNavName="false" />
    <div class="bg-container">
    </div>

    <section class="hero grid-container">
      <div class="title whole">
        <div class="unit">
          <span class="letter">j</span>
          <i class="fas fa-pepper-hot"></i>
        </div>
        <div class="unit active scroll-reveal" v-scroll-reveal>
          <span class="letter">a</span>
          <i class="fas fa-heart"></i>
        </div>
        <div class="unit">
          <span class="letter">c</span>
          <i class="fas fa-moon"></i>
        </div>
        <div class="unit">
          <span class="letter">k</span>
          <i class="fas fa-asterisk"></i>
        </div>
        <div class="unit">
          <span class="letter">i</span>
          <i class="fas fa-ice-cream"></i>
        </div>
        <div class="unit">
          <span class="letter">e</span>
          <i class="fas fa-hamburger"></i>
        </div>
        <br>
        
        <div class="unit">
          <span class="letter">l</span>
          <i class="fas fa-paint-brush"></i>
        </div>
        <div class="unit">
          <span class="letter">i</span>
          <i class="fas fa-mouse-pointer"></i>
        </div>
        <div class="unit">
          <span class="letter">u</span>
          <i class="fas fa-star"></i>
        </div>
      </div>

      <div class="third"></div>
      <h1 class="hero-text two-third scroll-reveal" v-scroll-reveal><i>is an interdisciplinary-at-heart designer, artist, and programmer based in new york city</i></h1>

    </section>

    <section id="about">
      <div class="grid-container">
        <h1 class="whole">hi, i'm jackie!</h1>
        <div class="three-fourth">
        <p class="scroll-reveal" v-scroll-reveal>

        i am an artist-at-heart, a taurus, and a current master's student at NYU's <a target="_blank" href="https://itp.nyu.edu/">Interactive Telecommunications Program</a>. previously, i worked as a product designer at <a target="_blank" href="https://codecademy.com/">Codecademy</a> and <a target="_blank" href="https://girlswhocode.com/">Girls Who Code</a>, and was a computer science student at MIT.<br><br>

        i'm particularly interested in the potential for design and art to examine, educate, and propose how computing culture can be more equitable.<br><br>

        as a designer within ed-tech, i've designed around making gate-keeped fields like programming accessible and human. as an artist, i'm interested in co-opting technological processes to carve a space for radical vulnerability and femininity within a world that does not traditionally offer room for these things.<br><br>
        i'm constantly exploring what kinds of things i want to create and how i want to exist. <a href="#contact">send me a message</a> if you'd like to collaborate!</p>
 
        </div>
      </div>
   </section>

   <section id="work">
    <div class="grid-container">
      <h1 class="highlight magenta whole" >selected work</h1>
     
      <span class="padding-top-20"></span>
       <div class="itemWrapper whole" v-for="item in $page.contentfulProjectsGallery.projectLink" :key="item.dateCreated">
        <homepageProjectElement :workId="item.id" :workTitle=item.title :workSlug=item.slug :coverPhotoPath=item.coverphoto.file.url :workType =item.workType :shortDescription=item.shortDescription />   
      </div>
      <div class="whole center-align">
        <h3>looking for something else?</h3>
        <div class="padding-top-20"></div>
        <a class="button padding-top" href="/projects">see all projects</a>
      </div>

    </div>


   </section>


   <section id="contact">

    <div class="grid-container">

    <div class="half social-link">
      <i class="far fa-envelope"></i>
      <div>
        <h3 class="highlight yellow">email me</h3>
        <a href="" class="emailLinnk link-with-arrow">jackieleeliu[at]gmail[dot]com&nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
    <div class="half social-link">
      <i class="fab fa-instagram"></i>
      <div>
        <h3 class="highlight yellow">slide into the DMs</h3>
        <a target="_blank" href="https://www.instagram.com/jacq_ilu/" class="link-with-arrow">@jacq_ilu&nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
    </div>


    
   </section>

  </Layout>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
import homepageProjectElement from '~/components/homepageProjectElement.vue'
import Footer from '~/components/Footer.vue'
import Default from '~/layouts/Default.vue'
// import $ from '~/assets/scripts/jquery-3.4.1.min.js'

export default {
  components:{
      MainHeader,
      homepageProjectElement,
      Footer,
      Default
  },
  metaInfo: {
    title: 'Jackie Liu - art, design, code'
  },
  mounted() {



$(".bg-container").hide();
  var width = $(window).width();
  var num_copies = width*.03 ;

  //Generate 20 random hearts in bg-container
  var listOfIcons = [];
  var icons = ['fas fa-heart','far fa-angry','far fa-meh','fas fa-moon','fas fa-angle-down','fas fa-star','fas fa-spa','fas fa-poo','fas fa-dollar-sign']
  var icons = ['fas fa-heart','fas fa-star', 'fas fa-circle']
  var icon = icons[Math.floor((Math.random() * (icons.length)) + 0)];
  for (var i = 0; i < num_copies; i++){
    var width = $(window).width();
    // console.log(width);
    var height = $(window).height();
    
    var sizes = ['small', 'med','large', 'x-large' ];
    var colors = ['magenta','yellow','cyan'];

    //Randomly generate position, color, and size
    
    var x_position = Math.floor((Math.random() * (width+200)) + -200);
    var y_position = Math.floor((Math.random() * (height+600)) + -200);
    var color = colors[Math.floor((Math.random() * (colors.length)) + 0)];
    var size = sizes[Math.floor((Math.random() * (sizes.length)) + 0)]; 
    var opacity = (Math.random()*.4);
    var rellax_speed = (-Math.random()*5 );
    var animation_delay = -Math.random();

    var newIcon = document.createElement('i');
    //Randomize Icon
    // $(newIcon).addClass(color+" "+size+" "+icon);

    $(newIcon).addClass(color+" "+size+" fas fa-heart");
    $(newIcon).css("top", y_position+"px");
    $(newIcon).css("opacity",opacity);
    $(newIcon).css("left",x_position+"px");
    $(newIcon).css("animation-delay",animation_delay+"s");

    $(".bg-container").append(newIcon);
  }

  $(".bg-container").append(listOfIcons);
  $(".bg-container").fadeIn(2000,function(){
    $('.hero-arrow').css("opacity","1");
  });

  $(".unit").click(function(){
    var icon = $(this).find(".fas");
    var icon_class = $(icon).attr("class").split(' ')[1];
    var class_to_remove = $(".bg-container i").attr("class").split(' ')[3];
    $(".bg-container i").removeClass(class_to_remove).addClass(icon_class);
    $(".unit").removeClass("active");
    $(this).addClass('active');

  });
  




  function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }

  function topOfElementVisible(el){
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      return (elemTop >= 0 && elemTop <= window.innerHeight);
  }
  function bottomOfElementVisible(el){
      var rect = el.getBoundingClientRect();
       var elemBottom = rect.bottom;
      return (elemBottom <= window.innerHeight && elemBottom >= 0 );
  }




  function isScrolledIntoFocus(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Returns true when element at least 200 px from the top
        var isVisible = (elemBottom <= (window.innerHeight));
        return isVisible;
    }



    // Keep track of newly active element

    var currentElementInView = $(".projectElement")[0];
    document.addEventListener("scroll", function(){
      $.each($(".projectElement"),function(index,value){
        if (isScrolledIntoFocus(value)){
          $(value).addClass("hover");
        } else {
           $(value).removeClass("hover");
        }

      });
    });


  }
}

</script>

<style lang="scss">

.hero{
  padding: 0px !important;
  margin:0px !important;
  .title{
   
    font-family: "Space Mono";
    padding:0px;
    font-weight:bold;

    .unit{
      text-align:center;
      display:inline-block;
      width:100px;
      height:172px;
      position:relative;
      .letter{
        line-height:150px;
         font-size:140px;
        margin:auto;
        left:0px;
        right:0px;
        opacity:1;
        position:absolute;
        top:0px;

      }
      .fas{
        position:absolute;
        top:0px;
        margin:auto;
        left:0px;
        right:0px;
        line-height:172px;
        font-size:80px;
        overflow-y:hidden;
        height:200px;
        opacity:0;
        color: $magenta;
      }
    }
    .unit:hover, .unit.active{
      
      .letter{
        opacity:0;
      }
      .fas{
        opacity:1;
        
      }
    }

     .unit:hover:not(.active){
      cursor:pointer;
      .fas{
        color: black;
      }
     }

 
     .unit:click{
      .fas{
        font-size:64px;
      }
     }


  }
  .hero-text{
    font-weight:normal;
    font-size:38px;
    margin:0px;
    padding:0px;
  }

}
#work{
  .see-all-projects{
    padding-top:40px;
  }
}

#contact{
  padding:0px;


  .social-link {
    div, .far, .fab {
      display:inline-block;
      vertical-align:middle;
    }
    
    .far, .fab{
    font-size:32px;
    margin-right:24px;
    color: $magenta;
/*    background-color:yellow;*/
    /*border-radius:100px;*/
    padding-right:16px;
    mix-blend-mode: multiply;
    
   
    }

    h3{
      margin:0px;
      color:black;
    }
    p{
      margin:8px 0px 0px 0px;
    }
  } 

  

}


 @keyframes giggle {
   0%, 100% {
      transform:translate(-50%,-50%) translateY(-3px);
   }
   50% {
      transform:translate(-50%,-50%) translateY(3px);
   }
}

 @keyframes giggleB {
   0%, 100% {
      transform:translate(-50%,-50%) translateY(-6px);
   }
   50% {
      transform:translate(-50%,-50%) translateY(6px);
   }
}
@keyframes lines {
   0% {
      background-position:0px 0px;
   }
   100% {
      background-position:0px 25px;
   }
}



.bg-container{

  width:100vw;
  position:absolute;
  left:0px;
  top:0px;
  height:1400px;
  overflow-x:hidden;
  z-index:-100;


  .fas, .far{
    position:absolute;
    mix-blend-mode:darken;
    /*opacity:.5;*/
     animation:  giggle 1.6s ease infinite;
     z-index:-100;
  }

  .magenta{
    color:$magenta;
  }
  .yellow{
    color:$yellow;
  }
  .cyan{
    color:$cyan;
  }
  .x-small{
    font-size:14px;
  }
  .small{
    font-size:20px;
  }
  .med{
    font-size:60px;
  }
  .large{
    font-size:100px;
  }

  .x-large{
    font-size:180px;
  }

}

.bg-symbol{
  position:relative;
  z-index:-100;

  i {
    position:absolute;
    top:0px;
    left:0px;
    font-size:300px;
     mix-blend-mode: difference;

  }
}


.hero-arrow{
      font-size: 48px;
      position:relative;
      top:40px;
/*      left: calc( 50% - 8px);*/
     /* left: 50%;
      right: 50%;*/
/*      top: 630px;
      position: absolute;*/
      opacity:0;
      transition: .6s opacity;
}



</style>


<page-query>

query Post {
  contentfulProjectsGallery(id: "5wc9zSbeZzZ63ev1XqNug6") {
        id
        title
        projectLink{
          ...on ContentfulPortfolioPage { 
            title
            id
            slug
            workType
            shortDescription
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
            shortDescription
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
