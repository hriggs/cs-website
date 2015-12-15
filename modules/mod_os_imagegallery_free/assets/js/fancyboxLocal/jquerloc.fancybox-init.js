jQuerLoc(document).ready(function() {
	jQuerLoc('.fancyboxLoc').fancyboxLoc();

	/*
 // Change title type, overlay closing speed
 	$(".fancyboxLoc-effects-a").fancyboxLoc({
 		helpers: {
 			title : {
 			type : 'outside'
 			},
 			overlay : {
 			speedOut : 0
 			}
 		}
 	});
  // Disable opening and closing animations, change title type
 	$(".fancyboxLoc-effects-b").fancyboxLoc({
 		openEffect  : 'none',
 		closeEffect	: 'none',
 		helpers : {
 			title : {
 			type : 'over'
 			}
 		}
 	});
  // Set custom style, close if clicked, change title type and overlay color
 	$(".fancyboxLoc-effects-c").fancyboxLoc({
 		wrapCSS    : 'fancyboxLoc-custom',
 		closeClick : true,
 		openEffect : 'none',
 		helpers : {
 			title : {
 				type : 'inside'
 					},
 				overlay : {
 				css : {
 				'background' : 'rgba(238,238,238,0.85)'
 				}
 			}
 		}
 	});

  // Remove padding, set opening and closing animations, close if clicked and disable overlay
 	$(".fancyboxLoc-effects-d").fancyboxLoc({
 		padding: 0,
 		openEffect : 'elastic',
 		openSpeed  : 150,
 		closeEffect : 'elastic',
 		closeSpeed  : 150,
 		closeClick : true,
 		helpers : {
 		overlay : null
 		}
 	});
  // Button helper. Disable animations, hide close button, change title type and content
 	$('.fancyboxLoc-buttons').fancyboxLoc({
 		openEffect  : 'none',
 		closeEffect : 'none',
 		prevEffect : 'none',
 		nextEffect : 'none',
 		closeBtn  : false,
 		helpers : {
 			title : {
 				type : 'inside'
 			},
 			buttons	: {}
 		},
 		afterLoad : function() {
 		this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
 		}
 	});
  // Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
 	$('.fancyboxLoc-thumbs').fancyboxLoc({
 		prevEffect : 'none',
 		nextEffect : 'none',
 		closeBtn  : false,
 		arrows    : false,
 		nextClick : true,
 		helpers : {
 		thumbs : {
 			width  : 50,
 			height : 50
 			}
 		}
 	});
   // Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
	$('.fancyboxLoc-media').attr('rel', 'media-gallery').fancyboxLoc({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',
		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});
 //  Open manually
 	$("#fancyboxLoc-manual-a").click(function() {
 		$.fancyboxLoc.open('1_b.jpg');
 	});
 
 	$("#fancyboxLoc-manual-b").click(function() {
 		$.fancyboxLoc.open({
 			href : 'iframe.html',
 			type : 'iframe',
 			padding : 5
 		});
 	});

 	$("#fancyboxLoc-manual-c").click(function() {
 		$.fancyboxLoc.open([
 			{
 			href : '1_b.jpg',
 			title : 'My title'
 			}, {
 			href : '2_b.jpg',
 			title : '2nd title'
 			}, {
 			href : '3_b.jpg'
 			}
 			], {
 			helpers : {
 			thumbs : {
 			width: 75,
 			height: 50
 				}
 			}
 		});
 	});
*/

});