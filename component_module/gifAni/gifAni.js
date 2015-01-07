/*
 * gif动态图片控制组件
 * @author cation
 * @email shoe11414255@qq.com
 */
;(function(name,definition){
    // 检测有模块加载器
    var hasDefine = typeof define === 'function';

    // 检测是否有普通模块加载-node
    var hasExports = typeof module !== 'undefined' && module.exports;

    // 封装模块
    if (hasDefine) {
        define(definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})('GifAni', function(){

    // 正常判断图片路径
    var isImgUrl = /(^data:.*?;base64)|(\.(jpg|png|gif)$)/;
    // 默认图片
    var IMG_INIT = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC';

    var _forEach = function(elements, callback){
        [].forEach.call(elements,function(item,i){
            callback(i,item)
        })
    }

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
    function GifAni(opts){
        this.gifs = document.querySelectorAll ? document.querySelectorAll('[data-gif]') : [];
        this.gifArr = [];

        // 默认控制-样式
        this.gifWidth = 100; // 默认图片宽度
        this.gifHeight = 100; // 默认图片高度

        // 默认控制-属性
        this.events = {};
        this.eventType = 'click'; // 默认触发图片替换事件
        this.eventInit = true; // 默认事件触发开启
        this.isLoad = true; // 默认识别class-lazyLoad-绑定window-load加载

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
        init : function(){
            this.gifInit();
        },

        /**
         * @method emit()
         * @description 观察者事件触发类型
         *
         * @param {string} type 事件类型
         */
        emit : function (type) {
            if ( !this.events[type] ) {
                return;
            }

            var i = 0,
                l = this.events[type].length;

            if ( !l ) {
                return;
            }

            for ( ; i < l; i++ ) {
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
        on : function (type, fn) {
            if ( !this.events[type] ) {
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
        gifInit : function(){
            var that = this;
            var len = this.gifs.length;
            var count = 0;

            _forEach(this.gifs,function(i, item){
                var src = item.dataset.gif;

                var img = new Image;
                img.onload = img.onerror = img.onabort = function() {
                    if(++count === len) {
                        that.emit('instanceComplete');
                    }

                    that.gifInstance(i, item, img);
                    that.emit('instanceProgress');
                }

                img.src = src;
            })
        },

        /**
         * @method gifInstance()
         * @description 生成替换canvas图片dom元素
         *
         * @param {numbet} i 操作图片得位置index
         * @param {elementdom} item 操作图片得dom节点
         * @param {elementdom} img 操作图片加载完成的img节点
         */
        gifInstance : function(i, item, img){
            var width = item.dataset.gifWidth ? item.dataset.gifWidth : this.gifWidth;
            var height = item.dataset.gifHeight ? item.dataset.gifHeight : this.gifHeight;
            var isLoad = item.dataset.gifLoad;

            var con = document.createElement('DIV');
                con.style.cssText = 'position:relative;cursor:pointer;width:' + width + 'px;height:' + height + 'px;';
                con.dataset.play = 'false';
                con.dataset.index = i;

            // img style
            img.width = width;
            img.height = height;

            // creating play button
            var play = document.createElement('DIV');
                play.style.cssText = 'position:absolute;left:' + ((width/2)-30) + 'px;top:' + ((height/2)-30) + 'px;width:60px;height:60px;border-radius:30px;background:rgba(0, 0, 0, 0.3);';
            var trngl = document.createElement('DIV');
                trngl.style.cssText = 'position:absolute;left:26px;top:16px;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:14px solid rgba(0, 0, 0, 0.5);';

            // static img
            var cav = document.createElement('canvas');
                cav.width = width;
                cav.height = height;
                cav.getContext('2d').drawImage(img, 0, 0, width, height);

            // dom placement
            play.appendChild(trngl);
            con.appendChild(play);
            con.appendChild(cav);
            item.appendChild(con);

            this.eventInit && con.addEventListener(this.eventType,this.gifEvent.bind(this, i),false)

            this.gifArr[i] = {
                img : img,
                con : con,
                play : play,
                cav : cav
            }

            // 自动load加载
            if (this.isLoad && isLoad == 'true') {
                window.addEventListener('load',this.gifShow.bind(this, i),false)
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
        gifEvent : function(i){
            var gifItem = this.gifArr[i];
            var con = gifItem.con;
            var play = con.dataset.play;

            if (play == 'true') {
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
        gifShow : function(i){
            var gifItem = this.gifArr[i];
            var con = gifItem.con;
            var play = gifItem.play;
            var cav = gifItem.cav;
            var img = gifItem.img;

            con.removeChild(play);
            con.removeChild(cav);
            con.appendChild(img);

            con.dataset.play = 'true';
            this.emit('gifShow');
        },

        /**
         * @method gifHide()
         * @description 默认gif图片隐藏
         *
         * @param {numbet} i 操作图片得位置index
         *
         * @gifHide 触发图片隐藏观察者
         */
        gifHide : function(i){
            var gifItem = this.gifArr[i];
            var con = gifItem.con;
            var play = gifItem.play;
            var cav = gifItem.cav;
            var img = gifItem.img;

            con.appendChild(play);
            con.appendChild(cav);
            con.removeChild(img);

            con.dataset.play = 'false';
            this.emit('gifHide');
        }
    }

    return GifAni
})
