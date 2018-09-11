$(document).ready(function(){

	window.onscroll = function() {myFunction()};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("is-sticky")
	  } else {
	    navbar.classList.remove("is-sticky");
	  }
	}

	$(".home .nav-name").click(function(){
		console.log("nav name clicked");
		$(window).scrollTop(0);
	})


	// var sticky = new Sticky('.nav',{"data-sticky-class":"is-sticky"} );




		



});