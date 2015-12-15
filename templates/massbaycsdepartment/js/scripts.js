jQuery(document).ready(function($){
	jQuery(function() {
        
    	jQuery('#nav-wrapper').height(jQuery("#nav").height());
    
    	jQuery('#nav').affix({
        	offset: { top: jQuery('#nav').offset().top }
    	});
    
    	//jQuery('.navbar-inner').width(jQuery(window).width());
        //jQuery('#nav-wrapper').width(jQuery(window).width());
        
        console.log("nav inner width: " + jQuery('.navbar-inner').width());
        console.log("nav: " + jQuery('#nav').width());
        console.log("nav wrapper width: " + jQuery('#nav-wrapper').width());
        console.log("body width: " + jQuery('body').width());
        console.log("window width: " + jQuery(window).width());
        console.log("document width: " + jQuery(document).width());
	});
    

	$(window).resize(function() {
    	
        jQuery('#nav').width(jQuery(document).width());
    
  		//jQuery('.navbar-inner').width(jQuery(window).width());
        //jQuery('#nav-wrapper').width(jQuery(window).width());
	});

	$(window).scroll(function() {
    
    	jQuery('#nav').width(jQuery(document).width());
        
		//jQuery('.navbar-inner').width(jQuery(window).width());
        //jQuery('#nav-wrapper').width(jQuery(window).width());
        console.log("nav inner width: " + jQuery('.navbar-inner').width());
        console.log("nav: " + jQuery('#nav').width());
        console.log("nav wrapper width: " + jQuery('#nav-wrapper').width());
        console.log("body width: " + jQuery('body').width());
        console.log("window width: " + jQuery(window).width());
        console.log("document width: " + jQuery(document).width());
	});

});