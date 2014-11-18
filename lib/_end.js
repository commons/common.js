// Here is the required polyfill setup...

// - fastclick.js
window.addEventListener('load', function() {
	// 'use strict';
	if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
		require(["fastclick"], function(FastClick) {
			new FastClick(document.body);
		});
	} else {
		new FastClick(document.body);
	}
}, false);