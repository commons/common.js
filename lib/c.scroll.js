
// Scroll monitoring for DOM updates
// Usage:
//     c.scroll();
//     c.scroll({ classname: 'myhoverclass', timeout: 500 });

(function(d, c) {

	var defaults = {
		classname : 'nohover',
		timeout: 1000
	};

	c.scroll = function( options ){
		// Used to track the enabling of hover effects
		var enableTimer = 0;
		// fallbacks
		options = options || {};
		// extend defaults
		options = c.extend( defaults, options );

		/*
		 * Listen for a scroll and use that to remove
		 * the possibility of hover effects
		 */
		window.addEventListener('scroll', function() {
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

})(document, this.c);
