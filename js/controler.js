(function($) {

	var switcher = {

	}

    $.fn.controller = function(options) {
    	var settings = $.extend({
    		status : false,
    		ranger_slider : {
    			min : 1,
    			max : 100,
    			step : 10,
    			current: 0
    		}
    	}, options);
    	
        this.each( function() {
            $(this).text("Hello, World!");
        });

    }

}(jQuery));