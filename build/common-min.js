var c={};c.query=function(e){e=e||window.location.href;{var t={};e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,n,o){t[n]=o})}return t},function(e){c.script=function(t,n){if(n=n||{},t=t||!1,n.id=n.id||!1,n.async=n.async||!1,t&&(!n.id||!e.getElementById(n.id))){var o="script",r=e.createElement(o);t=t.replace(/^http:|^https:/,""),r.type="text/javascript",n.id&&(r.id=n.id),r.async=n.async,r.src=("https:"==location.protocol?"https:":"http:")+t;var i=e.getElementsByTagName(o)[0];i.parentNode.insertBefore(r,i)}}}(document),c.cookie=function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof e.name&&"undefined"!=typeof e.value?(e.name=e.name||f.name,e.expires=u(e.expires||f.expires),e.path=e.path||f.path,e.domain=e.domain||f.domain,e.secure=e.secure||f.secure,s(e),!0):!1}function o(e){return r(e)&&!l(e)?d[e].value:void 0}function r(e){return e?(d[e]||a(e),!!d[e]):!1}function i(e){return e?(delete d[e],c(e),!0):!1}function a(n){var o=new RegExp("(?:^|; )"+encodeURIComponent(n)+"=([^;]*)").exec(t.cookie);return o&&o[1]?(d[n]=JSON.parse(e.unescape(o[1])),!0):!1}function c(n){var o=d[n],r=JSON.stringify(o.value);t.cookie+=o.name+"="+e.escape(r)+";expires="+o.expires+"; domain="+o.domain+"; path="+o.path+(o.secure?"; secure":"")}function s(e){var t=a(e.name);d[e.name]=e,t||c(e.name)}function u(e){var t=0;return t+=e.minutes?6e4*e.minutes:0,t+=e.hours?36e5*e.hours:0,t+=e.days?864e5*e.days:0,t+=e.weeks?6048e5*e.weeks:0,t+=e.months?26784e5*e.months:0,t+=e.years?31536e6*e.years:0,new Date((new Date).getTime()+t).getTime()}function l(e){return e&&d[e]?d[e].expires<(new Date).getTime()?i(e):!1:!0}var d={},f={name:"",expires:{years:100},path:"/",domain:e.location.hostname||e.location.origin,secure:!1},p={get:o,set:n,has:r,remove:i};return p}(window,document),c.extend=function(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},arguments.callee(e[n],t[n])):e[n]=t[n];return e},function(e){c.link=function(t,n){if(n=n||{},t=t||!1,n.id=n.id||!1,n.rel=n.rel||"stylesheet",n.type=n.type||!1,t&&(!n.id||!e.getElementById(n.id))){var o="link",r=e.createElement(o);t=t.replace(/^http:|^https:/,""),r.type="text/javascript",r.rel=n.rel,n.id&&(r.id=n.id),n.type&&(r.type=n.type),r.href=("https:"==location.protocol?"https:":"http:")+t;var i=document.getElementsByTagName("head")[0];i.appendChild(r)}}}(document),function(e,t,n){var o={classname:"scroll",timeout:500};n.scroll=function(r,i){function a(){t.body.classList.remove(options.classname)}function c(){t.body.classList.add(options.classname)}var s=0;r=r||{},i=i||{},"function"==typeof r?(options={},callback=r):"function"==typeof i?(options=r,callback=i):(options=r,callback=!1),options=n.extend(o,options),e.addEventListener("scroll",function(){callback&&callback(),clearTimeout(s),c(),s=setTimeout(a,options.timeout)},!1)}}(window,document,this.c),function(){c.visible=function(e){if("object"!=typeof e)return null;var t=e.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>0}}(document),function(){function e(e){this.message=e}var t="undefined"!=typeof exports?exports:this,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.prototype=new Error,e.prototype.name="InvalidCharacterError",t.btoa||(t.btoa=function(t){for(var o,r,i=0,a=n,c="";t.charAt(0|i)||(a="=",i%1);c+=a.charAt(63&o>>8-i%1*8)){if(r=t.charCodeAt(i+=.75),r>255)throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");o=o<<8|r}return c}),t.atob||(t.atob=function(t){if(t=t.replace(/=+$/,""),t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,r,i=0,a=0,c="";r=t.charAt(a++);~r&&(o=i%4?64*o+r:r,i++%4)?c+=String.fromCharCode(255&o>>(-2*i&6)):0)r=n.indexOf(r);return c})}(),function(e){function t(){l.setAttribute("content",p),h=!0}function n(){l.setAttribute("content",f),h=!1}function o(o){u=o.accelerationIncludingGravity,a=Math.abs(u.x),c=Math.abs(u.y),s=Math.abs(u.z),e.orientation&&180!==e.orientation||!(a>7||(s>6&&8>c||8>s&&c>6)&&a>5)?h||t():h&&n()}var r=navigator.userAgent;if(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(r)&&r.indexOf("AppleWebKit")>-1){var i=e.document;if(i.querySelector){var a,c,s,u,l=i.querySelector("meta[name=viewport]"),d=l&&l.getAttribute("content"),f=d+",maximum-scale=1",p=d+",maximum-scale=10",h=!0;l&&(e.addEventListener("orientationchange",t,!1),e.addEventListener("devicemotion",o,!1))}}}(this),function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=n.length,r=window.console=window.console||{};o--;)e=n[o],r[e]||(r[e]=t)}(),function(e,t){"use strict";function n(e){return Array.prototype.slice.apply(e)}function o(e){return function(t){var n=s[e];n&&(a("Media query triggered for alias",e),n.forEach(function(e){e(t.matches)}))}}function r(e){var t=matchMedia(l[e]),n=u[e]=o(e);n.mql=t,a("Binding",e),t.addListener(n)}function i(e){var t=u[e];t&&(a("Unbinding",e),t.mql.removeListener(t)),delete s[e],delete u[e]}function a(){if(c){var e=n(arguments);e.unshift("[mqa.js]"),console.log.apply(console,e)}}var c=!1,s={},u={},l={},d=location.origin||location.protocol+"//"+location.hostname+(location.port?":"+location.port:""),f={};f.add=function(e,t){a("Creating alias",e,"with query",t),l[e]=t},f.remove=function(e){a("Removing alias",e);var t=l.hasOwnProperty(e);return t&&(i(e),delete l[e]),t},f.parse=function(){a("Parsing CSS rules"),n(t.styleSheets).forEach(function(e){var t=e.href&&0!==e.href.indexOf("/")&&0!==e.href.indexOf(d);t||null===e.cssRules||n(e.cssRules).forEach(function(e){if(e&&e instanceof CSSMediaRule){var t=/#-mqa-alias-(\w+)\s*?\{/.exec(e.cssText);t&&f.add(t[1],e.media.mediaText)}})})},f.on=function(e,t){var n=s[e];n||(n=[],r(e)),n.push(t),s[e]=n,a("Added new listener on",e,t)},f.off=function(e,t){var n=s[e];if(n){var o=n.indexOf(t);n.splice(o,1),n.length||i(e)}a("Removed listener from",e,t)},f.match=function(e){var t=l[e],n=!1;return t&&(n=matchMedia(t).matches),n},Object.defineProperty(f,"queries",{get:function(){return JSON.parse(JSON.stringify(l))}}),f.parse(),"function"==typeof define&&define.amd?define(f):e.mqa=f,e.c.mqa=f}(window,document),function(){"use strict";function e(n,o){function r(e,t){return function(){return e.apply(t,arguments)}}var i;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=n,this.tapDelay=o.tapDelay||200,!e.notNeeded(n)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;u>s;s++)c[a[s]]=r(c[a[s]],c);t&&(n.addEventListener("mouseover",this.onMouse,!0),n.addEventListener("mousedown",this.onMouse,!0),n.addEventListener("mouseup",this.onMouse,!0)),n.addEventListener("click",this.onClick,!0),n.addEventListener("touchstart",this.onTouchStart,!1),n.addEventListener("touchmove",this.onTouchMove,!1),n.addEventListener("touchend",this.onTouchEnd,!1),n.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(n.removeEventListener=function(e,t,o){var r=Node.prototype.removeEventListener;"click"===e?r.call(n,e,t.hijacked||t,o):r.call(n,e,t,o)},n.addEventListener=function(e,t,o){var r=Node.prototype.addEventListener;"click"===e?r.call(n,e,t.hijacked||(t.hijacked=function(e){e.propagationStopped||t(e)}),o):r.call(n,e,t,o)}),"function"==typeof n.onclick&&(i=n.onclick,n.addEventListener("click",function(e){i(e)},!1),n.onclick=null)}}var t=navigator.userAgent.indexOf("Android")>0,n=/iP(ad|hone|od)/.test(navigator.userAgent),o=n&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=n&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),i=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(n&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!t;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},e.prototype.sendClick=function(e,t){var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},e.prototype.determineEventType=function(e){return t&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(e){var t;n&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},e.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},e.prototype.onTouchStart=function(e){var t,r,i;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),r=e.targetTouches[0],n){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!o){if(r.identifier&&r.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=r.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=r.pageX,this.touchStartY=r.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},e.prototype.onTouchMove=function(e){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(e){var i,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=e.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),c=l.tagName.toLowerCase(),"label"===c){if(i=this.findControl(l)){if(this.focus(l),t)return!1;l=i}}else if(this.needsFocus(l))return e.timeStamp-a>100||n&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,e),n&&"select"===c||(this.targetElement=null,e.preventDefault()),!1);return n&&!o&&(s=l.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(l)||(e.preventDefault(),this.sendClick(l,e)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},e.prototype.destroy=function(){var e=this.layer;t&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(e){var n,o,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!t)return!0;if(n=document.querySelector("meta[name=viewport]")){if(-1!==n.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(i&&(r=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),r[1]>=10&&r[2]>=3&&(n=document.querySelector("meta[name=viewport]")))){if(-1!==n.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction?!0:!1},e.attach=function(t,n){return new e(t,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("fastclick",function(){return e}):"undefined"!=typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e}(),window.Modernizr=function(e,t,n){function o(e){b.cssText=e}function r(e,t){return o(C.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var o in e){var r=e[o];if(!a(r,"-")&&b[r]!==n)return"pfx"==t?r:!0}return!1}function s(e,t,o){for(var r in e){var a=t[e[r]];if(a!==n)return o===!1?e[r]:i(a,"function")?a.bind(o||t):a}return!1}function u(e,t,n){var o=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+S.join(o+" ")+o).split(" ");return i(t,"string")||i(t,"undefined")?c(r,t):(r=(e+" "+T.join(o+" ")+o).split(" "),s(r,t,n))}function l(){h.input=function(n){for(var o=0,r=n.length;r>o;o++)j[n[o]]=!!(n[o]in E);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var o,r,i,a=0,c=e.length;c>a;a++)E.setAttribute("type",r=e[a]),o="text"!==E.type,o&&(E.value=k,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&E.style.WebkitAppearance!==n?(v.appendChild(E),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,v.removeChild(E)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?E.checkValidity&&E.checkValidity()===!1:E.value!=k)),M[e[a]]=!!o;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.7.1",h={},m=!0,v=t.documentElement,g="modernizr",y=t.createElement(g),b=y.style,E=t.createElement("input"),k=":)",w={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",S=x.split(" "),T=x.toLowerCase().split(" "),L={svg:"http://www.w3.org/2000/svg"},N={},M={},j={},A=[],O=A.slice,P=function(e,n,o,r){var i,a,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(o,10))for(;o--;)c=t.createElement("div"),c.id=r?r[o]:g+(o+1),u.appendChild(c);return i=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),u.id=g,(l?u:d).innerHTML+=i,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=v.style.overflow,v.style.overflow="hidden",v.appendChild(d)),a=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),v.style.overflow=s),!!a},D=function(){function e(e,r){r=r||t.createElement(o[e]||"div"),e="on"+e;var a=e in r;return a||(r.setAttribute||(r=t.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(e,""),a=i(r[e],"function"),i(r[e],"undefined")||(r[e]=n),r.removeAttribute(e))),r=null,a}var o={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),B={}.hasOwnProperty;f=i(B,"undefined")||i(B.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return B.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=O.call(arguments,1),o=function(){if(this instanceof o){var r=function(){};r.prototype=t.prototype;var i=new r,a=t.apply(i,n.concat(O.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(O.call(arguments)))};return o}),N.flexbox=function(){return u("flexWrap")},N.flexboxlegacy=function(){return u("boxDirection")},N.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},N.canvastext=function(){return!(!h.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},N.webgl=function(){return!!e.WebGLRenderingContext},N.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:P(["@media (",C.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},N.geolocation=function(){return"geolocation"in navigator},N.postmessage=function(){return!!e.postMessage},N.websqldatabase=function(){return!!e.openDatabase},N.indexedDB=function(){return!!u("indexedDB",e)},N.hashchange=function(){return D("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},N.history=function(){return!(!e.history||!history.pushState)},N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},N.rgba=function(){return o("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},N.hsla=function(){return o("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},N.multiplebgs=function(){return o("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},N.backgroundsize=function(){return u("backgroundSize")},N.borderimage=function(){return u("borderImage")},N.borderradius=function(){return u("borderRadius")},N.boxshadow=function(){return u("boxShadow")},N.textshadow=function(){return""===t.createElement("div").style.textShadow},N.opacity=function(){return r("opacity:.55"),/^0.55$/.test(b.opacity)},N.cssanimations=function(){return u("animationName")},N.csscolumns=function(){return u("columnCount")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return o((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},N.cssreflections=function(){return u("boxReflect")},N.csstransforms=function(){return!!u("transform")},N.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in v.style&&P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},N.csstransitions=function(){return u("transition")},N.fontface=function(){var e;return P('@font-face {font-family:"font";src:url("https://")}',function(n,o){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(o.split(" ")[0])}),e},N.generatedcontent=function(){var e;return P(["#",g,"{font:0/0 a}#",g,':after{content:"',k,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},N.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(o){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n},N.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},N.webworkers=function(){return!!e.Worker},N.applicationcache=function(){return!!e.applicationCache},N.svg=function(){return!!t.createElementNS&&!!t.createElementNS(L.svg,"svg").createSVGRect},N.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==L.svg},N.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(L.svg,"animate")))},N.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(L.svg,"clipPath")))};for(var F in N)f(N,F)&&(d=F.toLowerCase(),h[d]=N[F](),A.push((h[d]?"":"no-")+d));return h.input||l(),h.addTest=function(e,t){if("object"==typeof e)for(var o in e)f(e,o)&&h.addTest(o,e[o]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(v.className+=" "+(t?"":"no-")+e),h[e]=t}return h},o(""),y=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=g[e[m]];return t||(t={},v++,e[m]=v,g[v]=t),t}function i(e,n,o){if(n||(n=t),l)return n.createElement(e);o||(o=r(n));var i;return i=o.cache[e]?o.cache[e].cloneNode():h.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:o.frag.appendChild(i)}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||r(e);for(var i=n.frag.cloneNode(),a=0,c=o(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var o=r(e);return!y.shivCSS||u||o.hasCSS||(o.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,o),e}var u,l,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=y,s(t)}(this,t),h._version=p,h._prefixes=C,h._domPrefixes=T,h._cssomPrefixes=S,h.hasEvent=D,h.testProp=function(e){return c([e])},h.testAllProps=u,h.testStyles=P,v.className=v.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+A.join(" "):""),h}(this,this.document),function(e,t,n){function o(e){return"[object Function]"==v.call(e)}function r(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=g.shift();y=1,e?e.t?h(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,o,r,i,s,u){function l(t){if(!p&&a(d.readyState)&&(b.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){k.removeChild(d)},50);for(var o in T[n])T[n].hasOwnProperty(o)&&T[n][o].onload()}}var u=u||f.errorTimeout,d=t.createElement(e),p=0,v=0,b={t:o,s:n,e:i,a:s,x:u};1===T[n]&&(v=1,T[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){l.call(this,v)},g.splice(r,0,b),"img"!=e&&(v||2===T[n]?(k.insertBefore(d,E?null:m),h(l,u)):T[n].push(d))}function u(e,t,n,o,i){return y=0,t=t||"j",r(e)?s("c"==t?C:w,e,t,this.i++,n,o,i):(g.splice(this.i++,0,e),1==g.length&&c()),this}function l(){var e=f;return e.loader={load:u,i:0},e}var d,f,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],v={}.toString,g=[],y=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,k=E?p:m.parentNode,p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,w=b?"object":p?"script":"img",C=p?"script":w,x=Array.isArray||function(e){return"[object Array]"==v.call(e)},S=[],T={},L={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,o,e=e.split("!"),r=S.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)o=e[n].split("="),(t=L[o.shift()])&&(i=t(i,o));for(n=0;r>n;n++)i=S[n](i);return i}function a(e,r,i,a,c){var s=t(e),u=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(r&&(r=o(r)?r:r[e]||r[a]||r[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,r,i,a,c):(T[s.url]?s.noexec=!0:T[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(o(r)||o(u))&&i.load(function(){l(),r&&r(s.origUrl,c,a),u&&u(s.origUrl,c,a),T[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(r(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),a(e,d,t,0,u);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(o(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[s])),a(e[s],d,t,s,u))}else!n&&p()}var c,s,u=!!e.test,l=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;n(u?e.yep:e.nope,!!l),l&&n(l)}var s,u,d=this.yepnope.loader;if(r(e))a(e,0,d,0);else if(x(e))for(s=0;s<e.length;s++)u=e[s],r(u)?a(u,0,d,0):x(u)?f(u):Object(u)===u&&c(u,d);else Object(e)===e&&c(e,d)},f.addPrefix=function(e,t){L[e]=t},f.addFilter=function(e){S.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,o,r,s,u){var l,d,p=t.createElement("script"),r=r||f.errorTimeout;p.src=e;for(d in o)p.setAttribute(d,o[d]);n=u?c:n||i,p.onreadystatechange=p.onload=function(){!l&&a(p.readyState)&&(l=1,n(),p.onload=p.onreadystatechange=null)},h(function(){l||(l=1,n(1))},r),s?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,o,r,a,s){var u,r=t.createElement("link"),n=s?c:n||i;r.href=e,r.rel="stylesheet",r.type="text/css";for(u in o)r.setAttribute(u,o[u]);a||(m.parentNode.insertBefore(r,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(e,t){"use strict";var n=n||!1,o=o||!1;"function"==typeof n&&n.amd?n("background-video",[],t):"object"==typeof o&&o&&"object"==typeof o.exports?o.exports=t:t(e)}(this,function(e){var t=function(t){e.document=e.document||{},t=t||{},this.options=s.extend({},n,t),this.styles(),this.options.autoparse&&this.parse()},n={autoparse:!0,position:"absolute",attribute:"background",className:"css-background-video",dataClass:!1},o=function(e){e.addEventListener("error",function(){this.load()},!1),e.addEventListener("canplaythrough",function(){this.parentNode.style.background="none"},!1),e.addEventListener("play",function(){this.setAttribute("data-state","play")},!1),e.addEventListener("pause",function(){this.setAttribute("data-state","pause")},!1),e.addEventListener("ended",function(){this.setAttribute("data-state","ended")},!1)},r=function(){if(e.document.styleSheets){var t=e.document.styleSheets,n=i.bind(this)(t);for(var o in n){var r=e.document.querySelectorAll(o);this.render(r,n[o])}}},i=function(e,t){t=t||{};for(var n in e){var o=e[n].rules||e[n].cssRules;for(var r in o)if(o[r].cssText&&-1!=o[r].cssText.search(this.options.attribute)&&-1!=o[r].cssText.search(/mp4|webm|ogv/g))if(o[r].media){var a=o[r].media[0],c=s.mq(a);if(!c)continue;t=i.bind(this)([o[r]],t)}else{var u=o[r].selectorText,l=o[r].cssText.match(/url\((.*?)\)/g);for(var d in l)l[d]=l[d].replace(/url\(|\)|'|"/g,"");t[u]=l}}return t},a=function(e,t){var n='<video autoplay muted loop class="'+this.options.className+'">';for(var o in t){var r=t[o],i=s.getType(r);n+='<source src="'+r+'" type="video/'+i+'">'}n+="</video>";var a=new DOMParser;n=a.parseFromString(n,"text/html"),n=n.getElementsByTagName("video")[0],this.events(n);for(var c=0;c<e.length;c++){for(var u=e[c],l=u.getElementsByClassName(this.options.className),d=0;d<l.length;d++)u.removeChild(l[d]);u.children?u.insertBefore(n,u.children[0]):u.appendChild(n)}},c=function(){var e="",t=document.getElementById("css-background-video");if(t){if(e=t.innerHTML,e.search(this.options.className)>-1)return;t.parentNode.removeChild(t)}e+="."+this.options.className+" { position: "+this.options.position+"; top: 50%; left: 50%; -webkit-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%); min-width: 100%; min-height: 100%; width: 100%; height: auto; z-index: -1000; overflow: hidden; }",s.injectStyles(e)},s={getType:function(e){var t=e.substr(e.lastIndexOf(".")+1);return t.toLowerCase()},injectStyles:function(e){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.id="css-background-video",n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)},extend:function(){var e=Array.prototype.slice.call(arguments),t=e.shift();for(var n in e){var o=e[n];for(var r in o)o[r]&&o[r].constructor&&o[r].constructor===Object?(t[r]=t[r]||{},arguments.callee(t[r],o[r])):t[r]=o[r]}return t},mq:function(e,t,n){t=t||function(){};var o={},r=!(!window||!window.matchMedia||n);if(r){var i=window.matchMedia(e);return t.apply(o,[i.matches,i.media]),i.addListener(function(e){t.apply(o,[e.matches,e.media])}),i.matches}}};t.prototype.events=o,t.prototype.parse=r,t.prototype.render=a,t.prototype.styles=c;var u=e.css||{};if(u["background-video"]){var l="object"==typeof u["background-video"]?u["background-video"]:{};e.onload=function(){new t(l)}}return u["background-video"]=t,e.css=u,t}),window.addEventListener("load",function(){"function"==typeof define&&"object"==typeof define.amd&&define.amd?require(["fastclick"],function(e){new e(document.body)}):new FastClick(document.body)},!1);