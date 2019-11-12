/**
 * @name common.js
 * @author makesites
 * Homepage: http://github.com/commons/common.js
 * Version: 0.5.3 (Tue, 12 Nov 2019 05:08:07 GMT)
 * @license MIT license
 */
var c={query:function(e){e=e||window.location.href;var o={};e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,t,n){o[t]=n});return o}};(function(i){c.script=function(e,t){if(e=e||!1,(t=t||{}).id=t.id||!1,t.async=t.async||!1,e&&(!t.id||!i.getElementById(t.id))){var n="script",o=i.createElement(n);e=e.replace(/^http:|^https:/,""),o.type="text/javascript",t.id&&(o.id=t.id),o.async=t.async,o.src=("https:"==location.protocol?"https:":"http:")+e;var r=i.getElementsByTagName(n)[0];r.parentNode.insertBefore(o,r)}}})(document),c.cookie=function(o,r){"use strict";var i={},t={name:"",expires:{years:100},path:"/",domain:o.location.hostname||o.location.origin,secure:!1};function n(e){return!!e&&(i[e]||c(e),!!i[e])}function a(e){return!!e&&(delete i[e],s(e),!0)}function c(e){var t=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(r.cookie);return!(!t||!t[1])&&(i[e]=JSON.parse(o.unescape(t[1])),!0)}function s(e){var t=i[e],n=JSON.stringify(t.value);r.cookie+=t.name+"="+o.escape(n)+";expires="+t.expires+"; domain="+t.domain+"; path="+t.path+(t.secure?"; secure":"")}return{get:function(e){return n(e)&&!function(e){return!e||!i[e]||i[e].expires<(new Date).getTime()&&a(e)}(e)?i[e].value:void 0},set:function(e){return!(!e||void 0===e.name||void 0===e.value)&&(e.name=e.name||t.name,e.expires=function(e){var t=0;return t+=e.minutes?6e4*e.minutes:0,t+=e.hours?36e5*e.hours:0,t+=e.days?864e5*e.days:0,t+=e.weeks?6048e5*e.weeks:0,t+=e.months?26784e5*e.months:0,t+=e.years?31536e6*e.years:0,new Date((new Date).getTime()+t).getTime()}(e.expires||t.expires),e.path=e.path||t.path,e.domain=e.domain||t.domain,e.secure=e.secure||t.secure,function(e){var t=c(e.name);i[e.name]=e,t||s(e.name)}(e),!0)},has:n,remove:a}}(window,document),c.extend=function(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},arguments.callee(e[n],t[n])):e[n]=t[n];return e},function(o){c.link=function(e,t){if(e=e||!1,(t=t||{}).id=t.id||!1,t.rel=t.rel||"stylesheet",t.type=t.type||!1,e&&(!t.id||!o.getElementById(t.id))){var n=o.createElement("link");e=e.replace(/^http:|^https:/,""),n.type="text/javascript",n.rel=t.rel,t.id&&(n.id=t.id),t.type&&(n.type=t.type),n.href=("https:"==location.protocol?"https:":"http:")+e,document.getElementsByTagName("head")[0].appendChild(n)}}}(document),function(r,i,a){var c={classname:"scroll",timeout:500};a.scroll=function(e,t){var n=0;function o(){i.body.classList.remove(options.classname)}t=t||{},"function"==typeof(e=e||{})?(options={},callback=e):"function"==typeof t?(options=e,callback=t):(options=e,callback=!1),options=a.extend(c,options),r.addEventListener("scroll",function(){callback&&callback(),clearTimeout(n),i.body.classList.add(options.classname),n=setTimeout(o,options.timeout)},!1)}}(window,document,this.c),function(d){var c=d.c||{},types=["String","Number","Function","Array","Object","Null","Undefined","Boolean","RegExp","Error","Date","Symbol"];function validType(e){if(!e)return!1;var t=ucWord(e);return-1<types.indexOf(t)}function ucWord(e){return e.charAt(0).toUpperCase()+e.slice(1)}function isString(e){return"string"==typeof e||e instanceof String}function isNumber(e){return"number"==typeof e&&isFinite(e)}function isFunction(e){return"function"==typeof e}function isArray(e){return isFunction(Array.isArray)?Array.isArray(e):e&&"object"==typeof e&&e.constructor===Array}function isObject(e){return e&&"object"==typeof e&&e.constructor===Object}function isNull(e){return null===e}function isUndefined(e){return void 0===e}function isBoolean(e){return"boolean"==typeof e}function isRegExp(e){return e&&"object"==typeof e&&e.constructor===RegExp}function isError(e){return e instanceof Error&&void 0!==e.message}function isDate(e){return e instanceof Date}function isSymbol(e){return"symbol"==typeof e}c.type=function(v,t){if(isUndefined(v))return null;var isType;if(!isUndefined(t)&&validType(t)){var ucType=ucWord(t);return isType=eval("is"+ucType+"("+v+")"),isType}for(var i in types)if(isType=eval("is"+types[i]+"("+v+")"),isType)return!0;return!1}}(document),document,c.visible=function(e){if("object"!=typeof e)return null;var t=e.getBoundingClientRect();return t.top<window.innerHeight&&0<t.bottom},function(){var e="undefined"!=typeof exports?exports:this,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function c(e){this.message=e}(c.prototype=new Error).name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var t,n,o=0,r=a,i="";e.charAt(0|o)||(r="=",o%1);i+=r.charAt(63&t>>8-o%1*8)){if(255<(n=e.charCodeAt(o+=.75)))throw new c("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");t=t<<8|n}return i}),e.atob||(e.atob=function(e){if((e=e.replace(/=+$/,"")).length%4==1)throw new c("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,o=0,r=0,i="";n=e.charAt(r++);~n&&(t=o%4?64*t+n:n,o++%4)&&(i+=String.fromCharCode(255&t>>(-2*o&6))))n=a.indexOf(n);return i})}(),function(t){var e=navigator.userAgent;if(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(e)&&-1<e.indexOf("AppleWebKit")){var n=t.document;if(n.querySelector){var o,r,i,a,c=n.querySelector("meta[name=viewport]"),s=c&&c.getAttribute("content"),u=s+",maximum-scale=1",l=s+",maximum-scale=10",d=!0;c&&(t.addEventListener("orientationchange",f,!1),t.addEventListener("devicemotion",function(e){a=e.accelerationIncludingGravity,o=Math.abs(a.x),r=Math.abs(a.y),i=Math.abs(a.z),t.orientation&&180!==t.orientation||!(7<o||(6<i&&r<8||i<8&&6<r)&&5<o)?d||f():d&&(c.setAttribute("content",u),d=!1)},!1))}}function f(){c.setAttribute("content",l),d=!0}}(this),function(){function e(){}for(var t,n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=n.length,r=window.console=window.console||{};o--;)r[t=n[o]]||(r[t]=e)}(),function(e,t){"use strict";var n=!1,r={},o={},i={},a=location.origin||location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");function c(e){return Array.prototype.slice.apply(e)}function s(e){var t=matchMedia(i[e]),n=o[e]=function(n){return function(t){var e=r[n];e&&(l("Media query triggered for alias",n),e.forEach(function(e){e(t.matches)}))}}(e);n.mql=t,l("Binding",e),t.addListener(n)}function u(e){var t=o[e];t&&(l("Unbinding",e),t.mql.removeListener(t)),delete r[e],delete o[e]}function l(){if(n){var e=c(arguments);e.unshift("[mqa.js]"),console.log.apply(console,e)}}var d={add:function(e,t){l("Creating alias",e,"with query",t),i[e]=t},remove:function(e){l("Removing alias",e);var t=i.hasOwnProperty(e);return t&&(u(e),delete i[e]),t},parse:function(){l("Parsing CSS rules"),c(t.styleSheets).forEach(function(e){e.href&&0!==e.href.indexOf("/")&&0!==e.href.indexOf(a)||null===e.cssRules||c(e.cssRules).forEach(function(e){if(e&&e instanceof CSSMediaRule){var t=/#-mqa-alias-(\w+)\s*?\{/.exec(e.cssText);t&&d.add(t[1],e.media.mediaText)}})})},on:function(e,t){var n=r[e];n||(n=[],s(e)),n.push(t),r[e]=n,l("Added new listener on",e,t)},off:function(e,t){var n=r[e];if(n){var o=n.indexOf(t);n.splice(o,1),n.length||u(e)}l("Removed listener from",e,t)},match:function(e){var t=i[e],n=!1;return t&&(n=matchMedia(t).matches),n}};Object.defineProperty(d,"queries",{get:function(){return JSON.parse(JSON.stringify(i))}}),d.parse(),"function"==typeof define&&define.amd?define(d):e.mqa=d,e.c.mqa=d}(window,document),function(){"use strict";
/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @version 1.0.3
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */function c(r,e){var t;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=r,this.tapDelay=e.tapDelay||200,!c.notNeeded(r)){for(var n=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=0,i=n.length;o<i;o++)this[n[o]]=a(this[n[o]],this);s&&(r.addEventListener("mouseover",this.onMouse,!0),r.addEventListener("mousedown",this.onMouse,!0),r.addEventListener("mouseup",this.onMouse,!0)),r.addEventListener("click",this.onClick,!0),r.addEventListener("touchstart",this.onTouchStart,!1),r.addEventListener("touchmove",this.onTouchMove,!1),r.addEventListener("touchend",this.onTouchEnd,!1),r.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(r.removeEventListener=function(e,t,n){var o=Node.prototype.removeEventListener;"click"===e?o.call(r,e,t.hijacked||t,n):o.call(r,e,t,n)},r.addEventListener=function(e,t,n){var o=Node.prototype.addEventListener;"click"===e?o.call(r,e,t.hijacked||(t.hijacked=function(e){e.propagationStopped||t(e)}),n):o.call(r,e,t,n)}),"function"==typeof r.onclick&&(t=r.onclick,r.addEventListener("click",function(e){t(e)},!1),r.onclick=null)}function a(e,t){return function(){return e.apply(t,arguments)}}}var s=0<navigator.userAgent.indexOf("Android"),u=/iP(ad|hone|od)/.test(navigator.userAgent),l=u&&/OS 4_\d(_\d)?/.test(navigator.userAgent),d=u&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),r=0<navigator.userAgent.indexOf("BB10");c.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(u&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},c.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!s;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},c.prototype.sendClick=function(e,t){var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},c.prototype.determineEventType=function(e){return s&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},c.prototype.focus=function(e){var t;u&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},c.prototype.updateScrollParent=function(e){var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},c.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},c.prototype.onTouchStart=function(e){var t,n,o;if(1<e.targetTouches.length)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],u){if((o=window.getSelection()).rangeCount&&!o.isCollapsed)return!0;if(!l){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},c.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},c.prototype.onTouchMove=function(e){return this.trackingClick&&(this.targetElement===this.getTargetElementFromEventTarget(e.target)&&!this.touchHasMoved(e)||(this.trackingClick=!1,this.targetElement=null)),!0},c.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},c.prototype.onTouchEnd=function(e){var t,n,o,r,i,a=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,d&&(i=e.changedTouches[0],(a=document.elementFromPoint(i.pageX-window.pageXOffset,i.pageY-window.pageYOffset)||a).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=a.tagName.toLowerCase())){if(t=this.findControl(a)){if(this.focus(a),s)return!1;a=t}}else if(this.needsFocus(a))return 100<e.timeStamp-n||u&&window.top!==window&&"input"===o?this.targetElement=null:(this.focus(a),this.sendClick(a,e),u&&"select"===o||(this.targetElement=null,e.preventDefault())),!1;return!(!u||l||!(r=a.fastClickScrollParent)||r.fastClickLastScrollTop===r.scrollTop)||(this.needsClick(a)||(e.preventDefault(),this.sendClick(a,e)),!1)},c.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},c.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},c.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,!(this.trackingClick=!1)):"submit"===e.target.type&&0===e.detail||((t=this.onMouse(e))||(this.targetElement=null),t)},c.prototype.destroy=function(){var e=this.layer;s&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},c.notNeeded=function(e){var t,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!s)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(31<n&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(r&&10<=(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]&&3<=o[2]&&(t=document.querySelector("meta[name=viewport]"))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction},c.attach=function(e,t){return new c(e,t)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("fastclick",function(){return c}):"undefined"!=typeof module&&module.exports?(module.exports=c.attach,module.exports.FastClick=c):window.FastClick=c}(),window.Modernizr=function(o,d,a){function e(e,t,n,o){var r,i,a,c,s=d.createElement("div"),u=d.body,l=u||d.createElement("body");if(parseInt(n,10))for(;n--;)(a=d.createElement("div")).id=o?o[n]:p+(n+1),s.appendChild(a);return r=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),s.id=p,(u?s:l).innerHTML+=r,l.appendChild(s),u||(l.style.background="",l.style.overflow="hidden",c=f.style.overflow,f.style.overflow="hidden",f.appendChild(l)),i=t(s,e),u?s.parentNode.removeChild(s):(l.parentNode.removeChild(l),f.style.overflow=c),!!i}var t,r,i,c={},f=d.documentElement,p="modernizr",n=d.createElement(p),s=n.style,u=d.createElement("input"),l=":)",h={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),v="Webkit Moz O ms",g=v.split(" "),y=v.toLowerCase().split(" "),b="http://www.w3.org/2000/svg",E={},k={},w={},C=[],x=C.slice,S=(i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},function(e,t){t=t||d.createElement(i[e]||"div");var n=(e="on"+e)in t;return n||(t.setAttribute||(t=d.createElement("div")),t.setAttribute&&t.removeAttribute&&(t.setAttribute(e,""),n=L(t[e],"function"),L(t[e],"undefined")||(t[e]=a),t.removeAttribute(e))),t=null,n}),T={}.hasOwnProperty;function N(e){s.cssText=e}function L(e,t){return typeof e===t}function j(e,t){return!!~(""+e).indexOf(t)}function A(e,t){for(var n in e){var o=e[n];if(!j(o,"-")&&s[o]!==a)return"pfx"!=t||o}return!1}function M(e,t,n){var o=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+g.join(o+" ")+o).split(" ");return L(t,"string")||L(t,"undefined")?A(r,t):function(e,t,n){for(var o in e){var r=t[e[o]];if(r!==a)return!1===n?e[o]:L(r,"function")?r.bind(n||t):r}return!1}(r=(e+" "+y.join(o+" ")+o).split(" "),t,n)}for(var O in r=L(T,"undefined")||L(T.call,"undefined")?function(e,t){return t in e&&L(e.constructor.prototype[t],"undefined")}:function(e,t){return T.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(o){var r=this;if("function"!=typeof r)throw new TypeError;var i=x.call(arguments,1),a=function(){if(this instanceof a){function e(){}e.prototype=r.prototype;var t=new e,n=r.apply(t,i.concat(x.call(arguments)));return Object(n)===n?n:t}return r.apply(o,i.concat(x.call(arguments)))};return a}),E.flexbox=function(){return M("flexWrap")},E.flexboxlegacy=function(){return M("boxDirection")},E.canvas=function(){var e=d.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},E.canvastext=function(){return!(!c.canvas||!L(d.createElement("canvas").getContext("2d").fillText,"function"))},E.webgl=function(){return!!o.WebGLRenderingContext},E.touch=function(){var t;return"ontouchstart"in o||o.DocumentTouch&&d instanceof DocumentTouch?t=!0:e(["@media (",m.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){t=9===e.offsetTop}),t},E.geolocation=function(){return"geolocation"in navigator},E.postmessage=function(){return!!o.postMessage},E.websqldatabase=function(){return!!o.openDatabase},E.indexedDB=function(){return!!M("indexedDB",o)},E.hashchange=function(){return S("hashchange",o)&&(d.documentMode===a||7<d.documentMode)},E.history=function(){return!(!o.history||!history.pushState)},E.draganddrop=function(){var e=d.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},E.websockets=function(){return"WebSocket"in o||"MozWebSocket"in o},E.rgba=function(){return N("background-color:rgba(150,255,150,.5)"),j(s.backgroundColor,"rgba")},E.hsla=function(){return N("background-color:hsla(120,40%,100%,.5)"),j(s.backgroundColor,"rgba")||j(s.backgroundColor,"hsla")},E.multiplebgs=function(){return N("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(s.background)},E.backgroundsize=function(){return M("backgroundSize")},E.borderimage=function(){return M("borderImage")},E.borderradius=function(){return M("borderRadius")},E.boxshadow=function(){return M("boxShadow")},E.textshadow=function(){return""===d.createElement("div").style.textShadow},E.opacity=function(){return function(e,t){N(m.join(e+";")+(t||""))}("opacity:.55"),/^0.55$/.test(s.opacity)},E.cssanimations=function(){return M("animationName")},E.csscolumns=function(){return M("columnCount")},E.cssgradients=function(){var e="background-image:";return N((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+m.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),j(s.backgroundImage,"gradient")},E.cssreflections=function(){return M("boxReflect")},E.csstransforms=function(){return!!M("transform")},E.csstransforms3d=function(){var n=!!M("perspective");return n&&"webkitPerspective"in f.style&&e("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,t){n=9===e.offsetLeft&&3===e.offsetHeight}),n},E.csstransitions=function(){return M("transition")},E.fontface=function(){var i;return e('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=d.getElementById("smodernizr"),o=n.sheet||n.styleSheet,r=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";i=/src/i.test(r)&&0===r.indexOf(t.split(" ")[0])}),i},E.generatedcontent=function(){var t;return e(["#",p,"{font:0/0 a}#",p,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=3<=e.offsetHeight}),t},E.video=function(){var e=d.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return t},E.audio=function(){var e=d.createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t},E.localstorage=function(){try{return localStorage.setItem(p,p),localStorage.removeItem(p),!0}catch(e){return!1}},E.sessionstorage=function(){try{return sessionStorage.setItem(p,p),sessionStorage.removeItem(p),!0}catch(e){return!1}},E.webworkers=function(){return!!o.Worker},E.applicationcache=function(){return!!o.applicationCache},E.svg=function(){return!!d.createElementNS&&!!d.createElementNS(b,"svg").createSVGRect},E.inlinesvg=function(){var e=d.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==b},E.smil=function(){return!!d.createElementNS&&/SVGAnimate/.test(h.call(d.createElementNS(b,"animate")))},E.svgclippaths=function(){return!!d.createElementNS&&/SVGClipPath/.test(h.call(d.createElementNS(b,"clipPath")))},E)r(E,O)&&(t=O.toLowerCase(),c[t]=E[O](),C.push((c[t]?"":"no-")+t));return c.input||(c.input=function(e){for(var t=0,n=e.length;t<n;t++)w[e[t]]=!!(e[t]in u);return w.list&&(w.list=!(!d.createElement("datalist")||!o.HTMLDataListElement)),w}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),c.inputtypes=function(e){for(var t,n,o,r=0,i=e.length;r<i;r++)u.setAttribute("type",n=e[r]),(t="text"!==u.type)&&(u.value=l,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&u.style.WebkitAppearance!==a?(f.appendChild(u),t=(o=d.defaultView).getComputedStyle&&"textfield"!==o.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,f.removeChild(u)):/^(search|tel)$/.test(n)||(t=/^(url|email)$/.test(n)?u.checkValidity&&!1===u.checkValidity():u.value!=l)),k[e[r]]=!!t;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))),c.addTest=function(e,t){if("object"==typeof e)for(var n in e)r(e,n)&&c.addTest(n,e[n]);else{if(e=e.toLowerCase(),c[e]!==a)return c;t="function"==typeof t?t():t,f.className+=" "+(t?"":"no-")+e,c[e]=t}return c},N(""),n=u=null,function(e,a){var n,c,t=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o="_html5shiv",s=0,u={};function l(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function d(e){var t=u[e[o]];return t||(t={},s++,e[o]=s,u[s]=t),t}function f(e,t,n){return t=t||a,c?t.createElement(e):!(o=(n=n||d(t)).cache[e]?n.cache[e].cloneNode():i.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||r.test(e)||o.tagUrn?o:n.frag.appendChild(o);var o}function p(e){var t=d(e=e||a);return!h.shivCSS||n||t.hasCSS||(t.hasCSS=!!function(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||function(t,n){n.cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return h.shivMethods?f(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/[\w\-]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,n.frag)}(e,t),e}!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,c=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){c=n=!0}}();var h={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==t.shivCSS,supportsUnknownElements:c,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:p,createElement:f,createDocumentFragment:function(e,t){if(e=e||a,c)return e.createDocumentFragment();for(var n=(t=t||d(e)).frag.cloneNode(),o=0,r=l(),i=r.length;o<i;o++)n.createElement(r[o]);return n}};e.html5=h,p(a)}(this,d),c._version="2.7.1",c._prefixes=m,c._domPrefixes=y,c._cssomPrefixes=g,c.hasEvent=S,c.testProp=function(e){return A([e])},c.testAllProps=M,c.testStyles=e,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+C.join(" "),c}(this,this.document),function(e,f){function d(e){return"[object Function]"==r.call(e)}function p(e){return"string"==typeof e}function h(){}function m(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function v(){var e=E.shift();k=1,e?e.t?y(function(){("c"==e.t?g.injectCss:g.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),v()):k=0}function t(e,t,n,o,r){return k=0,t=t||"j",p(e)?function(n,o,e,t,r,i,a){function c(e){if(!u&&m(s.readyState)&&(d.r=u=1,k||v(),s.onload=s.onreadystatechange=null,e))for(var t in"img"!=n&&y(function(){C.removeChild(s)},50),S[o])S[o].hasOwnProperty(t)&&S[o][t].onload()}a=a||g.errorTimeout;var s=f.createElement(n),u=0,l=0,d={t:e,s:o,e:r,a:i,x:a};1===S[o]&&(l=1,S[o]=[]),"object"==n?s.data=o:(s.src=o,s.type=n),s.width=s.height="0",s.onerror=s.onload=s.onreadystatechange=function(){c.call(this,l)},E.splice(t,0,d),"img"!=n&&(l||2===S[o]?(C.insertBefore(s,w?null:b),y(c,a)):S[o].push(s))}("c"==t?s:a,e,t,this.i++,n,o,r):(E.splice(this.i++,0,e),1==E.length&&v()),this}function c(){var e=g;return e.loader={load:t,i:0},e}var n,g,o=f.documentElement,y=e.setTimeout,b=f.getElementsByTagName("script")[0],r={}.toString,E=[],k=0,i="MozAppearance"in o.style,w=i&&!!f.createRange().compareNode,C=w?o:b.parentNode,a=(o=e.opera&&"[object Opera]"==r.call(e.opera),o=!!f.attachEvent&&!o,i?"object":o?"script":"img"),s=o?"script":a,u=Array.isArray||function(e){return"[object Array]"==r.call(e)},x=[],S={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(g=function(e){function l(e,t,n,o,r){var i=function(e){e=e.split("!");var t,n,o,r=x.length,i=e.pop(),a=e.length;for(i={url:i,origUrl:i,prefixes:e},n=0;n<a;n++)o=e[n].split("="),(t=T[o.shift()])&&(i=t(i,o));for(n=0;n<r;n++)i=x[n](i);return i}(e),a=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(t=t&&(d(t)?t:t[e]||t[o]||t[e.split("/").pop().split("?")[0]]),i.instead?i.instead(e,t,n,o,r):(S[i.url]?i.noexec=!0:S[i.url]=1,n.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":void 0,i.noexec,i.attrs,i.timeout),(d(t)||d(a))&&n.load(function(){c(),t&&t(i.origUrl,r,o),a&&a(i.origUrl,r,o),S[i.url]=2})))}function t(e,t){function n(n,e){if(n){if(p(n))e||(c=function(){var e=[].slice.call(arguments);s.apply(this,e),u()}),l(n,c,t,0,i);else if(Object(n)===n)for(r in o=function(){var e,t=0;for(e in n)n.hasOwnProperty(e)&&t++;return t}(),n)n.hasOwnProperty(r)&&(e||--o||(d(c)?c=function(){var e=[].slice.call(arguments);s.apply(this,e),u()}:c[r]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),u()}}(s[r])),l(n[r],c,t,r,i))}else e||u()}var o,r,i=!!e.test,a=e.load||e.both,c=e.callback||h,s=c,u=e.complete||h;n(i?e.yep:e.nope,!!a),a&&n(a)}var n,o,r=this.yepnope.loader;if(p(e))l(e,0,r,0);else if(u(e))for(n=0;n<e.length;n++)p(o=e[n])?l(o,0,r,0):u(o)?g(o):Object(o)===o&&t(o,r);else Object(e)===e&&t(e,r)}).addPrefix=function(e,t){T[e]=t},g.addFilter=function(e){x.push(e)},g.errorTimeout=1e4,null==f.readyState&&f.addEventListener&&(f.readyState="loading",f.addEventListener("DOMContentLoaded",n=function(){f.removeEventListener("DOMContentLoaded",n,0),f.readyState="complete"},0)),e.yepnope=c(),e.yepnope.executeStack=v,e.yepnope.injectJs=function(e,t,n,o,r,i){var a,c,s=f.createElement("script");o=o||g.errorTimeout;for(c in s.src=e,n)s.setAttribute(c,n[c]);t=i?v:t||h,s.onreadystatechange=s.onload=function(){!a&&m(s.readyState)&&(a=1,t(),s.onload=s.onreadystatechange=null)},y(function(){a||t(a=1)},o),r?s.onload():b.parentNode.insertBefore(s,b)},e.yepnope.injectCss=function(e,t,n,o,r,i){var a;o=f.createElement("link"),t=i?v:t||h;for(a in o.href=e,o.rel="stylesheet",o.type="text/css",n)o.setAttribute(a,n[a]);r||(b.parentNode.insertBefore(o,b),y(t,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},
/**
 * @name css-background-video
 * @author makesites
 * Homepage: http://github.com/makesites/css-background-video
 * Version: 0.3.0 (Tue, 22 Mar 2016 07:10:13 GMT)
 * @license Apache License, Version 2.0
 */
function(e,t){"use strict";var n=n||!1,o=o||!1;"function"==typeof n&&n.amd?n("background-video",[],t):"object"==typeof o&&o&&"object"==typeof o.exports?o.exports=t:t(e)}(this,function(r){function e(e){r.document=r.document||{},e=e||{},this.options=l.extend({},t,e),this.styles(),this.options.autoparse&&this.parse()}var t={autoparse:!0,position:"absolute",attribute:"background",className:"css-background-video",dataClass:!1},u=function(e,t){for(var n in t=t||{},e){var o=e[n].rules||e[n].cssRules;for(var r in o)if(o[r].cssText&&-1!=o[r].cssText.search(this.options.attribute)&&-1!=o[r].cssText.search(/mp4|webm|ogv/g))if(o[r].media){var i=o[r].media[0];if(!l.mq(i))continue;t=u.bind(this)([o[r]],t)}else{var a=o[r].selectorText,c=o[r].cssText.match(/url\((.*?)\)/g);for(var s in c)c[s]=c[s].replace(/url\(|\)|'|"/g,"");t[a]=c}}return t},l={getType:function(e){return e.substr(e.lastIndexOf(".")+1).toLowerCase()},injectStyles:function(e){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.id="css-background-video",n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)},extend:function(){var e=Array.prototype.slice.call(arguments),t=e.shift();for(var n in e){var o=e[n];for(var r in o)o[r]&&o[r].constructor&&o[r].constructor===Object?(t[r]=t[r]||{},arguments.callee(t[r],o[r])):t[r]=o[r]}return t},mq:function(e,t,n){t=t||function(){};var o={};if(!(!window||!window.matchMedia||n)){var r=window.matchMedia(e);return t.apply(o,[r.matches,r.media]),r.addListener(function(e){t.apply(o,[e.matches,e.media])}),r.matches}}};e.prototype.events=function(e){e.addEventListener("error",function(e){this.load()},!1),e.addEventListener("canplaythrough",function(e){this.parentNode.style.background="none"},!1),e.addEventListener("play",function(e){this.setAttribute("data-state","play")},!1),e.addEventListener("pause",function(e){this.setAttribute("data-state","pause")},!1),e.addEventListener("ended",function(e){this.setAttribute("data-state","ended")},!1)},e.prototype.parse=function(){if(r.document.styleSheets){var e=r.document.styleSheets,t=u.bind(this)(e);for(var n in t){var o=r.document.querySelectorAll(n);this.render(o,t[n])}}},e.prototype.render=function(e,t){var n='<video autoplay muted loop class="'+this.options.className+'">';for(var o in t){var r=t[o];n+='<source src="'+r+'" type="video/'+l.getType(r)+'">'}n+="</video>",n=(n=(new DOMParser).parseFromString(n,"text/html")).getElementsByTagName("video")[0],this.events(n);for(var i=0;i<e.length;i++){for(var a=e[i],c=a.getElementsByClassName(this.options.className),s=0;s<c.length;s++)a.removeChild(c[s]);a.children?a.insertBefore(n,a.children[0]):a.appendChild(n)}},e.prototype.styles=function(){var e="",t=document.getElementById("css-background-video");if(t){if(-1<(e=t.innerHTML).search(this.options.className))return;t.parentNode.removeChild(t)}e+="."+this.options.className+" { position: "+this.options.position+"; top: 50%; left: 50%; -webkit-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%); min-width: 100%; min-height: 100%; width: 100%; height: auto; z-index: -1000; overflow: hidden; }",l.injectStyles(e)};var n=r.css||{};if(n["background-video"]){var o="object"==typeof n["background-video"]?n["background-video"]:{};r.onload=function(){new e(o)}}return n["background-video"]=e,r.css=n,e}),window.addEventListener("load",function(){"function"==typeof define&&"object"==typeof define.amd&&define.amd?require(["fastclick"],function(e){new e(document.body)}):new FastClick(document.body)},!1);