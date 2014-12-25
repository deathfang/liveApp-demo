/**
 * APP入口控制器
 * @author cation
 * @email shoe11414255@qq.com
 */
define("dist/view/demo/app", [ "dist/component/show/show", "dist/component_module/media/media", "dist/component_module/mPage/mPage", "dist/component_module/preLoad/preLoad", "dist/component_module/svgAni/svgAni", "dist/component_module/gifAni/gifAni", "./js/event" ], function(require, exports, module) {
    // 引入业务组件
    var show = require("dist/component/show/show");
    // 引入三方组件
    //require('touch');
    var media = require("dist/component_module/media/media");
    var mPage = require("dist/component_module/mPage/mPage");
    var preLoad = require("dist/component_module/preLoad/preLoad");
    var svgAni = require("dist/component_module/svgAni/svgAni");
    var gifAni = require("dist/component_module/gifAni/gifAni");
    // 引入私有脚本
    var event = require("./js/event");
    // 图片路径
    var IMG_PATH = RES_DIR + IMG_DIR;
    var JS_VISION_ = "?vision=" + JS_VISION;
    // 组件配置数据
    window.c_data = [ {
        name: "show",
        module: "imgText",
        pageBg: IMG_PATH + "1.jpg" + JS_VISION_
    }, {
        name: "show",
        module: "imgText",
        pageBg: IMG_PATH + "2.jpg" + JS_VISION_,
        gifAniImg: IMG_PATH + "gifAni.gif" + JS_VISION_
    }, {
        name: "show",
        module: "imgText",
        pageBg: IMG_PATH + "3.jpg" + JS_VISION_,
        svg: true,
        svg_width: $(window).width(),
        svg_height: $(window).height()
    }, {
        name: "show",
        module: "imgText",
        pageBg: IMG_PATH + "4.jpg" + JS_VISION_
    } ];
    // APP对象
    function App() {
        this.page = null;
        this.pageWrap = null;
    }
    App.prototype = {
        init: function() {
            // 加载组件
            this.componentCreate();
            // 样式初始化
            this.styleInit();
        },
        // APP样式初始化
        styleInit: function() {
            // 静止window滚动
            $(window).on("touchmove scroll", function(e) {
                e.preventDefault();
            });
            // 禁止文版被拖动
            document.body.style.userSelect = "none";
            document.body.style.mozUserSelect = "none";
            document.body.style.webkitUserSelect = "none";
            // 判断设备的旋转状态
            $(window).on("orientationchange", function(e) {
                switch (window.orientation) {
                  case 0:
                    //竖屏
                    $(".app").removeClass("j-landscape");
                    break;

                  case 180:
                    //竖屏
                    $(".app").removeClass("j-landscape");
                    break;

                  case -90:
                    //横屏
                    $(".app").addClass("j-landscape");
                    break;

                  case 90:
                    //横屏
                    $(".app").addClass("j-landscape");
                    break;
                }
            });
            // 提示组件加载失败
            if (this.page.size() <= 0) {
                console.log("组件初始化失败！！");
            }
            var h = $(window).height();
            this.pageWrap.height(h);
            this.page.height(h);
        },
        // 加载组件
        componentCreate: function() {
            var selector = $(".app-content .p-ct .pageWrap");
            // 遍历组件数据加载
            for (var i = 0, len = c_data.length; i < len; i++) {
                var data = c_data[i];
                this.componentSelect(selector, data);
            }
            this.pageWrap = $(".p-ct .pageWrap");
            this.page = $(".p-ct").find(".pageWrap .m-page");
            // 资源控制
            this.resControl();
        },
        // 选择组件生成组件
        componentSelect: function(selector, data) {
            var data = data || {};
            var componentName = data ? data.name : "";
            switch (componentName) {
              case "show":
                var _show = new show(selector, data);
                break;

              default:
                return;
                break;
            }
        },
        // 资源管理器
        resControl: function() {
            var that = this, width = $(window).width(), height = $(window).height();
            // gif动态图
            var _gifAni = new gifAni({});
            // 声音事件绑定并初始化
            var _media = new media(RES_DIR + "view/demo/media/media.mp3", ".u-music", {
                audioAutoPlay: true
            });
            // 图片预加载
            var imgs = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg" ];
            var _proLoad = new preLoad(imgs, ".progress", {
                prefix: IMG_PATH,
                progressInit: false,
                vision: JS_VISION,
                events: {
                    preLoadComplete: [ function() {
                        that.openApp();
                    } ]
                }
            });
            // 初始化页面管理器
            var _mPage = new mPage(".pageWrap", ".m-page", {
                width: width,
                height: height,
                isSingle: false,
                scale: 0,
                moveY: 1
            });
            _mPage.on("mPageSuccess", function(options) {
                var svg = options.next.querySelectorAll("svg");
                if (svg.length > 0) {
                    for (var i = 0, len = svg.length; i < len; i++) {
                        var _svg = svg[i];
                        //if (_svg.dataset.render == 'true') {
                        //	return
                        //}
                        _svg.className.baseVal = _svg.className.baseVal.replace("f-hide", "");
                        var _svgAni = new svgAni(_svg);
                        _svgAni.render();
                        _svgAni.on("complete", function() {
                            _svg.dataset.render = "true";
                        });
                    }
                }
            });
        },
        // 启动APP
        openApp: function() {
            // 打开内容
            $(".app-content").removeClass("f-hide");
            setTimeout(function() {
                $(".app-content").addClass("z-show");
                setTimeout(function() {
                    // 隐藏loading
                    $(".app-loading").addClass("f-hide");
                }, 1e3);
            }, 20);
        }
    };
    module.exports = new App();
});

/**
 * 分享显示组件控制器
 * @cation
 * @wechat shoe11414255
 */

define(function(require, exports, module){
    require("http://localhost:8000/component/show/c.css");
})

