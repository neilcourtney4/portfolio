"use strict";


jQuery(document).ready(function ($) {

    
  jQuery(window).load(function() {
    jQuery("#preloader").delay(100).fadeOut("slow");
    jQuery("#load").delay(100).fadeOut("slow");
  });

    /*---------------------------------------------*
     * Scroll Up Section
     ---------------------------------------------*/

    $(function () {
  $('.popover').popover({
    container: 'body'
  })
})
$(function () {
  $('[data-toggle="popover"]').popover()
})
    /*---------------------------------------------*
     * Scroll Total Navbar fix
     ---------------------------------------------*/
if(navigator.userAgent.match(/Trident\/7\./)) {
    $('body').on("mousewheel", function () {
        event.preventDefault();
        var wd = event.wheelDelta;
        var csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
    });
}
    
   
});