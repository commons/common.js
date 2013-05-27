/**
Common: Cookie
Simplified CRUD for document.cookie
**/
c.cookie = (function(window, document) {
	'use strict';

	// Variables
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
	// Creates a new cookie
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

	// Reads an existing cookie
	function get(name) {
		return (has(name) && !isExpired(name)) ? cookies[name].value : undefined;
	}

	// Checks for the existence of a cookie on the collection, updating the collection if it's not found.
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

	// Deletes a cookie from the collection
	function remove(name) {
		if (!name) {
			return false;
		}

		delete cookies[name];

		writeCookie(name);

		return true;
	}





// Helper Functions

	// Reads the cookie value from the document object and parses it to the local 'cookie' collection.
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


	// Stringify cookie collection and sets it onto the document object
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

	// Adds or updates a cookie to the collection, and sets the updated collection on the document object
	function addToCookies(config) {
		var exists = readCookie(config.name);

		cookies[config.name] = config;

		if( !exists ){
			writeCookie(config.name);
		}
	}

	// A  simplified and elegant method of setting an expire property.
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

	// Checks if a cookie has expired.  This will also return true if the cookie is not found
	function isExpired(name) {
		if (!name || !cookies[name]) {
			return true;
		}

		return cookies[name].expires < new Date().getTime() ? remove(name) : false;
	}


	// Defining namespace
	var Cookie = {
		get : get,
		set : set,
		has : has,
		remove : remove
	};

	return Cookie;


}(window, document));