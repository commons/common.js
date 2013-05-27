// Here is the required polyfill setup...

// - fastclick.js
window.addEventListener('load', function() {
	'use strict';
	new FastClick(document.body);
}, false);