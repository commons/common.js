
// Check the type of a variable
// Supported types:
// String, Number, Function, Array, Object, Null, Undefined, Boolean, RegExp, Error, Date, Symbol

// Usage:
//     c.type( variable, [type] );

(function(d) {

	var c = d.c || {};
	var types = ["String", "Number", "Function", "Array", "Object", "Null", "Undefined", "Boolean", "RegExp", "Error", "Date", "Symbol"];

	c.type = function( v, t ){
		// prerequisite(s)
		if( isUndefined( v ) ) return null;
		// variables
		var isType;

		if( !isUndefined( t ) && validType( t ) ){
			var ucType = ucWord( t );
			isType = eval("is"+ ucType +"("+ v +")" );
			return isType;
		} else {
			// loop through the types
			for( var i in types ){
				isType = eval("is"+ types[i] +"("+ v +")" );
				if( isType ) return true;
			}
		}
		// continue...
		return false;

	};

	// Internal methods

	function validType( type ){
		if( !type ) return false;
		//
		var ucType = ucWord( type );
		return (types.indexOf( ucType ) > -1);
	}

	function ucWord( str ){
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	// Type methods
	// Source: https://webbjocke.com/javascript-check-data-types/

	// Returns if a value is a string
	function isString( value ){
		return typeof value === 'string' || value instanceof String;
	}

	// Returns if a value is really a number
	function isNumber( value ){
		return typeof value === 'number' && isFinite(value);
	}

	// Returns if a value is a function
	function isFunction( value ){
		return typeof value === 'function';
	}

	// Returns if a value is an array
	function isArray( value ){
		// ES5 actually has a method for this (ie9+)
		if( isFunction(Array.isArray) ) return Array.isArray(value);
		// all other cases...
		return value && typeof value === 'object' && value.constructor === Array;
	}

	// Returns if a value is an object
	function isObject( value ){
		return value && typeof value === 'object' && value.constructor === Object;
	}
	// Returns if a value is null
	function isNull( value ){
		return value === null;
	}

	// Returns if a value is undefined
	function isUndefined( value ){
		return typeof value === 'undefined';
	}
	// Returns if a value is a boolean
	function isBoolean( value ){
		return typeof value === 'boolean';
	}
	// Returns if a value is a regexp
	function isRegExp( value ){
		return value && typeof value === 'object' && value.constructor === RegExp;
	}
	// Returns if value is an error object
	function isError( value ){
		return value instanceof Error && typeof value.message !== 'undefined';
	}
	// Returns if value is a date object
	function isDate( value ){
		return value instanceof Date;
	}
	// Returns if a Symbol
	function isSymbol( value ){
		return typeof value === 'symbol';
	}

})(document);
