/**
 * @name common.js
 * @author makesites
 * Homepage: http://github.com/commons/common.js
 * Version: 0.1.1 (Tue, 19 Mar 2013 08:28:21 GMT)
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

/**
Simplified CRUD for document.cookie
**/
c.cookie = (function(window, document) {
    'use strict';

// Variables

    /**
    Local collection of all cookies, to reduce hitting the document.
    **/
    var cookies = {};

    var defaults = {
        name    : '',
        expires : {
            years : 100
        },
        path    : '/',
        domain  : window.location.hostname || window.location.origin,
		secure : false
    };


// Main Methods
    /**
    Sets a cookie value cookie onto the collection and the document.cookie property.

    @method set
    @param  {Object} config   The cookie object to set.  Properties on this object:
                                  {String} name     Required.  The name of the cookie
                                  {String} value    Required.  The value of this cookie
                                  {String} path    Optional.  The path of this cookie
                                  {String} domain    Optional.  The domain of this cookie
                                  {String} secure    Optional.  Check to make the cookie secure
                                  {Object} expires  Optional.  Contains properties which
                                                    will set the expiration date of this 
                                                    cookie.
                                                    Example: {
                                                        minutes: 15,
                                                        hours: 3,
                                                        days: 4,
                                                        weeks: 2,
                                                        months: 7,
                                                        years 10
                                                    } 
    @return {Boolean}
    **/
    function set(config) {
        if (!config || typeof config.name === 'undefined' || typeof config.value === 'undefined') {
            return false;
        }
		// merge with defaults
		config.name = config.name || defaults.name;
		config.expires = setExpiration( config.expires || defaults.expires );
		config.path = config.path || defaults.path;
		config.domain = config.domain || defaults.domain;
		config.secure = config.secure || defaults.secure;
		
        addToCookies(config);

        return true;
    }

    /**
    Returns the string value of a cookie.

    @method get
    @param  {String} name  The name of the cookie
    @return {String}
    **/
    function get(name) {
        return (has(name) && !isExpired(name)) ? cookies[name].value : undefined;
    }

    /**
    Checks for the existence of a cookie on the collection, updating the collection if it's not found.

    @method has
    @param  {String} name  The name of the cookie
    @return {Boolean}
    **/
    function has(name) {
        if (!name) {
            return false;
        }

        if (!cookies[name]) {
            readCookie(name);
        }
		/*
		if (cookie!=null && cookie!=""){
			return true;
		} else {
			return false;
		}
		*/
        return !!cookies[name];
    }

    /**
    Deletes a cookie from the collection and updates the document object.

    @method remove
    @param  {String} name  The name of the cookie
    @return {Boolean}
    **/
    function remove(name) {
		if (!name) {
			return false;
		}
		
		delete cookies[name];
		
		writeCookie(name);

        return true;
    }

	



// Helper Functions

    /**
    Reads the cookie value from the document object and parses it to the local 'cookie' collection. 
    **/
    function readCookie( name ) {
        var result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie);

		if (result && result[1]) {
			//cookies = JSON.parse(c.base64.decode(unescape(result[1])));
			cookies[name] = JSON.parse( window.unescape(result[1]) );
			return true;
        }
        return false;
		/* old: 
		var i,key,value,cookies=document.cookie.split(";");
		for (i=0;i<cookies.length;i++){
			key=cookies[i].substr(0,cookies[i].indexOf("="));
			value=cookies[i].substr(cookies[i].indexOf("=")+1);
			key=key.replace(/^\s+|\s+$/g,"");
			if (key==name){
				return unescape(value);
			}
		}
		*/
		
    }
	
	
    /**
    Stringifys the local cookie collection and sets it onto the document object
    **/
    function writeCookie(name) {
		// use base64 encoding?
		var cookie = cookies[name];
		var value = JSON.stringify(cookie.value);
		
		document.cookie += cookie.name + '=' + window.escape(value) + ';expires=' + cookie.expires + "; domain=" + cookie.domain + "; path=" + cookie.path + (cookie.secure ? "; secure" : "");
		/* Old: 
		var date = new Date( ( new Date() ).getTime() + parseInt(expiry) );
		var value=escape(val) + ((expiry==null) ? "" : "; expires="+date.toUTCString());
		document.cookie=name + "=" + value;
		*/
	}

    /**
    Adds or updates a cookie to the collection, and sets the updated collection on the document object
    **/
    function addToCookies(config) {
        var exists = readCookie(config.name);

        cookies[config.name] = config;
		
		if( !exists ){ 
			writeCookie(config.name);
		}
    }

    /**
    Allows for a more simplified and elegant method of setting an expires property.   
    
    @private
    @method setExpiration
    @param   {Object} exp   The expiration object set of the cookie
    **/
    function setExpiration(exp) {
        var time = 0;

        time += (exp.minutes) ? 1000 * 60 * exp.minutes : 0;
        time += (exp.hours)   ? 1000 * 60 * 60 * exp.hours : 0;
        time += (exp.days)    ? 1000 * 60 * 60 * 24 * exp.days : 0;
        time += (exp.weeks)   ? 1000 * 60 * 60 * 24 * 7 * exp.weeks : 0;
        time += (exp.months)  ? 1000 * 60 * 60 * 24 * 31 * exp.months : 0;
        time += (exp.years)   ? 1000 * 60 * 60 * 24 * 365 * exp.years : 0;
		
        return new Date(new Date().getTime() + time).getTime();
    }

    /**
    Checks if a cookie is spoiled.  This will also return true if the cookie is not found
    in the collection.     
    
    @private
    @method isExpired
    @param   {String} name   The cookie name
    @return {Boolean}
    **/
    function isExpired(name) {
        if (!name || !cookies[name]) {
            return true;
        }

        return cookies[name].expires < new Date().getTime() ? remove(name) : false;
    }





    /**
    Defining namespace
    **/
	var Cookie = {
        get : get,
        set : set,
        has : has,
        remove : remove
    };
	
	return Cookie;


}(window, document));
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
