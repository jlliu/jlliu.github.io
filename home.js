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
	$(".bg-container").fadeIn(2000);




});