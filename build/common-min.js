function FastClick(e){"use strict";var t,n=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.layer=e,!e||!e.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)},FastClick.notNeeded()||(this.deviceIsAndroid&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,i){var o=Node.prototype.removeEventListener;"click"===t?o.call(e,t,n.hijacked||n,i):o.call(e,t,n,i)},e.addEventListener=function(t,n,i){var o=Node.prototype.addEventListener;"click"===t?o.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),i):o.call(e,t,n,i)}),"function"==typeof e.onclick&&(t=e.onclick,e.addEventListener("click",function(e){t(e)},!1),e.onclick=null))}var c={};c.query=function(e){e=e||window.location.href;var t={};return e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,n,i){t[n]=i}),t},function(e){c.script=function(t,n){if(n=n||{},t=t||!1,n.id=n.id||!1,n.async=n.async||!1,t&&(!n.id||!e.getElementById(n.id))){var i="script",o=e.createElement(i);t=t.replace(/^http:|^https:/,""),o.type="text/javascript",n.id&&(o.id=n.id),o.async=n.async,o.src=("https:"==location.protocol?"https:":"http:")+t;var r=e.getElementsByTagName(i)[0];r.parentNode.insertBefore(o,r)}}}(document),c.cookie=function(e,t){"use strict";function n(e){return e&&void 0!==e.name&&void 0!==e.value?(e.name=e.name||p.name,e.expires=u(e.expires||p.expires),e.path=e.path||p.path,e.domain=e.domain||p.domain,e.secure=e.secure||p.secure,c(e),!0):!1}function i(e){return o(e)&&!l(e)?d[e].value:void 0}function o(e){return e?(d[e]||s(e),!!d[e]):!1}function r(e){return e?(delete d[e],a(e),!0):!1}function s(n){var i=RegExp("(?:^|; )"+encodeURIComponent(n)+"=([^;]*)").exec(t.cookie);return i&&i[1]?(d[n]=JSON.parse(e.unescape(i[1])),!0):!1}function a(n){var i=d[n],o=JSON.stringify(i.value);t.cookie+=i.name+"="+e.escape(o)+";expires="+i.expires+"; domain="+i.domain+"; path="+i.path+(i.secure?"; secure":"")}function c(e){var t=s(e.name);d[e.name]=e,t||a(e.name)}function u(e){var t=0;return t+=e.minutes?6e4*e.minutes:0,t+=e.hours?36e5*e.hours:0,t+=e.days?864e5*e.days:0,t+=e.weeks?6048e5*e.weeks:0,t+=e.months?26784e5*e.months:0,t+=e.years?31536e6*e.years:0,new Date((new Date).getTime()+t).getTime()}function l(e){return e&&d[e]?(new Date).getTime()>d[e].expires?r(e):!1:!0}var d={},p={name:"",expires:{years:100},path:"/",domain:e.location.hostname||e.location.origin,secure:!1},h={get:i,set:n,has:o,remove:r};return h}(window,document),c.extend=function(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},arguments.callee(e[n],t[n])):e[n]=t[n];return e},function(e,t,n){var i={classname:"scroll",timeout:1e3};n.scroll=function(o){function r(){t.body.classList.remove(o.classname)}function s(){t.body.classList.add(o.classname)}var a=0;o=o||{},o=n.extend(i,o),e.addEventListener("scroll",function(){clearTimeout(a),s(),a=setTimeout(r,o.timeout)},!1)}}(window,document,this.c),function(e){function t(){l.setAttribute("content",h),m=!0}function n(){l.setAttribute("content",p),m=!1}function i(i){u=i.accelerationIncludingGravity,s=Math.abs(u.x),a=Math.abs(u.y),c=Math.abs(u.z),e.orientation&&180!==e.orientation||!(s>7||(c>6&&8>a||8>c&&a>6)&&s>5)?m||t():m&&n()}var o=navigator.userAgent;if(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(o)&&o.indexOf("AppleWebKit")>-1){var r=e.document;if(r.querySelector){var s,a,c,u,l=r.querySelector("meta[name=viewport]"),d=l&&l.getAttribute("content"),p=d+",maximum-scale=1",h=d+",maximum-scale=10",m=!0;l&&(e.addEventListener("orientationchange",t,!1),e.addEventListener("devicemotion",i,!1))}}}(this),function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=n.length,o=window.console=window.console||{};i--;)e=n[i],o[e]||(o[e]=t)}(),function(e,t){"use strict";function n(e){return Array.prototype.slice.apply(e)}function i(e){return function(t){var n=c[e];n&&(s("Media query triggered for alias",e),n.forEach(function(e){e(t.matches)}))}}function o(e){var t=matchMedia(l[e]),n=u[e]=i(e);n.mql=t,s("Binding",e),t.addListener(n)}function r(e){var t=u[e];t&&(s("Unbinding",e),t.mql.removeListener(t)),delete c[e],delete u[e]}function s(){if(a){var e=n(arguments);e.unshift("[mqa.js]"),console.log.apply(console,e)}}var a=!1,c={},u={},l={},d=e.mqa={};d.add=function(e,t){s("Creating alias",e,"with query",t),l[e]=t},d.remove=function(e){s("Removing alias",e);var t=l.hasOwnProperty(e);return t&&(r(e),delete l[e]),t},d.parse=function(){s("Parsing CSS rules"),n(t.styleSheets).forEach(function(e){null!==e.cssRules&&n(e.cssRules).forEach(function(e){if(e instanceof CSSMediaRule){var t=/#-mqa-alias-(\w+)\s*?\{/.exec(e.cssText);t&&d.add(t[1],e.media.mediaText)}})})},d.on=function(e,t){var n=c[e];n||(n=[],o(e)),n.push(t),c[e]=n,s("Added new listener on",e,t)},d.off=function(e,t){var n=c[e];if(n){var i=n.indexOf(t);n.splice(i,1),n.length||r(e)}s("Removed listener from",e,t)},d.match=function(e){var t=l[e],n=!1;return t&&(n=matchMedia(t).matches),n},Object.defineProperty(d,"queries",{get:function(){return JSON.parse(JSON.stringify(l))}}),d.parse(),"function"==typeof define&&define.amd&&define(d)}(window,document),FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"input":return this.deviceIsIOS&&"file"===e.type?!0:e.disabled;case"label":case"video":return!0;default:return/\bneedsclick\b/.test(e.className)}},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var n,i;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),i=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},FastClick.prototype.focus=function(e){"use strict";var t;this.deviceIsIOS&&e.setSelectionRange?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,i;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],this.deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,200>e.timeStamp-this.lastClickTime&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0];return Math.abs(t.pageX-this.touchStartX)>10||Math.abs(t.pageY-this.touchStartY)>10?!0:!1},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,i,o,r,s=this.targetElement;if(this.touchHasMoved(e)&&(this.trackingClick=!1,this.targetElement=null),!this.trackingClick)return!0;if(200>e.timeStamp-this.lastClickTime)return this.cancelNextClick=!0,!0;if(this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(r=e.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)),i=s.tagName.toLowerCase(),"label"===i){if(t=this.findControl(s)){if(this.focus(s),this.deviceIsAndroid)return!1;s=t}}else if(this.needsFocus(s))return e.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(s),this.deviceIsIOS4&&"select"===i||(this.targetElement=null,e.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(o=s.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop)?!0:(this.needsClick(s)||(e.preventDefault(),this.sendClick(s,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0:!0},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;this.deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(){"use strict";var e;if(window.ontouchstart===void 0)return!0;if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(!FastClick.prototype.deviceIsAndroid)return!0;if(e=document.querySelector("meta[name=viewport]"),e&&-1!==e.content.indexOf("user-scalable=no"))return!0}return!1},FastClick.attach=function(e){"use strict";return new FastClick(e)},"undefined"!=typeof define&&define.amd&&define(function(){"use strict";return FastClick}),"undefined"!=typeof module&&module.exports&&(module.exports=FastClick.attach,module.exports.FastClick=FastClick),window.addEventListener("load",function(){"use strict";new FastClick(document.body)},!1);