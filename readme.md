# Common.js

Not a plugin, not a framework... Just a collection of common JavaScript methods for the client.

The scope of common.js is to persist on the rule ***"one include of the absolutely necessary"*** as a foundation to start building _any_ dependency stack.


## Features

Includes common polyfills:

* [Modernizr](https://github.com/Modernizr/Modernizr)
* [Universal console.log](https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js)
* [iOS orientationchange fix](https://github.com/scottjehl/iOS-Orientationchange-Fix)
* [mqa.js](https://github.com/peol/mqa.js)
* [Fastclick](https://github.com/ftlabs/fastclick)
* [Base64.js](https://github.com/davidchambers/Base64.js)
* [CSS: background-video](https://github.com/makesites/css-background-video)

Also contains a small toolkit of fundamental operations, mapped in the "c" variable on the global namespace.


## Install

Using bower:
```
bower install common.js
```

## Methods

These methods are available in the ```window.c``` namespace:

* ***query( str )*** : Parses a query to a javascript object
* ***script( url )*** : Adds a new script to the DOM
* ***cookie( val )*** : Simplified CRUD for document.cookie
* ***extend({a}, {b})*** : Merging two objects recursively
* ***link( url )*** : Adds a new link tag, of an HTML import or a stylesheet
* ***scroll( options )*** : Scroll monitoring for DOM updates - [Example](http://rawgithub.com/commons/common.js/master/examples/scroll.html)
* ***type( variable )*** : Check the type of a variable
* ***visible( element )*** : Minimal check if a DOM element is visible in the browser window


## Credits

Initialized by [Makis Tracend](http://tracend.me)

Part of the [Commons](http://github.com/commons) collection of web assets

Distributed by [Makesites.org](http://makesites.org)


## License

Released under the [MIT license](http://makesites.org/licenses/MIT)
