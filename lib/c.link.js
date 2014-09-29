
// Load link tags (styles & imposts) on the fly
// Usage:
//     c.link("/path/to/css/styles.css");
//     c.link("/path/to/imports/stuff.html", { id : "my-html-import", rel: "import" });

(function(d) {

	c.link = function( url, attr ){

		//fallbacks
		attr = attr || {};
		url = url || false;
		attr.id = attr.id || false;
		attr.rel = attr.rel || "stylesheet";
		attr.type = attr.type || false;
		// prerequisites
		if( !url ) return;
		if( attr.id && d.getElementById(attr.id) ) return;
		// variables
		var t = "link";
		var link = d.createElement(t);
		// clean url from protocol definition
		url = url.replace(/^http:|^https:/, "");
		// set attributes
		link.type = 'text/javascript';
		link.rel = attr.rel;
		if( attr.id ) link.id = attr.id;
		if( attr.type ) link.type = attr.type;
		link.href = ("https:"==location.protocol?"https:":"http:")+ url;
		// place in DOM
		var head = document.getElementsByTagName("head")[0];
		head.appendChild( link );

	};

})(document);
