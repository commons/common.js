
// Disable hover effects on scroll
// Usage:
//     c.hover();
//     c.hover('myhoverclass', 500);

(function(d) {

	c.hover = function( classname, timeout ){
		// Used to track the enabling of hover effects
		var enableTimer = 0;
		// fallbacks
		classname = classname || 'nohover';
		timeout = timeout || 1000;
		/*
		 * Listen for a scroll and use that to remove
		 * the possibility of hover effects
		 */
		window.addEventListener('scroll', function() {
			clearTimeout(enableTimer);
			addHoverClass();

			// enable after 1 second, choose your own value here!
			enableTimer = setTimeout(removeHoverClass, timeout);
		}, false);

		/**
		 * Removes the hover class from the body. Hover styles
		 * are reliant on this class being present
		 */
		function removeHoverClass() {
			d.body.classList.remove(classname);
		}

		/**
		 * Adds the hover class to the body. Hover styles
		 * are reliant on this class being present
		 */
		function addHoverClass() {
			d.body.classList.add(classname);
		}

	};

})(document);
