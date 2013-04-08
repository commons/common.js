# Common.js 

Not a plugin, not a framework... Just a collection of common JavaScript methods for the client. 

The scope of common.js is to persist on the rule ***"one include of the absolutely necessary"*** as a foundation to start building _any_ dependency stack.


Includes popular utilities: 
* [Universal console.log](https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js)
* [iOS orientationchange fix](https://github.com/scottjehl/iOS-Orientationchange-Fix)
* [mqa.js](https://github.com/peol/mqa.js)

Also contains a small toolkit of fundamental operations, mapped in the "c" variable on the global namespace. 


## Usage

Using bower: 
```
bower install common.js
```

## Common methods

These methods are available in the ```window.c``` namespace:

* ***query( str )*** : Parses a query to a javascript object
* ***script( url )*** : Adds a new script to the DOM
* ***cookie( val )*** : Simplified CRUD for document.cookie
* ***extend({a}, {b})*** : Merging two onjects recursively


## Credits

Created by [Makis Tracend](http://tracend.me)

Part of the [Commons](http://github.com/commons) collection of web assets

Distributed by [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)

