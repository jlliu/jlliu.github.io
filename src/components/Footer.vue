<template>
<div class="placeholder">
<div class="footer-wrapper">
<div class="divider"></div>
<p class="center-align">made with  <i class="fas fa-heart"></i> by jackie &middot; 2019 &#9734; built with <a>Gridsome</a>, <a>Vue.js</a> and <a>Contentful</a>.</p>
</div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  mounted(){

      
  }
}
</script>

<style lang="scss" scoped>
.placeholder{
  height:48px;
  margin-top:32px;
}
.footer-wrapper{
  /*background-color: rgba(50,50,50,.05);*/
  position:absolute;
  width:100vw;
  left:0px;
  /*padding-bottom:16px;*/
}
p{
  width:85%;
  max-width:$max-content-width;
  margin:auto;
  padding:0px;
  text-align:center;



  i{
    color: $magenta;
  }
}
</style>