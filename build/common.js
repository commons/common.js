/**
 * @name common.js
 * @author makesites
 * Homepage: http://github.com/commons/common.js
 * Version: 0.1.1 (Tue, 19 Mar 2013 04:27:19 GMT)
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

/*global CSSMediaRule, matchMedia, define*/
/*!
 * mqa.js
 * https://github.com/peol/mqa.js/
 * MIT/GPL Dual License, use whatever fits your project.
 * Copyright(C) Andrée Hansson (@peolanha) 2013
 */
(function(window, document) {
	"use strict";

	var callbacks = {};
	var unbindCallbacks = {};
	var queries = {};

	/**
	 * Helper to convert any array-like object to an actual Array.
	 * @param {Object} arrayLike The object to convert
	 * @returns {Array} An array converted from the array-like object
	 */
	function toArray(arrayLike) {
		return Array.prototype.slice.apply(arrayLike);
	}

	/**
	 * Generic internal handler for `window.matchMedia#addListener`, invokes mqa callbacks for
	 * a specific alias.
	 * @param {String} alias The unique alias for a specific media query
	 */
	function createHandler(alias) {
		return function(mql) {
			var stack = callbacks[alias];
			if (!stack) {
				return;
			}
			stack.forEach(function(callback) {
				callback(mql.matches);
			});
		};
	}

	/**
	 * Hooks up internal caches and callbacks to the `window.matchMedia` API for a specific alias.
	 * @param {String} alias The unique alias for a specific media query
	 */
	function bind(alias) {
		var mql = matchMedia(queries[alias]);
		var cb = unbindCallbacks[alias] = createHandler(alias);
		cb.mql = mql;
		mql.addListener(cb);
	}

	/**
	 * Removes internal caches and unbinds the `window.matchMedia` handlers for a specific alias.
	 * @param {String} alias The unique alias for a specific media query
	 */
	function unbind(alias) {
		var unbindCallback = unbindCallbacks[alias];
		if (unbindCallback) {
			unbindCallback.mql.removeListener(unbindCallback);
		}
		delete callbacks[alias];
		delete unbindCallbacks[alias];
	}

	/**
	 * mqa is a library that minimizes the overlap of actual
	 * media queries between CSS and JavaScript. Other libraries tend to
	 * force the developer into duplicating their media queries from CSS
	 * to JavaScript, which decreases maintainability a lot. mqa uses a custom
	 * syntax that it parses from @media rules and automatically triggers
	 * events for by using defined aliases for the media queries.
	 * @namespace
	 * @name mqa
	 * @example
	 * // style.css:
	 * &#64;media all and (min-device-width: 800px) {
	 *	<strong>#-mqa-alias-myAliasName{}</strong>
	 *	.some-class {
	 *		color: red;
	 *	}
	 *	.some-other-class {
	 *		color: blue;
	 *	}
	 * }
	 * // script.js:
	 * mqa.on("myAliasName", function(active) {
	 *	// `active` indicates whether the media query was activated or not
	 * });
	 */
	var mqa = window.mqa = {};

	/**
	 * Add an aliased query that can be used programmatically.
	 * @param {String} alias The unique alias for the media query
	 * @param {String} query The full media query to match against
	 * @memberOf mqa
	 * @example
	 * mqa.add("landscape", "(orientation: landscape)");
	 */
	mqa.add = function(alias, query) {
		if (queries.hasOwnProperty(alias)) {
			throw new Error("Alias already defined: " + alias);
		}
		queries[alias] = query;
	};

	/**
	 * Remove an aliased query. Removes all caches and bound listeners.
	 * @param {String} alias The unique alias for the media query to remove
	 * @returns {Boolean} Whether the removal was successful or not (i.e. if the alias existed)
	 * @memberOf mqa
	 * @example
	 * if (mqa.remove("landscape")) {
	 *	// removal successful
	 * }
	 */
	mqa.remove = function(alias) {
		var exist = queries.hasOwnProperty(alias);
		if (exist) {
			unbind(alias);
			delete queries[alias];
		}
		return exist;
	};

	/**
	 * Parses the document's CSS/media rules for aliased queries.
	 * @memberOf mqa
	 */
	mqa.parse = function() {
		toArray(document.styleSheets).forEach(function(sheet) {
			toArray(sheet.cssRules).forEach(function(rule) {
				if (rule instanceof CSSMediaRule) {
					var alias = /#-mqa-alias-(\w+)\s*?\{/.exec(rule.cssText);
					if (alias) {
						mqa.add(alias[1], rule.media.mediaText);
					}
				}
			});
		});
	};

	/**
	 * Bind an callback for whenever a specific alias is (de-)activated.
	 * @param {String} alias The alias to listen for
	 * @param {Function} callback The handler when the query is triggered
	 * @memberOf mqa
	 * @example
	 * mqa.on("landscape", function(active) {
	 *	// invoked when the landscape media query is both activated and
	 *	// deactivated, you can check `active` to determine which one it is
	 * });
	 */
	mqa.on = function(alias, callback) {
		if (!queries.hasOwnProperty(alias)) {
			throw new Error("No such alias: " + alias);
		}
		var stack = callbacks[alias];
		if (!stack) {
			stack = [];
			bind(alias);
		}
		stack.push(callback);
		callbacks[alias] = stack;
	};

	/**
	 * Unbinds a callback from a specific alias.
	 * @param {String} alias The alias that was used to bind the event
	 * @param {Function} callback The callback that was used to bind the event
	 * @memberOf mqa
	 * @example
	 * function handler(active) {
	 *	// remove this handler after being invoked once
	 *	mqa.off("landscape", handler);
	 * }
	 * mqa.on("landscape", handler);
	 */
	mqa.off = function(alias, callback) {
		var stack = callbacks[alias];
		if (stack) {
			var index = stack.indexOf(callback);
			stack.splice(index, 1);
			if (!stack.length) {
				unbind(alias);
			}
		}
	};

	/**
	 * Test an alias to see if it's active or not.
	 * @param {String} alias The media query alias
	 * @returns {Boolean|null} Whether the query is active or not, null if no media query was found
	 * @memberOf mqa
	 * @example
	 * mqa.add("landscape", "(orientation: landscape");
	 * mqa.match("landscape"); // => true or false
	 */
	mqa.match = function(alias) {
		var query = queries[alias];
		var result = false;
		if (query) {
			result = matchMedia(query).matches;
		}
		return result;
	};

	/**
	 * An object imitating the internal list of aliases and their media queries.
	 * @name queries
	 * @readOnly
	 * @type {Object}
	 * @memberOf mqa
	 * @example
	 * mqa.queries; // => { "landscape": "(orientation: landscape)" }
	 */
	Object.defineProperty(mqa, "queries", {
		get: function() {
			var copy = {};
			Object.keys(queries).forEach(function(key) {
				copy[key] = queries[key];
			});
			return copy;
		}
	});

	mqa.parse();

	if(typeof define === "function" && define.amd) {
		define(mqa);
	}
}(window, document));
