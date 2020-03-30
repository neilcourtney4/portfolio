"use strict";


jQuery(document).ready(function ($) {

    
  jQuery(window).load(function() {
    jQuery("#preloader").delay(100).fadeOut("slow");
    jQuery("#load").delay(100).fadeOut("slow");
  });

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

    
   
});