$(document).ready(function() {
    
    // Get page dimensions
    var pageHeight = $('body').height();
    var pageWidth = $('body').width();
    
    // Set leaf html
    var leaf = '<span class="glyphicon glyphicon-leaf testleaf"></span>';
    
    // Random number generator (within a range)
    function RandomRange(min, max) {
    	return (Math.floor(Math.random()*(max - min + 1)) + min);
    }
    
    // Left/right picker
    function randomDirection() {
    	if (RandomRange(0,1)) {
    		return "+=";
    	}
    	else {
    		return "-=";
    	}
    }
    
    function fall(leaf) {
    	$(leaf).animate(
    		{
    			top: ["+=" + RandomRange(100,300), "linear"],
    			left: randomDirection() + RandomRange(100,200),
    			fontSize: RandomRange(10,30) + "px",
    			transform: "rotate(" + RandomRange(0,360) + "deg)"
    		},
    		{
    			duration: RandomRange(1000,3000),
    			queue: false,
    			complete: function() {
    				if ($(this).position().top < 1500) {
    					fall(this);
    				}
    				else {
    					$(this).remove();
    				}
    			}
    		}
    	);
    }
    
    // Add leaves to top of page
    for (var i = 0, limit = RandomRange(30,50); i < limit; i++) {
    	$('body').append(leaf);
    }
    
    // Scatter leaves
    $('.testleaf').each(function() {
    	$(this).css("left", RandomRange(0, pageWidth));
    	$(this).css("top", RandomRange(0, -300));
    	$(this).css("color","rgb("+RandomRange(0, 100)+","+RandomRange(0, 255)+","+0+")");
    	$(this).css("-ms-transform", "rotate(" + RandomRange(0,360) + "deg)");
    	$(this).css("-webkit-transform", "rotate(" + RandomRange(0,360) + "deg)");
    	$(this).css("transform", "rotate(" + RandomRange(0,360) + "deg)");
    });
    
    // Animate leaves
    $('.testleaf').each(function() {
    	fall(this);
    });
    
});