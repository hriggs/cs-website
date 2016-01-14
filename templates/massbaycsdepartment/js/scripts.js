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

var students = ["/student-projects", "/student-competitions", "/alumni"];

var faculty = ["/shamsi-moussavi", "/harold-riggs", "/giuseppe-sena", "/susanne-steiger-escobar"];

var grants = ["/batec", "/dhe", "/icreate-grant", "/mstem", "/stem-starter-academy", "/transform", "/artaic"];

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
        
        addBreadcrumb("/degrees-certificates", "Degrees & Certificates");
        
    } else if (courses.indexOf(window.location.pathname) > -1) {
    
    	// get parent item in main navbar
        var parentList = document.getElementsByClassName("item-106");
        var parent = parentList[0];
        
        // add current and active classes to parent
        parent.className += " current active";
        
        addBreadcrumb("/innovative-courses", "Innovative Courses");
        
    } else if (inits.indexOf(window.location.pathname) > -1) {
    
    	// get parent item in main navbar
        var parentList = document.getElementsByClassName("item-108");
        var parent = parentList[0];
        
        // add current and active classes to parent
        parent.className += " current active";
        
        addBreadcrumb("/initiatives", "Initiatives");
        
    } else if (students.indexOf(window.location.pathname) > -1) {
    
    	// get parent item in main navbar
        var parentList = document.getElementsByClassName("item-109");
        var parent = parentList[0];
        
        // add current and active classes to parent
        parent.className += " current active";
        
        addBreadcrumb("/students-and-alumni", "Students & Alumni");
                
    } else if (faculty.indexOf(window.location.pathname) > -1) {
    
    	// get parent item in main navbar
        var parentList = document.getElementsByClassName("item-110");
        var parent = parentList[0];
        
        // add current and active classes to parent
        parent.className += " current active";
        
        addBreadcrumb("/faculty-staff", "Faculty & Staff");
        
    } else if (grants.indexOf(window.location.pathname) > -1) {
    
    	// get parent item in main navbar
        var parentList = document.getElementsByClassName("item-111");
        var parent = parentList[0];
        
        // add current and active classes to parent
        parent.className += " current active";
        
        addBreadcrumb("/grants", "Grants");
    }
}

/**
 * Add parent link to breadcrumb.
 */
function addBreadcrumb(url, text) {

	// get elements on page with "breadcrumb" class
    var breadcrumbsList = 	document.getElementsByClassName("breadcrumb");
    var breadcrumb = breadcrumbsList[0];
     
    // create li element with attributes 
	var li = document.createElement("li");
    li.setAttribute("itemtype", "http://schema.org/ListItem");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemprop", "itemListElement");
        
    // create a element with attributes     
    var a = document.createElement("a");
    a.setAttribute("class", "pathway");
    a.setAttribute("href", url);
    a.setAttribute("itemprop", "item");
      
    // create span element with attributes   
    var span = document.createElement("span");
    span.setAttribute("itemprop", "name");
     
    // create text element
    var text =  document.createTextNode(text);
    
    // append items
    span.appendChild(text);
    a.appendChild(span);
      
    // create span divider element with attributes    
    var divider = document.createElement("span");
    divider.setAttribute("class", "divider")
     
    // create img element with attributes    
    var img = document.createElement("img");
    img.setAttribute("src", "/media/system/images/arrow.png");
    
    divider.appendChild(img);
     
    // create meta element with attributes    
    var meta = document.createElement("meta");
    meta.setAttribute("content", "1");
    meta.setAttribute("itemprop", "position");
    
    // append items
    li.appendChild(a);
    li.appendChild(divider);
    li.appendChild(meta);
    
    // add li to breadcrumb ul
	breadcrumb.insertBefore(li, breadcrumb.childNodes[2]);
}