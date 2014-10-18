/* 
 * Cation 
 * shoe11414255@qq.com 
 * http://www.itisxiong.com
 * 2014-10-18
 */
var Zepto=function(){function t(t){return null==t?t+"":B[X.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(e){return"object"==t(e)}function s(t){return o(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function r(t){return _.call(t,function(t){return null!=t})}function u(t){return t.length>0?A.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function h(t){return t in M?M[t]:M[t]=RegExp("(^|\\s)"+t+"(\\s|$)")}function l(t,e){return"number"!=typeof e||L[c(t)]?e:e+"px"}function p(t){var e,n;return j[t]||(e=P.createElement(t),P.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),j[t]=n),j[t]}function d(t){return"children"in t?$.call(t.children):A.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function f(t,e,n){for(E in e)n&&(s(e[E])||J(e[E]))?(s(e[E])&&!s(t[E])&&(t[E]={}),J(e[E])&&!J(t[E])&&(t[E]=[]),f(t[E],e[E],n)):e[E]!==b&&(t[E]=e[E])}function g(t,e){return null==e?A(t):A(t).filter(e)}function m(t,n,i,o){return e(n)?n.call(t,i,o):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==b;return e===b?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function w(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?A.parseJSON(t):t:e):t}catch(n){return t}}function x(t,e){e(t);for(var n in t.childNodes)x(t.childNodes[n],e)}var b,E,A,T,N,S,C=[],$=C.slice,_=C.filter,P=window.document,j={},M={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},k=/^\s*<(\w+|!)[^>]*>/,D=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,I=/^(?:body|html)$/i,Y=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],z=["after","prepend","before","append"],F=P.createElement("table"),H=P.createElement("tr"),U={tr:P.createElement("tbody"),tbody:F,thead:F,tfoot:F,td:H,th:H,"*":P.createElement("div")},R=/complete|loaded|interactive/,W=/^[\w-]*$/,B={},X=B.toString,Z={},G=P.createElement("div"),V={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array};return Z.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,o=t.parentNode,s=!o;return s&&(o=G).appendChild(t),i=~Z.qsa(o,e).indexOf(t),s&&G.removeChild(t),i},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return _.call(t,function(e,n){return t.indexOf(e)==n})},Z.fragment=function(t,e,n){var i,o,a;return D.test(t)&&(i=A(P.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(O,"<$1></$2>")),e===b&&(e=k.test(t)&&RegExp.$1),e in U||(e="*"),a=U[e],a.innerHTML=""+t,i=A.each($.call(a.childNodes),function(){a.removeChild(this)})),s(n)&&(o=A(i),A.each(n,function(t,e){q.indexOf(t)>-1?o[t](e):o.attr(t,e)})),i},Z.Z=function(t,e){return t=t||[],t.__proto__=A.fn,t.selector=e||"",t},Z.isZ=function(t){return t instanceof Z.Z},Z.init=function(t,n){var i;if(!t)return Z.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&k.test(t))i=Z.fragment(t,RegExp.$1,n),t=null;else{if(n!==b)return A(n).find(t);i=Z.qsa(P,t)}else{if(e(t))return A(P).ready(t);if(Z.isZ(t))return t;if(J(t))i=r(t);else if(o(t))i=[t],t=null;else if(k.test(t))i=Z.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==b)return A(n).find(t);i=Z.qsa(P,t)}}return Z.Z(i,t)},A=function(t,e){return Z.init(t,e)},A.extend=function(t){var e,n=$.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){f(t,n,e)}),t},Z.qsa=function(t,e){var n,o="#"==e[0],s=!o&&"."==e[0],a=o||s?e.slice(1):e,r=W.test(a);return i(t)&&r&&o?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:$.call(r&&!o?s?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},A.contains=function(t,e){return t!==e&&t.contains(e)},A.type=t,A.isFunction=e,A.isWindow=n,A.isArray=J,A.isPlainObject=s,A.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},A.inArray=function(t,e,n){return C.indexOf.call(e,t,n)},A.camelCase=N,A.trim=function(t){return null==t?"":String.prototype.trim.call(t)},A.uuid=0,A.support={},A.expr={},A.map=function(t,e){var n,i,o,s=[];if(a(t))for(i=0;t.length>i;i++)n=e(t[i],i),null!=n&&s.push(n);else for(o in t)n=e(t[o],o),null!=n&&s.push(n);return u(s)},A.each=function(t,e){var n,i;if(a(t)){for(n=0;t.length>n;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},A.grep=function(t,e){return _.call(t,e)},window.JSON&&(A.parseJSON=JSON.parse),A.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),A.fn={forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,indexOf:C.indexOf,concat:C.concat,map:function(t){return A(A.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return A($.apply(this,arguments))},ready:function(t){return R.test(P.readyState)&&P.body?t(A):P.addEventListener("DOMContentLoaded",function(){t(A)},!1),this},get:function(t){return t===b?$.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return C.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):A(_.call(this,function(e){return Z.matches(e,t)}))},add:function(t,e){return A(S(this.concat(A(t,e))))},is:function(t){return this.length>0&&Z.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==b)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?$.call(t):A(t);this.forEach(function(t){0>i.indexOf(t)&&n.push(t)})}return A(n)},has:function(t){return this.filter(function(){return o(t)?A.contains(this,t):A(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:A(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:A(t)},find:function(t){var e,n=this;return e="object"==typeof t?A(t).filter(function(){var t=this;return C.some.call(n,function(e){return A.contains(e,t)})}):1==this.length?A(Z.qsa(this[0],t)):this.map(function(){return Z.qsa(this,t)})},closest:function(t,e){var n=this[0],o=!1;for("object"==typeof t&&(o=A(t));n&&!(o?o.indexOf(n)>=0:Z.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return A(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=A.map(n,function(t){return(t=t.parentNode)&&!i(t)&&0>e.indexOf(t)?(e.push(t),t):void 0});return g(e,t)},parent:function(t){return g(S(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return $.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return _.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return A.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=A(t).get(0),o=i.parentNode||this.length>1;return this.each(function(e){A(this).wrapAll(n?t.call(this,e):o?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){A(this[0]).before(t=A(t));for(var e;(e=t.children()).length;)t=e.first();A(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=A(this),o=i.contents(),s=n?t.call(this,e):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){A(this).replaceWith(A(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=A(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return A(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return A(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;A(this).empty().append(m(this,t,e,n))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===b?"":""+t})},attr:function(t,e){var n;return"string"==typeof t&&e===b?0==this.length||1!==this[0].nodeType?b:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(o(t))for(E in t)v(this,E,t[E]);else v(this,t,m(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&v(this,t)})},prop:function(t,e){return t=V[t]||t,e===b?this[0]&&this[0][t]:this.each(function(n){this[t]=m(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+t.replace(Y,"-$1").toLowerCase(),e);return null!==n?w(n):b},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?A(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=m(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=A(this),i=m(this,t,e,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(2>arguments.length){var i=this[0],o=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[N(e)]||o.getPropertyValue(e);if(J(e)){var s={};return A.each(J(e)?e:[e],function(t,e){s[e]=i.style[N(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+l(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(E in e)e[E]||0===e[E]?a+=c(E)+":"+l(E,e[E])+";":this.each(function(){this.style.removeProperty(c(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(A(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?C.some.call(this,function(t){return this.test(y(t))},h(t)):!1},addClass:function(t){return t?this.each(function(e){T=[];var n=y(this),i=m(this,t,e,n);i.split(/\s+/g).forEach(function(t){A(this).hasClass(t)||T.push(t)},this),T.length&&y(this,n+(n?" ":"")+T.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===b?y(this,""):(T=y(this),m(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(h(t)," ")}),void y(this,T.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var i=A(this),o=m(this,t,n,y(this));o.split(/\s+/g).forEach(function(t){(e===b?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=I.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(A(t).css("margin-top"))||0,n.left-=parseFloat(A(t).css("margin-left"))||0,i.top+=parseFloat(A(e[0]).css("border-top-width"))||0,i.left+=parseFloat(A(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!I.test(t.nodeName)&&"static"==A(t).css("position");)t=t.offsetParent;return t})}},A.fn.detach=A.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});A.fn[t]=function(o){var s,a=this[0];return o===b?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(s=this.offset())&&s[t]:this.each(function(e){a=A(this),a.css(t,m(this,o,e,a[t]()))})}}),z.forEach(function(e,n){var i=n%2;A.fn[e]=function(){var e,o,s=A.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Z.fragment(n)}),a=this.length>1;return 1>s.length?this:this.each(function(t,e){o=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,s.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return A(t).remove();x(o.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},A.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return A(t)[e](this),this}}),Z.Z.prototype=A.fn,Z.uniq=S,Z.deserializeValue=w,A.zepto=Z,A}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=p++)}function n(t,n,s,a){if(n=i(n),n.ns)var r=o(n.ns);return(m[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!r.test(t.ns)||s&&e(t.fn)!==e(s)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t){return RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function s(t,e){return t.del&&!y&&t.e in w||!!e}function a(t){return x[t]||y&&w[t]||t}function r(n,o,r,u,h,p,d){var f=e(n),g=m[f]||(m[f]=[]);o.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(r);var o=i(e);o.fn=r,o.sel=h,o.e in x&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=p;var f=p||r;o.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=f.apply(n,t._args==l?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},o.i=g.length,g.push(o),"addEventListener"in n&&n.addEventListener(a(o.e),o.proxy,s(o,d))})}function u(t,i,o,r,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,o,r).forEach(function(e){delete m[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,s(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(T,function(t,i){var o=n[t];e[t]=function(){return this[i]=b,o&&o.apply(n,arguments)},e[i]=E}),(n.defaultPrevented!==l?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function h(t){var e,n={originalEvent:t};for(e in t)A.test(e)||t[e]===l||(n[e]=t[e]);return c(n,t)}var l,p=1,d=Array.prototype.slice,f=t.isFunction,g=function(t){return"string"==typeof t},m={},v={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:r,remove:u},t.proxy=function(n,i){if(f(n)){var o=function(){return n.apply(i,arguments)};return o._zid=e(n),o}if(g(i))return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},E=function(){return!1},A=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,o,s){var a,c,p=this;return e&&!g(e)?(t.each(e,function(t,e){p.on(t,n,i,e,s)}),p):(g(n)||f(o)||o===!1||(o=i,i=n,n=l),(f(i)||i===!1)&&(o=i,i=l),o===!1&&(o=E),p.each(function(l,p){s&&(a=function(t){return u(p,t.type,o),o.apply(this,arguments)}),n&&(c=function(e){var i,s=t(e.target).closest(n,p).get(0);return s&&s!==p?(i=t.extend(h(e),{currentTarget:s,liveFired:p}),(a||o).apply(s,[i].concat(d.call(arguments,1)))):void 0}),r(p,e,o,i,n,c||a)}))},t.fn.off=function(e,n,i){var o=this;return e&&!g(e)?(t.each(e,function(t,e){o.off(t,n,e)}),o):(g(n)||f(i)||i===!1||(i=n,n=l),i===!1&&(i=E),o.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=g(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var o,s;return this.each(function(a,r){o=h(g(e)?t.Event(e):e),o._args=i,o.target=r,t.each(n(r,e.type||e),function(t,e){return s=e.proxy(o),o.isImmediatePropagationStopped()?!1:void 0})}),s},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){g(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var o in e)"bubbles"==o?i=!!e[o]:n[o]=e[o];return n.initEvent(t,i,!0),c(n)}}(Zepto),function(t){function e(e,n,i){var o=t.Event(n);return t(e).trigger(o,i),!o.isDefaultPrevented()}function n(t,n,i,o){return t.global?e(n||y,i,o):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function o(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function s(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,o){var s=i.context,a="success";i.success.call(s,t,a,e),o&&o.resolveWith(s,[t,a,e]),n(i,s,"ajaxSuccess",[e,i,t]),u(a,e,i)}function r(t,e,i,o,s){var a=o.context;o.error.call(a,i,e,t),s&&s.rejectWith(a,[i,e,t]),n(o,a,"ajaxError",[i,o,t||e]),u(e,i,o)}function u(t,e,i){var s=i.context;i.complete.call(s,e,t),n(i,s,"ajaxComplete",[e,i]),o(i)}function c(){}function h(t){return t&&(t=t.split(";",2)[0]),t&&(t==A?"html":t==E?"json":x.test(t)?"script":b.test(t)&&"xml")||"text"}function l(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=l(e.url,e.data),e.data=void 0)}function d(e,n,i,o){return t.isFunction(n)&&(o=i,i=n,n=void 0),t.isFunction(i)||(o=i,i=void 0),{url:e,data:n,success:i,dataType:o}}function f(e,n,i,o){var s,a=t.isArray(n),r=t.isPlainObject(n);t.each(n,function(n,u){s=t.type(u),o&&(n=i?o:o+"["+(r||"object"==s||"array"==s?n:"")+"]"),!o&&a?e.add(u.name,u.value):"array"==s||!i&&"object"==s?f(e,u,i,n):e.add(n,u)})}var g,m,v=0,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,E="application/json",A="text/html",T=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,o,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,h=y.createElement("script"),l=window[c],p=function(e){t(h).triggerHandler("error",e||"abort")},d={abort:p};return n&&n.promise(d),t(h).on("load error",function(s,u){clearTimeout(o),t(h).off().remove(),"error"!=s.type&&i?a(i[0],d,e,n):r(null,u||"error",d,e,n),window[c]=l,i&&t.isFunction(l)&&l(i[0]),l=i=void 0}),s(d,e)===!1?(p("abort"),d):(window[c]=function(){i=arguments},h.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(h),e.timeout>0&&(o=setTimeout(function(){p("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:A,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(g in t.ajaxSettings)void 0===n[g]&&(n[g]=t.ajaxSettings[g]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=""+window.location),p(n),n.cache===!1&&(n.url=l(n.url,"_="+Date.now()));var u=n.dataType,d=/\?.+=\?/.test(n.url);if("jsonp"==u||d)return d||(n.url=l(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var f,v=n.accepts[u],y={},w=function(t,e){y[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr(),E=b.setRequestHeader;if(o&&o.promise(b),n.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",v||"*/*"),(v=n.mimeType||v)&&(v.indexOf(",")>-1&&(v=v.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(v)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&w("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(m in n.headers)w(m,n.headers[m]);if(b.setRequestHeader=w,b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(f);var e,i=!1;if(b.status>=200&&300>b.status||304==b.status||0==b.status&&"file:"==x){u=u||h(n.mimeType||b.getResponseHeader("content-type")),e=b.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=b.responseXML:"json"==u&&(e=T.test(e)?null:t.parseJSON(e))}catch(s){i=s}i?r(i,"parsererror",b,n,o):a(e,b,n,o)}else r(b.statusText||null,b.status?"error":"abort",b,n,o)}},s(b,n)===!1)return b.abort(),r(null,"abort",b,n,o),b;if(n.xhrFields)for(m in n.xhrFields)b[m]=n.xhrFields[m];var A="async"in n?n.async:!0;b.open(n.type,n.url,A,n.username,n.password);for(m in y)E.apply(b,y[m]);return n.timeout>0&&(f=setTimeout(function(){b.onreadystatechange=c,b.abort(),r(null,"timeout",b,n,o)},n.timeout)),b.send(n.data?n.data:null),b},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var o,s=this,a=e.split(/\s/),r=d(e,n,i),u=r.success;return a.length>1&&(r.url=a[0],o=a[1]),r.success=function(e){s.html(o?t("<div>").html(e.replace(w,"")).find(o):e),u&&u.apply(s,arguments)},t.ajax(r),this};var N=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(N(t)+"="+N(e))},f(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),!function(){function t(t){return t.replace(w,"").replace(x,",").replace(b,"").replace(E,"").replace(A,"").split(/^$|,+/)}function e(t){return"'"+t.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function n(n,i){function o(t){return p+=t.split(/\n/).length-1,h&&(t=t.replace(/\s+/g," ").replace(/<!--.*?-->/g,"")),t&&(t=y[1]+e(t)+y[2]+"\n"),t}function s(e){var n=p;if(c?e=c(e,i):a&&(e=e.replace(/\n/g,function(){return p++,"$line="+p+";"})),0===e.indexOf("=")){var o=l&&!/^=[=#]/.test(e);if(e=e.replace(/^=[=#]?|[\s;]*$/g,""),o){var s=e.replace(/\s*\([^\)]+\)/,"");d[s]||/^(include|print)$/.test(s)||(e="$escape("+e+")")}else e="$string("+e+")";e=y[1]+e+y[2]}return a&&(e="$line="+n+";"+e),v(t(e),function(t){if(t&&!g[t]){var e;e="print"===t?x:"include"===t?b:d[t]?"$utils."+t:f[t]?"$helpers."+t:"$data."+t,E+=t+"="+e+",",g[t]=!0}}),e+"\n"}var a=i.debug,r=i.openTag,u=i.closeTag,c=i.parser,h=i.compress,l=i.escape,p=1,g={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},m="".trim,y=m?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],w=m?"$out+=text;return $out;":"$out.push(text);",x="function(){var text=''.concat.apply('',arguments);"+w+"}",b="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+w+"}",E="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(a?"$line=0,":""),A=y[0],T="return new String("+y[3]+");";v(n.split(r),function(t){t=t.split(u);var e=t[0],n=t[1];1===t.length?A+=o(e):(A+=s(e),n&&(A+=o(n)))});var N=E+A+T;a&&(N="try{"+N+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+e(n)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var S=Function("$data","$filename",N);return S.prototype=d,S}catch(C){throw C.temp="function anonymous($data,$filename) {"+N+"}",C}}var i=function(t,e){return"string"==typeof e?m(e,{filename:t}):a(t,e)};i.version="3.0.0",i.config=function(t,e){o[t]=e};var o=i.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},s=i.cache={};i.render=function(t,e){return m(t,e)};var a=i.renderFile=function(t,e){var n=i.get(t)||g({filename:t,name:"Render Error",message:"Template not found"});return e?n(e):n};i.get=function(t){var e;if(s[t])e=s[t];else if("object"==typeof document){var n=document.getElementById(t);if(n){var i=(n.value||n.innerHTML).replace(/^\s*|\s*$/g,"");e=m(i,{filename:t})}}return e};var r=function(t,e){return"string"!=typeof t&&(e=typeof t,"number"===e?t+="":t="function"===e?r(t.call(t)):""),t},u={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},c=function(t){return u[t]},h=function(t){return r(t).replace(/&(?![\w#]+;)|[<>"']/g,c)},l=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},p=function(t,e){var n,i;if(l(t))for(n=0,i=t.length;i>n;n++)e.call(t,t[n],n,t);else for(n in t)e.call(t,t[n],n)},d=i.utils={$helpers:{},$include:a,$string:r,$escape:h,$each:p};i.helper=function(t,e){f[t]=e};var f=i.helpers=d.$helpers;i.onerror=function(t){var e="Template Error\n\n";for(var n in t)e+="<"+n+">\n"+t[n]+"\n\n";"object"==typeof console&&console.error(e)};var g=function(t){return i.onerror(t),function(){return"{Template Error}"}},m=i.compile=function(t,e){function i(n){try{return new u(n,r)+""}catch(i){return e.debug?g(i)():(e.debug=!0,m(t,e)(n))}}e=e||{};for(var a in o)void 0===e[a]&&(e[a]=o[a]);var r=e.filename;try{var u=n(t,e)}catch(c){return c.filename=r||"anonymous",c.name="Syntax Error",g(c)}return i.prototype=u.prototype,i.toString=function(){return""+u},r&&e.cache&&(s[r]=i),i},v=d.$each,y="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",w=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,x=/[^\w$]+/g,b=RegExp(["\\b"+y.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),E=/^\d[^,]*|,\d[^,]*/g,A=/^,+|,+$/g;o.openTag="{{",o.closeTag="}}";var T=function(t,e){var n=e.split(":"),i=n.shift(),o=n.join(":")||"";return o&&(o=", "+o),"$helpers."+i+"("+t+o+")"};o.parser=function(t,e){t=t.replace(/^\s/,"");var n=t.split(" "),o=n.shift(),s=n.join(" ");switch(o){case"if":t="if("+s+"){";break;case"else":n="if"===n.shift()?" if("+n.join(" ")+")":"",t="}else"+n+"{";break;case"/if":t="}";break;case"each":var a=n[0]||"$data",r=n[1]||"as",u=n[2]||"$value",c=n[3]||"$index",h=u+","+c;"as"!==r&&(a="[]"),t="$each("+a+",function("+h+"){";break;case"/each":t="});";break;case"echo":t="print("+s+");";break;case"print":case"include":t=o+"("+n.join(",")+");";break;default:if(-1!==s.indexOf("|")){var l=e.escape;0===t.indexOf("#")&&(t=t.substr(1),l=!1);for(var p=0,d=t.split("|"),f=d.length,g=l?"$escape":"$string",m=g+"("+d[p++]+")";f>p;p++)m=T(m,d[p]);t="=#"+m}else t=i.helpers[o]?"=#"+o+"("+n.join(",")+");":"="+t}return t},"function"==typeof define?define("dist/view/library/init_mobile",[],function(){return i}):"undefined"!=typeof exports?module.exports=i:this.template=i}(),!function(t,e){function n(t){return function(e){return{}.toString.call(e)=="[object "+t+"]"}}function i(){return S++}function o(t){return t.match(_)[0]}function s(t){for(t=t.replace(P,"/");t.match(j);)t=t.replace(j,"/");return t=t.replace(M,"$1/")}function a(t){var e=t.length-1,n=t.charAt(e);return"#"===n?t.substring(0,e):".js"===t.substring(e-2)||t.indexOf("?")>0||".css"===t.substring(e-3)||"/"===n?t:t+".js"}function r(t){var e=b.alias;return e&&A(e[t])?e[t]:t}function u(t){var e,n=b.paths;return n&&(e=t.match(L))&&A(n[e[1]])&&(t=n[e[1]]+e[2]),t}function c(t){var e=b.vars;return e&&t.indexOf("{")>-1&&(t=t.replace(k,function(t,n){return A(e[n])?e[n]:t})),t}function h(t){var e=b.map,n=t;if(e)for(var i=0,o=e.length;o>i;i++){var s=e[i];if(n=N(s)?s(t)||t:t.replace(s[0],s[1]),n!==t)break}return n}function l(t,e){var n,i=t.charAt(0);if(D.test(t))n=t;else if("."===i)n=s((e?o(e):b.cwd)+t);else if("/"===i){var a=b.cwd.match(O);n=a?a[0]+t.substring(1):t}else n=b.base+t;return 0===n.indexOf("//")&&(n=location.protocol+n),n}function p(t,e){if(!t)return"";t=r(t),t=u(t),t=c(t),t=a(t);var n=l(t,e);return n=h(n)}function d(t){return t.hasAttribute?t.src:t.getAttribute("src",4)}function f(t,e,n){var i=B.test(t),o=I.createElement(i?"link":"script");if(n){var s=N(n)?n(t):n;s&&(o.charset=s)}g(o,e,i,t),i?(o.rel="stylesheet",o.href=t):(o.async=!0,o.src=t),H=o,W?R.insertBefore(o,W):R.appendChild(o),H=null}function g(t,n,i,o){function s(){t.onload=t.onerror=t.onreadystatechange=null,i||b.debug||R.removeChild(t),t=null,n()}var a="onload"in t;return!i||!X&&a?(a?(t.onload=s,t.onerror=function(){$("error",{uri:o,node:t}),s()}):t.onreadystatechange=function(){/loaded|complete/.test(t.readyState)&&s()},e):(setTimeout(function(){m(t,n)},1),e)}function m(t,e){var n,i=t.sheet;if(X)i&&(n=!0);else if(i)try{i.cssRules&&(n=!0)}catch(o){"NS_ERROR_DOM_SECURITY_ERR"===o.name&&(n=!0)}setTimeout(function(){n?e():m(t,e)},20)}function v(){if(H)return H;if(U&&"interactive"===U.readyState)return U;for(var t=R.getElementsByTagName("script"),e=t.length-1;e>=0;e--){var n=t[e];if("interactive"===n.readyState)return U=n}}function y(t){var e=[];return t.replace(V,"").replace(G,function(t,n,i){i&&e.push(i)
}),e}function w(t,e){this.uri=t,this.dependencies=e||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!t.seajs){var x=t.seajs={version:"2.2.0"},b=x.data={},E=n("Object"),A=n("String"),T=Array.isArray||n("Array"),N=n("Function"),S=0,C=b.events={};x.on=function(t,e){var n=C[t]||(C[t]=[]);return n.push(e),x},x.off=function(t,e){if(!t&&!e)return C=b.events={},x;var n=C[t];if(n)if(e)for(var i=n.length-1;i>=0;i--)n[i]===e&&n.splice(i,1);else delete C[t];return x};var $=x.emit=function(t,e){var n,i=C[t];if(i)for(i=i.slice();n=i.shift();)n(e);return x},_=/[^?#]*\//,P=/\/\.\//g,j=/\/[^/]+\/\.\.\//,M=/([^:/])\/\//g,L=/^([^/:]+)(\/.+)$/,k=/{([^{]+)}/g,D=/^\/\/.|:\//,O=/^.*?\/\/.*?\//,I=document,Y=o(I.URL),q=I.scripts,z=I.getElementById("seajsnode")||q[q.length-1],F=o(d(z)||Y);x.resolve=p;var H,U,R=I.head||I.getElementsByTagName("head")[0]||I.documentElement,W=R.getElementsByTagName("base")[0],B=/\.css(?:\?|$)/i,X=536>+navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1");x.request=f;var Z,G=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,V=/\\\\/g,J=x.cache={},Q={},K={},te={},ee=w.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};w.prototype.resolve=function(){for(var t=this,e=t.dependencies,n=[],i=0,o=e.length;o>i;i++)n[i]=w.resolve(e[i],t.uri);return n},w.prototype.load=function(){var t=this;if(!(t.status>=ee.LOADING)){t.status=ee.LOADING;var n=t.resolve();$("load",n);for(var i,o=t._remain=n.length,s=0;o>s;s++)i=w.get(n[s]),i.status<ee.LOADED?i._waitings[t.uri]=(i._waitings[t.uri]||0)+1:t._remain--;if(0===t._remain)return t.onload(),e;var a={};for(s=0;o>s;s++)i=J[n[s]],i.status<ee.FETCHING?i.fetch(a):i.status===ee.SAVED&&i.load();for(var r in a)a.hasOwnProperty(r)&&a[r]()}},w.prototype.onload=function(){var t=this;t.status=ee.LOADED,t.callback&&t.callback();var e,n,i=t._waitings;for(e in i)i.hasOwnProperty(e)&&(n=J[e],n._remain-=i[e],0===n._remain&&n.onload());delete t._waitings,delete t._remain},w.prototype.fetch=function(t){function n(){x.request(a.requestUri,a.onRequest,a.charset)}function i(){delete Q[r],K[r]=!0,Z&&(w.save(s,Z),Z=null);var t,e=te[r];for(delete te[r];t=e.shift();)t.load()}var o=this,s=o.uri;o.status=ee.FETCHING;var a={uri:s};$("fetch",a);var r=a.requestUri||s;return!r||K[r]?(o.load(),e):Q[r]?(te[r].push(o),e):(Q[r]=!0,te[r]=[o],$("request",a={uri:s,requestUri:r,onRequest:i,charset:b.charset}),a.requested||(t?t[a.requestUri]=n:n()),e)},w.prototype.exec=function(){function t(e){return w.get(t.resolve(e)).exec()}var n=this;if(n.status>=ee.EXECUTING)return n.exports;n.status=ee.EXECUTING;var o=n.uri;t.resolve=function(t){return w.resolve(t,o)},t.async=function(e,n){return w.use(e,n,o+"_async_"+i()),t};var s=n.factory,a=N(s)?s(t,n.exports={},n):s;return a===e&&(a=n.exports),delete n.factory,n.exports=a,n.status=ee.EXECUTED,$("exec",n),a},w.resolve=function(t,e){var n={id:t,refUri:e};return $("resolve",n),n.uri||x.resolve(n.id,e)},w.define=function(t,n,i){var o=arguments.length;1===o?(i=t,t=e):2===o&&(i=n,T(t)?(n=t,t=e):n=e),!T(n)&&N(i)&&(n=y(""+i));var s={id:t,uri:w.resolve(t),deps:n,factory:i};if(!s.uri&&I.attachEvent){var a=v();a&&(s.uri=a.src)}$("define",s),s.uri?w.save(s.uri,s):Z=s},w.save=function(t,e){var n=w.get(t);n.status<ee.SAVED&&(n.id=e.id||t,n.dependencies=e.deps||[],n.factory=e.factory,n.status=ee.SAVED)},w.get=function(t,e){return J[t]||(J[t]=new w(t,e))},w.use=function(e,n,i){var o=w.get(i,T(e)?e:[e]);o.callback=function(){for(var e=[],i=o.resolve(),s=0,a=i.length;a>s;s++)e[s]=J[i[s]].exec();n&&n.apply(t,e),delete o.callback},o.load()},w.preload=function(t){var e=b.preload,n=e.length;n?w.use(e,function(){e.splice(0,n),w.preload(t)},b.cwd+"_preload_"+i()):t()},x.use=function(t,e){return w.preload(function(){w.use(t,e,b.cwd+"_use_"+i())}),x},w.define.cmd={},t.define=w.define,x.Module=w,b.fetchedList=K,b.cid=i,x.require=function(t){var e=w.get(w.resolve(t));return e.status<ee.EXECUTING&&(e.onload(),e.exec()),e.exports};var ne=/^(.+?\/)(\?\?)?(seajs\/)+/;b.base=(F.match(ne)||["",F])[1],b.dir=F,b.cwd=Y,b.charset="utf-8",b.preload=function(){var t=[],e=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return e+=" "+I.cookie,e.replace(/(seajs-\w+)=1/g,function(e,n){t.push(n)}),t}(),x.config=function(t){for(var e in t){var n=t[e],i=b[e];if(i&&E(i))for(var o in n)i[o]=n[o];else T(i)?n=i.concat(n):"base"===e&&("/"!==n.slice(-1)&&(n+="/"),n=l(n)),b[e]=n}return $("config",t),x}}}(this),!function(){function t(t){r[t.name]=t}function e(t){return t&&r.hasOwnProperty(t)}function n(t){for(var n in r)if(e(n)){var i=","+r[n].ext.join(",")+",";if(i.indexOf(","+t+",")>-1)return n}}function i(t,e){var n=a.ActiveXObject?new a.ActiveXObject("Microsoft.XMLHTTP"):new a.XMLHttpRequest;return n.open("GET",t,!0),n.onreadystatechange=function(){if(4===n.readyState){if(n.status>399&&600>n.status)throw Error("Could not load: "+t+", status = "+n.status);e(n.responseText)}},n.send(null)}function o(t){t&&/\S/.test(t)&&(a.execScript||function(t){(a.eval||eval).call(a,t)})(t)}function s(t){return t.replace(/(["\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")}var a=window,r={},u={};t({name:"text",ext:[".tpl",".html"],exec:function(t,e){o('define("'+t+'#", [], "'+s(e)+'")')}}),t({name:"json",ext:[".json"],exec:function(t,e){o('define("'+t+'#", [], '+e+")")}}),t({name:"handlebars",ext:[".handlebars"],exec:function(t,e){var n=['define("'+t+'#", ["handlebars"], function(require, exports, module) {','  var source = "'+s(e)+'"','  var Handlebars = require("handlebars")["default"]',"  module.exports = function(data, options) {","    options || (options = {})","    options.helpers || (options.helpers = {})","    for (var key in Handlebars.helpers) {","      options.helpers[key] = options.helpers[key] || Handlebars.helpers[key]","    }","    return Handlebars.compile(source)(data, options)","  }","})"].join("\n");o(n)}}),seajs.on("resolve",function(t){var i=t.id;if(!i)return"";var o,s;(s=i.match(/^(\w+)!(.+)$/))&&e(s[1])?(o=s[1],i=s[2]):(s=i.match(/[^?]+(\.\w+)(?:\?|#|$)/))&&(o=n(s[1])),o&&-1===i.indexOf("#")&&(i+="#");var a=seajs.resolve(i,t.refUri);o&&(u[a]=o),t.uri=a}),seajs.on("request",function(t){var e=u[t.uri];e&&(i(t.requestUri,function(n){r[e].exec(t.uri,n),t.onRequest()}),t.requested=!0)})}(),!function(){var t,e=/\W/g,n=document,i=document.getElementsByTagName("head")[0]||document.documentElement;seajs.importStyle=function(o,s){if(!s||(s=s.replace(e,"-"),!n.getElementById(s))){var a;if(!t||s?(a=n.createElement("style"),s&&(a.id=s),i.appendChild(a)):a=t,void 0!==a.styleSheet){if(n.getElementsByTagName("style").length>31)throw Error("Exceed the maximal count of style tags in IE");a.styleSheet.cssText+=o}else a.appendChild(n.createTextNode(o));s||(t=a)}},define("dist/view/library/init_mobile",[],{})}();