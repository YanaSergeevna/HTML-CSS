// ovl carousel
$('.someReview').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    navText: [],
	    responsive:{
	        0:{
	            items:1
	        },
	    }
})
$('.slider-img').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    navText: [],
	    dots: true,
	    responsive:{
	        0:{
	            items:1
	        },
	    }
})
$('.team-block-mobile').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    navText: [],
	    dots: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        1:{
	            items:2
	        },
	    }
})
		$('.nav-toggle').on('click', function(){
		  $('#menu').toggleClass('active');
		});
		$('.header-menu a').on('click', function(){
		  $('#menu').removeClass('active');
		});
		$(document).ready(function() {
		     $(window).resize(function() {
		        if ($(window).width() <= '768'){
		        	$('.header-menu a').on('click', function(){
					$('html, body').animate({
						scrollTop: $(linkHref).offset().top + 20}, 500);
					});
		        }
		    });
		});

// heder navigation
$(document).ready(function() {

	var headerHeight = $('header').outerHeight();

	$('.header-menu a').click(function(e) {
		var linkHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}, 500);
		e.preventDefault();
		})
});

var hoverPlus = document.getElementsByClassName('teamSection-activCircle')
for(elem of hoverPlus){
    elem.onmouseover = function(event){
        event.target.innerText = '+'
    }
    elem.onmouseout = function(event){
        event.target.innerText = ''
    }
}
