"use strict";


jQuery(document).ready(function ($) {
	
	//Time of year
	var d = new Date();
	document.getElementById("demo").innerHTML = d.getFullYear();  
    
  jQuery(window).load(function() {
    jQuery("#preloader").delay(100).fadeOut("slow");
    jQuery("#load").delay(100).fadeOut("slow");
  });

  /*---------------------------------------------*
     * Parallax scrolling issue with internet explorer solution
     ---------------------------------------------*/
			if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
				$('body').on("mousewheel", function () {
					// remove default behavior
					event.preventDefault(); 

					//scroll without smoothing
					var wheelDelta = event.wheelDelta;
					var currentScrollPosition = window.pageYOffset;
					window.scrollTo(0, currentScrollPosition - wheelDelta);
				});
		}
    /*---------------------------------------------*
     * Scroll Up Section
     ---------------------------------------------*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150)
        {
            $('.scrollup').fadeIn();
        }
        else
        {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    /*---------------------------------------------*
     * Scroll Total Navbar
     ---------------------------------------------*/
	//jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {

    $('.probootstrap-main-nav li a').on('click', function(event) {

      if ($(this).is('a:not([href^="#"])') || $(this).attr("href") == '#') {
        return;
      }
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1000, 'easeInOutExpo');
      event.preventDefault();
    });

    $('.page-scroll a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1000, 'easeInOutExpo');
      event.preventDefault();
    });

  });
    
   
});