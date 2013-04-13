function FastClick(t){"use strict";var e,n=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.layer=t,!t||!t.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)},FastClick.notNeeded()||(this.deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(e=t.onclick,t.addEventListener("click",function(t){e(t)},!1),t.onclick=null))}var c={};c.query=function(t){t=t||window.location.href;var e={};return t.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,n,i){e[n]=i}),e},function(t){c.script=function(e,n){if(n=n||{},e=e||!1,n.id=n.id||!1,n.async=n.async||!1,e&&(!n.id||!t.getElementById(n.id))){var i="script",o=t.createElement(i);e=e.replace(/^http:|^https:/,""),o.type="text/javascript",n.id&&(o.id=n.id),o.async=n.async,o.src=("https:"==location.protocol?"https:":"http:")+e;var r=t.getElementsByTagName(i)[0];r.parentNode.insertBefore(o,r)}}}(document),c.cookie=function(t,e){"use strict";function n(t){return t&&void 0!==t.name&&void 0!==t.value?(t.name=t.name||h.name,t.expires=u(t.expires||h.expires),t.path=t.path||h.path,t.domain=t.domain||h.domain,t.secure=t.secure||h.secure,c(t),!0):!1}function i(t){return o(t)&&!l(t)?d[t].value:void 0}function o(t){return t?(d[t]||a(t),!!d[t]):!1}function r(t){return t?(delete d[t],s(t),!0):!1}function a(n){var i=RegExp("(?:^|; )"+encodeURIComponent(n)+"=([^;]*)").exec(e.cookie);return i&&i[1]?(d[n]=JSON.parse(t.unescape(i[1])),!0):!1}function s(n){var i=d[n],o=JSON.stringify(i.value);e.cookie+=i.name+"="+t.escape(o)+";expires="+i.expires+"; domain="+i.domain+"; path="+i.path+(i.secure?"; secure":"")}function c(t){var e=a(t.name);d[t.name]=t,e||s(t.name)}function u(t){var e=0;return e+=t.minutes?6e4*t.minutes:0,e+=t.hours?36e5*t.hours:0,e+=t.days?864e5*t.days:0,e+=t.weeks?6048e5*t.weeks:0,e+=t.months?26784e5*t.months:0,e+=t.years?31536e6*t.years:0,new Date((new Date).getTime()+e).getTime()}function l(t){return t&&d[t]?(new Date).getTime()>d[t].expires?r(t):!1:!0}var d={},h={name:"",expires:{years:100},path:"/",domain:t.location.hostname||t.location.origin,secure:!1},p={get:i,set:n,has:o,remove:r};return p}(window,document),c.extend=function(t,e){for(var n in e)e[n]&&e[n].constructor&&e[n].constructor===Object?(t[n]=t[n]||{},arguments.callee(t[n],e[n])):t[n]=e[n];return t},function(t){function e(){l.setAttribute("content",p),f=!0}function n(){l.setAttribute("content",h),f=!1}function i(i){u=i.accelerationIncludingGravity,a=Math.abs(u.x),s=Math.abs(u.y),c=Math.abs(u.z),t.orientation&&180!==t.orientation||!(a>7||(c>6&&8>s||8>c&&s>6)&&a>5)?f||e():f&&n()}var o=navigator.userAgent;if(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(o)&&o.indexOf("AppleWebKit")>-1){var r=t.document;if(r.querySelector){var a,s,c,u,l=r.querySelector("meta[name=viewport]"),d=l&&l.getAttribute("content"),h=d+",maximum-scale=1",p=d+",maximum-scale=10",f=!0;l&&(t.addEventListener("orientationchange",e,!1),t.addEventListener("devicemotion",i,!1))}}}(this),function(){for(var t,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=n.length,o=window.console=window.console||{};i--;)t=n[i],o[t]||(o[t]=e)}(),function(t,e){"use strict";function n(t){return Array.prototype.slice.apply(t)}function i(t){return function(e){var n=a[t];n&&n.forEach(function(t){t(e.matches)})}}function o(t){var e=matchMedia(c[t]),n=s[t]=i(t);n.mql=e,e.addListener(n)}function r(t){var e=s[t];e&&e.mql.removeListener(e),delete a[t],delete s[t]}var a={},s={},c={},u=t.mqa={};u.add=function(t,e){if(c.hasOwnProperty(t))throw Error("Alias already defined: "+t);c[t]=e},u.remove=function(t){var e=c.hasOwnProperty(t);return e&&(r(t),delete c[t]),e},u.parse=function(){n(e.styleSheets).forEach(function(t){n(t.cssRules).forEach(function(t){if(t instanceof CSSMediaRule){var e=/#-mqa-alias-(\w+)\s*?\{/.exec(t.cssText);e&&u.add(e[1],t.media.mediaText)}})})},u.on=function(t,e){if(!c.hasOwnProperty(t))throw Error("No such alias: "+t);var n=a[t];n||(n=[],o(t)),n.push(e),a[t]=n},u.off=function(t,e){var n=a[t];if(n){var i=n.indexOf(e);n.splice(i,1),n.length||r(t)}},u.match=function(t){var e=c[t],n=!1;return e&&(n=matchMedia(e).matches),n},Object.defineProperty(u,"queries",{get:function(){var t={};return Object.keys(c).forEach(function(e){t[e]=c[e]}),t}}),u.parse(),"function"==typeof define&&define.amd&&define(u)}(window,document),FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"input":return this.deviceIsIOS&&"file"===t.type?!0:t.disabled;case"label":case"video":return!0;default:return/\bneedsclick\b/.test(t.className)}},FastClick.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},FastClick.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},FastClick.prototype.focus=function(t){"use strict";var e;this.deviceIsIOS&&t.setSelectionRange?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},FastClick.prototype.updateScrollParent=function(t){"use strict";var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},FastClick.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],this.deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,200>t.timeStamp-this.lastClickTime&&t.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0];return Math.abs(e.pageX-this.touchStartX)>10||Math.abs(e.pageY-this.touchStartY)>10?!0:!1},FastClick.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(t){"use strict";var e,n,i,o,r,a=this.targetElement;if(this.touchHasMoved(t)&&(this.trackingClick=!1,this.targetElement=null),!this.trackingClick)return!0;if(200>t.timeStamp-this.lastClickTime)return this.cancelNextClick=!0,!0;if(this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(r=t.changedTouches[0],a=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)),i=a.tagName.toLowerCase(),"label"===i){if(e=this.findControl(a)){if(this.focus(a),this.deviceIsAndroid)return!1;a=e}}else if(this.needsFocus(a))return t.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(a),this.deviceIsIOS4&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(o=a.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop)?!0:(this.needsClick(a)||(t.preventDefault(),this.sendClick(a,t)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0:!0},FastClick.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},FastClick.prototype.destroy=function(){"use strict";var t=this.layer;this.deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(){"use strict";var t;if(window.ontouchstart===void 0)return!0;if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(!FastClick.prototype.deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]"),t&&-1!==t.content.indexOf("user-scalable=no"))return!0}return!1},FastClick.attach=function(t){"use strict";return new FastClick(t)},"undefined"!=typeof define&&define.amd&&define(function(){"use strict";return FastClick}),"undefined"!=typeof module&&module.exports&&(module.exports=FastClick.attach,module.exports.FastClick=FastClick),window.addEventListener("load",function(){"use strict";new FastClick(document.body)},!1);