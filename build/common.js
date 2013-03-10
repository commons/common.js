/**
 * @name common.js
 * @author makesites
 * Homepage: http://github.com/commons/common.js
 * Version: 0.1.0 (Sun, 10 Mar 2013 01:30:37 GMT)
 * @license MIT license
 */
 
 // global namespace
var c = {};


// Parse query params
c.query = function( url ) {
	// fallback to the window location
	url = url || window.location.href;
    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
};



// Load scripts on the fly
// Usage: 
//     c.script("//connect.facebook.net/en_US/all.js");
//     c.script('http://platform.twitter.com/widgets.js', { id : 'twitter-wjs',  async : true});

(function(d) {
	
	c.script = function( url, attr ){
		
		//fallbacks
		attr = attr || {};
		url = url || false;
		attr.id = attr.id || false;
		attr.async = attr.async || false;
		// prerequisites
		if( !url ) return;
		if( attr.id && d.getElementById(attr.id) ) return;
		// variables
		var t = "script";
		var js = d.createElement(t);
		// clean url from protocol definition
		url = url.replace(/^http:|^https:/, "");
		// set attributes
		js.type = 'text/javascript'; 
		if( attr.id ) js.id = attr.id; 
		js.async = attr.async;
		js.src = ("https:"==location.protocol?"https:":"http:")+ url;
		// place in DOM
		var s = d.getElementsByTagName(t)[0]; 
		s.parentNode.insertBefore(js, s);
	
	};
	
})(document);

/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT / GPLv2 License.
*/
(function(w){
	
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	var ua = navigator.userAgent;
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf( "AppleWebKit" ) > -1 ) ){
		return;
	}

    var doc = w.document;

    if( !doc.querySelector ){ return; }

    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;

    if( !meta ){ return; }

    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true;
    }

    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false;
    }
	
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
				
		// If portrait orientation and in one of the danger zones
        if( (!w.orientation || w.orientation === 180) && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){
				disableZoom();
			}
        }
		else if( !enabled ){
			restoreZoom();
        }
    }
	
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );

})( this );

// #1 - Universal console log
// Source: https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
