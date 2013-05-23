/**
 * @name common.js
 * @author makesites
 * Homepage: http://github.com/commons/common.js
 * Version: 0.2.2 (Thu, 23 May 2013 09:09:51 GMT)
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
// Object Extend method
// Usage c.extend({...}, {...});
c.extend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

// Scroll monitoring for DOM updates
// Usage:
//     c.scroll();
//     c.scroll({ classname: 'myscrollclass', timeout: 500 });

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

/*global CSSMediaRule, matchMedia, define, console*/
/*!
 * mqa.js
 * https://github.com/peol/mqa.js/
 * MIT/GPL Dual License, use whatever fits your project.
 * Copyright(C) Andrée Hansson (@peolanha) 2013
 */
(function(window, document) {
	"use strict";

	var DEBUG = false;
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
			log("Media query triggered for alias", alias);
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
		log("Binding", alias);
		mql.addListener(cb);
	}

	/**
	 * Removes internal caches and unbinds the `window.matchMedia` handlers for a specific alias.
	 * @param {String} alias The unique alias for a specific media query
	 */
	function unbind(alias) {
		var unbindCallback = unbindCallbacks[alias];
		if (unbindCallback) {
			log("Unbinding", alias);
			unbindCallback.mql.removeListener(unbindCallback);
		}
		delete callbacks[alias];
		delete unbindCallbacks[alias];
	}
//>>excludeStart("logFunction", pragmas.logFunction);

	/**
	 * Internal function used to debug mqa. Is removed when built for production. Controlled
	 * with `DEBUG` at the top of the library.
	 * @param {...mixed} [args] Takes undefined number of parameters, just like console.log
	 */
	function log() {
		if (!DEBUG) {
			return;
		}
		var args = toArray(arguments);
		args.unshift("[mqa.js]");
		console.log.apply(console, args);
	}
//>>excludeEnd("logFunction");

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
		log("Creating alias", alias, "with query", query);
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
		log("Removing alias", alias);
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
		log("Parsing CSS rules");
		toArray(document.styleSheets).forEach(function(sheet) {
			// exclude empty rule sets
			if( sheet.cssRules === null ) return;
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
		var stack = callbacks[alias];
		if (!stack) {
			stack = [];
			bind(alias);
		}
		stack.push(callback);
		callbacks[alias] = stack;
		log("Added new listener on", alias, callback);
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
		log("Removed listener from", alias, callback);
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
			return JSON.parse(JSON.stringify(queries));
		}
	});

	mqa.parse();

	if(typeof define === "function" && define.amd) {
		define(mqa);
	}
}(window, document));

/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 */
function FastClick(layer) {
	'use strict';
	var oldOnClick, self = this;


	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	if (!layer || !layer.nodeType) {
		throw new TypeError('Layer must be a document node');
	}

	/** @type function() */
	this.onClick = function() { return FastClick.prototype.onClick.apply(self, arguments); };

	/** @type function() */
	this.onMouse = function() { return FastClick.prototype.onMouse.apply(self, arguments); };

	/** @type function() */
	this.onTouchStart = function() { return FastClick.prototype.onTouchStart.apply(self, arguments); };

	/** @type function() */
	this.onTouchEnd = function() { return FastClick.prototype.onTouchEnd.apply(self, arguments); };

	/** @type function() */
	this.onTouchCancel = function() { return FastClick.prototype.onTouchCancel.apply(self, arguments); };

	if (FastClick.notNeeded()) {
		return;
	}

	// Set up event handlers as required
	if (this.deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'button':
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if (this.deviceIsIOS && target.type === 'file') {
			return true;
		}

		// Don't send a synthetic click to disabled inputs (issue #62)
		return target.disabled;
	case 'label':
	case 'video':
		return true;
	default:
		return (/\bneedsclick\b/).test(target.className);
	}
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
	case 'select':
		return true;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent('click', true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	if (this.deviceIsIOS && targetElement.setSelectionRange) {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (this.deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!this.deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}
		
			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0];

	if (Math.abs(touch.pageX - this.touchStartX) > 10 || Math.abs(touch.pageY - this.touchStartY) > 10) {
		return true;
	}

	return false;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	// If the touch has moved, cancel the click tracking
	if (this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		this.cancelNextClick = true;
		return true;
	}

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (this.deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (this.deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (this.deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		if (!this.deviceIsIOS4 || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (this.deviceIsIOS && !this.deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (this.deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


FastClick.notNeeded = function() {
	'use strict';
	var metaViewport;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	if ((/Chrome\/[0-9]+/).test(navigator.userAgent)) {

		// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
		if (FastClick.prototype.deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && metaViewport.content.indexOf('user-scalable=no') !== -1) {
				return true;
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.attach = function(layer) {
	'use strict';
	return new FastClick(layer);
};


if (typeof define !== 'undefined' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
}

if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
}

// Here is the required polyfill setup...

// - fastclick.js
window.addEventListener('load', function() {
	'use strict';
    new FastClick(document.body);
}, false);