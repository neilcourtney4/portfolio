(function($) {

  new WOW().init();
  
	//Time
	var d = new Date();
	document.getElementById("demo").innerHTML = d.getFullYear();
   
  
  jQuery(window).load(function() {
    jQuery("#preloader").delay(100).fadeOut("slow");
    jQuery("#load").delay(100).fadeOut("slow");
  });
    
	
	
   //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 350) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });
  
    $('.navbar-custom .navbar-nav li a').on('mouseup', function(){
      $(this).blur();
  });
  
  //Google Map
  
  var get_latitude = $('#google-map').data('latitude');
  var get_longitude = $('#google-map').data('longitude');

  function initialize_google_map() {
    var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
  }
  
  google.maps.event.addDomListener(window, 'load', initialize_google_map);

// custom code
	
  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {

    $('.navbar-nav li a').on('click', function(event) {

      if ($(this).is('a:not([href^="#"])') || $(this).attr("href") == '#') {
        return;
      }
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

    $('.page-scroll a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

  });
	
	

})(jQuery);
