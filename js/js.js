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

//activ product
$('#left-product-activ-button').hover(
    function(){
        $(this).css('background-color','#49cbcd');
        $(this).css('border', '1px solid #49cbcd');
        $('.left-product-header').css('background-color','#49cbcd');
    },
    function(){
       $(this).css('background-color','#788492');
       $('.left-product-header').css('background-color','#485460');
       $(this).css('border', '1px solid #788492');
   }
);
$('#middl-product-activ-button').hover(
    function(){
        $(this).css('background-color','#49cbcd');
        $(this).css('border', '1px solid #49cbcd');
        $('.middl-product-header').css('background-color','#49cbcd');
    },
    function(){
       $(this).css('background-color','#788492');
       $('.middl-product-header').css('background-color','#485460');
       $(this).css('border', '1px solid #788492');
   }
);
$('#right-product-activ-button').hover(
    function(){
        $(this).css('background-color','#49cbcd');
        $(this).css('border', '1px solid #49cbcd');
        $('.right-product-header').css('background-color','#49cbcd');
    },
    function(){
       $(this).css('background-color','#788492');
       $('.right-product-header').css('background-color','#485460');
       $(this).css('border', '1px solid #788492');
   }
);

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