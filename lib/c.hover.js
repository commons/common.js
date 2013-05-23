
// Load scripts on the fly
// Usage:
//     c.script("//connect.facebook.net/en_US/all.js");
//     c.script('http://platform.twitter.com/widgets.js', { id : 'twitter-wjs',  async : true});

(function(d) {

	c.hover = function( classname, timeout ){
		// Used to track the enabling of hover effects
		var enableTimer = 0;
		// fallbacks
		classname = classname || 'hover';
		timeout = timeout || 1000;
		/*
		 * Listen for a scroll and use that to remove
		 * the possibility of hover effects
		 */
		window.addEventListener('scroll', function() {
			clearTimeout(enableTimer);
			removeHoverClass();

			// enable after 1 second, choose your own value here!
			enableTimer = setTimeout(addHoverClass, timeout);
		}, false);

		/**
		 * Removes the hover class from the body. Hover styles
		 * are reliant on this class being present
		 */
		function removeHoverClass() {
			document.body.classList.remove(classname);
		}

		/**
		 * Adds the hover class to the body. Hover styles
		 * are reliant on this class being present
		 */
		function addHoverClass() {
			document.body.classList.add(classname);
		}

	};

})(document);
