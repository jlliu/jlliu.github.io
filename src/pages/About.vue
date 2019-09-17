<template>
  <Layout>
  	<MainHeader />
     <div class="grid-container">
        <h1 class="highlight yellow whole">hi, i'm jackie!</h1>
        <div class="three-fourth">
        <p class="scroll-reveal" v-scroll-reveal>
        i graduated in 2018 with a B.S. in computer science at MIT. currently, i'm pursuing a master's in creative technology at NYU's <a target="_blank" href="https://itp.nyu.edu/">Interactive Telecommunications Program</a> and working as a design intern at  <a target="_blank" href="https://codecademy.com/">Codecademy</a>. previously, i've done work with <a target="_blank" href="https://formlabs.com/">Formlabs</a> and <a target="_blank" href="https://girlswhocode.com/">Girls Who Code</a>.</p>
        <p class="scroll-reveal" v-scroll-reveal>
        as a <a href=#workSection>designer</a>, i'm dedicated to crafting effective, critical, and empowering solutions, and specialize in prototyping fluidly between design and code.</p>
        <p class="scroll-reveal" v-scroll-reveal>
        as an <a href=#artSection>artist/storyteller</a>, i like to deconstruct the visual language of digital media, then telling honest narratives and advocating for a culture of radical vulnerability and strength in softness.</p>
        <p class="scroll-reveal" v-scroll-reveal>
        i'm constantly exploring what kinds of things i want to create and how i want to exist. <a href="#contactSection">send me a message</a> if you'd like to collaborate!</p>
        
        <a target="_blank" href="resume.pdf" class="link-with-arrow">check out my resume &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>
        </div>
      </div>
  </Layout>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
export default {  
	components:{
	      MainHeader
	  },

  metaInfo: {
    title: 'About us'
  }
}
</script>
