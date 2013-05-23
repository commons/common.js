
// Scroll monitoring for DOM updates
// Usage:
//     c.scroll();
//     c.scroll({ classname: 'myscrollclass', timeout: 1000 });

(function(w, d, c) {

	var defaults = {
		classname : 'scroll',
		timeout: 500
	};

	c.scroll = function( options ){
		// Used to track the enabling of hover effects
		var enableTimer = 0;
		// fallbacks
		options = options || {};
		// extend defaults
		options = c.extend( defaults, options );

		// Inspired by: http://www.html5rocks.com/en/tutorials/speed/unnecessary-paints/
		/*
		 * Listen for a scroll and use that to remove
		 * the possibility of hover effects
		 */
		w.addEventListener('scroll', function() {
			clearTimeout(enableTimer);
			addHoverClass();

			// enable after 1 second, choose your own value here!
			enableTimer = setTimeout(removeHoverClass, options.timeout);
		}, false);

		/**
		 * Removes the hover class from the body. Hover styles
		 * are reliant on this class being present
		 */
		function removeHoverClass() {
			d.body.classList.remove( options.classname );
		}

		/**
		 * Adds the hover class to the body. Hover styles
		 * are reliant on this class being present
		 */
		function addHoverClass() {
			d.body.classList.add( options.classname );
		}

	};

})(window, document, this.c);
