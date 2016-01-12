jQuery(document).ready(function($){
	jQuery(function() {
        
    	jQuery('#nav-wrapper').height(jQuery("#nav").height());
    
    	jQuery('#nav').affix({
        	offset: { top: jQuery('#nav').offset().top }
    	});
    
    	//jQuery('.navbar-inner').width(jQuery(window).width());
        //jQuery('#nav-wrapper').width(jQuery(window).width());
        
        /*console.log("nav inner width: " + jQuery('.navbar-inner').width());
        console.log("nav: " + jQuery('#nav').width());
        console.log("nav wrapper width: " + jQuery('#nav-wrapper').width());
        console.log("body width: " + jQuery('body').width());
        console.log("window width: " + jQuery(window).width());
        console.log("document width: " + jQuery(document).width());*/
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
        /*console.log("nav inner width: " + jQuery('.navbar-inner').width());
        console.log("nav: " + jQuery('#nav').width());
        console.log("nav wrapper width: " + jQuery('#nav-wrapper').width());
        console.log("body width: " + jQuery('body').width());
        console.log("window width: " + jQuery(window).width());
        console.log("document width: " + jQuery(document).width());*/
	});
    
    // highlight navbar
    highlightNav();

});

// list of child URLs
var degrees = ["/computer-information-systems", "/computer-science", "/information-systems-technology-management-management", "/information-systems-technology-management-technology", "/cyber-security", "/advanced-cyber-security", "/information-technology", "/technology-support", "/web-designer", "/web-developer", "/web-master"];

var courses = ["/shopping-cart-experience", "/cs-101", "/icreate"];

var inits = ["/cs-engineering-club", "/technology-internship-program", "/stem-mentor-program"];

/**
 * Highlight main navbar at top when on child pages. 
 */
function highlightNav() {

	// check which child page on 
	if (degrees.indexOf(window.location.pathname) > -1) {

        // get parent item in main navbar
        var parentList = document.getElementsByClassName("item-105");
        var parent = parentList[0];
        
        // add current and active classes to parent
        parent.className += " current active";
    } else if (courses.indexOf(window.location.pathname) > -1) {
    
    	// get parent item in main navbar
        var parentList = document.getElementsByClassName("item-106");
        var parent = parentList[0];
        
        // add current and active classes to parent
        parent.className += " current active";
    }

}