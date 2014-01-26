
// Scroll monitoring for DOM updates
// Usage:
//     c.scroll();
//     c.scroll({ classname: 'myscrollclass', timeout: 1000 });

(function(w, d, c) {

	var defaults = {
		classname : 'scroll',
		timeout: 500
	};

	c.scroll = function( a, b ){
		// Used to track the enabling of scroll effects
		var enableTimer = 0;
		// fallbacks
		a = a || {};
		b = b || {};
		// cover the case of just sending a callback
		if( typeof a == "function" ){
			options = {};
			callback = a;
		} else if( typeof b == "function" ){
			options = a;
			callback = b;
		} else {
			options = a;
			callback = false;
		}
		// extend defaults
		options = c.extend( defaults, options );

		// Inspired by: http://www.html5rocks.com/en/tutorials/speed/unnecessary-paints/
		/*
		 * Listen for a scroll and use that to remove
		 * the possibility of scroll effects
		 */
		w.addEventListener('scroll', function() {
			// trigger callback
			if( callback ) callback();
			//
			clearTimeout(enableTimer);
			addScrollClass();

			// enable after 1 second, choose your own value here!
			enableTimer = setTimeout(removeScrollClass, options.timeout);
		}, false);

		/**
		 * Removes the scroll class from the body. Hover styles
		 * may be reliant on this class being present
		 */
		function removeScrollClass() {
			d.body.classList.remove( options.classname );
		}

		/**
		 * Adds the scroll class to the body. Hover styles
		 * may be reliant on this class being present
		 */
		function addScrollClass() {
			d.body.classList.add( options.classname );
		}

	};

})(window, document, this.c);