define("dist/component/show/show", [], function(require, exports, module) {

    var tpl = require("./c.tpl");
    function Share(selector, data) {
        this.data = data ? data : "";
        this.dom = typeof selector == "object" ? selector : $(selector);
        this.domObj = null;
        this.events = {};
        this.render();
    }
    Share.prototype = {
        render: function() {
            var render, html;
            if (this.data) {
                render = template.compile(tpl);
                html = render(this.data);
            } else {
                html = tpl;
            }
            html = $(html);
            this.domObj = html;
            this.dom.append(html);
            this.style();
            this.bindEvents();
            delete this.dom;
        },
        style: function() {},
        bindEvents: function() {},
        /**
         * @method emit()
         * @description 观察者事件触发类型
         *
         * @param {string} type 事件类型
         */
        emit: function(type) {
            if (!this.events[type]) {
                return;
            }
            var i = 0, l = this.events[type].length;
            if (!l) {
                return;
            }
            for (;i < l; i++) {
                this.events[type][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        /**
         * @method on()
         * @description 对应观察者事件订阅回调函数
         *
         * @param {string} type 事件类型
         * @param {function} fn 订阅回调函数
         */
        on: function(type, fn) {
            if (!this.events[type]) {
                this.events[type] = [];
            }
            this.events[type].push(fn);
        }
    };
    module.exports = Share;
});

define("dist/component/show/c.tpl", [], '\n<div class="m-page m-{{module}}" data-module-type="{{module}}">\n	<div class="m-page-ct" style="background:url({{pageBg}}) center no-repeat;background-size:cover;">\n		{{if gifAniImg}}\n		<div class="gifAni" data-gif="{{gifAniImg}}" data-gif-width="200" data-gif-height="200"></div>\n        {{/if}}\n\n        {{if svg}}\n		<svg class="f-hide" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="{{svg_width}}" height="{{svg_height}}" viewBox="0 0 640 960" enable-background="new 0 0 640 960" xml:space="preserve">\n			<path fill="none" stroke="#000" stroke-width="5" stroke-miterlimit="10" d="M70.083,383.167c0,0,501.573,0.74,501.667,0.833 s-1.039,289.664-1.167,289.792c-0.146,0.146-500.348,0.152-500.5,0c-0.188-0.188-0.271-290.625-0.271-290.625"/>\n			<path fill="none" stroke="#000" stroke-width="4" stroke-miterlimit="10" d="M336.094,686c0,0,95.316-0.09,95.406,0 c0.112,0.112,7.486,11.514,7.333,11.667c-0.212,0.212-236.521,0.146-236.667,0c-0.175-0.174,6.906-11.406,7.167-11.667 c0.156-0.156,95.354,0,95.354,0"/>\n			<path fill="none" stroke="#000" stroke-width="4" stroke-miterlimit="10" d="M304.669,673.903c0,0-0.073,16.506,0.018,16.597 s31.127,0.123,31.25,0c0.164-0.164,0-16.597,0-16.597"/>\n		</svg>\n        {{/if}}\n	</div>\n</div>\n');

/**
 * 音频资源管理组件
 * @author cation
 * @email shoe11414255@qq.com
 */
(function(name, definition) {
    // 检测有模块加载器
    var hasDefine = typeof define === "function";
    // 检测是否有普通模块加载-node
    var hasExports = typeof module !== "undefined" && module.exports;
    // 封装模块
    if (hasDefine) {
        define("dist/component_module/media/media", [], definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})("Media", function() {
    /**
	 * @method isType()
	 * @description 判断类型
	 *
	 * @param {string} type 数据类型
	 *
	 * @return {boolean} 指定参数以否是指定类型
	 *
	 * @example
	 * ```js
	 *   var a = [];
	 *   isArray(a)  --> true 
	 *   isString(a) --> false
	 *
	 *   var b = document.createElement('div');
	 *   isWindow(b) --> false
	 *   isElement(b) --> true
	 */
    function isType(type) {
        return function(obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]";
        };
    }
    var isObject = isType("Object");
    var isString = isType("String");
    var isArray = Array.isArray || isType("Array");
    var isFunction = isType("Function");
    var isWindow = function(obj) {
        return obj != null && obj == obj.window;
    };
    var isDocument = function(obj) {
        return obj != null && obj instanceof window.Element && obj.nodeType == obj.DOCUMENT_NODE;
    };
    var isElement = function(obj) {
        return obj != null && obj instanceof window.Element && obj.nodeType == obj.ELEMENT_NODE;
    };
    var likeArray = function(obj) {
        return typeof obj.length == "number";
    };
    /**
	 * @method addEvent()
	 * @description 给指定Dom对象绑定事件
	 *
	 * @param {documentDom} el 需要绑定事件的DOM对象
	 * @param {string} type 绑定的事件类型
	 * @param {function} fn 事件执行的回调函数
	 * @param {boolean} capture 判断是否事件冒泡
	 */
    function addEvent(el, type, fn, capture) {
        capture = !!capture ? true : false;
        if (el.addEventListener) {
            el.addEventListener(type, fn, capture);
        } else if (el.attachEvent) {
            el.attachEvent("on" + type, fn);
        } else {
            el["on" + type] = fn;
        }
    }
    /**
	 * @method removeEvent()
	 * @description 给指定Dom对象解除事件
	 *
	 * @param {documentDom} el 需要解除事件的DOM对象
	 * @param {string} type 解除的事件类型
	 * @param {function} fn 事件执行的回调函数
	 * @param {boolean} capture 判断是否事件冒泡
	 */
    function removeEvent(el, type, fn, capture) {
        capture = !!capture ? true : false;
        if (el.removeEventListener) {
            el.removeEventListener(type, fn, capture);
        } else if (el.detachEvent) {
            el.detachEvent("on" + type, fn);
        } else {
            el["on" + type] = null;
        }
    }
    // 音频对象储存为window下，在控制时调用
    window.__Media = [];
    // 正常判断音频--url | HTMLAudioElement
    var isAudio = /(HTMLAudioElement)|(\.(ogg|mp3|wav)$)/;
    /**
	 * @class Media
	 * @description 音频audio管理类
	 *
	 * @param {string | HTMLAudioElement} audio 音频对象节点或者地址值
	 * @param {string | isElement} wrapper 操作节点对象或者选择器
	 * @param {object} opts 类实例化传入属性
	 *
	 * @example
	 * ```js
	 *  var _media = new Media(audio, '.wrapper', {
	 *	 	'audioAutoPlay' : true
	 *	});
	 *
	 * ```js - opts
	 * -自定义音频属性 audioLoop、audioPreLoad、audioAutoPlay
	 * -自定义操作元素事件 wrapperEvent
	 * -自定义操作元素事件默认开启 wrapperEventInit
	 * -自定义事件 mediaInit、mediaCreate、mediaDestory、mediaAudioCreate、mediaPlay、mediaPause、mediaClick
	 * -自定义事件集合 events = [
	 * 					'start' : fn
	 * 				]
	 */
    function Media(audio, wrapper, opts) {
        // 检测浏览器是否支持audio对象
        if (!window.HTMLAudioElement) {
            throw new Error("对不起，您的浏览器版本过低，不支持音频的播放！！");
        }
        var argsLen = arguments.length;
        // Media(audio) --- 第一个参数必须是audio
        if (!(isElement(audio) && audio.tagName == "AUDIO") && !(isString(audio) && isAudio.test(audio))) {
            throw new Error("传入的audio参数，必须是音频对象或者是正确的音频地址值！！");
        }
        // 传入2个参数
        if (argsLen === 2) {
            if (isElement(wrapper) || isString(wrapper)) {
                // Media(audio, wrapper)
                opts = undefined;
            } else if (!isElement(wrapper) && isObject(wrapper)) {
                // Media(audio, opts)
                opts = wrapper;
                wrapper = undefined;
            }
        }
        // 音频对象设置
        if (isElement(audio)) {
            this.audio = audio;
        } else {
            this.audioSrc = audio;
        }
        // 操作对象设置
        if (typeof wrapper == "undefined") {
            this.wrapper = window.document.body;
        } else {
            this.wrapper = isString(wrapper) ? document.querySelector(wrapper) : wrapper;
        }
        // 默认控制-属性
        this.events = {};
        this.wrapperEvent = "click";
        // 默认操作元素的事件为click
        this.wrapperEventInit = true;
        // 默认操作元素的事件开启
        this.audioLoop = "loop";
        // 默认音频播放是循环
        this.audioPreLoad = "audo";
        // 默认音频自动加载
        this.audioAutoPlay = true;
        // 默认音频自动播放
        // 传递参数
        for (i in opts) {
            this[i] = opts[i];
        }
        this.init();
    }
    Media.prototype = {
        /**
    	 * @method init()
    	 * @description 对象实例化默认执行的函数
    	 *
    	 * @mediaInit 触发初始化观察者
    	 */
        init: function() {
            // 声音初始化
            this.audioCreate();
            // 绑定音乐加载事件
            this.initEvents(false);
            // 触发观察者初始化事件
            this.emit("mediaInit");
        },
        /**
		 * @method this.handleEvent(e)
		 * @description 事件绑定，默认回调this->handleEvent
		 *
		 * @param {event} e event对象
		 */
        handleEvent: function(e) {
            switch (e.type) {
              case "play":
                this._play(e);
                break;

              case "pause":
                this._pause(e);
                break;

              case "tap":
              case "click":
              case "touchstart":
              case "mousedown":
                this._action(e);
                break;
            }
        },
        /**
    	 * @method initEvents()
    	 * @description 初始化事件
    	 * 
    	 * @param  {booleam} remove 选择事件绑定还是解除
    	 *
    	 * @mediaCreate 触发组件对象创建成功事件观察者
    	 * @mediaDestory 触发组件对象注销成功事件观察者
    	 */
        initEvents: function(remove) {
            var eventType = remove ? removeEvent : addEvent;
            var target = this.wrapper;
            var music = this.audio;
            eventType(music, "play", this);
            eventType(music, "pause", this);
            eventType(target, this.wrapperEvent, this);
            if (!remove) {
                // pageCreate
                this.emit("mediaCreate");
            } else {
                // pageDestory
                this.emit("mediaDestory");
            }
        },
        /**
         * @method emit()
         * @description 观察者事件触发类型
         *
         * @param {string} type 事件类型
         */
        emit: function(type) {
            if (!this.events[type]) {
                return;
            }
            var i = 0, l = this.events[type].length;
            if (!l) {
                return;
            }
            for (;i < l; i++) {
                this.events[type][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        /**
         * @method on()
         * @description 对应观察者事件订阅回调函数
         *
         * @param {string} type 事件类型
         * @param {function} fn 订阅回调函数
         */
        on: function(type, fn) {
            if (!this.events[type]) {
                this.events[type] = [];
            }
            this.events[type].push(fn);
        },
        /**
		 * @method audioCreate()
		 * @description 根据传入的audio，生成对应的音频对象
		 *
		 * @mediaAudioCreate 触发音频创建事件观察者
		 */
        audioCreate: function() {
            // media资源的加载
            if (this.audio) {
                var src = this.audio.src;
                if (!isAudio.test(src)) {
                    throw new Error("audio-Element对象，音频地址值不正确！！");
                }
            } else if (this.audioSrc) {
                this.audio = new Audio();
                this.audio.src = this.audioSrc;
            }
            // 设置音频对象的属性
            var options_audio = {
                loop: this.audioLoop,
                preload: this.audioPreLoad,
                autoplay: this.audioAutoPlay
            };
            for (var key in options_audio) {
                if (options_audio.hasOwnProperty(key) && key in this.audio) {
                    this.audio[key] = options_audio[key];
                }
            }
            this.wrapper.appendChild(this.audio);
            this.audio.load();
            window.__Media.push(this.audio);
            this.emit("mediaAudioCreate");
        },
        /**
	 	 * @method _play()
	 	 * @description 音频播放
	 	 * 
	 	 * @mediaAudioCreate 触发音频播放事件观察者
	 	 */
        _play: function() {
            // 关闭其他声音
            var audios = window.__Media;
            var l = audios.length;
            for (var i = 0; i < l; i++) {
                if (audios[i] != this.audio) {
                    audios[i].pause();
                }
            }
            this.emit("mediaPlay");
        },
        /**
	 	 * @method _pause()
	 	 * @description 音频暂停
	 	 * 
	 	 * @mediaAudioCreate 触发音频暂停事件观察者
	 	 */
        _pause: function() {
            this.emit("mediaPause");
        },
        /**
	 	 * @method _action()
	 	 * @description 操作对象的交互事件
	 	 * 
	 	 * @mediaAction 触发操作对象交互事件观察者
	 	 */
        _action: function() {
            if (this.wrapperEventInit) {
                if (this.audio.paused) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }
            this.emit("mediaAction");
        }
    };
    return Media;
});

/**
 * 页面切换组件
 * @author cation
 * @email shoe11414255@qq.com
 */
(function(name, definition) {
    // 检测有模块加载器
    var hasDefine = typeof define === "function";
    // 检测是否有普通模块加载-node
    var hasExports = typeof module !== "undefined" && module.exports;
    // 封装模块
    if (hasDefine) {
        define("dist/component_module/mPage/mPage", [], definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})("MPage", function() {
    "use strict";
    /**
     * @method isType()
     * @description 判断类型
     *
     * @param {string} type 数据类型
     *
     * @return {boolean} 指定参数以否是指定类型
     *
     * @example
     * ```js
     *   var a = [];
     *   isArray(a)  --> true 
     *   isString(a) --> false
     *
     *   var b = document.createElement('div');
     *   isWindow(b) --> false
     *   isElement(b) --> true
     */
    function isType(type) {
        return function(obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]";
        };
    }
    var isObject = isType("Object");
    var isString = isType("String");
    var isArray = Array.isArray || isType("Array");
    var isFunction = isType("Function");
    var isWindow = function(obj) {
        return obj != null && obj == obj.window;
    };
    var isDocument = function(obj) {
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    };
    var isElement = function(obj) {
        return obj != null && obj.nodeType == obj.ELEMENT_NODE;
    };
    var likeArray = function(obj) {
        return typeof obj.length == "number";
    };
    /**
     * @method function.bind()
     * @description 对Function的this指针上下文延长
     *
     * @param {object、this} target 延长指定的上下文
     * @param {Array} agrs 回调函数执行的参数传递
     *
     * @return {function} 函数函数执行，传递指定参数
     * 
     */
    Function.prototype.bind = Function.prototype.bind || function(target, agrs) {
        var self = this;
        return function(agrs) {
            if (!isArray(agrs)) {
                agrs = [ agrs ];
            }
            self.apply(target, agrs);
        };
    };
    /**
     * @method _forEach()
     * @description 遍历元素，分别对于回调函数处理
     * 
     * @param {Array | element | object} elements 需要遍历处理的元素
     * @param {function} callback 回调处理函数
     *
     * @return {Array | element | object} 返回当前元素
     */
    function _forEach(elements, callback) {
        var i, key;
        if (likeArray(elements)) {
            for (i = 0; i < elements.length; i++) {
                if (callback.call(elements[i], i, elements[i]) === false) return elements;
            }
        } else {
            for (key in elements) {
                if (callback.call(elements[key], key, elements[key]) === false) return elements;
            }
        }
        return elements;
    }
    /**
     * @method addEvent()
     * @description 给指定Dom对象绑定事件
     *
     * @param {documentDom} el 需要绑定事件的DOM对象
     * @param {string} type 绑定的事件类型
     * @param {function} fn 事件执行的回调函数
     * @param {boolean} capture 判断是否事件冒泡
     */
    function addEvent(el, type, fn, capture) {
        capture = !!capture ? true : false;
        if (el.addEventListener) {
            el.addEventListener(type, fn, capture);
        } else if (el.attachEvent) {
            el.attachEvent("on" + type, fn);
        } else {
            el["on" + type] = fn;
        }
    }
    /**
     * @method removeEvent()
     * @description 给指定Dom对象解除事件
     *
     * @param {documentDom} el 需要解除事件的DOM对象
     * @param {string} type 解除的事件类型
     * @param {function} fn 事件执行的回调函数
     * @param {boolean} capture 判断是否事件冒泡
     */
    function removeEvent(el, type, fn, capture) {
        capture = !!capture ? true : false;
        if (el.removeEventListener) {
            el.removeEventListener(type, fn, capture);
        } else if (el.detachEvent) {
            el.detachEvent("on" + type, fn);
        } else {
            el["on" + type] = null;
        }
    }
    /**
     * @method vendor()
     * @description 判断浏览器的私有头部，并返回其值
     *
     * @param {string} style 样式属性
     *
     * @return {string} 返回特定属性在浏览器的私有头部
     */
    // 判断浏览器内核类型 - 适配样式属性
    var _elementStyle = document.createElement("div").style;
    function vendor(style) {
        var vendors = [ "webkit", "moz", "ms", "o", "" ], tmp, i = 0, l = vendors.length;
        var style_C = style.charAt(0).toUpperCase() + style.substr(1);
        for (;i < l; i++) {
            tmp = vendors[i] + (vendors[i] ? style_C : style);
            if (tmp in _elementStyle) {
                return vendors[i];
            }
        }
        return false;
    }
    /**
     * @method prefixStyle()
     * @description 样式属性补全
     * 
     * @param {strong} style 样式
     *
     * @return {string} 返回补全的样式
     */
    function prefixStyle(style) {
        if (vendor(style) === false) return false;
        if (vendor(style) === "") return style;
        return vendor(style) + style.charAt(0).toUpperCase() + style.substr(1);
    }
    /**
     * @method  translateZ()
     * @description 判断是否支持3D
     */
    function translateZ() {
        if (prefixStyle("perspective")) {
            return " translateZ(0)";
        } else {
            return "";
        }
    }
    // 事件类型
    var eventType = {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,
        mousedown: 2,
        mousemove: 2,
        mouseup: 2,
        mouseout: 2,
        MSPointerDown: 3,
        MSPointerMove: 3,
        MSPointerUp: 3
    };
    /**
     * @class Media
     * @description 页面控制对象组件类
     *
     * @param {string | isElement} wrapper 操作节点对象或者选择器
     * @param {string | isElement} page 页面对象或者页面选择器
     * @param {object} opts 类实例化传入属性
     *
     * @example
     * ```js
     *   var _mPage = new MPage('.pageWrap', '.page', {
     *       width : 640,
     *       height : 1008,
     *       isSingle : false,
     *       scale : 0.5,
     *       moveY : 2
     *   });
     *
     * ```js - opts
     * -自定页面切换开关
     *    isStart 是否开启切换
     *    isTouch 是否开启触摸功能
     *    isPointerTouch 是否开启IE指针触摸功能
     *    isImgTouch 是否开启触摸时图片禁止操作
     *    isCycle 是否开启切换循环
     *    isFirstChange 是否开启第一页循环
     *    isSingle 是否开启单页面操作
     *    
     * -自定页面样式
     *    pageStyle 页面的样式
     *    current 初始化显示的页面
     *    scale 当前页面移动时的大小变化
     *    moveY 当前页面移动的距离比例
     *
     * -页面切换属性控制
     *    useTransition 是否使用过渡效果 -- 该组件没有设置动画函数，一定使用过渡想过
     *    useTransform 是否使用css3转变属性
     *    easingType 过渡效果
     *    transitionTime 移动过渡时间
     *    transitionProperty 移动使用过渡的属性
     *    translateThreshold 切换距离范围
     * 
     * -自定义事件
     *    mPageCreate 初始化功能观察者
     *    mPageDestory 功能注销观察者
     *    mPageRefresh 页面容器刷新观察者
     *    mPageStart 页面切换开始观察者
     *    mPageMove 页面移动观察者
     *    mPageTranslate 页面移动观察者
     *    mPageEnd 页面移动结束观察者
     *    mPageSuccess 页面切换成功观察者
     *    mPageFial 页面切换失败观察者
     *    mPageResize 页面容器尺寸变化观察者
     *    mPageTransitionEnd 页面过渡效果结束观察者
     */
    function MPage(wrapper, page, options) {
        // wrap-dom设置
        if (typeof wrapper == "undefined" || wrapper == "") {
            this.wrapper = window.document.body;
        } else {
            this.wrapper = isString(wrapper) ? document.querySelector(wrapper) : wrapper;
        }
        if (!isElement(this.wrapper)) {
            throw new Error("传入的wrapper-Element元素不准确，请确认上传！");
        }
        // page-dom设置
        if (typeof page == "undefined" || page == "") {
            this.page = this.wrapper.children;
        } else {
            this.page = isArray(page) ? this.page : this.wrapper.querySelectorAll(page);
        }
        // 默认控制值配置
        this.options = {
            isStart: false,
            // 是否开启切换 - false开启，true注销
            isMouse: true,
            // 是否开启鼠标切换
            isTouch: true,
            // 是否开启touch
            isPointerTouch: true,
            // 是否开启PointerTouch
            isImgTouch: false,
            // 图片禁止滑动
            isCycle: true,
            // 是否循环
            isFirstChange: false,
            // 是否开启第一页切换回去
            isSingle: true,
            // 是否开启单页操作（当前页面不动）
            pageStyle: {},
            // 页面样式
            current: 0,
            // 当前显示页面位置
            scale: 0,
            // 当前页面移动时的大小变化
            moveY: 1,
            // 当前页面移动的距离比例
            useTransition: true,
            // 是否使用过渡效果 -- 该组件没有设置动画函数，一定使用过渡想过
            useTransform: true,
            // 是否使用css3转变属性 
            easingType: "linear",
            // 过渡效果
            transitionTime: 400,
            // 移动过渡时间
            transitionProperty: "left, " + "-" + vendor("transform") + "-transform",
            // 移动使用过渡的属性
            translateThreshold: 100,
            // 切换距离范围
            resizePolling: 60
        };
        // 自定义控制值扩展
        for (var i in options) {
            this.options[i] = options[i];
        }
        this.options.useTransition = prefixStyle("transform") !== false && this.options.useTransition;
        this.options.useTransform = prefixStyle("transition") in _elementStyle && this.options.useTransform;
        this.hasTouch = this.options.isTouch && "ontouchstart" in window;
        this.hasPointer = this.options.isPointerTouch && navigator.msPointerEnabled;
        this.hasMouse = this.options.isMouse && "onmousedown" in window;
        this.pageNow = this.options.current ? this.options.current : 0;
        // Some defaults
        this.pageNum = this.page.length;
        this.events = {};
        // 自定义事件
        this.x = 0;
        this.y = 0;
        this.init();
    }
    // 扩展原型
    MPage.prototype = {
        /**
         * @method init()
         * @description 对象实例化默认执行的函数
         */
        init: function(opts) {
            // 样式设置
            this.style();
            // 刷新对象值
            this.refresh();
            // 初始化对象
            this.initEvents(this.options.isStart);
        },
        /**
         * @method emit()
         * @description 观察者事件触发类型
         *
         * @param {string} type 事件类型
         */
        emit: function(type) {
            if (!this.events[type]) {
                return;
            }
            var i = 0, l = this.events[type].length;
            if (!l) {
                return;
            }
            for (;i < l; i++) {
                this.events[type][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        /**
         * @method on()
         * @description 对应观察者事件订阅回调函数
         *
         * @param {string} type 事件类型
         * @param {function} fn 订阅回调函数
         */
        on: function(type, fn) {
            if (!this.events[type]) {
                this.events[type] = [];
            }
            this.events[type].push(fn);
        },
        /**
         * @method this.handleEvent(e)
         * @description 事件绑定，默认回调this->handleEvent
         *
         * @param {event} e event对象
         */
        handleEvent: function(e) {
            switch (e.type) {
              case "touchstart":
              case "MSPointerDown":
              case "mousedown":
                this._start(e);
                break;

              case "touchmove":
              case "MSPointerMove":
              case "mousemove":
                this._move(e);
                break;

              case "touchend":
              case "MSPointerUp":
              case "MSPointerOut":
              case "mouseup":
              case "mouseout":
              case "touchcancel":
              case "MSPointerCancel":
              case "mousecancel":
                this._end(e);
                break;

              case "transitionend":
              case "webkitTransitionEnd":
              case "oTransitionEnd":
              case "MSTransitionEnd":
                this._transitionEnd(e);
            }
        },
        /**
         * @method initEvents()
         * @description 初始化事件
         * 
         * @param  {booleam} remove 选择事件绑定还是解除
         *
         * @mPageCreate 触发组件对象创建成功事件观察者
         * @mPageDestory 触发组件对象注销成功事件观察者
         */
        initEvents: function(remove) {
            var that = this;
            var eventType = remove ? removeEvent : addEvent;
            var target = this.wrapper;
            eventType(window, "orientationchange", this);
            eventType(window, "resize", this);
            // pc-mouse
            if (this.hasMouse) {
                eventType(target, "mousedown", this);
                eventType(target, "mousemove", this);
                eventType(target, "mousecancel", this);
                eventType(target, "mouseup", this);
                eventType(target, "mouseout", this);
            }
            // mobile-ie
            if (this.hasPointer) {
                eventType(target, "MSPointerDown", this);
                eventType(target, "MSPointerMove", this);
                eventType(target, "MSPointerCancel", this);
                eventType(target, "MSPointerUp", this);
                eventType(target, "MSPointerOut", this);
            }
            // mobile-webkit
            if (this.hasTouch) {
                eventType(target, "touchstart", this);
                eventType(target, "touchmove", this);
                eventType(target, "touchcancel", this);
                eventType(target, "touchend", this);
            }
            _forEach(this.page, function(i, item) {
                eventType(item, "transitionend", that);
                eventType(item, "webkitTransitionEnd", that);
                eventType(item, "oTransitionEnd", that);
                eventType(item, "MSTransitionEnd", that);
            });
            if (!remove) {
                // pageCreate
                this.emit("mPageCreate");
            } else {
                // pageDestory
                this.emit("mPageDestory");
            }
        },
        /**
         * @method style()
         * @description style设置
         */
        style: function() {
            var that = this;
            if (this.wrapper.style.position != "absolute") {
                this.wrapper.style.position = "relative";
            }
            _forEach(this.page, function(i, item) {
                item.style.cssText = "display:none;position:absolute;left:0;top:0;z-index:8;";
                // 自定时page样式
                for (var o in that.options.pageStyle) {
                    item.style[prefixStyle(o)] = that.options.pageStyle;
                }
                if (i == that.pageNow) {
                    item.style.display = "block";
                }
            });
            // 设置过渡属性值
            this._transitionProperty(this.options.transitionProperty);
        },
        /**
         * @method refresh()
         * @description refresh刷新
         *
         * @mPageRefresh 触发页面容易刷新观察者
         */
        refresh: function() {
            var that = this;
            this.pageWidth = this.options.width ? this.options.width : this.wrapper.clientWidth ? this.wrapper.clientWidth : window.innerWidth;
            // 页面宽度
            this.pageHeight = this.options.height ? this.options.height : this.wrapper.clientHeight ? this.wrapper.clientHeight : window.innerHeight;
            // 页面高度
            this.wrapper.style.width = this.pageWidth;
            this.wrapper.style.height = this.pageHeight;
            // 页面设置高度和砍断
            _forEach(this.page, function(i, item) {
                item.style.width = that.pageWidth;
                item.style.height = that.pageHeight;
            });
            // refresh
            this.emit("mPageRefresh");
        },
        /**
         * @method _start()
         * @description page触摸移动start
         *
         * @mPageStart 触发页面触摸开始观察者
         */
        _start: function(e) {
            // 判断操作的是图片元素，禁止图片有拖拽效果
            if (this.options.isImgTouch && e.target.tagName == "IMG") {
                e.preventDefault();
            }
            // 禁止PC上右键的操作
            if (eventType[e.type] != 1) {
                if (e.button !== 0) {
                    return;
                }
            }
            // 判断操作的事件类型，保持操作一致
            if (this.initiated && eventType[e.type] !== this.initiated) {
                return;
            }
            // 判断图片切换是否处于过渡中
            if (this.moved) {
                return;
            }
            this._transitionTime();
            this.initiated = eventType[e.type];
            this.moved = false;
            var point = e.touches ? e.touches[0] : e;
            this.pointY = point.pageY;
            this.startY = point.pageY;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            // start事件
            this.emit("mPageStart");
        },
        /**
         * @method _move()
         * @description page触摸移动move
         *
         * @mPageMove 触发页面触摸移动观察者
         */
        _move: function(e) {
            e.preventDefault();
            // 判断操作的事件类型，保持操作一致
            if (eventType[e.type] !== this.initiated) {
                return;
            }
            if (!this.pointY || this.pointY == 0) {
                return;
            }
            // 位置值操作
            var point = e.touches ? e.touches[0] : e, deltaY = point.pageY - this.pointY, newY, nextY, now, next;
            this.pointY = point.pageY;
            // 激活的page
            if (this.pagePosition()) {
                next = this.pagePosition()[0];
                now = this.pagePosition()[1];
            } else {
                this.pointY = this.startY;
                return;
            }
            newY = (this.y + deltaY) / this.options.moveY;
            nextY = this.nextY + deltaY;
            this.scale = 1 - Math.abs((this.pointY - this.startY) * this.options.scale / this.pageHeight);
            // 图片移动
            !this.options.isSingle && this._translate(now, 0, newY, this.scale);
            this._translate(next, 0, nextY);
            this.y = newY;
            this.nextY = nextY;
            // move移动观察者
            this.emit("mPageMove");
        },
        /**
         * @method pagePosition()
         * @description page触摸切换激活下一个页面
         */
        pagePosition: function() {
            var now = this.page[this.pageNow], // 当前页面
            del = this.pointY - this.startY, // 移动的距离
            next, moveFirst, node;
            // 设置移动方向
            this.directionY = del > 0 ? "down" : "up";
            if (this.directionY != this.directionLocked) {
                moveFirst = true;
                this.directionLocked = this.directionY;
            } else {
                moveFirst = false;
            }
            // 设置下一页面的显示和位置        
            if (del <= 0) {
                if (this.pageNow == this.pageNum - 1 && this.options.isCycle) {
                    this.pageNext = 0;
                } else if (this.pageNow == this.pageNum - 1) {
                    this.pageNext = null;
                    return false;
                } else {
                    this.pageNext = this.pageNow + 1;
                }
            } else {
                if (this.pageNow == 0) {
                    if (this.options.isFirstChange && this.options.isCycle) {
                        this.pageNext = this.pageNum - 1;
                    } else {
                        this.pageNext = null;
                        return false;
                    }
                } else {
                    this.pageNext = this.pageNow - 1;
                }
            }
            next = this.page[this.pageNext];
            node = [ next, now ];
            // move阶段根据方向设置页面的初始化位置--执行一次
            if (moveFirst) {
                // 设置下一页面的显示和位置        
                this.nextY = this.directionY == "up" ? this.pageHeight : -this.pageHeight;
                next.style.display = "block";
                next.style.zIndex = "9";
            }
            return node;
        },
        /**
         * @method _end()
         * @description page触摸移动end
         *
         * @mPageEnd 触发页面触摸结束观察者
         */
        _end: function(e) {
            // 判断操作的事件类型，保持操作一致
            if (eventType[e.type] !== this.initiated) {
                return;
            }
            // 注销控制值
            this.initiated = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            // 判断是否有move，没有判断为点击 --> 按钮的点击
            if (Math.abs(this.pointY - this.startY) > 10 && !isNaN(this.pageNext)) {
                this.moved = true;
            } else {
                this.moved = false;
                return;
            }
            var del = this.pointY - this.startY, now = this.page[this.pageNow], next = this.page[this.pageNext];
            // 页面切换 - 并设置相关页面变化的属性值
            if (Math.abs(del) >= this.options.translateThreshold) {
                // 切换成功
                // 下一个页面的移动
                this.nextY = 0;
                // 当前页面变小的移动
                this.y = del > 0 ? this.pageHeight / this.options.moveY : -this.pageHeight / this.options.moveY;
                this.scale = 1 - this.options.scale;
            } else {
                // 还原到最初状态
                this.y = 0;
                this.nextY = del > 0 ? -this.pageHeight : this.pageHeight;
                this.scale = 1;
            }
            // 页面开始移动
            !this.options.isSingle && this._transitionTo(now, 0, this.y, this.scale, this.options.transitionTime, this.options.easingType);
            this._transitionTo(next, 0, this.nextY, 1, this.options.transitionTime, this.options.easingType);
            // end事件
            this.emit("mPageEnd");
        },
        /**
         * @method _transitionTo()
         * @description 图片切换处理函数
         *
         * @param {number} x 轮播图x位置值
         * @param {number} y 轮播图y位置值
         * @param {number} time 切换过渡时间
         * @param {string} easing 过渡效果设置，css3的设置形式
         */
        _transitionTo: function(node, x, y, scale, time, easing) {
            if (!node) {
                return;
            }
            scale = scale || 1;
            easing = easing || this.options.easingType;
            this.isInTransition = time > 0;
            this._transitionTimingFunction(node, easing);
            this._transitionTime(node, time);
            this._translate(node, x, y, scale);
        },
        /**
         * @method _transitionProperty()
         * @description 切换过渡属性设置
         *
         * @param {string} property 过渡效果属性值
         */
        _transitionProperty: function(property) {
            var that = this, property = property || "all";
            _forEach(this.page, function(i, item) {
                item.style[prefixStyle("transitionProperty")] = property;
            });
        },
        /**
         * @method _transitionTime()
         * @description 切换过渡时间设置
         *
         * @param {number} time 过渡时间值
         */
        _transitionTime: function(node, time) {
            var time = time || 0;
            if (node) {
                node.style[prefixStyle("transitionDuration")] = time + "ms";
            } else {
                _forEach(this.page, function(i, page) {
                    page.style[prefixStyle("transitionDuration")] = time + "ms";
                });
            }
        },
        /**
         * @method _transitionTimingFunction()
         * @description 切换过渡效果设置
         *
         * @param {String} easing css3形式的过渡效果值
         */
        _transitionTimingFunction: function(node, easing) {
            node.style[prefixStyle("transitionTimingFunction")] = easing;
        },
        /**
         * @method _translate()
         * @description 切换移动位置值设置
         *
         * @param {number} x 轮播图x位置值
         * @param {number} y 轮播图y位置值
         *
         * @mPageTranslate 触发切换移动观察者
         */
        _translate: function(node, x, y, scale) {
            if (!node) {
                return;
            }
            var scale = scale || 1;
            //  是否开启位置旋转-硬件加速效果
            if (this.options.useTransform) {
                node.style[prefixStyle("transform")] = "translate(" + x + "px," + y + "px) scale(" + scale + ")" + translateZ();
            } else {
                x = Math.round(x);
                y = Math.round(y);
                node.style.left = x + "px";
                node.style.top = y + "px";
            }
            // 图片移动观察者
            this.emit("mPageTranslate");
        },
        /**
         * @method _transitionEnd()
         * @description 切换过渡结束处理函数
         *
         * @mPageTransitionEnd 触发切换过渡结束观察者
         */
        _transitionEnd: function(event) {
            if (!this.isInTransition) {
                return;
            }
            // 并将isInTransition设为false
            // 执行停止回调函数
            this._transitionTime();
            this.isInTransition = 0;
            if (Math.abs(this.pointY - this.startY) >= this.options.translateThreshold) {
                this._pageSuccess();
            } else {
                this._pageFial();
            }
            // 页面相关操作
            this.x = 0;
            this.y = 0;
            // 停止运动
            this.moved = false;
            // 图片移动过渡结束观察者
            this.emit("mPageTransitionEnd");
        },
        /**
         * @method _pageSuccess()
         * @description 切换成功事件
         *
         * @mPageSuccess 触发切换成功观察者
         */
        _pageSuccess: function() {
            var now = this.page[this.pageNow], next = this.page[this.pageNext];
            // 判断最后一页让，开启循环切换
            if (this.pageNext == 0 && this.pageNow == this.pageNum - 1) {
                this.options.isFirstChange = true;
            }
            now.style.display = "none";
            now.style[prefixStyle("transform")] = "";
            next.style[prefixStyle("transform")] = "";
            next.style.zIndex = "8";
            // 初始化切换的相关控制值
            this.pageNow = this.pageNext;
            this.pageNext = null;
            // 成功
            this.emit("mPageSuccess", {
                now: now,
                next: next
            });
        },
        /**
         * @method _pageFial()
         * @description 切换失败事件
         *
         * @mPageSuccess 触发切换失败观察者
         */
        _pageFial: function() {
            var now = this.page[this.pageNow], next = this.page[this.pageNext];
            next.style.display = "none";
            now.style[prefixStyle("transform")] = "";
            next.style[prefixStyle("transform")] = "";
            next.style.zIndex = "8";
            this.pageNext = null;
            // 成功
            this.emit("mPageFial", {
                now: now,
                next: next
            });
        },
        /**
         * @method _resize()
         * @description 页面容器尺寸变化（windows-riseze）
         *
         * @mPageResize 触发容器尺寸变化观察者
         */
        _resize: function() {
            var that = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function() {
                that.refresh();
            }, this.resizePolling);
            // 刷新
            this.emit("mPageResize");
        }
    };
    return MPage;
});

(function(name, definition) {
    // 检测有模块加载器
    var hasDefine = typeof define === "function";
    // 检测是否有普通模块加载-node
    var hasExports = typeof module !== "undefined" && module.exports;
    // 封装模块
    if (hasDefine) {
        define("dist/component_module/preLoad/preLoad", [], definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})("PreLoad", function() {
    /**
	 * @method isType()
	 * @description 判断类型
	 *
	 * @param {string} type 数据类型
	 *
	 * @return {boolean} 指定参数以否是指定类型
	 *
	 * @example
	 * ```js
	 *   var a = [];
	 *   isArray(a)  --> true 
	 *   isString(a) --> false
	 *
	 *   var b = document.createElement('div');
	 *   isWindow(b) --> false
	 *   isElement(b) --> true
	 */
    function isType(type) {
        return function(obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]";
        };
    }
    var isObject = isType("Object");
    var isString = isType("String");
    var isArray = Array.isArray || isType("Array");
    var isFunction = isType("Function");
    var isWindow = function(obj) {
        return obj != null && obj == obj.window;
    };
    var isDocument = function(obj) {
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    };
    var isElement = function(obj) {
        return obj != null && obj.nodeType == obj.ELEMENT_NODE;
    };
    var likeArray = function(obj) {
        return typeof obj.length == "number";
    };
    /**
 	 * @method obj.length()
 	 * @description 计算对象的长度（属性）
 	 *
 	 * @example
 	 * var a = {
 	 *   1 : 1,
 	 *   2 : 2
 	 * }
 	 * a.length == 2 // true
 	 */
    Object.prototype.length = function() {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    /**
 	 * @method _forEach()
 	 * @description 遍历元素，分别对于回调函数处理
 	 * 
 	 * @param {Array | element | object} elements 需要遍历处理的元素
 	 * @param {function} callback 回调处理函数
 	 *
 	 * @return {Array | element | object} 返回当前元素
 	 */
    _forEach = function(elements, callback) {
        var i, key;
        if (likeArray(elements)) {
            for (i = 0; i < elements.length; i++) {
                if (callback.call(elements[i], i, elements[i]) === false) return elements;
            }
        } else {
            for (key in elements) {
                if (callback.call(elements[key], key, elements[key]) === false) return elements;
            }
        }
        return elements;
    };
    // 正常判断图片路径
    var isImgUrl = /(^data:.*?;base64)|(\.(jpg|png|gif)$)/;
    /**
	 * @class PreLoad
	 * @description 图片预加载组件类
	 *
	 * @param {string | HTMLAudioElement} audio 音频对象节点或者地址值
	 * @param {string | isElement} wrapper 操作节点对象或者选择器
	 * @param {object} opts 类实例化传入属性
	 *
	 * @example
	 * ```js
	 *  var _preLoad = new PreLoad(['1.png','2.gif','3.jpg'], '.wrapper', {
	 *	 	'vision' : '2.0'
	 *	});
	 *
	 * ```js - opts
	 * -自定义预加载图片前缀 prefix
	 * -自定义预加载图片版本 vision
	 * -自定义事件 PreLoadBefore、preLoadComplete、preLoadProgress
	 * -自定义事件集合 events = [
	 * 					'start' : fn
	 * 				]
	 */
    function PreLoad(items, node, opts) {
        if (!items || !isArray(items) || !likeArray(items)) {
            throw new Error("传入的图片集合不正确，确保是数组或者是对象；");
        }
        var argsLen = arguments.length;
        // 传入2个参数
        if (argsLen === 2) {
            if (isElement(node) || isString(node)) {
                // PreLoad(items, node)
                opts = undefined;
            } else if (!isElement(node) && isObject(node)) {
                // PreLoad(items, opts)
                opts = node;
                node = undefined;
            }
        }
        // 预加载图片集合
        this.imgItems = items;
        this.imgPreUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC";
        // 操作对象设置
        if (typeof node == "undefined" || node == "") {
            this.progressNode = document.createElement("div");
            document.body.appendChild(this.progressNode);
        } else {
            this.progressNode = isString(node) ? document.querySelector(node) : node;
        }
        // 默认控制-属性
        this.events = {};
        this.prefix = "";
        // 默认置前补充
        this.vision = "1.0";
        // 默认图片版本
        this.contentText = this;
        // 默认观察看事件上下文
        this.progressInit = true;
        // 默认触发进度
        // 传递参数
        for (i in opts) {
            this[i] = opts[i];
        }
        this.load();
    }
    PreLoad.prototype = {
        /**
         * @method emit()
         * @description 观察者事件触发类型
         *
         * @param {string} type 事件类型
         */
        emit: function(type) {
            if (!this.events[type]) {
                return;
            }
            var i = 0, l = this.events[type].length;
            if (!l) {
                return;
            }
            for (;i < l; i++) {
                this.events[type][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        /**
         * @method on()
         * @description 对应观察者事件订阅回调函数
         *
         * @param {string} type 事件类型
         * @param {function} fn 订阅回调函数
         */
        on: function(type, fn) {
            if (!this.events[type]) {
                this.events[type] = [];
            }
            this.events[type].push(fn);
        },
        /**
         * @method load()
         * @description 图片集合加载
         *
         * @PreLoadBefore 触发预加载之前观察者事件
         * @PreLoadProgress 触发预加载进度观察者事件
         * @PreLoadComplete 触发预加载完成观察者事件
         */
        load: function() {
            var count = 0;
            var items = this.imgItems;
            var length = this.imgItems.length;
            var that = this;
            that.emit("preLoadBefore");
            _forEach(items, function(i, item) {
                // 判断图片不正确，上报并替换成预备的
                if (!isImgUrl.test(item)) {
                    var index = i + 1;
                    console.log("第" + index + "个图片地址值不正确");
                    item = this.imgPreUrl;
                }
                var img = new Image();
                var src = that.prefix + item + (that.vision ? "?vision=" + that.vision : "");
                img.onload = img.onerror = img.onabort = function() {
                    if (++count === length) {
                        that.emit("preLoadComplete");
                    }
                    if (that.progressInit) {
                        that.progressNode.innerText = Math.floor(100 * count / length) + "%";
                    }
                    that.emit("preLoadProgress");
                };
                img.src = src;
            });
        }
    };
    return PreLoad;
});

/*
 * svg简单描线动画组件
 * @author cation
 * @email shoe11414255@qq.com
 */
(function(name, definition) {
    // 检测有模块加载器
    var hasDefine = typeof define === "function";
    // 检测是否有普通模块加载-node
    var hasExports = typeof module !== "undefined" && module.exports;
    // 封装模块
    if (hasDefine) {
        define("dist/component_module/svgAni/svgAni", [], definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})("SvgAni", function() {
    "use strict";
    // requset - animaframe
    var lastTime = 0;
    var _vendors = [ "webkit", "moz", "" ];
    for (var x = 0, l = _vendors.length; x < l && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[_vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[_vendors[x] + "CancelAnimationFrame"] || window[_vendors[x] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
    /**
     * @method _forEach()
     * @description 遍历元素，分别对于回调函数处理
     * 
     * @param {Array | element | object} elements 需要遍历处理的元素
     * @param {function} callback 回调处理函数
     *
     * @return {Array | element | object} 返回当前元素
     */
    var likeArray = function(obj) {
        return typeof obj.length == "number";
    };
    var _forEach = function(elements, callback) {
        var i, key;
        if (likeArray(elements)) {
            for (i = 0; i < elements.length; i++) {
                if (callback.call(elements[i], i, elements[i]) === false) return elements;
            }
        } else {
            for (key in elements) {
                if (callback.call(elements[key], key, elements[key]) === false) return elements;
            }
        }
        return elements;
    };
    // 创建对象
    function SvgAni(svg, opts) {
        this.svg = svg;
        this.path = this.svg.querySelectorAll("path");
        this.length = [];
        this.renderOne = true;
        this.speed = 1;
        this.current_frame = 0;
        this.events = {};
        // 传递参数
        for (i in opts) {
            this[i] = opts[i];
        }
        this.init();
    }
    // 初始化对象
    SvgAni.prototype = {
        init: function() {
            this.pathInit();
        },
        // 初始化SVG，让他们的path隐藏
        pathInit: function() {
            var self = this;
            _forEach(this.path, function(i, path) {
                if (typeof path.getTotalLength !== "function") {
                    // 不支持SVG
                    console.log("您的浏览器不支持SVG！！");
                    return;
                } else {
                    var l = path.getTotalLength();
                    path.style.strokeDasharray = l;
                    path.style.strokeDashoffset = l;
                }
            });
        },
        /**
         * @method emit()
         * @description 观察者事件触发类型
         *
         * @param {string} type 事件类型
         */
        emit: function(type) {
            if (!this.events[type]) {
                return;
            }
            var i = 0, l = this.events[type].length;
            if (!l) {
                return;
            }
            for (;i < l; i++) {
                this.events[type][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        /**
         * @method on()
         * @description 对应观察者事件订阅回调函数
         *
         * @param {string} type 事件类型
         * @param {function} fn 订阅回调函数
         */
        on: function(type, fn) {
            if (!this.events[type]) {
                this.events[type] = [];
            }
            this.events[type].push(fn);
        },
        // 对象动画开始
        draw: function() {
            var self = this, progress = this.current_frame / 100 * this.speed;
            if (progress > 1) {
                // 完成描边
                window.cancelAnimationFrame(this.handle);
                this.emit("complete");
                delete this.handle;
            } else {
                this.current_frame++;
                _forEach(this.path, function(i, path) {
                    path.style.strokeDashoffset = Math.floor(path.getTotalLength() * (1 - progress));
                });
                this.emit("progress");
                this.handle = window.requestAnimationFrame(function() {
                    self.draw();
                });
            }
        },
        // 对象读取
        render: function() {
            if (this.rendered && this.renderOne) {
                return;
            }
            this.rendered = true;
            this.draw();
        }
    };
    return SvgAni;
});

/*
 * gif动态图片控制组件
 * @author cation
 * @email shoe11414255@qq.com
 */
(function(name, definition) {
    // 检测有模块加载器
    var hasDefine = typeof define === "function";
    // 检测是否有普通模块加载-node
    var hasExports = typeof module !== "undefined" && module.exports;
    // 封装模块
    if (hasDefine) {
        define("dist/component_module/gifAni/gifAni", [], definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})("GifAni", function() {
    /**
     * @method isType()
     * @description 判断类型
     *
     * @param {string} type 数据类型
     *
     * @return {boolean} 指定参数以否是指定类型
     *
     * @example
     * ```js
     *   var a = [];
     *   isArray(a)  --> true 
     *   isString(a) --> false
     *
     *   var b = document.createElement('div');
     *   isWindow(b) --> false
     *   isElement(b) --> true
     */
    function isType(type) {
        return function(obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]";
        };
    }
    var isObject = isType("Object");
    var isString = isType("String");
    var isArray = Array.isArray || isType("Array");
    var isFunction = isType("Function");
    var isWindow = function(obj) {
        return obj != null && obj == obj.window;
    };
    var isDocument = function(obj) {
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    };
    var isElement = function(obj) {
        return obj != null && obj.nodeType == obj.ELEMENT_NODE;
    };
    var likeArray = function(obj) {
        return typeof obj.length == "number";
    };
    /**
     * @method _forEach()
     * @description 遍历元素，分别对于回调函数处理
     * 
     * @param {Array | element | object} elements 需要遍历处理的元素
     * @param {function} callback 回调处理函数
     *
     * @return {Array | element | object} 返回当前元素
     */
    function _forEach(elements, callback) {
        var i, key;
        if (likeArray(elements)) {
            for (i = 0; i < elements.length; i++) {
                if (callback.call(elements[i], i, elements[i]) === false) return elements;
            }
        } else {
            for (key in elements) {
                if (callback.call(elements[key], key, elements[key]) === false) return elements;
            }
        }
        return elements;
    }
    /**
     * @method function.bind()
     * @description 对Function的this指针上下文延长
     *
     * @param {object、this} target 延长指定的上下文
     * @param {Array} agrs 回调函数执行的参数传递
     *
     * @return {function} 函数函数执行，传递指定参数
     * 
     */
    Function.prototype.bind = Function.prototype.bind || function(target, agrs) {
        var self = this;
        return function(agrs) {
            if (!isArray(agrs)) {
                agrs = [ agrs ];
            }
            self.apply(target, agrs);
        };
    };
    /**
     * @method addEvent()
     * @description 给指定Dom对象绑定事件
     *
     * @param {documentDom} el 需要绑定事件的DOM对象
     * @param {string} type 绑定的事件类型
     * @param {function} fn 事件执行的回调函数
     * @param {boolean} capture 判断是否事件冒泡
     */
    function addEvent(el, type, fn, capture) {
        capture = !!capture ? true : false;
        if (el.addEventListener) {
            el.addEventListener(type, fn, capture);
        } else if (el.attachEvent) {
            el.attachEvent("on" + type, fn);
        } else {
            el["on" + type] = fn;
        }
    }
    // 正常判断图片路径
    var isImgUrl = /(^data:.*?;base64)|(\.(jpg|png|gif)$)/;
    // 默认图片
    var IMG_INIT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC";
    /**
     * @class GifAni
     * @description gif图片动态控制
     *
     * @param {object} opts 类实例化传入属性
     *
     * @example
     * ```js
     *   var _gifAni = new GifAni({
     *           gifWidth : 200,
     *           gifHeight : 200
     *       });
     *
     * ```js - opts
     * -自定义样式
     *     gifWidth 地图占坑宽度
     *     gifHeight 地图占坑高度
     *
     * -自定义属性
     *     eventType 默认操作事件类型
     *     eventInit 默认操作事件是否开启
     *     isLoad 默认是否替换图片
     *    
     * -自定义事件
     *     instanceComplete 图片初始化完成
     *     instanceProgress 突破初始化
     *     gifShow 图片显示
     *     gifHide 图片隐藏
     * -自定义事件集合 events = [
     *                  'gifShow' : fn,
     *                  .....
     *              ]
     * ....
     */
    function GifAni(opts) {
        this.gifs = document.querySelectorAll ? document.querySelectorAll("[data-gif]") : [];
        this.gifArr = [];
        // 默认控制-样式
        this.gifWidth = 100;
        // 默认图片宽度
        this.gifHeight = 100;
        // 默认图片高度
        // 默认控制-属性
        this.events = {};
        this.eventType = "click";
        // 默认触发图片替换事件
        this.eventInit = true;
        // 默认事件触发开启
        this.isLoad = true;
        // 默认识别class-lazyLoad-绑定window-load加载
        // 传递参数
        for (i in opts) {
            this[i] = opts[i];
        }
        // 执行初始化函数
        this.init();
    }
    GifAni.prototype = {
        /**
         * @method init()
         * @description 初始化组件
         */
        init: function() {
            this.gifInit();
        },
        /**
         * @method emit()
         * @description 观察者事件触发类型
         *
         * @param {string} type 事件类型
         */
        emit: function(type) {
            if (!this.events[type]) {
                return;
            }
            var i = 0, l = this.events[type].length;
            if (!l) {
                return;
            }
            for (;i < l; i++) {
                this.events[type][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        /**
         * @method on()
         * @description 对应观察者事件订阅回调函数
         *
         * @param {string} type 事件类型
         * @param {function} fn 订阅回调函数
         */
        on: function(type, fn) {
            if (!this.events[type]) {
                this.events[type] = [];
            }
            this.events[type].push(fn);
        },
        /**
         * @method gifInit()
         * @description gif图片替换成canvas
         *
         * @instanceProgress 触发图片替换观察者
         * @instanceComplete 触发图片替换完成观察者
         */
        gifInit: function() {
            var that = this;
            var len = this.gifs.length;
            var count = 0;
            _forEach(this.gifs, function(i, item) {
                var src = item.dataset.gif;
                var img = new Image();
                img.onload = img.onerror = img.onabort = function() {
                    if (++count === len) {
                        that.emit("instanceComplete");
                    }
                    that.gifInstance(i, item, img);
                    that.emit("instanceProgress");
                };
                img.src = src;
            });
        },
        /**
         * @method gifInstance()
         * @description 生成替换canvas图片dom元素
         *
         * @param {numbet} i 操作图片得位置index
         * @param {elementdom} item 操作图片得dom节点
         * @param {elementdom} img 操作图片加载完成的img节点
         */
        gifInstance: function(i, item, img) {
            var width = item.dataset.gifWidth ? item.dataset.gifWidth : this.gifWidth;
            var height = item.dataset.gifHeight ? item.dataset.gifHeight : this.gifHeight;
            var isLoad = item.dataset.gifLoad;
            var con = document.createElement("DIV");
            con.style.cssText = "position:relative;cursor:pointer;width:" + width + "px;height:" + height + "px;";
            con.dataset.play = "false";
            con.dataset.index = i;
            // img style
            img.width = width;
            img.height = height;
            // creating play button
            var play = document.createElement("DIV");
            play.style.cssText = "position:absolute;left:" + (width / 2 - 30) + "px;top:" + (height / 2 - 30) + "px;width:60px;height:60px;border-radius:30px;background:rgba(0, 0, 0, 0.3);";
            var trngl = document.createElement("DIV");
            trngl.style.cssText = "position:absolute;left:26px;top:16px;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:14px solid rgba(0, 0, 0, 0.5);";
            // static img
            var cav = document.createElement("canvas");
            cav.width = width;
            cav.height = height;
            cav.getContext("2d").drawImage(img, 0, 0, width, height);
            // dom placement
            play.appendChild(trngl);
            con.appendChild(play);
            con.appendChild(cav);
            item.appendChild(con);
            this.eventInit && addEvent(con, this.eventType, this.gifEvent.bind(this, i), false);
            this.gifArr[i] = {
                img: img,
                con: con,
                play: play,
                cav: cav
            };
            // 自动load加载
            if (this.isLoad && isLoad == "true") {
                addEvent(window, "load", this.gifShow.bind(this, i), false);
            }
        },
        /**
         * @method  gifLoad()
         * @description load事件触发gif显示
         *
         * @gifLoad 触发load图片显示观察者
         */
        /**
         * @method gifEvent()
         * @description 默认gif图片操作事件
         *
         * @param {numbet} i 操作图片得位置index
         */
        gifEvent: function(i) {
            var gifItem = this.gifArr[i];
            var con = gifItem.con;
            var play = con.dataset.play;
            if (play == "true") {
                this.gifHide(i);
            } else {
                this.gifShow(i);
            }
        },
        /**
         * @method gifShow()
         * @description 默认gif图片显示
         *
         * @param {numbet} i 操作图片得位置index
         *
         * @gifShow 触发图片显示观察者
         */
        gifShow: function(i) {
            var gifItem = this.gifArr[i];
            var con = gifItem.con;
            var play = gifItem.play;
            var cav = gifItem.cav;
            var img = gifItem.img;
            con.removeChild(play);
            con.removeChild(cav);
            con.appendChild(img);
            con.dataset.play = "true";
            this.emit("gifShow");
        },
        /**
         * @method gifHide()
         * @description 默认gif图片隐藏
         *
         * @param {numbet} i 操作图片得位置index
         *
         * @gifHide 触发图片隐藏观察者
         */
        gifHide: function(i) {
            var gifItem = this.gifArr[i];
            var con = gifItem.con;
            var play = gifItem.play;
            var cav = gifItem.cav;
            var img = gifItem.img;
            con.appendChild(play);
            con.appendChild(cav);
            con.removeChild(img);
            con.dataset.play = "false";
            this.emit("gifHide");
        }
    };
    return GifAni;
});

/**
 * 自定义事件管理
 * @author cation
 * @email shoe11414255@qq.com
 */
define("dist/view/demo/js/event", [], function(require, exports, module) {
    // 自定义事件执行
    var haddleEnvent = {};
    module.exports = haddleEnvent;
});
