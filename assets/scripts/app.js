(function($){
	
	//
	// Initialize the page
	//
	$(function(){

	    //
	    // Initialize Mobile Menu
	    //
	    $("#slide-nav").mmenu();
	    
        //
	    // Enable swiping for Carousel
	    //
	    $(".carousel-inner").swipe({

	        swipeLeft: function () {
	            $(this).parent().carousel('next');
	        },
	        swipeRight: function () {
	            $(this).parent().carousel('prev');
	        },
	        //Default is 75px, set to 0 for demo so any distance triggers swipe
	        threshold: 0
	    });

	});

})(jQuery);