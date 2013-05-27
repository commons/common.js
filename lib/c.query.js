
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

