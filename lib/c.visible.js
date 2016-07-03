
// Minimal check if a DOM element is visible in the browser window
// Usage:
//     c.visible( document.getElementById('myid') );

(function(d) {

	// Based on the simplest solution of isOnScreen:
	// Source: http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen#h-o
	c.visible = function( element ){
		if( typeof element != "object" ) return null;
		var bounds = element.getBoundingClientRect();
		return bounds.top < window.innerHeight && bounds.bottom > 0;
	};

})(document);
