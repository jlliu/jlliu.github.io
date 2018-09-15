$(document).ready(function(){

	$(".bg-container").hide();
	var width = $(window).width();
	var num_copies = width*.06 ;

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
		// console.log(x_position);
		var y_position = Math.floor((Math.random() * (height+600)) + -200);
		var color = colors[Math.floor((Math.random() * (colors.length)) + 0)];
		var size = sizes[Math.floor((Math.random() * (sizes.length)) + 0)]; 
		var opacity = (Math.random()*.4-.1);
		// var opacity = .5;

		var rellax_speed = (-Math.random()*5 );
		var animation_delay = -Math.random();

		var newIcon = document.createElement('i');
		$(newIcon).addClass(icon+" "+color+" "+size);
		$(newIcon).css("top", y_position+"px");
		$(newIcon).css("opacity",opacity);
		$(newIcon).css("left",x_position+"px");
		$(newIcon).css("animation-delay",animation_delay+"s");
		// $(newIcon).attr("data-rellax-speed",rellax_speed);
		// console.log(newIcon);
		


		

		$(".bg-container").append(newIcon);
	}

	$(".bg-container").append(listOfIcons);
	$(".bg-container").fadeIn(2000,function(){
		$('.hero-arrow').css("opacity","1");
	});
	




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

		});


		$('.hero-arrow').on('click', function(e) {
			console.log("hero clicked");
		    $("#aboutSection").trigger("click");

		})

		$("#contact img, #contact .button").hover(function(){
			$("#contact img").addClass('hovered');
			console.log('hover');
		}, function(){
			$("#contact img").removeClass('hovered');
		});


		// var animation = bodymovin.loadAnimation({
		// 	container: document.getElementById('bm'),
		// 	renderer: 'svg',
		// 	loop:true,
		// 	autoplay: true,
		// 	path: 'heart-mail.json'
		// })

		// addEventListener('hover',function(){
		//   myAnimationElement.beginElement();
		// },false);


	var username = "jackieleeliu";

	var hostname = "gmail.com";

	var linktext = username + "@" + hostname ;

	var emailHTML = "<a class='button' href='mailto:" +username+"@"+hostname+"'>e-mail me</a>";
	$(".emailWrapper").html(emailHTML);
	// document.write("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");


});