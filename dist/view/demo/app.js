/* 
 * Cation 
 * shoe11414255@qq.com 
 * http://www.itisxiong.com
 * 2014-12-24
 */
define("dist/view/demo/app",["dist/component/show/show","dist/component_module/media/media","dist/component_module/mPage/mPage","dist/component_module/preLoad/preLoad","dist/component_module/svgAni/svgAni","dist/component_module/gifAni/gifAni","./js/event"],function(a,b,c){function d(){this.page=null,this.pageWrap=null}var e=a("dist/component/show/show"),f=a("dist/component_module/media/media"),g=a("dist/component_module/mPage/mPage"),h=a("dist/component_module/preLoad/preLoad"),i=a("dist/component_module/svgAni/svgAni"),j=a("dist/component_module/gifAni/gifAni"),k=(a("./js/event"),RES_DIR+IMG_DIR),l="?vision="+JS_VISION;window.c_data=[{name:"show",module:"imgText",pageBg:k+"1.jpg"+l},{name:"show",module:"imgText",pageBg:k+"2.jpg"+l,gifAniImg:k+"gifAni.gif"+l},{name:"show",module:"imgText",pageBg:k+"3.jpg"+l,svg:!0,svg_width:$(window).width(),svg_height:$(window).height()},{name:"show",module:"imgText",pageBg:k+"4.jpg"+l}],d.prototype={init:function(){this.componentCreate(),this.styleInit()},styleInit:function(){$(window).on("touchmove scroll",function(a){a.preventDefault()}),document.body.style.userSelect="none",document.body.style.mozUserSelect="none",document.body.style.webkitUserSelect="none",$(window).on("orientationchange",function(){switch(window.orientation){case 0:$(".app").removeClass("j-landscape");break;case 180:$(".app").removeClass("j-landscape");break;case-90:$(".app").addClass("j-landscape");break;case 90:$(".app").addClass("j-landscape")}}),this.page.size()<=0&&console.log("组件初始化失败！！");var a=$(window).height();this.pageWrap.height(a),this.page.height(a)},componentCreate:function(){for(var a=$(".app-content .p-ct .pageWrap"),b=0,c=c_data.length;c>b;b++){var d=c_data[b];this.componentSelect(a,d)}this.pageWrap=$(".p-ct .pageWrap"),this.page=$(".p-ct").find(".pageWrap .m-page"),this.resControl()},componentSelect:function(a,b){var b=b||{},c=b?b.name:"";switch(c){case"show":{new e(a,b)}break;default:return}},resControl:function(){var a=this,b=$(window).width(),c=$(window).height(),d=(new j({}),new f(RES_DIR+"view/demo/media/media.mp3",".u-music",{audioAutoPlay:!0}),["1.jpg","2.jpg","3.jpg","4.jpg"]),e=(new h(d,".progress",{prefix:k,progressInit:!1,vision:JS_VISION,events:{preLoadComplete:[function(){a.openApp()}]}}),new g(".pageWrap",".m-page",{width:b,height:c,isSingle:!1,scale:0,moveY:1}));e.on("mPageSuccess",function(a){var b=a.next.querySelectorAll("svg");if(b.length>0)for(var c=0,d=b.length;d>c;c++){var e=b[c];e.className.baseVal=e.className.baseVal.replace("f-hide","");var f=new i(e);f.render(),f.on("complete",function(){e.dataset.render="true"})}})},openApp:function(){$(".app-content").removeClass("f-hide"),setTimeout(function(){$(".app-content").addClass("z-show"),setTimeout(function(){$(".app-loading").addClass("f-hide")},1e3)},20)}},c.exports=new d}),define("dist/component/show/show",[],function(a,b,c){function d(a,b){this.data=b?b:"",this.dom="object"==typeof a?a:$(a),this.domObj=null,this.events={},this.render()}a("./c.css");var e=a("./c.tpl");d.prototype={render:function(){var a,b;this.data?(a=template.compile(e),b=a(this.data)):b=e,b=$(b),this.domObj=b,this.dom.append(b),this.style(),this.bindEvents(),delete this.dom},style:function(){},bindEvents:function(){},emit:function(a){if(this.events[a]){var b=0,c=this.events[a].length;if(c)for(;c>b;b++)this.events[a][b].apply(this,[].slice.call(arguments,1))}},on:function(a,b){this.events[a]||(this.events[a]=[]),this.events[a].push(b)}},c.exports=d}),!function(a,b){var c="function"==typeof define,d="undefined"!=typeof module&&module.exports;c?define("dist/component_module/media/media",[],b):d?module.exports=b():this[a]=b()}("Media",function(){function a(a){return function(b){return Object.prototype.toString.call(b)==="[object "+a+"]"}}function b(a,b,c,d){d=d?!0:!1,a.addEventListener?a.addEventListener(b,c,d):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}function c(a,b,c,d){d=d?!0:!1,a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null}function d(a,b,c){if(!window.HTMLAudioElement)throw new Error("对不起，您的浏览器版本过低，不支持音频的播放！！");var d=arguments.length;if(!(g(a)&&"AUDIO"==a.tagName||f(a)&&h.test(a)))throw new Error("传入的audio参数，必须是音频对象或者是正确的音频地址值！！");2===d&&(g(b)||f(b)?c=void 0:!g(b)&&e(b)&&(c=b,b=void 0)),g(a)?this.audio=a:this.audioSrc=a,this.wrapper="undefined"==typeof b?window.document.body:f(b)?document.querySelector(b):b,this.events={},this.wrapperEvent="click",this.wrapperEventInit=!0,this.audioLoop="loop",this.audioPreLoad="audo",this.audioAutoPlay=!0;for(i in c)this[i]=c[i];this.init()}var e=a("Object"),f=a("String"),g=(Array.isArray||a("Array"),a("Function"),function(a){return null!=a&&a instanceof window.Element&&a.nodeType==a.ELEMENT_NODE});window.__Media=[];var h=/(HTMLAudioElement)|(\.(ogg|mp3|wav)$)/;return d.prototype={init:function(){this.audioCreate(),this.initEvents(!1),this.emit("mediaInit")},handleEvent:function(a){switch(a.type){case"play":this._play(a);break;case"pause":this._pause(a);break;case"tap":case"click":case"touchstart":case"mousedown":this._action(a)}},initEvents:function(a){var d=a?c:b,e=this.wrapper,f=this.audio;d(f,"play",this),d(f,"pause",this),d(e,this.wrapperEvent,this),this.emit(a?"mediaDestory":"mediaCreate")},emit:function(a){if(this.events[a]){var b=0,c=this.events[a].length;if(c)for(;c>b;b++)this.events[a][b].apply(this,[].slice.call(arguments,1))}},on:function(a,b){this.events[a]||(this.events[a]=[]),this.events[a].push(b)},audioCreate:function(){if(this.audio){var a=this.audio.src;if(!h.test(a))throw new Error("audio-Element对象，音频地址值不正确！！")}else this.audioSrc&&(this.audio=new Audio,this.audio.src=this.audioSrc);var b={loop:this.audioLoop,preload:this.audioPreLoad,autoplay:this.audioAutoPlay};for(var c in b)b.hasOwnProperty(c)&&c in this.audio&&(this.audio[c]=b[c]);this.wrapper.appendChild(this.audio),this.audio.load(),window.__Media.push(this.audio),this.emit("mediaAudioCreate")},_play:function(){for(var a=window.__Media,b=a.length,c=0;b>c;c++)a[c]!=this.audio&&a[c].pause();this.emit("mediaPlay")},_pause:function(){this.emit("mediaPause")},_action:function(){this.wrapperEventInit&&(this.audio.paused?this.audio.play():this.audio.pause()),this.emit("mediaAction")}},d}),!function(a,b){var c="function"==typeof define,d="undefined"!=typeof module&&module.exports;c?define("dist/component_module/mPage/mPage",[],b):d?module.exports=b():this[a]=b()}("MPage",function(){"use strict";function a(a){return function(b){return Object.prototype.toString.call(b)==="[object "+a+"]"}}function b(a,b){var c,d;if(l(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a}function c(a,b,c,d){d=d?!0:!1,a.addEventListener?a.addEventListener(b,c,d):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}function d(a,b,c,d){d=d?!0:!1,a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null}function e(a){for(var b,c=["webkit","moz","ms","o",""],d=0,e=c.length,f=a.charAt(0).toUpperCase()+a.substr(1);e>d;d++)if(b=c[d]+(c[d]?f:a),b in m)return c[d];return!1}function f(a){return e(a)===!1?!1:""===e(a)?a:e(a)+a.charAt(0).toUpperCase()+a.substr(1)}function g(){return f("perspective")?" translateZ(0)":""}function h(a,b,c){if(this.wrapper="undefined"==typeof a||""==a?window.document.body:i(a)?document.querySelector(a):a,!k(this.wrapper))throw new Error("传入的wrapper-Element元素不准确，请确认上传！");this.page="undefined"==typeof b||""==b?this.wrapper.children:j(b)?this.page:this.wrapper.querySelectorAll(b),this.options={isStart:!1,isMouse:!0,isTouch:!0,isPointerTouch:!0,isImgTouch:!1,isCycle:!0,isFirstChange:!1,isSingle:!0,pageStyle:{},current:0,scale:0,moveY:1,useTransition:!0,useTransform:!0,easingType:"linear",transitionTime:400,transitionProperty:"left, -"+e("transform")+"-transform",translateThreshold:100,resizePolling:60};for(var d in c)this.options[d]=c[d];this.options.useTransition=f("transform")!==!1&&this.options.useTransition,this.options.useTransform=f("transition")in m&&this.options.useTransform,this.hasTouch=this.options.isTouch&&"ontouchstart"in window,this.hasPointer=this.options.isPointerTouch&&navigator.msPointerEnabled,this.hasMouse=this.options.isMouse&&"onmousedown"in window,this.pageNow=this.options.current?this.options.current:0,this.pageNum=this.page.length,this.events={},this.x=0,this.y=0,this.init()}var i=(a("Object"),a("String")),j=Array.isArray||a("Array"),k=(a("Function"),function(a){return null!=a&&a.nodeType==a.ELEMENT_NODE}),l=function(a){return"number"==typeof a.length};Function.prototype.bind=Function.prototype.bind||function(a){var b=this;return function(c){j(c)||(c=[c]),b.apply(a,c)}};var m=document.createElement("div").style,n={touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,mouseout:2,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3};return h.prototype={init:function(){this.style(),this.refresh(),this.initEvents(this.options.isStart)},emit:function(a){if(this.events[a]){var b=0,c=this.events[a].length;if(c)for(;c>b;b++)this.events[a][b].apply(this,[].slice.call(arguments,1))}},on:function(a,b){this.events[a]||(this.events[a]=[]),this.events[a].push(b)},handleEvent:function(a){switch(a.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(a);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(a);break;case"touchend":case"MSPointerUp":case"MSPointerOut":case"mouseup":case"mouseout":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(a);break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(a)}},initEvents:function(a){var e=this,f=a?d:c,g=this.wrapper;f(window,"orientationchange",this),f(window,"resize",this),this.hasMouse&&(f(g,"mousedown",this),f(g,"mousemove",this),f(g,"mousecancel",this),f(g,"mouseup",this),f(g,"mouseout",this)),this.hasPointer&&(f(g,"MSPointerDown",this),f(g,"MSPointerMove",this),f(g,"MSPointerCancel",this),f(g,"MSPointerUp",this),f(g,"MSPointerOut",this)),this.hasTouch&&(f(g,"touchstart",this),f(g,"touchmove",this),f(g,"touchcancel",this),f(g,"touchend",this)),b(this.page,function(a,b){f(b,"transitionend",e),f(b,"webkitTransitionEnd",e),f(b,"oTransitionEnd",e),f(b,"MSTransitionEnd",e)}),this.emit(a?"mPageDestory":"mPageCreate")},style:function(){var a=this;"absolute"!=this.wrapper.style.position&&(this.wrapper.style.position="relative"),b(this.page,function(b,c){c.style.cssText="display:none;position:absolute;left:0;top:0;z-index:8;";for(var d in a.options.pageStyle)c.style[f(d)]=a.options.pageStyle;b==a.pageNow&&(c.style.display="block")}),this._transitionProperty(this.options.transitionProperty)},refresh:function(){var a=this;this.pageWidth=this.options.width?this.options.width:this.wrapper.clientWidth?this.wrapper.clientWidth:window.innerWidth,this.pageHeight=this.options.height?this.options.height:this.wrapper.clientHeight?this.wrapper.clientHeight:window.innerHeight,this.wrapper.style.width=this.pageWidth,this.wrapper.style.height=this.pageHeight,b(this.page,function(b,c){c.style.width=a.pageWidth,c.style.height=a.pageHeight}),this.emit("mPageRefresh")},_start:function(a){if(this.options.isImgTouch&&"IMG"==a.target.tagName&&a.preventDefault(),(1==n[a.type]||0===a.button)&&!(this.initiated&&n[a.type]!==this.initiated||this.moved)){this._transitionTime(),this.initiated=n[a.type],this.moved=!1;var b=a.touches?a.touches[0]:a;this.pointY=b.pageY,this.startY=b.pageY,this.directionX=0,this.directionY=0,this.directionLocked=0,this.emit("mPageStart")}},_move:function(a){if(a.preventDefault(),n[a.type]===this.initiated&&this.pointY&&0!=this.pointY){var b,c,d,e,f=a.touches?a.touches[0]:a,g=f.pageY-this.pointY;if(this.pointY=f.pageY,!this.pagePosition())return void(this.pointY=this.startY);e=this.pagePosition()[0],d=this.pagePosition()[1],b=(this.y+g)/this.options.moveY,c=this.nextY+g,this.scale=1-Math.abs((this.pointY-this.startY)*this.options.scale/this.pageHeight),!this.options.isSingle&&this._translate(d,0,b,this.scale),this._translate(e,0,c),this.y=b,this.nextY=c,this.emit("mPageMove")}},pagePosition:function(){var a,b,c,d=this.page[this.pageNow],e=this.pointY-this.startY;if(this.directionY=e>0?"down":"up",this.directionY!=this.directionLocked?(b=!0,this.directionLocked=this.directionY):b=!1,0>=e)if(this.pageNow==this.pageNum-1&&this.options.isCycle)this.pageNext=0;else{if(this.pageNow==this.pageNum-1)return this.pageNext=null,!1;this.pageNext=this.pageNow+1}else if(0==this.pageNow){if(!this.options.isFirstChange||!this.options.isCycle)return this.pageNext=null,!1;this.pageNext=this.pageNum-1}else this.pageNext=this.pageNow-1;return a=this.page[this.pageNext],c=[a,d],b&&(this.nextY="up"==this.directionY?this.pageHeight:-this.pageHeight,a.style.display="block",a.style.zIndex="9"),c},_end:function(a){if(n[a.type]===this.initiated){if(this.initiated=0,this.directionY=0,this.directionLocked=0,!(Math.abs(this.pointY-this.startY)>10)||isNaN(this.pageNext))return void(this.moved=!1);this.moved=!0;var b=this.pointY-this.startY,c=this.page[this.pageNow],d=this.page[this.pageNext];Math.abs(b)>=this.options.translateThreshold?(this.nextY=0,this.y=b>0?this.pageHeight/this.options.moveY:-this.pageHeight/this.options.moveY,this.scale=1-this.options.scale):(this.y=0,this.nextY=b>0?-this.pageHeight:this.pageHeight,this.scale=1),!this.options.isSingle&&this._transitionTo(c,0,this.y,this.scale,this.options.transitionTime,this.options.easingType),this._transitionTo(d,0,this.nextY,1,this.options.transitionTime,this.options.easingType),this.emit("mPageEnd")}},_transitionTo:function(a,b,c,d,e,f){a&&(d=d||1,f=f||this.options.easingType,this.isInTransition=e>0,this._transitionTimingFunction(a,f),this._transitionTime(a,e),this._translate(a,b,c,d))},_transitionProperty:function(a){var a=a||"all";b(this.page,function(b,c){c.style[f("transitionProperty")]=a})},_transitionTime:function(a,c){var c=c||0;a?a.style[f("transitionDuration")]=c+"ms":b(this.page,function(a,b){b.style[f("transitionDuration")]=c+"ms"})},_transitionTimingFunction:function(a,b){a.style[f("transitionTimingFunction")]=b},_translate:function(a,b,c,d){if(a){var d=d||1;this.options.useTransform?a.style[f("transform")]="translate("+b+"px,"+c+"px) scale("+d+")"+g():(b=Math.round(b),c=Math.round(c),a.style.left=b+"px",a.style.top=c+"px"),this.emit("mPageTranslate")}},_transitionEnd:function(){this.isInTransition&&(this._transitionTime(),this.isInTransition=0,Math.abs(this.pointY-this.startY)>=this.options.translateThreshold?this._pageSuccess():this._pageFial(),this.x=0,this.y=0,this.moved=!1,this.emit("mPageTransitionEnd"))},_pageSuccess:function(){var a=this.page[this.pageNow],b=this.page[this.pageNext];0==this.pageNext&&this.pageNow==this.pageNum-1&&(this.options.isFirstChange=!0),a.style.display="none",a.style[f("transform")]="",b.style[f("transform")]="",b.style.zIndex="8",this.pageNow=this.pageNext,this.pageNext=null,this.emit("mPageSuccess",{now:a,next:b})},_pageFial:function(){var a=this.page[this.pageNow],b=this.page[this.pageNext];b.style.display="none",a.style[f("transform")]="",b.style[f("transform")]="",b.style.zIndex="8",this.pageNext=null,this.emit("mPageFial",{now:a,next:b})},_resize:function(){var a=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){a.refresh()},this.resizePolling),this.emit("mPageResize")}},h}),!function(a,b){var c="function"==typeof define,d="undefined"!=typeof module&&module.exports;c?define("dist/component_module/preLoad/preLoad",[],b):d?module.exports=b():this[a]=b()}("PreLoad",function(){function a(a){return function(b){return Object.prototype.toString.call(b)==="[object "+a+"]"}}function b(a,b,h){if(!a||!e(a)||!g(a))throw new Error("传入的图片集合不正确，确保是数组或者是对象；");var j=arguments.length;2===j&&(f(b)||d(b)?h=void 0:!f(b)&&c(b)&&(h=b,b=void 0)),this.imgItems=a,this.imgPreUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC","undefined"==typeof b||""==b?(this.progressNode=document.createElement("div"),document.body.appendChild(this.progressNode)):this.progressNode=d(b)?document.querySelector(b):b,this.events={},this.prefix="",this.vision="1.0",this.contentText=this,this.progressInit=!0;for(i in h)this[i]=h[i];this.load()}var c=a("Object"),d=a("String"),e=Array.isArray||a("Array"),f=(a("Function"),function(a){return null!=a&&a.nodeType==a.ELEMENT_NODE}),g=function(a){return"number"==typeof a.length};Object.prototype.length=function(){var a,b=0;for(a in obj)obj.hasOwnProperty(a)&&b++;return b},_forEach=function(a,b){var c,d;if(g(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a};var h=/(^data:.*?;base64)|(\.(jpg|png|gif)$)/;return b.prototype={emit:function(a){if(this.events[a]){var b=0,c=this.events[a].length;if(c)for(;c>b;b++)this.events[a][b].apply(this,[].slice.call(arguments,1))}},on:function(a,b){this.events[a]||(this.events[a]=[]),this.events[a].push(b)},load:function(){var a=0,b=this.imgItems,c=this.imgItems.length,d=this;d.emit("preLoadBefore"),_forEach(b,function(b,e){if(!h.test(e)){var f=b+1;console.log("第"+f+"个图片地址值不正确"),e=this.imgPreUrl}var g=new Image,i=d.prefix+e+(d.vision?"?vision="+d.vision:"");g.onload=g.onerror=g.onabort=function(){++a===c&&d.emit("preLoadComplete"),d.progressInit&&(d.progressNode.innerText=Math.floor(100*a/c)+"%"),d.emit("preLoadProgress")},g.src=i})}},b}),!function(a,b){var c="function"==typeof define,d="undefined"!=typeof module&&module.exports;c?define("dist/component_module/svgAni/svgAni",[],b):d?module.exports=b():this[a]=b()}("SvgAni",function(){"use strict";function a(a,b){this.svg=a,this.path=this.svg.querySelectorAll("path"),this.length=[],this.renderOne=!0,this.speed=1,this.current_frame=0,this.events={};for(i in b)this[i]=b[i];this.init()}for(var b=0,c=["webkit","moz",""],d=0,e=c.length;e>d&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"]||window[c[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-b)),e=window.setTimeout(function(){a(c+d)},d);return b=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var f=function(a){return"number"==typeof a.length},g=function(a,b){var c,d;if(f(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a};return a.prototype={init:function(){this.pathInit()},pathInit:function(){g(this.path,function(a,b){if("function"!=typeof b.getTotalLength)return void console.log("您的浏览器不支持SVG！！");var c=b.getTotalLength();b.style.strokeDasharray=c,b.style.strokeDashoffset=c})},emit:function(a){if(this.events[a]){var b=0,c=this.events[a].length;if(c)for(;c>b;b++)this.events[a][b].apply(this,[].slice.call(arguments,1))}},on:function(a,b){this.events[a]||(this.events[a]=[]),this.events[a].push(b)},draw:function(){var a=this,b=this.current_frame/100*this.speed;b>1?(window.cancelAnimationFrame(this.handle),this.emit("complete"),delete this.handle):(this.current_frame++,g(this.path,function(a,c){c.style.strokeDashoffset=Math.floor(c.getTotalLength()*(1-b))}),this.emit("progress"),this.handle=window.requestAnimationFrame(function(){a.draw()}))},render:function(){this.rendered&&this.renderOne||(this.rendered=!0,this.draw())}},a}),!function(a,b){var c="function"==typeof define,d="undefined"!=typeof module&&module.exports;c?define("dist/component_module/gifAni/gifAni",[],b):d?module.exports=b():this[a]=b()}("GifAni",function(){function a(a){return function(b){return Object.prototype.toString.call(b)==="[object "+a+"]"}}function b(a,b){var c,d;if(f(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a}function c(a,b,c,d){d=d?!0:!1,a.addEventListener?a.addEventListener(b,c,d):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}function d(a){this.gifs=document.querySelectorAll?document.querySelectorAll("[data-gif]"):[],this.gifArr=[],this.gifWidth=100,this.gifHeight=100,this.events={},this.eventType="click",this.eventInit=!0,this.isLoad=!0;for(i in a)this[i]=a[i];this.init()}var e=(a("Object"),a("String"),Array.isArray||a("Array")),f=(a("Function"),function(a){return"number"==typeof a.length});return Function.prototype.bind=Function.prototype.bind||function(a){var b=this;return function(c){e(c)||(c=[c]),b.apply(a,c)}},d.prototype={init:function(){this.gifInit()},emit:function(a){if(this.events[a]){var b=0,c=this.events[a].length;if(c)for(;c>b;b++)this.events[a][b].apply(this,[].slice.call(arguments,1))}},on:function(a,b){this.events[a]||(this.events[a]=[]),this.events[a].push(b)},gifInit:function(){var a=this,c=this.gifs.length,d=0;b(this.gifs,function(b,e){var f=e.dataset.gif,g=new Image;g.onload=g.onerror=g.onabort=function(){++d===c&&a.emit("instanceComplete"),a.gifInstance(b,e,g),a.emit("instanceProgress")},g.src=f})},gifInstance:function(a,b,d){var e=b.dataset.gifWidth?b.dataset.gifWidth:this.gifWidth,f=b.dataset.gifHeight?b.dataset.gifHeight:this.gifHeight,g=b.dataset.gifLoad,h=document.createElement("DIV");h.style.cssText="position:relative;cursor:pointer;width:"+e+"px;height:"+f+"px;",h.dataset.play="false",h.dataset.index=a,d.width=e,d.height=f;var i=document.createElement("DIV");i.style.cssText="position:absolute;left:"+(e/2-30)+"px;top:"+(f/2-30)+"px;width:60px;height:60px;border-radius:30px;background:rgba(0, 0, 0, 0.3);";var j=document.createElement("DIV");j.style.cssText="position:absolute;left:26px;top:16px;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:14px solid rgba(0, 0, 0, 0.5);";var k=document.createElement("canvas");k.width=e,k.height=f,k.getContext("2d").drawImage(d,0,0,e,f),i.appendChild(j),h.appendChild(i),h.appendChild(k),b.appendChild(h),this.eventInit&&c(h,this.eventType,this.gifEvent.bind(this,a),!1),this.gifArr[a]={img:d,con:h,play:i,cav:k},this.isLoad&&"true"==g&&c(window,"load",this.gifShow.bind(this,a),!1)},gifEvent:function(a){var b=this.gifArr[a],c=b.con,d=c.dataset.play;"true"==d?this.gifHide(a):this.gifShow(a)},gifShow:function(a){var b=this.gifArr[a],c=b.con,d=b.play,e=b.cav,f=b.img;c.removeChild(d),c.removeChild(e),c.appendChild(f),c.dataset.play="true",this.emit("gifShow")},gifHide:function(a){var b=this.gifArr[a],c=b.con,d=b.play,e=b.cav,f=b.img;c.appendChild(d),c.appendChild(e),c.removeChild(f),c.dataset.play="false",this.emit("gifHide")}},d}),define("dist/view/demo/js/event",[],function(a,b,c){var d={};c.exports=d});