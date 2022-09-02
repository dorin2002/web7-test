$(document).ready(function(){
	function subMenuShow(e){
		var menuName = $(e).attr("data-menu");
		if ( $(e).hasClass("sub-menu")) {
			$('header .sub_sub-items .block-menu').removeClass("active");
			$('header .sub_nav .sub-item').removeClass("active");
			$('header .sub_sub-items .block-menu[data-menu=' + menuName + ']').addClass("active");
			$(e).addClass ("active");
		} else {
			$('header .sub_sub-items .block-menu').removeClass("active");
			$('header .sub_nav .sub-item').removeClass("active");
		}
    } 

	$('header .sub_nav .sub-item').hover(function() {
		subMenuShow(this);
	});

	$('header .sub_sub-items .block-menu svg').on('click', function(event){
		$('header .sub_sub-items .block-menu').removeClass("active");
			$('header .sub_nav .sub-item').removeClass("active");
	});

	$('.navbar .navbar-collapse .dropdown .dropdown-menu .first-level').on('click', function(event){
		$('.navbar .navbar-collapse .dropdown .nav-link').removeClass("show");
			$('.navbar .navbar-collapse .dropdown .dropdown-menu').removeClass("show");
	});

	$('.owl-carousel').owlCarousel({
		margin:10,
		nav:true,
		navText: ["<span class='left'></span>","<span class='right'></span>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1200:{
				items:3
			},
			1500:{
				items:4
			}
		}
	})

	$('.navbar .dropdown-menu').on('click', function(event){
		// The event won't be propagated up to the document NODE and 
		// therefore delegated events won't be fired
		event.stopPropagation();
	});

	$('.navbar .navbar-toggler, .navbar .nav-link').on('click', function(event){
		setTimeout(function(){ 
			if ( $('.navbar .dropdown-menu').hasClass("show")) {
				$('body').addClass("noScroll");
			} else {
				$('body').removeClass("noScroll");
			}
		 }, 200);
	});

  });