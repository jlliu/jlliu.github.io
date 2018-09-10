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



	// var sticky = new Sticky('.nav',{"data-sticky-class":"is-sticky"} );

	function isScrolledIntoView(el) {
		    var rect = el.getBoundingClientRect();
		    var elemTop = rect.top;
		    var elemBottom = rect.bottom;

		    // Only completely visible elements return true:
		    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

		    return isVisible;
		
			// $(".powrMarkLink").css('visibility','hidden');
		}

		//Runs on scroll and updates which Section to make active in the header
		var activeHeaderId = null;

		function updateHeader() {
			$.each($(".nav ul li a"), function(index,value){
				var thisLink = value;
				var id = $(thisLink).attr("id")
				// console.log("id"+id);
				//The top or bottom boundary has just scrolled into view, and its ID is not the active one
				if ($("boundary"+"#"+id) != null) {
					if ((isScrolledIntoView($("boundary"+"#"+id)[0]) || isScrolledIntoView($("boundary"+"#"+id)[1]))  && id != activeHeaderId){
						// console.log("test");
						$(".nav a").not("a#"+id).removeClass("active");
						var activeHeaderId = id;
						$("a#"+id).addClass("active");
					}
				}

			});

		};

		
		console.log("poop");

		// $(".nav").sticky({topSpacing:0});

		document.addEventListener("scroll", updateHeader);

		const $navbar = $('.nav');

		$('a[href^="#"]').on('click', function(e) {
		    e.preventDefault();
		    const scrollTop =
		        $($(this).attr('href')).position().top -
		        $navbar.outerHeight();

		    $('html, body').animate({ scrollTop });
		    var id = $(this).attr("id")
    		$(".nav a").not("a#"+id).removeClass("active");
			var activeHeaderId = id;
			$("a#"+id).addClass("active");

		})



		



});