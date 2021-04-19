(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseTemplate */
/* unused harmony export EMPTY_ARR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_OBJ; });
/* unused harmony export RecursiveTemplate */
/* unused harmony export UnRecursiveTemplate */
/* unused harmony export animationEvents */
/* unused harmony export box */
/* unused harmony export cacheDataGet */
/* unused harmony export cacheDataHas */
/* unused harmony export cacheDataSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return controlledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultReconciler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ensure; });
/* unused harmony export events */
/* unused harmony export focusComponents */
/* unused harmony export getUniqueKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return internalComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isArray; });
/* unused harmony export isBoolean */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isBooleanStringLiteral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isFunction; });
/* unused harmony export isNull */
/* unused harmony export isNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isUndefined; });
/* unused harmony export mergeInternalComponents */
/* unused harmony export mergeReconciler */
/* unused harmony export nestElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return noop; });
/* unused harmony export processApis */
/* unused harmony export queryToJson */
/* unused harmony export setUniqueKeyToRoute */
/* unused harmony export singleQuote */
/* unused harmony export specialEvents */
/* unused harmony export styles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return toDashed; });
/* unused harmony export toKebabCase */
/* unused harmony export touchEvents */
/* unused harmony export unbox */
/* unused harmony export unsupport */
/* unused harmony export voidElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return warn; });
function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return typeof o === 'undefined';
}
function isNull(o) {
    return o === null;
}
function isObject(o) {
    return o !== null && typeof o === 'object';
}
function isBoolean(o) {
    return o === true || o === false;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isBooleanStringLiteral(o) {
    return o === 'true' || o === 'false';
}
const isArray = Array.isArray;

const styles = {
    style: `i.${"st" /* Style */}`,
    class: `i.${"cl" /* Class */}`
};
const events = {
    bindtap: 'eh'
};
const touchEvents = {
    bindTouchStart: '',
    bindTouchMove: '',
    bindTouchEnd: '',
    bindTouchCancel: '',
    bindLongTap: ''
};
const animationEvents = {
    bindAnimationStart: '',
    bindAnimationIteration: '',
    bindAnimationEnd: '',
    bindTransitionEnd: ''
};
const specialEvents = new Set([
    'htouchmove',
    'vtouchmove'
]);
function singleQuote(s) {
    return `'${s}'`;
}
const View = Object.assign(Object.assign({ 'hover-class': singleQuote('none'), 'hover-stop-propagation': 'false', 'hover-start-time': '50', 'hover-stay-time': '400', animation: '' }, touchEvents), animationEvents);
const Icon = {
    type: '',
    size: '23',
    color: ''
};
const MapComp = Object.assign({ longitude: '', latitude: '', scale: '16', markers: '[]', covers: '', polyline: '[]', circles: '[]', controls: '[]', 'include-points': '[]', 'show-location': '', 'layer-style': '1', bindMarkerTap: '', bindControlTap: '', bindCalloutTap: '', bindUpdated: '' }, touchEvents);
const Progress = {
    percent: '',
    'stroke-width': '6',
    color: singleQuote('#09BB07'),
    activeColor: singleQuote('#09BB07'),
    backgroundColor: singleQuote('#EBEBEB'),
    active: 'false',
    'active-mode': singleQuote('backwards'),
    'show-info': 'false'
};
const RichText = {
    nodes: '[]'
};
const Text = {
    selectable: 'false',
    space: '',
    decode: 'false'
};
const Button = {
    size: singleQuote('default'),
    type: '',
    plain: 'false',
    disabled: '',
    loading: 'false',
    'form-type': '',
    'open-type': '',
    'hover-class': singleQuote('button-hover'),
    'hover-stop-propagation': 'false',
    'hover-start-time': '20',
    'hover-stay-time': '70',
    name: ''
};
const Checkbox = {
    value: '',
    disabled: '',
    checked: 'false',
    color: singleQuote('#09BB07'),
    name: ''
};
const CheckboxGroup = {
    bindChange: '',
    name: ''
};
const Form = {
    'report-submit': 'false',
    bindSubmit: '',
    bindReset: '',
    name: ''
};
const Input = {
    value: '',
    type: singleQuote(''),
    password: 'false',
    placeholder: '',
    'placeholder-style': '',
    'placeholder-class': singleQuote('input-placeholder'),
    disabled: '',
    maxlength: '140',
    'cursor-spacing': '0',
    focus: 'false',
    'confirm-type': singleQuote('done'),
    'confirm-hold': 'false',
    cursor: 'i.value.length',
    'selection-start': '-1',
    'selection-end': '-1',
    bindInput: '',
    bindFocus: '',
    bindBlur: '',
    bindConfirm: '',
    name: ''
};
const Label = {
    for: '',
    name: ''
};
const Picker = {
    mode: singleQuote('selector'),
    disabled: '',
    range: '',
    'range-key': '',
    value: '',
    start: '',
    end: '',
    fields: singleQuote('day'),
    'custom-item': '',
    name: '',
    bindCancel: '',
    bindChange: '',
    bindColumnChange: ''
};
const PickerView = {
    value: '',
    'indicator-style': '',
    'indicator-class': '',
    'mask-style': '',
    'mask-class': '',
    bindChange: '',
    name: ''
};
const PickerViewColumn = {
    name: ''
};
const Radio = {
    value: '',
    checked: 'false',
    disabled: '',
    color: singleQuote('#09BB07'),
    name: ''
};
const RadioGroup = {
    bindChange: '',
    name: ''
};
const Slider = {
    min: '0',
    max: '100',
    step: '1',
    disabled: '',
    value: '0',
    activeColor: singleQuote('#1aad19'),
    backgroundColor: singleQuote('#e9e9e9'),
    'block-size': '28',
    'block-color': singleQuote('#ffffff'),
    'show-value': 'false',
    bindChange: '',
    bindChanging: '',
    name: ''
};
const Switch = {
    checked: 'false',
    disabled: '',
    type: singleQuote('switch'),
    color: singleQuote('#04BE02'),
    bindChange: '',
    name: ''
};
const Textarea = {
    value: '',
    placeholder: '',
    'placeholder-style': '',
    'placeholder-class': singleQuote('textarea-placeholder'),
    disabled: '',
    maxlength: '140',
    'auto-focus': 'false',
    focus: 'false',
    'auto-height': 'false',
    fixed: 'false',
    'cursor-spacing': '0',
    cursor: '-1',
    'selection-start': '-1',
    'selection-end': '-1',
    bindFocus: '',
    bindBlur: '',
    bindLineChange: '',
    bindInput: '',
    bindConfirm: '',
    name: ''
};
const CoverImage = {
    src: '',
    bindLoad: 'eh',
    bindError: 'eh'
};
const CoverView = Object.assign({ 'scroll-top': 'false' }, touchEvents);
const MovableArea = {
    'scale-area': 'false'
};
const MovableView = Object.assign(Object.assign({ direction: 'none', inertia: 'false', 'out-of-bounds': 'false', x: '', y: '', damping: '20', friction: '2', disabled: '', scale: 'false', 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', animation: 'true', bindChange: '', bindScale: '', htouchmove: '', vtouchmove: '', width: singleQuote('10px'), height: singleQuote('10px') }, touchEvents), animationEvents);
const ScrollView = Object.assign(Object.assign({ 'scroll-x': 'false', 'scroll-y': 'false', 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': '', 'scroll-left': '', 'scroll-into-view': '', 'scroll-with-animation': 'false', 'enable-back-to-top': 'false', bindScrollToUpper: '', bindScrollToLower: '', bindScroll: '' }, touchEvents), animationEvents);
const Swiper = Object.assign({ 'indicator-dots': 'false', 'indicator-color': singleQuote('rgba(0, 0, 0, .3)'), 'indicator-active-color': singleQuote('#000000'), autoplay: 'false', current: '0', interval: '5000', duration: '500', circular: 'false', vertical: 'false', 'previous-margin': '\'0px\'', 'next-margin': '\'0px\'', 'display-multiple-items': '1', bindChange: '', bindTransition: '', bindAnimationFinish: '' }, touchEvents);
const SwiperItem = {
    'item-id': ''
};
const Navigator = {
    url: '',
    'open-type': singleQuote('navigate'),
    delta: '1',
    'hover-class': singleQuote('navigator-hover'),
    'hover-stop-propagation': 'false',
    'hover-start-time': '50',
    'hover-stay-time': '600',
    bindSuccess: '',
    bindFail: '',
    bindComplete: ''
};
const Audio = {
    id: '',
    src: '',
    loop: 'false',
    controls: 'false',
    poster: '',
    name: '',
    author: '',
    bindError: '',
    bindPlay: '',
    bindPause: '',
    bindTimeUpdate: '',
    bindEnded: ''
};
const Camera = {
    'device-position': singleQuote('back'),
    flash: singleQuote('auto'),
    bindStop: '',
    bindError: ''
};
const Image = Object.assign({ src: '', mode: singleQuote('scaleToFill'), 'lazy-load': 'false', bindError: '', bindLoad: '' }, touchEvents);
const LivePlayer = {
    src: '',
    autoplay: 'false',
    muted: 'false',
    orientation: singleQuote('vertical'),
    'object-fit': singleQuote('contain'),
    'background-mute': 'false',
    'min-cache': '1',
    'max-cache': '3',
    animation: '',
    bindStateChange: '',
    bindFullScreenChange: '',
    bindNetStatus: ''
};
const Video = {
    src: '',
    duration: '',
    controls: 'true',
    'danmu-list': '',
    'danmu-btn': '',
    'enable-danmu': '',
    autoplay: 'false',
    loop: 'false',
    muted: 'false',
    'initial-time': '0',
    'page-gesture': 'false',
    direction: '',
    'show-progress': 'true',
    'show-fullscreen-btn': 'true',
    'show-play-btn': 'true',
    'show-center-play-btn': 'true',
    'enable-progress-gesture': 'true',
    'object-fit': singleQuote('contain'),
    poster: '',
    'show-mute-btn': 'false',
    animation: '',
    bindPlay: '',
    bindPause: '',
    bindEnded: '',
    bindTimeUpdate: '',
    bindFullScreenChange: '',
    bindWaiting: '',
    bindError: ''
};
const Canvas = Object.assign({ 'canvas-id': '', 'disable-scroll': 'false', bindError: '' }, touchEvents);
const Ad = {
    'unit-id': '',
    'ad-intervals': '',
    bindLoad: '',
    bindError: '',
    bindClose: ''
};
const WebView = {
    src: '',
    bindMessage: '',
    bindLoad: '',
    bindError: ''
};
const Block = {};
// For Vue，因为 slot 标签被 vue 占用了
const SlotView = {
    name: ''
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
const Slot = {
    name: ''
};
const internalComponents = {
    View,
    Icon,
    Progress,
    RichText,
    Text,
    Button,
    Checkbox,
    CheckboxGroup,
    Form,
    Input,
    Label,
    Picker,
    PickerView,
    PickerViewColumn,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    CoverImage,
    Textarea,
    CoverView,
    MovableArea,
    MovableView,
    ScrollView,
    Swiper,
    SwiperItem,
    Navigator,
    Audio,
    Camera,
    Image,
    LivePlayer,
    Video,
    Canvas,
    Ad,
    WebView,
    Block,
    Map: MapComp,
    Slot,
    SlotView
};
const controlledComponent = new Set([
    'input',
    'checkbox',
    'picker',
    'picker-view',
    'radio',
    'slider',
    'switch',
    'textarea'
]);
const focusComponents = new Set([
    'input',
    'textarea'
]);
const voidElements = new Set([
    'progress',
    'icon',
    'rich-text',
    'input',
    'textarea',
    'slider',
    'switch',
    'audio',
    'ad',
    'official-account',
    'open-data',
    'navigation-bar'
]);
const nestElements = new Map([
    ['view', -1],
    ['catch-view', -1],
    ['cover-view', -1],
    ['static-view', -1],
    ['pure-view', -1],
    ['block', -1],
    ['text', -1],
    ['static-text', 6],
    ['slot', 8],
    ['slot-view', 8],
    ['label', 6],
    ['form', 4],
    ['scroll-view', 4],
    ['swiper', 4],
    ['swiper-item', 4]
]);

const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const noop = (..._) => { };
const defaultReconciler = {};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */
const box = (v) => ({ v });
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */
const unbox = (b) => b.v;
function toDashed(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
    let camel = '';
    let nextCap = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            camel += nextCap ? s[i].toUpperCase() : s[i];
            nextCap = false;
        }
        else {
            nextCap = true;
        }
    }
    return camel;
}
const toKebabCase = function (string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
function ensure(condition, msg) {
    if (!condition) {
        throw new Error(msg + '\n' + reportIssue);
    }
}
function warn(condition, msg) {
    if (false) {}
}
function queryToJson(str) {
    const dec = decodeURIComponent;
    const qp = str.split('&');
    const ret = {};
    let name;
    let val;
    for (let i = 0, l = qp.length, item; i < l; ++i) {
        item = qp[i];
        if (item.length) {
            const s = item.indexOf('=');
            if (s < 0) {
                name = dec(item);
                val = '';
            }
            else {
                name = dec(item.slice(0, s));
                val = dec(item.slice(s + 1));
            }
            if (typeof ret[name] === 'string') { // inline'd type check
                ret[name] = [ret[name]];
            }
            if (Array.isArray(ret[name])) {
                ret[name].push(val);
            }
            else {
                ret[name] = val;
            }
        }
    }
    return ret; // Object
}
let _uniqueId = 1;
const _loadTime = (new Date()).getTime().toString();
function getUniqueKey() {
    return _loadTime + (_uniqueId++);
}
const cacheData = {};
function cacheDataSet(key, val) {
    cacheData[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
    const temp = cacheData[key];
    delelteAfterGet && delete cacheData[key];
    return temp;
}
function cacheDataHas(key) {
    return key in cacheData;
}
function mergeInternalComponents(components) {
    Object.keys(components).forEach(name => {
        if (name in internalComponents) {
            Object.assign(internalComponents[name], components[name]);
        }
        else {
            internalComponents[name] = components[name];
        }
    });
}
function mergeReconciler(hostConfig) {
    Object.assign(defaultReconciler, hostConfig);
}
function unsupport(api) {
    return function () {
        console.warn(`小程序暂不支持 ${api}`);
    };
}
function setUniqueKeyToRoute(key, obj) {
    const routerParamsPrivateKey = '__key_';
    const useDataCacheApis = [
        'navigateTo',
        'redirectTo',
        'reLaunch',
        'switchTab'
    ];
    if (useDataCacheApis.indexOf(key) > -1) {
        const url = obj.url = obj.url || '';
        const hasMark = url.indexOf('?') > -1;
        const cacheKey = getUniqueKey();
        obj.url += (hasMark ? '&' : '?') + `${routerParamsPrivateKey}=${cacheKey}`;
    }
}

/**
 * 这里我们需要关心的小程序种类有两类：
 * 1. 模板递归：
 *  - 支持：tmpl0 套 tmpl0
 *  - 不支持：这就使得我们必须生成多级的模板，tmpl0 套 tmpl1，tmpl1 套 tmpl2……
 *           直到超过阈值 N (N = config.miniapp.baseLevel) tmplN 会套组件 comp，组件 comp 重新再套 tmpl0。
 * 2. 小程序脚本语言（wxs, sjs, etc...）：
 *  - 支持：可以在模板使用函数缩减模板大小或提高性能（存疑），例如判断一个值是不是假值（falsy value）。
 *         将来或许会把数据序列化^1 的操作也放到小程序脚本语言里。
 *  - 不支持：使用纯 *xml 语法
 *
 * ^1: packages/taro-runtime/src/hydrate.ts
*/
const weixinAdapter = {
    if: 'wx:if',
    else: 'wx:else',
    elseif: 'wx:elif',
    for: 'wx:for',
    forItem: 'wx:for-item',
    forIndex: 'wx:for-index',
    key: 'wx:key',
    xs: 'wxs',
    type: 'weapp'
};
class BaseTemplate {
    constructor() {
        this.exportExpr = 'module.exports =';
        this.supportXS = false;
        this.Adapter = weixinAdapter;
        /** 组件列表 */
        this.internalComponents = internalComponents;
        /** 可以 focus 聚焦的组件 */
        this.focusComponents = focusComponents;
        /** 不需要渲染子节点的元素 */
        this.voidElements = voidElements;
        /** 可以递归调用自身的组件 */
        this.nestElements = nestElements;
        this.buildPageTemplate = (baseTempPath) => {
            const template = `<import src="${baseTempPath}"/>
<template is="taro_tmpl" data="{{${this.dataKeymap('root:root')}}}" />`;
            return template;
        };
        this.buildBaseComponentTemplate = (ext) => {
            const data = !this.isSupportRecursive && this.supportXS
                ? this.dataKeymap('i:i,l:l')
                : this.dataKeymap('i:i');
            return `<import src="./base${ext}" />
<template is="tmpl_0_${"container" /* Container */}" data="{{${data}}}" />`;
        };
        this.buildCustomComponentTemplate = (ext) => {
            const Adapter = this.Adapter;
            const data = !this.isSupportRecursive && this.supportXS
                ? `${this.dataKeymap('i:item,l:\'\'')}`
                : this.dataKeymap('i:item');
            return `<import src="./base${ext}" />
  <block ${Adapter.for}="{{i.${"cn" /* Childnodes */}}}" ${Adapter.key}="uid">
    <template is="tmpl_0_container" data="{{${data}}}" />
  </block>`;
        };
        this.buildXScript = () => {
            return `${this.exportExpr} {
  a: ${this.buildXSTmplName()},
  b: function (a, b) {
    return a === undefined ? b : a
  },
  c: function(i, prefix) {
    var s = i.focus !== undefined ? 'focus' : 'blur'
    return prefix + i.${"nn" /* NodeName */} + '_' + s
  },
  d: function (i, v) {
    return i === undefined ? v : i
  },
  e: function (n) {
    return 'tmpl_' + n + '_${"container" /* Container */}'
  },
  ${this.buildXSTmpExtra()}
}`;
        };
    }
    buildAttribute(attrs, nodeName) {
        return Object.keys(attrs)
            .map(k => `${k}="${k.startsWith('bind') || k.startsWith('on') || k.startsWith('catch') ? attrs[k] : `{${this.getAttrValue(attrs[k], k, nodeName)}}`}" `)
            .join('');
    }
    replacePropName(name, value, _componentName) {
        if (value === 'eh')
            return name.toLowerCase();
        return name;
    }
    createMiniComponents(components) {
        const result = Object.create(null);
        for (const key in components) {
            if (hasOwn(components, key)) {
                let component = components[key];
                const compName = toDashed(key);
                const newComp = Object.create(null);
                if (isFunction(this.modifyCompProps)) {
                    component = this.modifyCompProps(compName, component);
                }
                for (let prop in component) {
                    if (hasOwn(component, prop)) {
                        let propValue = component[prop];
                        if (prop.startsWith('bind') || specialEvents.has(prop)) {
                            propValue = 'eh';
                        }
                        else if (propValue === '') {
                            propValue = `i.${toCamelCase(prop)}`;
                        }
                        else if (isBooleanStringLiteral(propValue) || isNumber(+propValue)) {
                            propValue = this.supportXS
                                ? `xs.b(i.${toCamelCase(prop)},${propValue})`
                                : `i.${toCamelCase(prop)}===undefined?${propValue}:i.${toCamelCase(prop)}`;
                        }
                        else {
                            propValue = `i.${toCamelCase(prop)}||${propValue || singleQuote('')}`;
                        }
                        prop = this.replacePropName(prop, propValue, compName);
                        newComp[prop] = propValue;
                    }
                }
                if (compName !== 'block') {
                    Object.assign(newComp, styles, this.getEvents());
                }
                if (compName === 'swiper-item') {
                    delete newComp.style;
                }
                if (compName === 'view') {
                    const reg = /^(bind|on)(touchmove|TouchMove)$/;
                    const comp = Object.assign({}, newComp);
                    Object.keys(comp).forEach(originKey => {
                        if (!reg.test(originKey))
                            return;
                        const key = originKey.replace(reg, 'catch$2');
                        comp[key] = comp[originKey];
                        delete comp[originKey];
                    });
                    result['catch-view'] = comp;
                }
                if (compName === 'view' || compName === 'text' || compName === 'image') {
                    const comp = {};
                    Object.keys(newComp).forEach(key => {
                        const value = newComp[key];
                        if (value !== 'eh')
                            comp[key] = value;
                    });
                    result[`static-${compName}`] = comp;
                    if (compName === 'view') {
                        result['pure-view'] = {
                            style: comp.style,
                            class: comp.class
                        };
                    }
                }
                if (compName === 'slot' || compName === 'slot-view') {
                    result[compName] = {
                        slot: 'i.name'
                    };
                }
                else {
                    result[compName] = newComp;
                }
            }
        }
        return result;
    }
    buildBaseTemplate() {
        const Adapter = this.Adapter;
        const data = !this.isSupportRecursive && this.supportXS
            ? `${this.dataKeymap('i:item,l:\'\'')}`
            : this.dataKeymap('i:item');
        return `${this.buildXsTemplate()}
<template name="taro_tmpl">
  <block ${Adapter.for}="{{root.cn}}" ${Adapter.key}="uid">
    <template is="tmpl_0_${"container" /* Container */}" data="{{${data}}}" />
  </block>
</template>
`;
    }
    buildThirdPartyAttr(attrs) {
        return Array.from(attrs).reduce((str, attr) => {
            if (attr.startsWith('@')) {
                // vue2
                let value = attr.slice(1);
                if (value.indexOf('-') > -1) {
                    value = `:${value}`;
                }
                return str + `bind${value}="eh" `;
            }
            else if (attr.startsWith('bind')) {
                return str + `${attr}="eh" `;
            }
            else if (attr.startsWith('on')) {
                // react, vue3
                let value = toKebabCase(attr.slice(2));
                if (value.indexOf('-') > -1) {
                    // 兼容如 vant 某些组件的 bind:a-b 这类属性
                    value = `:${value}`;
                }
                return str + `bind${value}="eh" `;
            }
            return str + `${attr}="{{i.${toCamelCase(attr)}}}" `;
        }, '');
    }
    buildComponentTemplate(comp, level) {
        return this.focusComponents.has(comp.nodeName)
            ? this.buildFocusComponentTemplte(comp, level)
            : this.buildStandardComponentTemplate(comp, level);
    }
    buildFocusComponentTemplte(comp, level) {
        const attrs = Object.assign({}, comp.attributes);
        const templateName = this.supportXS
            ? `xs.c(i, 'tmpl_${level}_')`
            : `i.focus ? 'tmpl_${level}_${comp.nodeName}_focus' : 'tmpl_${level}_${comp.nodeName}_blur'`;
        delete attrs.focus;
        return `
<template name="tmpl_${level}_${comp.nodeName}">
  <template is="{{${templateName}}}" data="{{${this.dataKeymap('i:i')}}}" />
</template>

<template name="tmpl_${level}_${comp.nodeName}_focus">
  <${comp.nodeName} ${this.buildAttribute(comp.attributes, comp.nodeName)} id="{{i.uid}}" />
</template>

<template name="tmpl_${level}_${comp.nodeName}_blur">
  <${comp.nodeName} ${this.buildAttribute(attrs, comp.nodeName)} id="{{i.uid}}" />
</template>
`;
    }
    buildStandardComponentTemplate(comp, level) {
        const { isSupportRecursive, Adapter } = this;
        const nextLevel = isSupportRecursive ? 0 : level + 1;
        const data = !this.isSupportRecursive && this.supportXS
            ? `${this.dataKeymap('i:item,l:l')}`
            : this.dataKeymap('i:item');
        let child = this.supportXS
            ? `<template is="{{xs.e(${isSupportRecursive ? 0 : 'cid+1'})}}" data="{{${data}}}" />`
            : `<template is="tmpl_${nextLevel}_${"container" /* Container */}" data="{{${data}}}" />`;
        if (isFunction(this.modifyLoopBody)) {
            child = this.modifyLoopBody(child, comp.nodeName);
        }
        let children = this.voidElements.has(comp.nodeName)
            ? ''
            : `
    <block ${Adapter.for}="{{i.${"cn" /* Childnodes */}}}" ${Adapter.key}="uid">
      ${child}
    </block>
  `;
        if (isFunction(this.modifyLoopContainer)) {
            children = this.modifyLoopContainer(children, comp.nodeName);
        }
        let nodeName = '';
        switch (comp.nodeName) {
            case 'slot':
            case 'slot-view':
            case 'catch-view':
            case 'static-view':
            case 'pure-view':
                nodeName = 'view';
                break;
            case 'static-text':
                nodeName = 'text';
                break;
            case 'static-image':
                nodeName = 'image';
                break;
            default:
                nodeName = comp.nodeName;
                break;
        }
        let res = `
<template name="tmpl_${level}_${comp.nodeName}">
  <${nodeName} ${this.buildAttribute(comp.attributes, comp.nodeName)} id="{{i.uid}}">${children}</${nodeName}>
</template>
`;
        if (isFunction(this.modifyTemplateResult)) {
            res = this.modifyTemplateResult(res, comp.nodeName, level, children);
        }
        return res;
    }
    buildPlainTextTemplate(level) {
        return `
<template name="tmpl_${level}_#text" data="{{${this.dataKeymap('i:i')}}}">
  <block>{{i.${"v" /* Text */}}}</block>
</template>
`;
    }
    buildThirdPartyTemplate(level, componentConfig) {
        const { Adapter, isSupportRecursive, supportXS, nestElements } = this;
        const nextLevel = isSupportRecursive ? 0 : level + 1;
        let template = '';
        const data = !isSupportRecursive && supportXS
            ? `${this.dataKeymap('i:item,l:l')}`
            : this.dataKeymap('i:item');
        componentConfig.thirdPartyComponents.forEach((attrs, compName) => {
            if (compName === 'custom-wrapper') {
                template += `
<template name="tmpl_${level}_${compName}">
  <${compName} i="{{i}}" l="{{l}}" id="{{i.uid}}">
  </${compName}>
</template>
  `;
            }
            else {
                if (!isSupportRecursive && supportXS && nestElements.has(compName) && level + 1 > nestElements.get(compName))
                    return;
                const child = supportXS
                    ? `<template is="{{xs.e(${isSupportRecursive ? 0 : 'cid+1'})}}" data="{{${data}}}" />`
                    : `<template is="tmpl_${nextLevel}_${"container" /* Container */}" data="{{${data}}}" />`;
                template += `
<template name="tmpl_${level}_${compName}">
  <${compName} ${this.buildThirdPartyAttr(attrs)} id="{{i.uid}}">
    <block ${Adapter.for}="{{i.${"cn" /* Childnodes */}}}" ${Adapter.key}="uid">
      ${child}
    </block>
  </${compName}>
</template>
  `;
            }
        });
        return template;
    }
    buildContainerTemplate(level, restart = false) {
        let tmpl = '';
        if (restart) {
            tmpl = `<block ${this.Adapter.if}="{{i.nn === '#text'}}">
    <template is="tmpl_0_#text" data="{{i:i}}" />
  </block>
  <block ${this.Adapter.else}>
    ${!this.isSupportRecursive && this.supportXS ? '<comp i="{{i}}" l="{{l}}" />' : '<comp i="{{i}}" />'}
  </block>`;
        }
        else {
            const xs = !this.isSupportRecursive
                ? `xs.a(${level}, i.${"nn" /* NodeName */}, l)`
                : `xs.a(${level}, i.${"nn" /* NodeName */})`;
            const data = !this.isSupportRecursive
                ? `${this.dataKeymap(`i:i,cid:${level},l:xs.f(l,i.${"nn" /* NodeName */})`)}`
                : `${this.dataKeymap('i:i')}`;
            tmpl = this.supportXS
                ? `<template is="{{${xs}}}" data="{{${data}}}" />`
                : `<template is="{{'tmpl_${level}_' + i.${"nn" /* NodeName */}}}" data="{{${this.dataKeymap('i:i')}}}" />`;
        }
        return `
<template name="tmpl_${level}_${"container" /* Container */}">
  ${tmpl}
</template>
`;
    }
    dataKeymap(keymap) {
        return keymap;
    }
    getEvents() {
        return events;
    }
    getAttrValue(value, _key, _nodeName) {
        return `{${value}}`;
    }
    buildXsTemplate() {
        return '';
    }
    mergeComponents(ctx, patch) {
        ctx.helper.recursiveMerge(this.internalComponents, patch);
    }
    buildXSTmplName() {
        return `function (l, n) {
    return 'tmpl_' + l + '_' + n
  }`;
    }
    buildXSTmpExtra() {
        return '';
    }
}
class RecursiveTemplate extends BaseTemplate {
    constructor() {
        super(...arguments);
        this.isSupportRecursive = true;
        this.buildTemplate = (componentConfig) => {
            let template = this.buildBaseTemplate();
            if (!this.miniComponents) {
                this.miniComponents = this.createMiniComponents(this.internalComponents);
            }
            const ZERO_FLOOR = 0;
            const components = Object.keys(this.miniComponents)
                .filter(c => componentConfig.includes.size && !componentConfig.includeAll ? componentConfig.includes.has(c) : true);
            template = components.reduce((current, nodeName) => {
                const attributes = this.miniComponents[nodeName];
                return current + this.buildComponentTemplate({ nodeName, attributes }, ZERO_FLOOR);
            }, template);
            template += this.buildPlainTextTemplate(ZERO_FLOOR);
            template += this.buildThirdPartyTemplate(ZERO_FLOOR, componentConfig);
            template += this.buildContainerTemplate(ZERO_FLOOR);
            return template;
        };
    }
}
class UnRecursiveTemplate extends BaseTemplate {
    constructor() {
        super(...arguments);
        this.isSupportRecursive = false;
        this._baseLevel = 16;
        this.buildTemplate = (componentConfig) => {
            this.componentConfig = componentConfig;
            if (!this.miniComponents) {
                this.miniComponents = this.createMiniComponents(this.internalComponents);
            }
            const components = Object.keys(this.miniComponents)
                .filter(c => componentConfig.includes.size && !componentConfig.includeAll ? componentConfig.includes.has(c) : true);
            let template = this.buildBaseTemplate();
            for (let i = 0; i < this.baseLevel; i++) {
                template += this.supportXS
                    ? this.buildOptimizeFloor(i, components, this.baseLevel === i + 1)
                    : this.buildFloor(i, components, this.baseLevel === i + 1);
            }
            return template;
        };
    }
    set baseLevel(lv) {
        this._baseLevel = lv;
    }
    get baseLevel() {
        return this._baseLevel;
    }
    buildFloor(level, components, restart = false) {
        if (restart)
            return this.buildContainerTemplate(level, restart);
        let template = components.reduce((current, nodeName) => {
            const attributes = this.miniComponents[nodeName];
            return current + this.buildComponentTemplate({ nodeName, attributes }, level);
        }, '');
        template += this.buildPlainTextTemplate(level);
        template += this.buildThirdPartyTemplate(level, this.componentConfig);
        template += this.buildContainerTemplate(level, restart);
        return template;
    }
    buildOptimizeFloor(level, components, restart = false) {
        if (restart)
            return this.buildContainerTemplate(level, restart);
        let template = components.reduce((current, nodeName) => {
            if (level !== 0) {
                if (!this.nestElements.has(nodeName)) {
                    // 不可嵌套自身的组件只需输出一层模板
                    return current;
                }
                else {
                    // 部分可嵌套自身的组件实际上不会嵌套过深，这里按阈值限制层数
                    const max = this.nestElements.get(nodeName);
                    if (max > 0 && level >= max) {
                        return current;
                    }
                }
            }
            const attributes = this.miniComponents[nodeName];
            return current + this.buildComponentTemplate({ nodeName, attributes }, level);
        }, '');
        if (level === 0)
            template += this.buildPlainTextTemplate(level);
        template += this.buildThirdPartyTemplate(level, this.componentConfig);
        template += this.buildContainerTemplate(level);
        return template;
    }
    buildXSTmplName() {
        const isLoopComps = [
            ...Array.from(this.nestElements.keys()),
            ...Array.from(this.componentConfig.thirdPartyComponents.keys())
        ];
        const isLoopCompsSet = new Set(isLoopComps);
        const hasMaxComps = [];
        this.nestElements.forEach((max, comp) => {
            if (max > 1) {
                hasMaxComps.push(comp);
            }
            else if (max === 1 && isLoopCompsSet.has(comp)) {
                isLoopCompsSet.delete(comp);
            }
        });
        return `function (l, n, s) {
    var a = ${JSON.stringify(Array.from(isLoopCompsSet))}
    var b = ${JSON.stringify(hasMaxComps)}
    if (a.indexOf(n) === -1) {
      l = 0
    }
    if (b.indexOf(n) > -1) {
      var u = s.split(',')
      var depth = 0
      for (var i = 0; i < u.length; i++) {
        if (u[i] === n) depth++
      }
      l = depth
    }
    return 'tmpl_' + l + '_' + n
  }`;
    }
    buildXSTmpExtra() {
        const hasMaxComps = [];
        this.nestElements.forEach((max, comp) => {
            if (max > 1)
                hasMaxComps.push(comp);
        });
        return `f: function (l, n) {
    var b = ${JSON.stringify(hasMaxComps)}
    if (b.indexOf(n) > -1) {
      if (l) l += ','
      l += n
    }
    return l
  }`;
    }
}

const noPromiseApis = new Set([
    'clearStorageSync',
    'getBatteryInfoSync',
    'getExtConfigSync',
    'getFileSystemManager',
    'getLaunchOptionsSync',
    'getStorageInfoSync',
    'getStorageSync',
    'getSystemInfoSync',
    'offAccelerometerChange',
    'offAppHide',
    'offAppShow',
    'offAudioInterruptionBegin',
    'offAudioInterruptionEnd',
    'offBLECharacteristicValueChange',
    'offBLEConnectionStateChange',
    'offBluetoothAdapterStateChange',
    'offBluetoothDeviceFound',
    'offCompassChange',
    'offError',
    'offGetWifiList',
    'offGyroscopeChange',
    'offMemoryWarning',
    'offNetworkStatusChange',
    'offPageNotFound',
    'offUnhandledRejection',
    'offUserCaptureScreen',
    'onAccelerometerChange',
    'onAppHide',
    'onAppShow',
    'onAudioInterruptionBegin',
    'onAudioInterruptionEnd',
    'onBLECharacteristicValueChange',
    'onBLEConnectionStateChange',
    'onBeaconServiceChange',
    'onBeaconUpdate',
    'onBluetoothAdapterStateChange',
    'onBluetoothDeviceFound',
    'onCompassChange',
    'onDeviceMotionChange',
    'onError',
    'onGetWifiList',
    'onGyroscopeChange',
    'onMemoryWarning',
    'onNetworkStatusChange',
    'onPageNotFound',
    'onSocketClose',
    'onSocketError',
    'onSocketMessage',
    'onSocketOpen',
    'onUnhandledRejection',
    'onUserCaptureScreen',
    'removeStorageSync',
    'reportAnalytics',
    'setStorageSync',
    'arrayBufferToBase64',
    'base64ToArrayBuffer',
    'canIUse',
    'createAnimation',
    'createCameraContext',
    'createCanvasContext',
    'createInnerAudioContext',
    'createIntersectionObserver',
    'createInterstitialAd',
    'createLivePlayerContext',
    'createMapContext',
    'createSelectorQuery',
    'createVideoContext',
    'getBackgroundAudioManager',
    'getMenuButtonBoundingClientRect',
    'getRecorderManager',
    'getUpdateManager'
]);
const needPromiseApis = new Set([
    'addPhoneContact',
    'authorize',
    'canvasGetImageData',
    'canvasPutImageData',
    'canvasToTempFilePath',
    'checkSession',
    'chooseAddress',
    'chooseImage',
    'chooseInvoiceTitle',
    'chooseLocation',
    'chooseVideo',
    'clearStorage',
    'closeBLEConnection',
    'closeBluetoothAdapter',
    'closeSocket',
    'compressImage',
    'connectSocket',
    'createBLEConnection',
    'downloadFile',
    'getAvailableAudioSources',
    'getBLEDeviceCharacteristics',
    'getBLEDeviceServices',
    'getBatteryInfo',
    'getBeacons',
    'getBluetoothAdapterState',
    'getBluetoothDevices',
    'getClipboardData',
    'getConnectedBluetoothDevices',
    'getConnectedWifi',
    'getExtConfig',
    'getFileInfo',
    'getImageInfo',
    'getLocation',
    'getNetworkType',
    'getSavedFileInfo',
    'getSavedFileList',
    'getScreenBrightness',
    'getSetting',
    'getStorage',
    'getStorageInfo',
    'getSystemInfo',
    'getUserInfo',
    'getWifiList',
    'hideHomeButton',
    'hideShareMenu',
    'hideTabBar',
    'hideTabBarRedDot',
    'loadFontFace',
    'login',
    'makePhoneCall',
    'navigateBack',
    'navigateBackMiniProgram',
    'navigateTo',
    'navigateToBookshelf',
    'navigateToMiniProgram',
    'notifyBLECharacteristicValueChange',
    'hideKeyboard',
    'hideLoading',
    'hideNavigationBarLoading',
    'hideToast',
    'openBluetoothAdapter',
    'openDocument',
    'openLocation',
    'openSetting',
    'pageScrollTo',
    'previewImage',
    'queryBookshelf',
    'reLaunch',
    'readBLECharacteristicValue',
    'redirectTo',
    'removeSavedFile',
    'removeStorage',
    'removeTabBarBadge',
    'requestSubscribeMessage',
    'saveFile',
    'saveImageToPhotosAlbum',
    'saveVideoToPhotosAlbum',
    'scanCode',
    'sendSocketMessage',
    'setBackgroundColor',
    'setBackgroundTextStyle',
    'setClipboardData',
    'setEnableDebug',
    'setInnerAudioOption',
    'setKeepScreenOn',
    'setNavigationBarColor',
    'setNavigationBarTitle',
    'setScreenBrightness',
    'setStorage',
    'setTabBarBadge',
    'setTabBarItem',
    'setTabBarStyle',
    'showActionSheet',
    'showFavoriteGuide',
    'showLoading',
    'showModal',
    'showShareMenu',
    'showTabBar',
    'showTabBarRedDot',
    'showToast',
    'startBeaconDiscovery',
    'startBluetoothDevicesDiscovery',
    'startDeviceMotionListening',
    'startPullDownRefresh',
    'stopBeaconDiscovery',
    'stopBluetoothDevicesDiscovery',
    'stopCompass',
    'startCompass',
    'startAccelerometer',
    'stopAccelerometer',
    'showNavigationBarLoading',
    'stopDeviceMotionListening',
    'stopPullDownRefresh',
    'switchTab',
    'uploadFile',
    'vibrateLong',
    'vibrateShort',
    'writeBLECharacteristicValue'
]);
function getCanIUseWebp(taro) {
    return function () {
        if (typeof taro.getSystemInfoSync !== 'function') {
            console.error('不支持 API canIUseWebp');
            return false;
        }
        const { platform } = taro.getSystemInfoSync();
        const platformLower = platform.toLowerCase();
        if (platformLower === 'android' || platformLower === 'devtools') {
            return true;
        }
        return false;
    };
}
function getNormalRequest(global) {
    return function request(options) {
        options = options || {};
        if (typeof options === 'string') {
            options = {
                url: options
            };
        }
        const originSuccess = options.success;
        const originFail = options.fail;
        const originComplete = options.complete;
        let requestTask;
        const p = new Promise((resolve, reject) => {
            options.success = res => {
                originSuccess && originSuccess(res);
                resolve(res);
            };
            options.fail = res => {
                originFail && originFail(res);
                reject(res);
            };
            options.complete = res => {
                originComplete && originComplete(res);
            };
            requestTask = global.request(options);
        });
        p.abort = (cb) => {
            cb && cb();
            if (requestTask) {
                requestTask.abort();
            }
            return p;
        };
        return p;
    };
}
function processApis(taro, global, config = {}) {
    const patchNoPromiseApis = config.noPromiseApis || [];
    const patchNeedPromiseApis = config.needPromiseApis || [];
    const _noPromiseApis = new Set([...patchNoPromiseApis, ...noPromiseApis]);
    const _needPromiseApis = new Set([...patchNeedPromiseApis, ...needPromiseApis]);
    const apis = [..._noPromiseApis, ..._needPromiseApis];
    apis.forEach(key => {
        if (_needPromiseApis.has(key)) {
            const originKey = key;
            taro[originKey] = (options = {}, ...args) => {
                let key = originKey;
                // 第一个参数 options 为字符串，单独处理
                if (typeof options === 'string') {
                    if (args.length) {
                        return global[key](options, ...args);
                    }
                    return global[key](options);
                }
                // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
                if (config.transformMeta) {
                    const transformResult = config.transformMeta(key, options);
                    key = transformResult.key;
                    options = transformResult.options;
                    // 新 key 可能不存在
                    if (!global.hasOwnProperty(key)) {
                        return unsupport(key)();
                    }
                }
                let task = null;
                const obj = Object.assign({}, options);
                // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。
                setUniqueKeyToRoute(key, options);
                // Promise 化
                const p = new Promise((resolve, reject) => {
                    obj.success = res => {
                        var _a, _b;
                        (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key, res);
                        (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
                        if (key === 'connectSocket') {
                            resolve(Promise.resolve().then(() => Object.assign(task, res)));
                        }
                        else {
                            resolve(res);
                        }
                    };
                    obj.fail = res => {
                        var _a;
                        (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
                        reject(res);
                    };
                    obj.complete = res => {
                        var _a;
                        (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
                    };
                    if (args.length) {
                        task = global[key](obj, ...args);
                    }
                    else {
                        task = global[key](obj);
                    }
                });
                // 给 promise 对象挂载属性
                if (key === 'uploadFile' || key === 'downloadFile') {
                    p.progress = cb => {
                        task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
                        return p;
                    };
                    p.abort = cb => {
                        cb === null || cb === void 0 ? void 0 : cb();
                        task === null || task === void 0 ? void 0 : task.abort();
                        return p;
                    };
                }
                return p;
            };
        }
        else {
            // API 不存在
            if (!global.hasOwnProperty(key)) {
                taro[key] = unsupport(key);
                return;
            }
            taro[key] = (...args) => {
                if (config.handleSyncApis) {
                    return config.handleSyncApis(key, global, args);
                }
                else {
                    return global[key].apply(global, args);
                }
            };
        }
    });
    !config.isOnlyPromisify && equipCommonApis(taro, global, config);
}
/**
 * 挂载常用 API
 * @param taro Taro 对象
 * @param global 小程序全局对象，如微信的 wx，支付宝的 my
 */
function equipCommonApis(taro, global, apis = {}) {
    taro.canIUseWebp = getCanIUseWebp(taro);
    taro.getCurrentPages = getCurrentPages || unsupport('getCurrentPages');
    taro.getApp = getApp || unsupport('getApp');
    taro.env = global.env || {};
    try {
        taro.requirePlugin = requirePlugin || unsupport('requirePlugin');
    }
    catch (error) {
        taro.requirePlugin = unsupport('requirePlugin');
    }
    // request & interceptors
    const request = apis.request ? apis.request : getNormalRequest(global);
    function taroInterceptor(chain) {
        return request(chain.requestParams);
    }
    const link = new taro.Link(taroInterceptor);
    taro.request = link.request.bind(link);
    taro.addInterceptor = link.addInterceptor.bind(link);
    taro.cleanInterceptors = link.cleanInterceptors.bind(link);
    taro.miniGlobal = global;
}


//# sourceMappingURL=shared.esm.js.map


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentReconciler", function() { return CurrentReconciler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOKS_APP_ID", function() { return HOOKS_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroElement", function() { return TaroElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroEvent", function() { return TaroEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroNode", function() { return TaroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() { return TaroRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroText", function() { return TaroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return caf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReactPage", function() { return connectReactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectVuePage", function() { return connectVuePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return createComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNativeComponentConfig", function() { return createNativeComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return createPageConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactApp", function() { return createReactApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecursiveComponentConfig", function() { return createRecursiveComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVue3App", function() { return createVue3App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVueApp", function() { return createVueApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCenter", function() { return eventCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() { return injectPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddToFavorites", function() { return useAddToFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidHide", function() { return useDidHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidShow", function() { return useDidShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return useOptionMenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return usePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return usePullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return usePullIntercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return useReachBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return useReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return useResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScope", function() { return useScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return useShareAppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareTimeline", function() { return useShareTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabItemTap", function() { return useTabItemTap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return useTitleClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window$1; });
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


const incrementId = () => {
    let id = 0;
    return () => (id++).toString();
};
function isElement(node) {
    return node.nodeType === 1 /* ELEMENT_NODE */;
}
function isText(node) {
    return node.nodeType === 3 /* TEXT_NODE */;
}
function isHasExtractProp(el) {
    const res = Object.keys(el.props).find(prop => {
        return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
    });
    return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
function isParentBinded(node, type) {
    var _a;
    let res = false;
    while ((node === null || node === void 0 ? void 0 : node.parentElement) && node.parentElement._path !== 'root') {
        if ((_a = node.parentElement.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
            res = true;
            break;
        }
        node = node.parentElement;
    }
    return res;
}

class TaroEventTarget {
    constructor() {
        this.__handlers = {};
    }
    addEventListener(type, handler, options) {
        if (type === 'regionchange') {
            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
            this.addEventListener('begin', handler, options);
            this.addEventListener('end', handler, options);
            return;
        }
        type = type.toLowerCase();
        const handlers = this.__handlers[type];
        let isCapture = Boolean(options);
        let isOnce = false;
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isObject */ "k"])(options)) {
            isCapture = Boolean(options.capture);
            isOnce = Boolean(options.once);
        }
        if (isOnce) {
            const wrapper = function () {
                handler.apply(this, arguments); // this 指向 Element
                this.removeEventListener(type, wrapper);
            };
            this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), { once: false }));
            return;
        }
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "q"])(isCapture, 'The event capture feature is unimplemented.');
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "h"])(handlers)) {
            handlers.push(handler);
        }
        else {
            this.__handlers[type] = [handler];
        }
    }
    removeEventListener(type, handler) {
        type = type.toLowerCase();
        if (handler == null) {
            return;
        }
        const handlers = this.__handlers[type];
        if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "h"])(handlers)) {
            return;
        }
        const index = handlers.indexOf(handler);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "q"])(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
        handlers.splice(index, 1);
    }
    isAnyEventBinded() {
        const isAnyEventBinded = Object.keys(this.__handlers).find(key => {
            const handler = this.__handlers[key];
            return handler.length;
        });
        return isAnyEventBinded;
    }
}

const CurrentReconciler = Object.assign({
    getLifecyle(instance, lifecyle) {
        return instance[lifecyle];
    },
    getPathIndex(indexOfNode) {
        return `[${indexOfNode}]`;
    },
    getEventCenter(Events) {
        return new Events();
    }
}, _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* defaultReconciler */ "d"]);

const eventSource = new Map();
class TaroEvent {
    constructor(type, opts, event) {
        this._stop = false;
        this._end = false;
        this.defaultPrevented = false;
        // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
        // here use hi-res timestamp
        this.timeStamp = Date.now();
        this.type = type.toLowerCase();
        this.mpEvent = event;
        this.bubbles = Boolean(opts && opts.bubbles);
        this.cancelable = Boolean(opts && opts.cancelable);
    }
    stopPropagation() {
        this._stop = true;
    }
    stopImmediatePropagation() {
        this._end = this._stop = true;
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
    get target() {
        var _a, _b, _c;
        const element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id);
        return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), { dataset: element !== null ? element.dataset : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"] });
    }
    get currentTarget() {
        var _a, _b, _c;
        const element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget.id);
        if (element === null) {
            return this.target;
        }
        return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.currentTarget), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), { dataset: element.dataset });
    }
}
function createEvent(event, _) {
    if (typeof event === 'string') {
        return new TaroEvent(event, { bubbles: true, cancelable: true });
    }
    const domEv = new TaroEvent(event.type, { bubbles: true, cancelable: true }, event);
    for (const key in event) {
        if (key === 'currentTarget' || key === 'target' || key === 'type' || key === 'timeStamp') {
            continue;
        }
        else {
            domEv[key] = event[key];
        }
    }
    return domEv;
}
const eventsBatch = {};
function eventHandler(event) {
    var _a;
    (_a = CurrentReconciler.modifyEventType) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, event);
    if (event.currentTarget == null) {
        event.currentTarget = event.target;
    }
    const node = document$1.getElementById(event.currentTarget.id);
    if (node != null) {
        const dispatch = () => {
            node.dispatchEvent(createEvent(event));
        };
        if (typeof CurrentReconciler.batchedEventUpdates === 'function') {
            const type = event.type;
            if (!isParentBinded(node, type) || (type === 'touchmove' && !!node.props.catchMove)) {
                // 最上层组件统一 batchUpdate
                CurrentReconciler.batchedEventUpdates(() => {
                    if (eventsBatch[type]) {
                        eventsBatch[type].forEach(fn => fn());
                        delete eventsBatch[type];
                    }
                    dispatch();
                });
            }
            else {
                // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
                (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
            }
        }
        else {
            dispatch();
        }
    }
}

const PROPERTY_THRESHOLD = 2046;
const SET_DATA = '小程序 setData';
const PAGE_INIT = '页面初始化';
const SPECIAL_NODES = ['view', 'text', 'image'];

/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
function hydrate(node) {
    const nodeName = node.nodeName;
    if (isText(node)) {
        return {
            ["v" /* Text */]: node.nodeValue,
            ["nn" /* NodeName */]: nodeName
        };
    }
    const data = {
        ["nn" /* NodeName */]: nodeName,
        uid: node.uid
    };
    const { props, childNodes } = node;
    if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
        data["nn" /* NodeName */] = `static-${nodeName}`;
        if (nodeName === 'view' && !isHasExtractProp(node)) {
            data["nn" /* NodeName */] = 'pure-view';
        }
    }
    for (const prop in props) {
        const propInCamelCase = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toCamelCase */ "o"])(prop);
        if (!prop.startsWith('data-') && // 在 node.dataset 的数据
            prop !== 'class' &&
            prop !== 'style' &&
            prop !== 'id' &&
            propInCamelCase !== 'catchMove') {
            data[propInCamelCase] = props[prop];
        }
        if (nodeName === 'view' && propInCamelCase === 'catchMove' && props[prop] !== 'false') {
            data["nn" /* NodeName */] = 'catch-view';
        }
    }
    if (childNodes.length > 0) {
        data["cn" /* Childnodes */] = childNodes.map(hydrate);
    }
    if (node.className !== '') {
        data["cl" /* Class */] = node.className;
    }
    if (node.cssText !== '' && nodeName !== 'swiper-item') {
        data["st" /* Style */] = node.cssText;
    }
    return data;
}

const options = {
    prerender: true,
    debug: false,
    // html 只影响 Element#innerHTML API
    html: {
        skipElements: new Set(['style', 'script']),
        voidElements: new Set([
            '!doctype', 'area', 'base', 'br', 'col', 'command',
            'embed', 'hr', 'img', 'input', 'keygen', 'link',
            'meta', 'param', 'source', 'track', 'wbr'
        ]),
        closingElements: new Set([
            'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
            'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
        ]),
        renderHTMLTag: false
    },
    reconciler(reconciler) {
        Object.assign(CurrentReconciler, reconciler);
    }
};

function initPosition() {
    return {
        index: 0,
        column: 0,
        line: 0
    };
}
function feedPosition(position, str, len) {
    const start = position.index;
    const end = position.index = start + len;
    for (let i = start; i < end; i++) {
        const char = str.charAt(i);
        if (char === '\n') {
            position.line++;
            position.column = 0;
        }
        else {
            position.column++;
        }
    }
}
function jumpPosition(position, str, end) {
    const len = end - position.index;
    return feedPosition(position, str, len);
}
function copyPosition(position) {
    return {
        index: position.index,
        line: position.line,
        column: position.column
    };
}
const whitespace = /\s/;
function isWhitespaceChar(char) {
    return whitespace.test(char);
}
const equalSign = /=/;
function isEqualSignChar(char) {
    return equalSign.test(char);
}
function shouldBeIgnore(tagName) {
    const name = tagName.toLowerCase();
    if (options.html.skipElements.has(name)) {
        return true;
    }
    return false;
}
const alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
    while (true) {
        const textEnd = str.indexOf('<', index);
        if (textEnd === -1) {
            return textEnd;
        }
        const char = str.charAt(textEnd + 1);
        if (char === '/' || char === '!' || alphanumeric.test(char)) {
            return textEnd;
        }
        index = textEnd + 1;
    }
}
function isWordEnd(cursor, wordBegin, html) {
    if (!isWhitespaceChar(html.charAt(cursor)))
        return false;
    const len = html.length;
    // backwrad
    for (let i = cursor - 1; i > wordBegin; i--) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            break;
        }
    }
    // forward
    for (let i = cursor + 1; i < len; i++) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            return true;
        }
    }
}
class Scaner {
    constructor(html) {
        this.tokens = [];
        this.position = initPosition();
        this.html = html;
    }
    scan() {
        const { html, position } = this;
        const len = html.length;
        while (position.index < len) {
            const start = position.index;
            this.scanText();
            if (position.index === start) {
                const isComment = html.startsWith('!--', start + 1);
                if (isComment) {
                    this.scanComment();
                }
                else {
                    const tagName = this.scanTag();
                    if (shouldBeIgnore(tagName)) {
                        this.scanSkipTag(tagName);
                    }
                }
            }
        }
        return this.tokens;
    }
    scanText() {
        const type = 'text';
        const { html, position } = this;
        let textEnd = findTextEnd(html, position.index);
        if (textEnd === position.index) {
            return;
        }
        if (textEnd === -1) {
            textEnd = html.length;
        }
        const start = copyPosition(position);
        const content = html.slice(position.index, textEnd);
        jumpPosition(position, html, textEnd);
        const end = copyPosition(position);
        this.tokens.push({ type, content, position: { start, end } });
    }
    scanComment() {
        const type = 'comment';
        const { html, position } = this;
        const start = copyPosition(position);
        feedPosition(position, html, 4); // "<!--".length
        let contentEnd = html.indexOf('-->', position.index);
        let commentEnd = contentEnd + 3; // "-->".length
        if (contentEnd === -1) {
            contentEnd = commentEnd = html.length;
        }
        const content = html.slice(position.index, contentEnd);
        jumpPosition(position, html, commentEnd);
        this.tokens.push({
            type,
            content,
            position: {
                start,
                end: copyPosition(position)
            }
        });
    }
    scanTag() {
        this.scanTagStart();
        const tagName = this.scanTagName();
        this.scanAttrs();
        this.scanTagEnd();
        return tagName;
    }
    scanTagStart() {
        const type = 'tag-start';
        const { html, position } = this;
        const secondChar = html.charAt(position.index + 1);
        const close = secondChar === '/';
        const start = copyPosition(position);
        feedPosition(position, html, close ? 2 : 1);
        this.tokens.push({ type, close, position: { start } });
    }
    scanTagEnd() {
        const type = 'tag-end';
        const { html, position } = this;
        const firstChar = html.charAt(position.index);
        const close = firstChar === '/';
        feedPosition(position, html, close ? 2 : 1);
        const end = copyPosition(position);
        this.tokens.push({ type, close, position: { end } });
    }
    scanTagName() {
        const type = 'tag';
        const { html, position } = this;
        const len = html.length;
        let start = position.index;
        while (start < len) {
            const char = html.charAt(start);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (isTagChar)
                break;
            start++;
        }
        let end = start + 1;
        while (end < len) {
            const char = html.charAt(end);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (!isTagChar)
                break;
            end++;
        }
        jumpPosition(position, html, end);
        const tagName = html.slice(start, end);
        this.tokens.push({
            type,
            content: tagName
        });
        return tagName;
    }
    scanAttrs() {
        const { html, position, tokens } = this;
        let cursor = position.index;
        let quote = null; // null, single-, or double-quote
        let wordBegin = cursor; // index of word start
        const words = []; // "key", "key=value", "key='value'", etc
        const len = html.length;
        while (cursor < len) {
            const char = html.charAt(cursor);
            if (quote) {
                const isQuoteEnd = char === quote;
                if (isQuoteEnd) {
                    quote = null;
                }
                cursor++;
                continue;
            }
            const isTagEnd = char === '/' || char === '>';
            if (isTagEnd) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                break;
            }
            if (isWordEnd(cursor, wordBegin, html)) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                wordBegin = cursor + 1;
                cursor++;
                continue;
            }
            const isQuoteStart = char === '\'' || char === '"';
            if (isQuoteStart) {
                quote = char;
                cursor++;
                continue;
            }
            cursor++;
        }
        jumpPosition(position, html, cursor);
        const wLen = words.length;
        const type = 'attribute';
        for (let i = 0; i < wLen; i++) {
            const word = words[i];
            const isNotPair = word.includes('=');
            if (isNotPair) {
                const secondWord = words[i + 1];
                if (secondWord && secondWord.startsWith('=')) {
                    if (secondWord.length > 1) {
                        const newWord = word + secondWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                    const thirdWord = words[i + 2];
                    i += 1;
                    if (thirdWord) {
                        const newWord = word + '=' + thirdWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                }
            }
            if (word.endsWith('=')) {
                const secondWord = words[i + 1];
                if (secondWord && !secondWord.includes('=')) {
                    const newWord = word + secondWord;
                    tokens.push({ type, content: newWord });
                    i += 1;
                    continue;
                }
                const newWord = word.slice(0, -1);
                tokens.push({ type, content: newWord });
                continue;
            }
            tokens.push({ type, content: word });
        }
    }
    scanSkipTag(tagName) {
        const { html, position } = this;
        const safeTagName = tagName.toLowerCase();
        const len = html.length;
        while (position.index < len) {
            const nextTag = html.indexOf('</', position.index);
            if (nextTag === -1) {
                this.scanText();
                break;
            }
            jumpPosition(position, html, nextTag);
            const name = this.scanTag();
            if (safeTagName === name.toLowerCase()) {
                break;
            }
        }
    }
}

function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}
const specialMiniElements = {
    img: 'image',
    iframe: 'web-view'
};
const internalCompsList = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* internalComponents */ "g"])
    .map(i => i.toLowerCase())
    .join(',');
// https://developers.weixin.qq.com/miniprogram/dev/component
const isMiniElements = makeMap(internalCompsList, true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
const isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
const isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);

const LEFT_BRACKET = '{';
const RIGHT_BRACKET = '}';
const CLASS_SELECTOR = '.';
const ID_SELECTOR = '#';
const CHILD_COMBINATOR = '>';
const GENERAL_SIBLING_COMBINATOR = '~';
const ADJACENT_SIBLING_COMBINATOR = '+';
class StyleTagParser {
    constructor() {
        this.styles = [];
    }
    extractStyle(src) {
        const REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
        let html = src;
        // let html = src.replace(/\n/g, '')
        html = html.replace(REG_STYLE, (_, $1) => {
            const style = $1.trim();
            this.stringToSelector(style);
            return '';
        });
        return html.trim();
    }
    stringToSelector(style) {
        let lb = style.indexOf(LEFT_BRACKET);
        while (lb > -1) {
            const rb = style.indexOf(RIGHT_BRACKET);
            const selectors = style.slice(0, lb).trim();
            let content = style.slice(lb + 1, rb).replace(/ /g, '');
            if (!(/;$/.test(content))) {
                content += ';';
            }
            selectors.split(',').forEach(src => {
                const selectorList = this.parseSelector(src);
                this.styles.push({
                    content,
                    selectorList
                });
            });
            style = style.slice(rb + 1);
            lb = style.indexOf(LEFT_BRACKET);
        }
        // console.log('res this.styles: ', this.styles)
    }
    parseSelector(src) {
        // todo: 属性选择器里可以带空格：[a = "b"]，这里的 split(' ') 需要作兼容
        const list = src.trim().replace(/ *([>~+]) */g, ' $1').replace(/ +/g, ' ').split(' ');
        const selectors = list.map(item => {
            const firstChar = item.charAt(0);
            const selector = {
                isChild: firstChar === CHILD_COMBINATOR,
                isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
                isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
                tag: null,
                id: null,
                class: [],
                attrs: []
            };
            item = item.replace(/^[>~+]/, '');
            // 属性选择器
            item = item.replace(/\[(.+?)\]/g, function (_, $1) {
                const [key, value] = $1.split('=');
                const all = $1.indexOf('=') === -1;
                const attr = {
                    all,
                    key,
                    value: all ? null : value
                };
                selector.attrs.push(attr);
                return '';
            });
            item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
                if ($1[0] === ID_SELECTOR) {
                    // id 选择器
                    selector.id = $1.substr(1);
                }
                else if ($1[0] === CLASS_SELECTOR) {
                    // class 选择器
                    selector.class.push($1.substr(1));
                }
                return '';
            });
            // 标签选择器
            if (item !== '') {
                selector.tag = item;
            }
            return selector;
        });
        return selectors;
    }
    matchStyle(tagName, el, list) {
        // todo: 这里应该要比较选择器权重
        const res = this.styles.reduce((str, { content, selectorList }, i) => {
            let idx = list[i];
            let selector = selectorList[idx];
            const nextSelector = selectorList[idx + 1];
            if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
                selector = nextSelector;
                idx += 1;
                list[i] += 1;
            }
            let isMatch = this.matchCurrent(tagName, el, selector);
            if (isMatch && selector.isGeneralSibling) {
                let prev = getPreviousElement(el);
                while (prev) {
                    if (prev.h5tagName && this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
                        isMatch = true;
                        break;
                    }
                    prev = getPreviousElement(prev);
                    isMatch = false;
                }
            }
            if (isMatch && selector.isAdjacentSibling) {
                const prev = getPreviousElement(el);
                if (!prev || !prev.h5tagName) {
                    isMatch = false;
                }
                else {
                    const isSiblingMatch = this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1]);
                    if (!isSiblingMatch) {
                        isMatch = false;
                    }
                }
            }
            if (isMatch) {
                if (idx === selectorList.length - 1) {
                    return str + content;
                }
                else if (idx < selectorList.length - 1) {
                    list[i] += 1;
                }
            }
            else {
                // 直接子代组合器: >
                if (selector.isChild && idx > 0) {
                    list[i] -= 1;
                    if (this.matchCurrent(tagName, el, selectorList[list[i]])) {
                        list[i] += 1;
                    }
                }
            }
            return str;
        }, '');
        return res;
    }
    matchCurrent(tagName, el, selector) {
        // 标签选择器
        if (selector.tag && selector.tag !== tagName)
            return false;
        // id 选择器
        if (selector.id && selector.id !== el.id)
            return false;
        // class 选择器
        if (selector.class.length) {
            const classList = el.className.split(' ');
            for (let i = 0; i < selector.class.length; i++) {
                const cls = selector.class[i];
                if (classList.indexOf(cls) === -1) {
                    return false;
                }
            }
        }
        // 属性选择器
        if (selector.attrs.length) {
            for (let i = 0; i < selector.attrs.length; i++) {
                const { all, key, value } = selector.attrs[i];
                if (all && !el.hasAttribute(key)) {
                    return false;
                }
                else {
                    const attr = el.getAttribute(key);
                    if (attr !== unquote(value || '')) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
function getPreviousElement(el) {
    const parent = el.parentElement;
    if (!parent)
        return null;
    const prev = el.previousSibling;
    if (!prev)
        return null;
    if (prev.nodeType === 1 /* ELEMENT_NODE */) {
        return prev;
    }
    else {
        return getPreviousElement(prev);
    }
}

const closingTagAncestorBreakers = {
    li: ['ul', 'ol', 'menu'],
    dt: ['dl'],
    dd: ['dl'],
    tbody: ['table'],
    thead: ['table'],
    tfoot: ['table'],
    tr: ['table'],
    td: ['table']
};
function hasTerminalParent(tagName, stack) {
    const tagParents = closingTagAncestorBreakers[tagName];
    if (tagParents) {
        let currentIndex = stack.length - 1;
        while (currentIndex >= 0) {
            const parentTagName = stack[currentIndex].tagName;
            if (parentTagName === tagName) {
                break;
            }
            if (tagParents && tagParents.includes(parentTagName)) {
                return true;
            }
            currentIndex--;
        }
    }
    return false;
}
function unquote(str) {
    const car = str.charAt(0);
    const end = str.length - 1;
    const isQuoteStart = car === '"' || car === "'";
    if (isQuoteStart && car === str.charAt(end)) {
        return str.slice(1, end);
    }
    return str;
}
function getTagName(tag) {
    if (options.html.renderHTMLTag) {
        return tag;
    }
    if (specialMiniElements[tag]) {
        return specialMiniElements[tag];
    }
    else if (isMiniElements(tag)) {
        return tag;
    }
    else if (isBlockElements(tag)) {
        return 'view';
    }
    else if (isInlineElements(tag)) {
        return 'text';
    }
    return 'view';
}
function splitEqual(str) {
    const sep = '=';
    const idx = str.indexOf(sep);
    if (idx === -1)
        return [str];
    const key = str.slice(0, idx).trim();
    const value = str.slice(idx + sep.length).trim();
    return [key, value];
}
function format(children, styleOptions, parent) {
    return children
        .filter(child => {
        // 过滤注释和空文本节点
        if (child.type === 'comment') {
            return false;
        }
        else if (child.type === 'text') {
            return child.content !== '';
        }
        return true;
    })
        .map((child) => {
        // 文本节点
        if (child.type === 'text') {
            const text = document$1.createTextNode(child.content);
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(options.html.transformText)) {
                return options.html.transformText(text, child);
            }
            parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
            return text;
        }
        const el = document$1.createElement(getTagName(child.tagName));
        el.h5tagName = child.tagName;
        parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
        if (!options.html.renderHTMLTag) {
            el.className = child.tagName;
        }
        for (let i = 0; i < child.attributes.length; i++) {
            const attr = child.attributes[i];
            const [key, value] = splitEqual(attr);
            if (key === 'class') {
                el.className += ' ' + unquote(value);
            }
            else if (key[0] === 'o' && key[1] === 'n') {
                continue;
            }
            else {
                el.setAttribute(key, value == null ? true : unquote(value));
            }
        }
        const { styleTagParser, descendantList } = styleOptions;
        const list = descendantList.slice();
        const style = styleTagParser.matchStyle(child.tagName, el, list);
        el.setAttribute('style', style + el.style.cssText);
        // console.log('style, ', style)
        format(child.children, {
            styleTagParser,
            descendantList: list
        }, el);
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(options.html.transformElement)) {
            return options.html.transformElement(el, child);
        }
        return el;
    });
}
function parser(html) {
    const styleTagParser = new StyleTagParser();
    html = styleTagParser.extractStyle(html);
    const tokens = new Scaner(html).scan();
    const root = { tagName: '', children: [], type: 'element', attributes: [] };
    const state = { tokens, options, cursor: 0, stack: [root] };
    parse(state);
    return format(root.children, {
        styleTagParser,
        descendantList: Array(styleTagParser.styles.length).fill(0)
    });
}
function parse(state) {
    const { tokens, stack } = state;
    let { cursor } = state;
    const len = tokens.length;
    let nodes = stack[stack.length - 1].children;
    while (cursor < len) {
        const token = tokens[cursor];
        if (token.type !== 'tag-start') {
            // comment or text
            nodes.push(token);
            cursor++;
            continue;
        }
        const tagToken = tokens[++cursor];
        cursor++;
        const tagName = tagToken.content.toLowerCase();
        if (token.close) {
            let index = stack.length;
            let shouldRewind = false;
            while (--index > -1) {
                if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                }
            }
            while (cursor < len) {
                const endToken = tokens[cursor];
                if (endToken.type !== 'tag-end')
                    break;
                cursor++;
            }
            if (shouldRewind) {
                stack.splice(index);
                break;
            }
            else {
                continue;
            }
        }
        const isClosingTag = options.html.closingElements.has(tagName);
        let shouldRewindToAutoClose = isClosingTag;
        if (shouldRewindToAutoClose) {
            shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
        }
        if (shouldRewindToAutoClose) {
            let currentIndex = stack.length - 1;
            while (currentIndex > 0) {
                if (tagName === stack[currentIndex].tagName) {
                    stack.splice(currentIndex);
                    const previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                }
                currentIndex = currentIndex - 1;
            }
        }
        const attributes = [];
        let attrToken;
        while (cursor < len) {
            attrToken = tokens[cursor];
            if (attrToken.type === 'tag-end')
                break;
            attributes.push(attrToken.content);
            cursor++;
        }
        cursor++;
        const children = [];
        const element = {
            type: 'element',
            tagName: tagToken.content,
            attributes,
            children
        };
        nodes.push(element);
        const hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
        if (hasChildren) {
            stack.push({ tagName, children });
            const innerState = { tokens, cursor, stack };
            parse(innerState);
            cursor = innerState.cursor;
        }
    }
    state.cursor = cursor;
}

function setInnerHTML(element, html) {
    element.childNodes.forEach(node => {
        element.removeChild(node);
    });
    const children = parser(html);
    for (let i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }
}

const nodeId = incrementId();
class TaroNode extends TaroEventTarget {
    constructor(nodeType, nodeName) {
        super();
        this.parentNode = null;
        this.childNodes = [];
        this.hydrate = (node) => () => hydrate(node);
        this.nodeType = nodeType;
        this.nodeName = nodeName;
        this.uid = `_n_${nodeId()}`;
        eventSource.set(this.uid, this);
    }
    get _path() {
        if (this.parentNode !== null) {
            const indexOfNode = this.parentNode.childNodes.indexOf(this);
            const index = CurrentReconciler.getPathIndex(indexOfNode);
            return `${this.parentNode._path}.${"cn" /* Childnodes */}.${index}`;
        }
        return '';
    }
    get _root() {
        if (this.parentNode !== null) {
            return this.parentNode._root;
        }
        return null;
    }
    get parentElement() {
        const parentNode = this.parentNode;
        if (parentNode != null && parentNode.nodeType === 1 /* ELEMENT_NODE */) {
            return parentNode;
        }
        return null;
    }
    get nextSibling() {
        const parentNode = this.parentNode;
        if (parentNode) {
            return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) + 1] || null;
        }
        return null;
    }
    get previousSibling() {
        const parentNode = this.parentNode;
        if (parentNode) {
            return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) - 1] || null;
        }
        return null;
    }
    insertBefore(newChild, refChild, isReplace) {
        var _a;
        newChild.remove();
        newChild.parentNode = this;
        let payload;
        if (refChild) {
            const index = this.findIndex(this.childNodes, refChild);
            this.childNodes.splice(index, 0, newChild);
            if (isReplace === true) {
                payload = {
                    path: newChild._path,
                    value: this.hydrate(newChild)
                };
            }
            else {
                payload = {
                    path: `${this._path}.${"cn" /* Childnodes */}`,
                    value: () => this.childNodes.map(hydrate)
                };
            }
        }
        else {
            this.childNodes.push(newChild);
            payload = {
                path: newChild._path,
                value: this.hydrate(newChild)
            };
        }
        (_a = CurrentReconciler.insertBefore) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, newChild, refChild);
        this.enqueueUpdate(payload);
        if (!eventSource.has(newChild.uid)) {
            eventSource.set(newChild.uid, newChild);
        }
        return newChild;
    }
    appendChild(child) {
        var _a;
        this.insertBefore(child);
        (_a = CurrentReconciler.appendChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, child);
    }
    replaceChild(newChild, oldChild) {
        var _a;
        if (oldChild.parentNode === this) {
            this.insertBefore(newChild, oldChild, true);
            oldChild.remove(true);
            return oldChild;
        }
        (_a = CurrentReconciler.removeChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, newChild, oldChild);
    }
    removeChild(child, isReplace) {
        const index = this.findIndex(this.childNodes, child);
        this.childNodes.splice(index, 1);
        if (isReplace !== true) {
            this.enqueueUpdate({
                path: `${this._path}.${"cn" /* Childnodes */}`,
                value: () => this.childNodes.map(hydrate)
            });
        }
        child.parentNode = null;
        eventSource.delete(child.uid);
        // @TODO: eventSource memory overflow
        // child._empty()
        return child;
    }
    remove(isReplace) {
        if (this.parentNode) {
            this.parentNode.removeChild(this, isReplace);
        }
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    get lastChild() {
        const c = this.childNodes;
        return c[c.length - 1] || null;
    }
    hasChildNodes() {
        return this.childNodes.length > 0;
    }
    enqueueUpdate(payload) {
        if (this._root === null) {
            return;
        }
        this._root.enqueueUpdate(payload);
    }
    /**
     * like jQuery's $.empty()
     */
    _empty() {
        while (this.childNodes.length > 0) {
            const child = this.childNodes[0];
            child.parentNode = null;
            eventSource.delete(child.uid);
            this.childNodes.shift();
        }
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    set textContent(text) {
        this._empty();
        if (text === '') {
            this.enqueueUpdate({
                path: `${this._path}.${"cn" /* Childnodes */}`,
                value: () => []
            });
        }
        else {
            this.appendChild(document$1.createTextNode(text));
        }
    }
    set innerHTML(html) {
        setInnerHTML(this, html);
    }
    get innerHTML() {
        return '';
    }
    findIndex(childeNodes, refChild) {
        const index = childeNodes.indexOf(refChild);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* ensure */ "e"])(index !== -1, 'The node to be replaced is not a child of this node.');
        return index;
    }
    cloneNode(isDeep = false) {
        const constructor = this.constructor;
        let newNode;
        if (this.nodeType === 1 /* ELEMENT_NODE */) {
            newNode = new constructor(this.nodeType, this.nodeName);
        }
        else if (this.nodeType === 3 /* TEXT_NODE */) {
            newNode = new constructor('');
        }
        for (const key in this) {
            const value = this[key];
            if (['props', 'dataset'].includes(key) && typeof value === 'object') {
                newNode[key] = Object.assign({}, value);
            }
            else if (key === '_value') {
                newNode[key] = value;
            }
            else if (key === 'style') {
                newNode.style._value = Object.assign({}, value._value);
                newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
            }
        }
        if (isDeep) {
            newNode.childNodes = this.childNodes.map(node => node.cloneNode(true));
        }
        return newNode;
    }
}

class TaroText extends TaroNode {
    constructor(text) {
        super(3 /* TEXT_NODE */, '#text');
        this._value = text;
    }
    set textContent(text) {
        this._value = text;
        this.enqueueUpdate({
            path: `${this._path}.${"v" /* Text */}`,
            value: text
        });
    }
    get textContent() {
        return this._value;
    }
    set nodeValue(text) {
        this.textContent = text;
    }
    get nodeValue() {
        return this._value;
    }
}

/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
const styleProperties = [
    'alignContent',
    'alignItems',
    'alignSelf',
    'alignmentAdjust',
    'alignmentBaseline',
    'all',
    'animation',
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationTimingFunction',
    'appearance',
    'azimuth',
    'backfaceVisibility',
    'background',
    'backgroundAttachment',
    'backgroundBlendMode',
    'backgroundClip',
    'backgroundColor',
    'backgroundImage',
    'backgroundOrigin',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'baselineShift',
    'blockOverflow',
    'blockSize',
    'bookmarkLabel',
    'bookmarkLevel',
    'bookmarkState',
    'border',
    'borderBlock',
    'borderBlockColor',
    'borderBlockEnd',
    'borderBlockEndColor',
    'borderBlockEndStyle',
    'borderBlockEndWidth',
    'borderBlockStart',
    'borderBlockStartColor',
    'borderBlockStartStyle',
    'borderBlockStartWidth',
    'borderBlockStyle',
    'borderBlockWidth',
    'borderBottom',
    'borderBottomColor',
    'borderBottomFitLength',
    'borderBottomFitWidth',
    'borderBottomImage',
    'borderBottomLeftFitWidth',
    'borderBottomLeftImage',
    'borderBottomLeftRadius',
    'borderBottomRightFitLength',
    'borderBottomRightFitWidth',
    'borderBottomRightImage',
    'borderBottomRightRadius',
    'borderBottomStyle',
    'borderBottomWidth',
    'borderBottomlEftFitLength',
    'borderBoundary',
    'borderBreak',
    'borderCollapse',
    'borderColor',
    'borderCornerFit',
    'borderCornerImage',
    'borderCornerImageTransform',
    'borderEndEndRadius',
    'borderEndStartRadius',
    'borderFit',
    'borderFitLength',
    'borderFitWidth',
    'borderImage',
    'borderImageOutset',
    'borderImageRepeat',
    'borderImageSlice',
    'borderImageSource',
    'borderImageTransform',
    'borderImageWidth',
    'borderInline',
    'borderInlineColor',
    'borderInlineEnd',
    'borderInlineEndColor',
    'borderInlineEndStyle',
    'borderInlineEndWidth',
    'borderInlineStart',
    'borderInlineStartColor',
    'borderInlineStartStyle',
    'borderInlineStartWidth',
    'borderInlineStyle',
    'borderInlineWidth',
    'borderLeft',
    'borderLeftColor',
    'borderLeftFitLength',
    'borderLeftFitWidth',
    'borderLeftImage',
    'borderLeftStyle',
    'borderLeftWidth',
    'borderRadius',
    'borderRight',
    'borderRightColor',
    'borderRightFitLength',
    'borderRightFitWidth',
    'borderRightImage',
    'borderRightStyle',
    'borderRightWidth',
    'borderSpacing',
    'borderStartEndRadius',
    'borderStartStartRadius',
    'borderStyle',
    'borderTop',
    'borderTopColor',
    'borderTopFitLength',
    'borderTopFitWidth',
    'borderTopImage',
    'borderTopLeftFitLength',
    'borderTopLeftFitWidth',
    'borderTopLeftImage',
    'borderTopLeftRadius',
    'borderTopRightFitLength',
    'borderTopRightFitWidth',
    'borderTopRightImage',
    'borderTopRightRadius',
    'borderTopStyle',
    'borderTopWidth',
    'borderWidth',
    'bottom',
    'boxDecorationBreak',
    'boxShadow',
    'boxSizing',
    'boxSnap',
    'breakAfter',
    'breakBefore',
    'breakInside',
    'captionSide',
    'caret',
    'caretColor',
    'caretShape',
    'chains',
    'clear',
    'clip',
    'clipPath',
    'clipRule',
    'color',
    'colorAdjust',
    'colorInterpolationFilters',
    'colorScheme',
    'columnCount',
    'columnFill',
    'columnGap',
    'columnRule',
    'columnRuleColor',
    'columnRuleStyle',
    'columnRuleWidth',
    'columnSpan',
    'columnWidth',
    'columns',
    'contain',
    'content',
    'continue',
    'counterIncrement',
    'counterReset',
    'counterSet',
    'cue',
    'cueAfter',
    'cueBefore',
    'cursor',
    'direction',
    'display',
    'dominantBaseline',
    'dropInitialAfterAdjust',
    'dropInitialAfterAlign',
    'dropInitialBeforeAdjust',
    'dropInitialBeforeAlign',
    'dropInitialSize',
    'dropInitialValue',
    'elevation',
    'emptyCells',
    'filter',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexFlow',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'float',
    'floodColor',
    'floodOpacity',
    'flow',
    'flowFrom',
    'flowInto',
    'font',
    'fontFamily',
    'fontFeatureSettings',
    'fontKerning',
    'fontLanguageOverride',
    'fontMaxSize',
    'fontMinSize',
    'fontOpticalSizing',
    'fontPalette',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontSynthesis',
    'fontSynthesisSmallCaps',
    'fontSynthesisStyle',
    'fontSynthesisWeight',
    'fontVariant',
    'fontVariantAlternates',
    'fontVariantCaps',
    'fontVariantEastAsian',
    'fontVariantEmoji',
    'fontVariantLigatures',
    'fontVariantNumeric',
    'fontVariantPosition',
    'fontVariationSettings',
    'fontWeight',
    'footnoteDisplay',
    'footnotePolicy',
    'forcedColorAdjust',
    'gap',
    'glyphOrientationVertical',
    'grid',
    'gridArea',
    'gridAutoColumns',
    'gridAutoFlow',
    'gridAutoRows',
    'gridColumn',
    'gridColumnEnd',
    'gridColumnStart',
    'gridRow',
    'gridRowEnd',
    'gridRowStart',
    'gridTemplate',
    'gridTemplateAreas',
    'gridTemplateColumns',
    'gridTemplateRows',
    'hangingPunctuation',
    'height',
    'hyphenateCharacter',
    'hyphenateLimitChars',
    'hyphenateLimitLast',
    'hyphenateLimitLines',
    'hyphenateLimitZone',
    'hyphens',
    'imageOrientation',
    'imageResolution',
    'initialLetters',
    'initialLettersAlign',
    'initialLettersWrap',
    'inlineBoxAlign',
    'inlineSize',
    'inlineSizing',
    'inset',
    'insetBlock',
    'insetBlockEnd',
    'insetBlockStart',
    'insetInline',
    'insetInlineEnd',
    'insetInlineStart',
    'isolation',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'left',
    'letterSpacing',
    'lightingColor',
    'lineBreak',
    'lineClamp',
    'lineGrid',
    'lineHeight',
    'linePadding',
    'lineSnap',
    'lineStacking',
    'lineStackingRuby',
    'lineStackingShift',
    'lineStackingStrategy',
    'listStyle',
    'listStyleImage',
    'listStylePosition',
    'listStyleType',
    'margin',
    'marginBlock',
    'marginBlockEnd',
    'marginBlockStart',
    'marginBottom',
    'marginInline',
    'marginInlineEnd',
    'marginInlineStart',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginTrim',
    'markerSide',
    'mask',
    'maskBorder',
    'maskBorderMode',
    'maskBorderOutset',
    'maskBorderRepeat',
    'maskBorderSlice',
    'maskBorderSource',
    'maskBorderWidth',
    'maskClip',
    'maskComposite',
    'maskImage',
    'maskMode',
    'maskOrigin',
    'maskPosition',
    'maskRepeat',
    'maskSize',
    'maskType',
    'maxBlockSize',
    'maxHeight',
    'maxInlineSize',
    'maxLines',
    'maxWidth',
    'minBlockSize',
    'minHeight',
    'minInlineSize',
    'minWidth',
    'mixBlendMode',
    'navDown',
    'navLeft',
    'navRight',
    'navUp',
    'objectFit',
    'objectPosition',
    'offset',
    'offsetAfter',
    'offsetAnchor',
    'offsetBefore',
    'offsetDistance',
    'offsetEnd',
    'offsetPath',
    'offsetPosition',
    'offsetRotate',
    'offsetStart',
    'opacity',
    'order',
    'orphans',
    'outline',
    'outlineColor',
    'outlineOffset',
    'outlineStyle',
    'outlineWidth',
    'overflow',
    'overflowBlock',
    'overflowInline',
    'overflowWrap',
    'overflowX',
    'overflowY',
    'padding',
    'paddingBlock',
    'paddingBlockEnd',
    'paddingBlockStart',
    'paddingBottom',
    'paddingInline',
    'paddingInlineEnd',
    'paddingInlineStart',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'page',
    'pageBreakAfter',
    'pageBreakBefore',
    'pageBreakInside',
    'pause',
    'pauseAfter',
    'pauseBefore',
    'perspective',
    'perspectiveOrigin',
    'pitch',
    'pitchRange',
    'placeContent',
    'placeItems',
    'placeSelf',
    'playDuring',
    'pointerEvents',
    'position',
    'quotes',
    'regionFragment',
    'resize',
    'richness',
    'right',
    'rowGap',
    'rubyAlign',
    'rubyMerge',
    'rubyPosition',
    'running',
    'scrollBehavior',
    'scrollMargin',
    'scrollMarginBlock',
    'scrollMarginBlockEnd',
    'scrollMarginBlockStart',
    'scrollMarginBottom',
    'scrollMarginInline',
    'scrollMarginInlineEnd',
    'scrollMarginInlineStart',
    'scrollMarginLeft',
    'scrollMarginRight',
    'scrollMarginTop',
    'scrollPadding',
    'scrollPaddingBlock',
    'scrollPaddingBlockEnd',
    'scrollPaddingBlockStart',
    'scrollPaddingBottom',
    'scrollPaddingInline',
    'scrollPaddingInlineEnd',
    'scrollPaddingInlineStart',
    'scrollPaddingLeft',
    'scrollPaddingRight',
    'scrollPaddingTop',
    'scrollSnapAlign',
    'scrollSnapStop',
    'scrollSnapType',
    'shapeImageThreshold',
    'shapeInside',
    'shapeMargin',
    'shapeOutside',
    'speak',
    'speakHeader',
    'speakNumeral',
    'speakPunctuation',
    'speechRate',
    'stress',
    'stringSet',
    'tabSize',
    'tableLayout',
    'textAlign',
    'textAlignAll',
    'textAlignLast',
    'textCombineUpright',
    'textDecoration',
    'textDecorationColor',
    'textDecorationLine',
    'textDecorationStyle',
    'textEmphasis',
    'textEmphasisColor',
    'textEmphasisPosition',
    'textEmphasisStyle',
    'textGroupAlign',
    'textHeight',
    'textIndent',
    'textJustify',
    'textOrientation',
    'textOverflow',
    'textShadow',
    'textSpaceCollapse',
    'textSpaceTrim',
    'textSpacing',
    'textTransform',
    'textUnderlinePosition',
    'textWrap',
    'top',
    'transform',
    'transformBox',
    'transformOrigin',
    'transformStyle',
    'transition',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'unicodeBidi',
    'userSelect',
    'verticalAlign',
    'visibility',
    'voiceFamily',
    'volume',
    'whiteSpace',
    'widows',
    'width',
    'willChange',
    'wordBreak',
    'wordSpacing',
    'wordWrap',
    'wrapAfter',
    'wrapBefore',
    'wrapFlow',
    'wrapInside',
    'wrapThrough',
    'writingMode',
    'zIndex'
];

function setStyle(newVal, styleKey) {
    const old = this[styleKey];
    if (newVal) {
        this._usedStyleProp.add(styleKey);
    }
    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "q"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "l"])(newVal) && newVal.length > PROPERTY_THRESHOLD, `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`);
    if (old !== newVal) {
        this._value[styleKey] = newVal;
        this._element.enqueueUpdate({
            path: `${this._element._path}.${"st" /* Style */}`,
            value: this.cssText
        });
    }
}
function initStyle(ctor) {
    const properties = {};
    for (let i = 0; i < styleProperties.length; i++) {
        const styleKey = styleProperties[i];
        properties[styleKey] = {
            get() {
                return this._value[styleKey] || '';
            },
            set(newVal) {
                setStyle.call(this, newVal, styleKey);
            }
        };
    }
    Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
    return /^--/.test(propertyName);
}
class Style {
    constructor(element) {
        this._element = element;
        this._usedStyleProp = new Set();
        this._value = {};
    }
    setCssVariables(styleKey) {
        this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
            enumerable: true,
            configurable: true,
            get: () => {
                return this._value[styleKey] || '';
            },
            set: (newVal) => {
                setStyle.call(this, newVal, styleKey);
            }
        });
    }
    get cssText() {
        let text = '';
        this._usedStyleProp.forEach(key => {
            const val = this[key];
            if (!val)
                return;
            const styleName = isCssVariable(key) ? key : Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toDashed */ "p"])(key);
            text += `${styleName}: ${val};`;
        });
        return text;
    }
    set cssText(str) {
        if (str == null) {
            str = '';
        }
        this._usedStyleProp.forEach(prop => {
            this.removeProperty(prop);
        });
        if (str === '') {
            return;
        }
        const rules = str.split(';');
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i].trim();
            if (rule === '') {
                continue;
            }
            // 可能存在 'background: url(http:x/y/z)' 的情况
            const [propName, ...valList] = rule.split(':');
            const val = valList.join(':');
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isUndefined */ "m"])(val)) {
                continue;
            }
            this.setProperty(propName.trim(), val.trim());
        }
    }
    setProperty(propertyName, value) {
        if (propertyName[0] === '-') {
            // 支持 webkit 属性或 css 变量
            this.setCssVariables(propertyName);
        }
        else {
            propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toCamelCase */ "o"])(propertyName);
        }
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isUndefined */ "m"])(value)) {
            return;
        }
        if (value === null || value === '') {
            this.removeProperty(propertyName);
        }
        else {
            this[propertyName] = value;
        }
    }
    removeProperty(propertyName) {
        propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toCamelCase */ "o"])(propertyName);
        if (!this._usedStyleProp.has(propertyName)) {
            return '';
        }
        const value = this[propertyName];
        this[propertyName] = '';
        this._usedStyleProp.delete(propertyName);
        return value;
    }
    getPropertyValue(propertyName) {
        propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toCamelCase */ "o"])(propertyName);
        const value = this[propertyName];
        if (!value) {
            return '';
        }
        return value;
    }
}
initStyle(Style);

function returnTrue() {
    return true;
}
function treeToArray(root, predict) {
    const array = [];
    const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
    let object = root;
    while (object) {
        if (object.nodeType === 1 /* ELEMENT_NODE */ && filter(object)) {
            array.push(object);
        }
        object = following(object, root);
    }
    return array;
}
function following(el, root) {
    const firstChild = el.firstChild;
    if (firstChild) {
        return firstChild;
    }
    let current = el;
    do {
        if (current === root) {
            return null;
        }
        const nextSibling = current.nextSibling;
        if (nextSibling) {
            return nextSibling;
        }
        current = current.parentElement;
    } while (current);
    return null;
}

class ClassList extends Set {
    constructor(className, el) {
        super();
        className.trim().split(/\s+/).forEach(super.add.bind(this));
        this.el = el;
    }
    get value() {
        return [...this].join(' ');
    }
    add(s) {
        super.add(s);
        this._update();
        return this;
    }
    remove(s) {
        super.delete(s);
        this._update();
    }
    toggle(s) {
        if (super.has(s)) {
            super.delete(s);
        }
        else {
            super.add(s);
        }
        this._update();
    }
    replace(s1, s2) {
        super.delete(s1);
        super.add(s2);
        this._update();
    }
    contains(s) {
        return super.has(s);
    }
    toString() {
        return this.value;
    }
    _update() {
        this.el.className = this.value;
    }
}

/* eslint-disable no-dupe-class-members */
class TaroElement extends TaroNode {
    constructor(nodeType, nodeName) {
        var _a;
        super(nodeType || 1 /* ELEMENT_NODE */, nodeName);
        this.props = {};
        this.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"];
        this.tagName = nodeName.toUpperCase();
        this.style = new Style(this);
        (_a = CurrentReconciler.onTaroElementCreate) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this.tagName, nodeType);
    }
    get id() {
        return this.getAttribute('id');
    }
    set id(val) {
        this.setAttribute('id', val);
    }
    get classList() {
        return new ClassList(this.className, this);
    }
    get className() {
        return this.getAttribute('class') || '';
    }
    set className(val) {
        this.setAttribute('class', val);
    }
    get cssText() {
        return this.getAttribute('style') || '';
    }
    get children() {
        return this.childNodes.filter(isElement);
    }
    hasAttribute(qualifiedName) {
        return !Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isUndefined */ "m"])(this.props[qualifiedName]);
    }
    hasAttributes() {
        return this.attributes.length > 0;
    }
    focus() {
        this.setAttribute('focus', true);
    }
    blur() {
        this.setAttribute('focus', false);
    }
    setAttribute(qualifiedName, value) {
        var _a;
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "q"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "l"])(value) && value.length > PROPERTY_THRESHOLD, `元素 ${this.nodeName} 的 属性 ${qualifiedName} 的值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。`);
        if (qualifiedName === 'style') {
            this.style.cssText = value;
            qualifiedName = "st" /* Style */;
        }
        else if (qualifiedName === 'id') {
            eventSource.delete(this.uid);
            value = String(value);
            this.props[qualifiedName] = this.uid = value;
            eventSource.set(value, this);
            qualifiedName = 'uid';
        }
        else {
            // pure-view => static-view
            if (this.nodeName === 'view' && !isHasExtractProp(this) && !(/class|style|id/.test(qualifiedName)) && !this.isAnyEventBinded()) {
                this.enqueueUpdate({
                    path: `${this._path}.${"nn" /* NodeName */}`,
                    value: 'static-view'
                });
            }
            this.props[qualifiedName] = value;
            if (qualifiedName === 'class') {
                qualifiedName = "cl" /* Class */;
            }
            else if (qualifiedName.startsWith('data-')) {
                if (this.dataset === _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"]) {
                    this.dataset = Object.create(null);
                }
                this.dataset[Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toCamelCase */ "o"])(qualifiedName.replace(/^data-/, ''))] = value;
            }
        }
        (_a = CurrentReconciler.setAttribute) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, qualifiedName, value);
        this.enqueueUpdate({
            path: `${this._path}.${Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toCamelCase */ "o"])(qualifiedName)}`,
            value
        });
    }
    removeAttribute(qualifiedName) {
        var _a;
        if (qualifiedName === 'style') {
            this.style.cssText = '';
        }
        else {
            delete this.props[qualifiedName];
            if (qualifiedName === 'class') {
                qualifiedName = "cl" /* Class */;
            }
        }
        (_a = CurrentReconciler.removeAttribute) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, qualifiedName);
        this.enqueueUpdate({
            path: `${this._path}.${Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toCamelCase */ "o"])(qualifiedName)}`,
            value: ''
        });
        if (this.nodeName === 'view' && !isHasExtractProp(this) && !this.isAnyEventBinded()) {
            // static-view => pure-view
            this.enqueueUpdate({
                path: `${this._path}.${"nn" /* NodeName */}`,
                value: 'pure-view'
            });
        }
    }
    getAttribute(qualifiedName) {
        const attr = qualifiedName === 'style' ? this.style.cssText : this.props[qualifiedName];
        return attr !== null && attr !== void 0 ? attr : '';
    }
    get attributes() {
        const propKeys = Object.keys(this.props);
        const style = this.style.cssText;
        const attrs = propKeys.map(p => ({ name: p, value: this.props[p] }));
        return attrs.concat(style ? { name: 'style', value: style } : []);
    }
    getElementsByTagName(tagName) {
        return treeToArray(this, (el) => {
            return el.nodeName === tagName || (tagName === '*' && this !== el);
        });
    }
    getElementsByClassName(className) {
        return treeToArray(this, (el) => {
            const classList = el.classList;
            const classNames = className.trim().split(/\s+/);
            return classNames.every(c => classList.has(c));
        });
    }
    dispatchEvent(event) {
        const cancelable = event.cancelable;
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(CurrentReconciler.modifyDispatchEvent)) {
            CurrentReconciler.modifyDispatchEvent(event, this.tagName);
        }
        const listeners = this.__handlers[event.type];
        if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "h"])(listeners)) {
            return;
        }
        for (let i = listeners.length; i--;) {
            const listener = listeners[i];
            let result;
            if (listener._stop) {
                listener._stop = false;
            }
            else {
                result = listener.call(this, event);
            }
            if ((result === false || event._end) && cancelable) {
                event.defaultPrevented = true;
            }
            if (event._end && event._stop) {
                break;
            }
        }
        if (event._stop) {
            this._stopPropagation(event);
        }
        else {
            event._stop = true;
        }
        return listeners != null;
    }
    get textContent() {
        let text = '';
        for (let i = 0; i < this.childNodes.length; i++) {
            const element = this.childNodes[i];
            text += element.textContent;
        }
        return text;
    }
    set textContent(text) {
        super.textContent = text;
    }
    _stopPropagation(event) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let target = this;
        // eslint-disable-next-line no-cond-assign
        while ((target = target.parentNode)) {
            const listeners = target.__handlers[event.type];
            if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "h"])(listeners)) {
                continue;
            }
            for (let i = listeners.length; i--;) {
                const l = listeners[i];
                l._stop = true;
            }
        }
    }
    addEventListener(type, handler, options) {
        const name = this.nodeName;
        if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            this.enqueueUpdate({
                path: `${this._path}.${"nn" /* NodeName */}`,
                value: name
            });
        }
        super.addEventListener(type, handler, options);
    }
    removeEventListener(type, handler) {
        super.removeEventListener(type, handler);
        const name = this.nodeName;
        if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            this.enqueueUpdate({
                path: `${this._path}.${"nn" /* NodeName */}`,
                value: isHasExtractProp(this) ? `static-${name}` : `pure-${name}`
            });
        }
    }
}

class FormElement extends TaroElement {
    get value() {
        // eslint-disable-next-line dot-notation
        const val = this.props['value'];
        return val == null ? '' : val;
    }
    set value(val) {
        this.setAttribute('value', val);
    }
    dispatchEvent(event) {
        if ((event.type === 'input' || event.type === 'change') && event.mpEvent) {
            const val = event.mpEvent.detail.value;
            this.props.value = val;
        }
        return super.dispatchEvent(event);
    }
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

class Performance {
    constructor() {
        this.recorder = new Map();
    }
    start(id) {
        if (!options.debug) {
            return;
        }
        this.recorder.set(id, Date.now());
    }
    stop(id) {
        if (!options.debug) {
            return;
        }
        const now = Date.now();
        const prev = this.recorder.get(id);
        const time = now - prev;
        // eslint-disable-next-line no-console
        console.log(`${id} 时长： ${time}ms`);
    }
}
const perf = new Performance();

class Events {
    constructor(opts) {
        if (typeof opts !== 'undefined' && opts.callbacks) {
            this.callbacks = opts.callbacks;
        }
        else {
            this.callbacks = {};
        }
    }
    on(eventName, callback, context) {
        let event, node, tail, list;
        if (!callback) {
            return this;
        }
        eventName = eventName.split(Events.eventSplitter);
        this.callbacks || (this.callbacks = {});
        const calls = this.callbacks;
        while ((event = eventName.shift())) {
            list = calls[event];
            node = list ? list.tail : {};
            node.next = tail = {};
            node.context = context;
            node.callback = callback;
            calls[event] = {
                tail,
                next: list ? list.next : node
            };
        }
        return this;
    }
    once(events, callback, context) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(events, wrapper, context);
        };
        this.on(events, wrapper, context);
        return this;
    }
    off(events, callback, context) {
        let event, calls, node, tail, cb, ctx;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (!(events || callback || context)) {
            delete this.callbacks;
            return this;
        }
        events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
        while ((event = events.shift())) {
            node = calls[event];
            delete calls[event];
            if (!node || !(callback || context)) {
                continue;
            }
            tail = node.tail;
            while ((node = node.next) !== tail) {
                cb = node.callback;
                ctx = node.context;
                if ((callback && cb !== callback) || (context && ctx !== context)) {
                    this.on(event, cb, ctx);
                }
            }
        }
        return this;
    }
    trigger(events) {
        let event, node, calls, tail;
        if (!(calls = this.callbacks)) {
            return this;
        }
        events = events.split(Events.eventSplitter);
        const rest = [].slice.call(arguments, 1);
        while ((event = events.shift())) {
            if ((node = calls[event])) {
                tail = node.tail;
                while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, rest);
                }
            }
        }
        return this;
    }
}
Events.eventSplitter = /\s+/;
const eventCenter = CurrentReconciler.getEventCenter(Events);

const eventIncrementId = incrementId();
class TaroRootElement extends TaroElement {
    constructor() {
        super(1 /* ELEMENT_NODE */, 'root');
        this.pendingUpdate = false;
        this.updatePayloads = [];
        this.pendingFlush = false;
        this.updateCallbacks = [];
        this.ctx = null;
    }
    get _path() {
        return 'root';
    }
    get _root() {
        return this;
    }
    enqueueUpdate(payload) {
        this.updatePayloads.push(payload);
        if (this.pendingUpdate || this.ctx === null) {
            return;
        }
        this.performUpdate();
    }
    performUpdate(initRender = false, prerender) {
        this.pendingUpdate = true;
        const ctx = this.ctx;
        setTimeout(() => {
            var _a, _b;
            perf.start(SET_DATA);
            const data = Object.create(null);
            const resetPaths = new Set(initRender
                ? ['root.cn.[0]', 'root.cn[0]']
                : []);
            while (this.updatePayloads.length > 0) {
                const { path, value } = this.updatePayloads.shift();
                if (path.endsWith("cn" /* Childnodes */)) {
                    resetPaths.add(path);
                }
                data[path] = value;
            }
            for (const path in data) {
                resetPaths.forEach(p => {
                    // 已经重置了数组，就不需要分别再设置了
                    if (path.includes(p) && path !== p) {
                        delete data[path];
                    }
                });
                const value = data[path];
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(value)) {
                    data[path] = value();
                }
            }
            (_a = CurrentReconciler.prepareUpdateData) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, data, this);
            if (initRender) {
                (_b = CurrentReconciler.appendInitialPage) === null || _b === void 0 ? void 0 : _b.call(CurrentReconciler, data, this);
            }
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(prerender)) {
                prerender(data);
            }
            else {
                this.pendingUpdate = false;
                const customWrapperUpdate = [];
                const normalUpdate = {};
                if (!initRender) {
                    for (const p in data) {
                        const dataPathArr = p.split('.');
                        let hasCustomWrapper = false;
                        for (let i = dataPathArr.length; i > 0; i--) {
                            const allPath = dataPathArr.slice(0, i).join('.');
                            const getData = get(ctx.__data__ || ctx.data, allPath);
                            if (getData && getData.nn && getData.nn === 'custom-wrapper') {
                                const customWrapperId = getData.uid;
                                const customWrapper = ctx.selectComponent(`#${customWrapperId}`);
                                const splitedPath = dataPathArr.slice(i).join('.');
                                if (customWrapper) {
                                    hasCustomWrapper = true;
                                    customWrapperUpdate.push({
                                        ctx: ctx.selectComponent(`#${customWrapperId}`),
                                        data: {
                                            [`i.${splitedPath}`]: data[p]
                                        }
                                    });
                                }
                                break;
                            }
                        }
                        if (!hasCustomWrapper) {
                            normalUpdate[p] = data[p];
                        }
                    }
                }
                const updateArrLen = customWrapperUpdate.length;
                if (updateArrLen) {
                    const eventId = `${this._path}_update_${eventIncrementId()}`;
                    let executeTime = 0;
                    eventCenter.once(eventId, () => {
                        executeTime++;
                        if (executeTime === updateArrLen + 1) {
                            perf.stop(SET_DATA);
                            if (!this.pendingFlush) {
                                this.flushUpdateCallback();
                            }
                            if (initRender) {
                                perf.stop(PAGE_INIT);
                            }
                        }
                    }, eventCenter);
                    customWrapperUpdate.forEach(item => {
                        item.ctx.setData(item.data, () => {
                            eventCenter.trigger(eventId);
                        });
                    });
                    ctx.setData(normalUpdate, () => {
                        eventCenter.trigger(eventId);
                    });
                }
                else {
                    ctx.setData(data, () => {
                        perf.stop(SET_DATA);
                        if (!this.pendingFlush) {
                            this.flushUpdateCallback();
                        }
                        if (initRender) {
                            perf.stop(PAGE_INIT);
                        }
                    });
                }
            }
        }, 0);
    }
    enqueueUpdateCallback(cb, ctx) {
        this.updateCallbacks.push(() => {
            ctx ? cb.call(ctx) : cb();
        });
    }
    flushUpdateCallback() {
        this.pendingFlush = false;
        const copies = this.updateCallbacks.slice(0);
        this.updateCallbacks.length = 0;
        for (let i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

const isBrowser = typeof document !== 'undefined' && !!document.scripts;
const doc = isBrowser ? document : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"];
const win = isBrowser ? window : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"];

class TaroDocument extends TaroElement {
    constructor() {
        super(9 /* DOCUMENT_NODE */, '#document');
    }
    createElement(type) {
        if (type === 'root') {
            return new TaroRootElement();
        }
        if (_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* controlledComponent */ "c"].has(type)) {
            return new FormElement(1 /* ELEMENT_NODE */, type);
        }
        return new TaroElement(1 /* ELEMENT_NODE */, type);
    }
    // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8
    createElementNS(_svgNS, type) {
        return this.createElement(type);
    }
    createTextNode(text) {
        return new TaroText(text);
    }
    getElementById(id) {
        const el = eventSource.get(id);
        return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isUndefined */ "m"])(el) ? null : el;
    }
    getElementsByTagName(tagName) {
        const elements = [];
        eventSource.forEach((node) => {
            if (node.nodeType !== 1 /* ELEMENT_NODE */) {
                return;
            }
            if (node.nodeName === tagName || (tagName === '*' && node !== this)) {
                elements.push(node);
            }
        });
        return elements;
    }
    querySelector(query) {
        // 为了 Vue3 的乞丐版实现
        if (/^#/.test(query)) {
            return this.getElementById(query.slice(1));
        }
        return null;
    }
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
    createComment() {
        return new TaroText('');
    }
}
function createDocument() {
    const doc = new TaroDocument();
    doc.appendChild((doc.documentElement = doc.createElement('html')));
    doc.documentElement.appendChild((doc.head = doc.createElement('head')));
    const body = doc.createElement('body');
    doc.documentElement.appendChild(body);
    doc.body = body;
    const app = doc.createElement('app');
    app.id = 'app';
    const container = doc.createElement('container'); // 多包一层主要为了兼容 vue
    container.appendChild(app);
    doc.documentElement.lastChild.appendChild(container);
    doc.createEvent = createEvent;
    return doc;
}
const document$1 = (isBrowser ? doc : createDocument());

const machine = 'Macintosh';
const arch = 'Intel Mac OS X 10_14_5';
const engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
const navigator = isBrowser ? win.navigator : {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
    cookieEnabled: true,
    mimeTypes: [],
    onLine: true,
    platform: 'MacIntel',
    plugins: [],
    product: 'Taro',
    productSub: '20030107',
    userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
    vendor: 'Joyent',
    vendorSub: ''
};

// https://github.com/myrne/performance-now
let now;
(function () {
    let loadTime;
    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
        now = function () {
            return performance.now();
        };
    }
    else if (Date.now) {
        now = function () {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    }
    else {
        now = function () {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
})();
let lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
let raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
    const _now = now();
    const nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
    return setTimeout(function () { callback(lastTime = nextTime); }, nextTime - _now);
};
let caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout;
if (global) {
    raf = raf.bind(global);
    caf = caf.bind(global);
}

function getComputedStyle(element) {
    return new Style(element);
}

const window$1 = isBrowser ? win : {
    navigator,
    document: document$1
};
if (!isBrowser) {
    const globalProperties = [
        ...Object.getOwnPropertyNames(global || win),
        ...Object.getOwnPropertySymbols(global || win)
    ];
    globalProperties.forEach(property => {
        if (!Object.prototype.hasOwnProperty.call(window$1, property)) {
            window$1[property] = global[property];
        }
    });
}
if (process.env.TARO_ENV !== 'h5') {
    window$1.requestAnimationFrame = raf;
    window$1.cancelAnimationFrame = caf;
    window$1.getComputedStyle = getComputedStyle;
    if (!('Date' in window$1)) {
        window$1.Date = Date;
    }
    if (!('setTimeout' in window$1)) {
        window$1.setTimeout = setTimeout;
    }
}

const Current = {
    app: null,
    router: null,
    page: null
};
const getCurrentInstance = () => Current;

/* eslint-disable dot-notation */
const instances = new Map();
function injectPageInstance(inst, id) {
    var _a;
    (_a = CurrentReconciler.mergePageInstance) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, instances.get(id), inst);
    instances.set(id, inst);
}
function getPageInstance(id) {
    return instances.get(id);
}
function addLeadingSlash(path) {
    if (path == null) {
        return '';
    }
    return path.charAt(0) === '/' ? path : '/' + path;
}
const pageId = incrementId();
function safeExecute(path, lifecycle, ...args) {
    const instance = instances.get(path);
    if (instance == null) {
        return;
    }
    const func = CurrentReconciler.getLifecyle(instance, lifecycle);
    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "h"])(func)) {
        const res = func.map(fn => fn.apply(instance, args));
        return res[0];
    }
    if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(func)) {
        return;
    }
    return func.apply(instance, args);
}
function stringify(obj) {
    if (obj == null) {
        return '';
    }
    const path = Object.keys(obj).map((key) => {
        return key + '=' + obj[key];
    }).join('&');
    return path === '' ? path : '?' + path;
}
function getPath(id, options) {
    let path = id;
    if (!isBrowser) {
        path = id + stringify(options);
    }
    return path;
}
function getOnReadyEventKey(path) {
    return path + '.' + 'onReady';
}
function getOnShowEventKey(path) {
    return path + '.' + 'onShow';
}
function getOnHideEventKey(path) {
    return path + '.' + 'onHide';
}
function createPageConfig(component, pageName, data, pageConfig) {
    var _a, _b;
    const id = pageName !== null && pageName !== void 0 ? pageName : `taro_page_${pageId()}`;
    // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
    let pageElement = null;
    let unmounting = false;
    let prepareMountList = [];
    const config = {
        onLoad(options, cb) {
            perf.start(PAGE_INIT);
            Current.page = this;
            this.config = pageConfig || {};
            if (this.options == null) {
                this.options = options;
            }
            const path = getPath(id, options);
            const router = isBrowser ? path : this.route || this.__route__;
            Current.router = {
                params: options,
                path: addLeadingSlash(router),
                onReady: getOnReadyEventKey(id),
                onShow: getOnShowEventKey(id),
                onHide: getOnHideEventKey(id)
            };
            const mount = () => {
                Current.app.mount(component, path, () => {
                    pageElement = document$1.getElementById(path);
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* ensure */ "e"])(pageElement !== null, '没有找到页面实例。');
                    safeExecute(path, 'onLoad', options);
                    if (!isBrowser) {
                        pageElement.ctx = this;
                        pageElement.performUpdate(true, cb);
                    }
                });
            };
            if (unmounting) {
                prepareMountList.push(mount);
            }
            else {
                mount();
            }
        },
        onReady() {
            const path = getPath(id, this.options);
            raf(() => {
                eventCenter.trigger(getOnReadyEventKey(id));
            });
            safeExecute(path, 'onReady');
            this.onReady.called = true;
        },
        onUnload() {
            const path = getPath(id, this.options);
            unmounting = true;
            Current.app.unmount(path, () => {
                unmounting = false;
                instances.delete(path);
                if (pageElement) {
                    pageElement.ctx = null;
                }
                if (prepareMountList.length) {
                    prepareMountList.forEach(fn => fn());
                    prepareMountList = [];
                }
            });
        },
        onShow() {
            Current.page = this;
            this.config = pageConfig || {};
            const path = getPath(id, this.options);
            const router = isBrowser ? path : this.route || this.__route__;
            Current.router = {
                params: this.options,
                path: addLeadingSlash(router),
                onReady: getOnReadyEventKey(id),
                onShow: getOnShowEventKey(id),
                onHide: getOnHideEventKey(id)
            };
            raf(() => {
                eventCenter.trigger(getOnShowEventKey(id));
            });
            safeExecute(path, 'onShow');
        },
        onHide() {
            Current.page = null;
            Current.router = null;
            const path = getPath(id, this.options);
            safeExecute(path, 'onHide');
            eventCenter.trigger(getOnHideEventKey(id));
        },
        onPullDownRefresh() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onPullDownRefresh');
        },
        onReachBottom() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onReachBottom');
        },
        onPageScroll(options) {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onPageScroll', options);
        },
        onResize(options) {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onResize', options);
        },
        onTabItemTap(options) {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onTabItemTap', options);
        },
        onTitleClick() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onTitleClick');
        },
        onOptionMenuClick() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onOptionMenuClick');
        },
        onPopMenuClick() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onPopMenuClick');
        },
        onPullIntercept() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onPullIntercept');
        },
        onAddToFavorites() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onAddToFavorites');
        }
    };
    // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
    if (component.onShareAppMessage || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) ||
        component.enableShareAppMessage) {
        config.onShareAppMessage = function (options) {
            const target = options.target;
            if (target != null) {
                const id = target.id;
                const element = document$1.getElementById(id);
                if (element != null) {
                    options.target.dataset = element.dataset;
                }
            }
            const path = getPath(id, this.options);
            return safeExecute(path, 'onShareAppMessage', options);
        };
    }
    if (component.onShareTimeline || ((_b = component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) ||
        component.enableShareTimeline) {
        config.onShareTimeline = function () {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onShareTimeline');
        };
    }
    config.eh = eventHandler;
    if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isUndefined */ "m"])(data)) {
        config.data = data;
    }
    if (isBrowser) {
        config.path = id;
    }
    return config;
}
function createComponentConfig(component, componentName, data) {
    var _a, _b, _c;
    const id = componentName !== null && componentName !== void 0 ? componentName : `taro_component_${pageId()}`;
    let componentElement = null;
    const config = {
        attached() {
            perf.start(PAGE_INIT);
            const path = getPath(id, { id: this.getPageId() });
            Current.app.mount(component, path, () => {
                componentElement = document$1.getElementById(path);
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* ensure */ "e"])(componentElement !== null, '没有找到组件实例。');
                safeExecute(path, 'onLoad');
                if (!isBrowser) {
                    componentElement.ctx = this;
                    componentElement.performUpdate(true);
                }
            });
        },
        detached() {
            const path = getPath(id, { id: this.getPageId() });
            Current.app.unmount(path, () => {
                instances.delete(path);
                if (componentElement) {
                    componentElement.ctx = null;
                }
            });
        },
        pageLifetimes: {
            show() {
                safeExecute(id, 'onShow');
            },
            hide() {
                safeExecute(id, 'onHide');
            }
        },
        methods: {
            eh: eventHandler
        }
    };
    if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isUndefined */ "m"])(data)) {
        config.data = data;
    }
    config['options'] = (_a = component === null || component === void 0 ? void 0 : component['options']) !== null && _a !== void 0 ? _a : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"];
    config['externalClasses'] = (_b = component === null || component === void 0 ? void 0 : component['externalClasses']) !== null && _b !== void 0 ? _b : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"];
    config['behaviors'] = (_c = component === null || component === void 0 ? void 0 : component['behaviors']) !== null && _c !== void 0 ? _c : _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"];
    return config;
}
function createRecursiveComponentConfig(componentName) {
    return {
        properties: {
            i: {
                type: Object,
                value: {
                    ["nn" /* NodeName */]: 'view'
                }
            },
            l: {
                type: String,
                value: ''
            }
        },
        observers: {
            i(val) {
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* warn */ "q"])(val["nn" /* NodeName */] === '#text', `请在此元素外再套一层非 Text 元素：<text>${val["v" /* Text */]}</text>，详情：https://github.com/NervJS/taro/issues/6054`);
            }
        },
        options: {
            addGlobalClass: true,
            virtualHost: componentName !== 'custom-wrapper'
        },
        methods: {
            eh: eventHandler
        }
    };
}

const HOOKS_APP_ID = 'taro-app';
const taroHooks = (lifecycle) => {
    return (fn) => {
        const id = R.useContext(PageContext) || HOOKS_APP_ID;
        // hold fn ref and keep up to date
        const fnRef = R.useRef(fn);
        if (fnRef.current !== fn)
            fnRef.current = fn;
        R.useLayoutEffect(() => {
            let inst = getPageInstance(id);
            let first = false;
            if (inst == null) {
                first = true;
                inst = Object.create(null);
            }
            inst = inst;
            // callback is immutable but inner function is up to date
            const callback = (...args) => fnRef.current(...args);
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(inst[lifecycle])) {
                inst[lifecycle] = [inst[lifecycle], callback];
            }
            else {
                inst[lifecycle] = [
                    ...(inst[lifecycle] || []),
                    callback
                ];
            }
            if (first) {
                injectPageInstance(inst, id);
            }
            return () => {
                const inst = getPageInstance(id);
                const list = inst[lifecycle];
                if (list === callback) {
                    inst[lifecycle] = undefined;
                }
                else if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "h"])(list)) {
                    inst[lifecycle] = list.filter(item => item !== callback);
                }
            };
        }, []);
    };
};
const useDidShow = taroHooks('componentDidShow');
const useDidHide = taroHooks('componentDidHide');
const usePullDownRefresh = taroHooks('onPullDownRefresh');
const useReachBottom = taroHooks('onReachBottom');
const usePageScroll = taroHooks('onPageScroll');
const useResize = taroHooks('onResize');
const useShareAppMessage = taroHooks('onShareAppMessage');
const useTabItemTap = taroHooks('onTabItemTap');
const useTitleClick = taroHooks('onTitleClick');
const useOptionMenuClick = taroHooks('onOptionMenuClick');
const usePullIntercept = taroHooks('onPullIntercept');
const useShareTimeline = taroHooks('onShareTimeline');
const useAddToFavorites = taroHooks('onAddToFavorites');
const useReady = taroHooks('onReady');
const useRouter = (dynamic = false) => {
    return dynamic ? Current.router : R.useMemo(() => Current.router, []);
};
const useScope = () => undefined;

function isClassComponent(R, component) {
    var _a;
    return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(component.render) ||
        !!((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent) ||
        component.prototype instanceof R.Component; // compat for some others react-like library
}
// 初始值设置为 any 主要是为了过 TS 的校验
let R = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"];
let PageContext = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"];
function connectReactPage(R, id) {
    const h = R.createElement;
    return (component) => {
        // eslint-disable-next-line dot-notation
        const isReactComponent = isClassComponent(R, component);
        const inject = (node) => node && injectPageInstance(node, id);
        const refs = isReactComponent ? { ref: inject } : {
            forwardedRef: inject,
            // 兼容 react-redux 7.20.1+
            reactReduxForwardedRef: inject
        };
        if (PageContext === _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* EMPTY_OBJ */ "a"]) {
            PageContext = R.createContext('');
        }
        return class Page extends R.Component {
            constructor() {
                super(...arguments);
                this.state = {
                    hasError: false
                };
            }
            static getDerivedStateFromError(error) {
                console.warn(error);
                return { hasError: true };
            }
            // React 16 uncaught error 会导致整个应用 crash，
            // 目前把错误缩小到页面
            componentDidCatch(error, info) {
                console.warn(error);
                console.error(info.componentStack);
            }
            render() {
                const children = this.state.hasError
                    ? []
                    : h(PageContext.Provider, { value: id }, h(component, Object.assign(Object.assign({}, this.props), refs)));
                if (isBrowser) {
                    return h('div', { id, className: 'taro_page' }, children);
                }
                return h('root', { id }, children);
            }
        };
    };
}
let ReactDOM;
function setReconciler() {
    const hostConfig = {
        getLifecyle(instance, lifecycle) {
            if (lifecycle === 'onShow') {
                lifecycle = 'componentDidShow';
            }
            else if (lifecycle === 'onHide') {
                lifecycle = 'componentDidHide';
            }
            return instance[lifecycle];
        },
        mergePageInstance(prev, next) {
            if (!prev || !next)
                return;
            // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
            // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev
            if ('constructor' in prev)
                return;
            Object.keys(prev).forEach(item => {
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(next[item])) {
                    next[item] = [next[item], ...prev[item]];
                }
                else {
                    next[item] = [...(next[item] || []), ...prev[item]];
                }
            });
        },
        modifyEventType(event) {
            event.type = event.type.replace(/-/g, '');
        },
        batchedEventUpdates(cb) {
            ReactDOM.unstable_batchedUpdates(cb);
        }
    };
    if (isBrowser) {
        hostConfig.createPullDownComponent = (el, _, R) => {
            const isReactComponent = isClassComponent(R, el);
            return R.forwardRef((props, ref) => {
                const newProps = Object.assign({}, props);
                const refs = isReactComponent ? { ref: ref } : {
                    forwardedRef: ref,
                    // 兼容 react-redux 7.20.1+
                    reactReduxForwardedRef: ref
                };
                return R.createElement('taro-pull-to-refresh', null, R.createElement(el, Object.assign(Object.assign({}, newProps), refs)));
            });
        };
        hostConfig.findDOMNode = (inst) => {
            return ReactDOM.findDOMNode(inst);
        };
    }
    options.reconciler(hostConfig);
}
const pageKeyId = incrementId();
function createReactApp(App, react, reactdom, config) {
    R = react;
    ReactDOM = reactdom;
    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* ensure */ "e"])(!!ReactDOM, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
    const ref = R.createRef();
    const isReactComponent = isClassComponent(R, App);
    setReconciler();
    let wrapper;
    class AppWrapper extends R.Component {
        constructor() {
            super(...arguments);
            // run createElement() inside the render function to make sure that owner is right
            this.pages = [];
            this.elements = [];
        }
        mount(component, id, cb) {
            const key = id + pageKeyId();
            const page = () => R.createElement(component, { key, tid: id });
            this.pages.push(page);
            this.forceUpdate(cb);
        }
        unmount(id, cb) {
            for (let i = 0; i < this.elements.length; i++) {
                const element = this.elements[i];
                if (element.props.tid === id) {
                    this.elements.splice(i, 1);
                    break;
                }
            }
            this.forceUpdate(cb);
        }
        render() {
            while (this.pages.length > 0) {
                const page = this.pages.pop();
                this.elements.push(page());
            }
            let props = null;
            if (isReactComponent) {
                props = { ref };
            }
            return R.createElement(App, props, isBrowser ? R.createElement('div', null, this.elements.slice()) : this.elements.slice());
        }
    }
    const app = Object.create({
        render(cb) {
            wrapper.forceUpdate(cb);
        },
        mount(component, id, cb) {
            const page = connectReactPage(R, id)(component);
            wrapper.mount(page, id, cb);
        },
        unmount(id, cb) {
            wrapper.unmount(id, cb);
        }
    }, {
        config: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: config
        },
        onLaunch: {
            enumerable: true,
            writable: true,
            value(options) {
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                // eslint-disable-next-line react/no-render-return-value
                wrapper = ReactDOM.render(R.createElement(AppWrapper), document$1.getElementById('app'));
                const app = ref.current;
                // For taroize
                // 把 App Class 上挂载的额外属性同步到全局 app 对象中
                if (app === null || app === void 0 ? void 0 : app.taroGlobalData) {
                    const globalData = app.taroGlobalData;
                    const keys = Object.keys(globalData);
                    const descriptors = Object.getOwnPropertyDescriptors(globalData);
                    keys.forEach(key => {
                        Object.defineProperty(this, key, {
                            configurable: true,
                            enumerable: true,
                            get() {
                                return globalData[key];
                            },
                            set(value) {
                                globalData[key] = value;
                            }
                        });
                    });
                    Object.defineProperties(this, descriptors);
                }
                this.$app = app;
                if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(app.onLaunch)) {
                    app.onLaunch(options);
                }
            }
        },
        onShow: {
            enumerable: true,
            writable: true,
            value(options) {
                const app = ref.current;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(app.componentDidShow)) {
                    app.componentDidShow(options);
                }
                // app useDidShow
                triggerAppHook('componentDidShow');
            }
        },
        onHide: {
            enumerable: true,
            writable: true,
            value(options) {
                const app = ref.current;
                if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(app.componentDidHide)) {
                    app.componentDidHide(options);
                }
                // app useDidHide
                triggerAppHook('componentDidHide');
            }
        },
        onPageNotFound: {
            enumerable: true,
            writable: true,
            value(res) {
                const app = ref.current;
                if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(app.onPageNotFound)) {
                    app.onPageNotFound(res);
                }
            }
        }
    });
    function triggerAppHook(lifecycle) {
        const instance = getPageInstance(HOOKS_APP_ID);
        if (instance) {
            const app = ref.current;
            const func = CurrentReconciler.getLifecyle(instance, lifecycle);
            if (Array.isArray(func)) {
                func.forEach(cb => cb.apply(app));
            }
        }
    }
    Current.app = app;
    return Current.app;
}
const getNativeCompId = incrementId();
function initNativeComponentEntry(R, ReactDOM) {
    class NativeComponentWrapper extends R.Component {
        constructor() {
            super(...arguments);
            this.root = R.createRef();
            this.ctx = this.props.getCtx();
        }
        componentDidMount() {
            this.ctx.component = this;
            const rootElement = this.root.current;
            rootElement.ctx = this.ctx;
            rootElement.performUpdate(true);
        }
        render() {
            return (R.createElement('root', {
                ref: this.root
            }, this.props.renderComponent(this.ctx)));
        }
    }
    class Entry extends R.Component {
        constructor() {
            super(...arguments);
            this.state = {
                components: []
            };
        }
        componentDidMount() {
            Current.app = this;
        }
        mount(Component, compId, getCtx) {
            const isReactComponent = isClassComponent(R, Component);
            const inject = (node) => node && injectPageInstance(node, compId);
            const refs = isReactComponent ? { ref: inject } : {
                forwardedRef: inject,
                reactReduxForwardedRef: inject
            };
            const item = {
                compId,
                element: R.createElement(NativeComponentWrapper, {
                    key: compId,
                    getCtx,
                    renderComponent(ctx) {
                        return R.createElement(Component, Object.assign(Object.assign({}, (ctx.data || (ctx.data = {})).props), refs));
                    }
                })
            };
            this.setState({
                components: [...this.state.components, item]
            });
        }
        unmount(compId) {
            const components = this.state.components;
            const index = components.findIndex(item => item.compId === compId);
            const next = [...components.slice(0, index), ...components.slice(index + 1)];
            this.setState({
                components: next
            });
        }
        render() {
            const components = this.state.components;
            return (components.map(({ element }) => element));
        }
    }
    setReconciler();
    const app = document$1.getElementById('app');
    ReactDOM.render(R.createElement(Entry, {}), app);
}
function createNativeComponentConfig(Component, react, reactdom, componentConfig) {
    R = react;
    ReactDOM = reactdom;
    const config = {
        properties: {
            props: {
                type: null,
                value: null,
                observer(_newVal, oldVal) {
                    oldVal && this.component.forceUpdate();
                }
            }
        },
        created() {
            if (!Current.app) {
                initNativeComponentEntry(R, ReactDOM);
            }
        },
        attached() {
            setCurrent();
            this.compId = getNativeCompId();
            this.config = componentConfig;
            Current.app.mount(Component, this.compId, () => this);
        },
        ready() {
            safeExecute(this.compId, 'onReady');
        },
        detached() {
            Current.app.unmount(this.compId);
        },
        pageLifetimes: {
            show() {
                safeExecute(this.compId, 'onShow');
            },
            hide() {
                safeExecute(this.compId, 'onHide');
            }
        },
        methods: {
            eh: eventHandler
        }
    };
    function setCurrent() {
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        if (Current.page === currentPage)
            return;
        Current.page = currentPage;
        const route = currentPage.route || currentPage.__route__;
        const router = {
            params: currentPage.options || {},
            path: addLeadingSlash(route),
            onReady: '',
            onHide: '',
            onShow: ''
        };
        Current.router = router;
        if (!currentPage.options) {
            // 例如在微信小程序中，页面 options 的设置时机比组件 attached 慢
            Object.defineProperty(currentPage, 'options', {
                enumerable: true,
                configurable: true,
                get() {
                    return this._optionsValue;
                },
                set(value) {
                    router.params = value;
                    this._optionsValue = value;
                }
            });
        }
    }
    return config;
}

function connectVuePage(Vue, id) {
    return (component) => {
        const injectedPage = Vue.extend({
            props: {
                tid: String
            },
            mixins: [component, {
                    created() {
                        injectPageInstance(this, id);
                    }
                }]
        });
        const options = {
            render(h) {
                return h(isBrowser ? 'div' : 'root', {
                    attrs: {
                        id,
                        class: isBrowser ? 'taro_page' : ''
                    }
                }, [
                    h(injectedPage, { props: { tid: id } })
                ]);
            }
        };
        return options;
    };
}
function setReconciler$1() {
    const hostConfig = {
        getLifecyle(instance, lifecycle) {
            return instance.$options[lifecycle];
        },
        removeAttribute(dom, qualifiedName) {
            const compName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* capitalize */ "b"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toCamelCase */ "o"])(dom.tagName.toLowerCase()));
            if (compName in _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* internalComponents */ "g"] &&
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* hasOwn */ "f"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* internalComponents */ "g"][compName], qualifiedName) &&
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isBooleanStringLiteral */ "i"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* internalComponents */ "g"][compName][qualifiedName])) {
                // avoid attribute being removed because set false value in vue
                dom.setAttribute(qualifiedName, false);
            }
            else {
                delete dom.props[qualifiedName];
            }
        }
    };
    if (isBrowser) {
        hostConfig.createPullDownComponent = (el, path, vue) => {
            const injectedPage = vue.extend({
                props: {
                    tid: String
                },
                mixins: [el, {
                        created() {
                            injectPageInstance(this, path);
                        }
                    }]
            });
            const options = {
                name: 'PullToRefresh',
                render(h) {
                    return h('taro-pull-to-refresh', { class: ['hydrated'] }, [h(injectedPage, this.$slots.default)]);
                }
            };
            return options;
        };
        hostConfig.findDOMNode = (el) => {
            return el.$el;
        };
    }
    options.reconciler(hostConfig);
}
let Vue;
function createVueApp(App, vue, config) {
    Vue = vue;
    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* ensure */ "e"])(!!Vue, '构建 Vue 项目请把 process.env.FRAMEWORK 设置为 \'vue\'');
    setReconciler$1();
    Vue.config.getTagNamespace = _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "n"];
    const elements = [];
    const pages = [];
    let appInstance;
    const wrapper = new Vue({
        render(h) {
            while (pages.length > 0) {
                const page = pages.pop();
                elements.push(page(h));
            }
            return h(App, { ref: 'app' }, elements.slice());
        },
        methods: {
            mount(component, id, cb) {
                pages.push((h) => h(component, { key: id }));
                this.updateSync(cb);
            },
            updateSync(cb) {
                this._update(this._render(), false);
                this.$children.forEach((child) => child._update(child._render(), false));
                cb();
            },
            unmount(id, cb) {
                for (let i = 0; i < elements.length; i++) {
                    const element = elements[i];
                    if (element.key === id) {
                        elements.splice(i, 1);
                        break;
                    }
                }
                this.updateSync(cb);
            }
        }
    });
    const app = Object.create({
        mount(component, id, cb) {
            const page = connectVuePage(Vue, id)(component);
            wrapper.mount(page, id, cb);
        },
        unmount(id, cb) {
            wrapper.unmount(id, cb);
        }
    }, {
        config: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: config
        },
        onLaunch: {
            writable: true,
            enumerable: true,
            value(options) {
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                wrapper.$mount(document$1.getElementById('app'));
                appInstance = wrapper.$refs.app;
                if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(appInstance.$options.onLaunch)) {
                    appInstance.$options.onLaunch.call(appInstance, options);
                }
            }
        },
        onShow: {
            writable: true,
            enumerable: true,
            value(options) {
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(appInstance.$options.onShow)) {
                    appInstance.$options.onShow.call(appInstance, options);
                }
            }
        },
        onHide: {
            writable: true,
            enumerable: true,
            value(options) {
                if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(appInstance.$options.onHide)) {
                    appInstance.$options.onHide.call(appInstance, options);
                }
            }
        }
    });
    Current.app = app;
    return Current.app;
}

function createVue3Page(h, id) {
    return function (component) {
        var _a;
        const inject = {
            props: {
                tid: String
            },
            created() {
                injectPageInstance(this, id);
                // vue3 组件 created 时机比小程序页面 onShow 慢，因此在 created 后再手动触发一次 onShow。
                this.$nextTick(() => {
                    safeExecute(id, 'onShow');
                });
            }
        };
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "h"])(component.mixins)) {
            const mixins = component.mixins;
            const idx = mixins.length - 1;
            if (!((_a = mixins[idx].props) === null || _a === void 0 ? void 0 : _a.tid)) {
                // mixins 里还没注入过，直接推入数组
                component.mixins.push(inject);
            }
            else {
                // mixins 里已经注入过，代替前者
                component.mixins[idx] = inject;
            }
        }
        else {
            component.mixins = [inject];
        }
        return h(isBrowser ? 'div' : 'root', {
            key: id,
            id,
            class: isBrowser ? 'taro_page' : ''
        }, [
            h(component, {
                tid: id
            })
        ]);
    };
}
function setReconciler$2() {
    const hostConfig = {
        getLifecyle(instance, lifecycle) {
            return instance.$options[lifecycle];
        },
        removeAttribute(dom, qualifiedName) {
            const compName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* capitalize */ "b"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* toCamelCase */ "o"])(dom.tagName.toLowerCase()));
            if (compName in _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* internalComponents */ "g"] &&
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* hasOwn */ "f"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* internalComponents */ "g"][compName], qualifiedName) &&
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isBooleanStringLiteral */ "i"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* internalComponents */ "g"][compName][qualifiedName])) {
                // avoid attribute being removed because set false value in vue
                dom.setAttribute(qualifiedName, false);
            }
            else {
                delete dom.props[qualifiedName];
            }
        },
        modifyEventType(event) {
            event.type = event.type.replace(/-/g, '');
        }
    };
    if (isBrowser) {
        hostConfig.createPullDownComponent = (component, path, h) => {
            const inject = {
                props: {
                    tid: String
                },
                created() {
                    injectPageInstance(this, path);
                }
            };
            component.mixins = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "h"])(component.mixins)
                ? component.mixins.push(inject)
                : [inject];
            return {
                render() {
                    return h('taro-pull-to-refresh', {
                        class: 'hydrated'
                    }, [h(component, this.$slots.default)]);
                }
            };
        };
        hostConfig.findDOMNode = (el) => {
            return el.$el;
        };
    }
    options.reconciler(hostConfig);
}
function createVue3App(app, h, config) {
    let pages = [];
    let appInstance;
    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* ensure */ "e"])(!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(app._component), '入口组件不支持使用函数式组件');
    setReconciler$2();
    app._component.render = function () {
        return pages.slice();
    };
    const appConfig = Object.create({
        mount(component, id, cb) {
            const page = createVue3Page(h, id)(component);
            pages.push(page);
            this.updateAppInstance(cb);
        },
        unmount(id, cb) {
            pages = pages.filter(page => page.key !== id);
            this.updateAppInstance(cb);
        },
        updateAppInstance(cb) {
            appInstance.$forceUpdate();
            appInstance.$nextTick(cb);
        }
    }, {
        config: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: config
        },
        onLaunch: {
            writable: true,
            enumerable: true,
            value(options) {
                var _a;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                appInstance = app.mount('#app');
                const onLaunch = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onLaunch;
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(onLaunch) && onLaunch.call(appInstance, options);
            }
        },
        onShow: {
            writable: true,
            enumerable: true,
            value(options) {
                var _a;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                const onShow = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onShow;
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(onShow) && onShow.call(appInstance, options);
            }
        },
        onHide: {
            writable: true,
            enumerable: true,
            value(options) {
                var _a;
                const onHide = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onHide;
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "j"])(onHide) && onHide.call(appInstance, options);
            }
        }
    });
    Current.app = appConfig;
    return Current.app;
}

function removeLeadingSlash(path) {
    if (path == null) {
        return '';
    }
    return path.charAt(0) === '/' ? path.slice(1) : path;
}
const nextTick = (cb, ctx) => {
    var _a, _b, _c;
    const router = Current.router;
    const timerFunc = () => {
        setTimeout(function () {
            ctx ? cb.call(ctx) : cb();
        }, 1);
    };
    if (router !== null) {
        let pageElement = null;
        const path = getPath(removeLeadingSlash(router.path), router.params);
        pageElement = document$1.getElementById(path);
        if (pageElement !== null) {
            if (isBrowser) {
                // eslint-disable-next-line dot-notation
                (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(() => {
                    timerFunc();
                })) !== null && _c !== void 0 ? _c : timerFunc();
            }
            else {
                pageElement.enqueueUpdateCallback(cb, ctx);
            }
        }
        else {
            timerFunc();
        }
    }
    else {
        timerFunc();
    }
};


//# sourceMappingURL=runtime.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(11)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const { CurrentReconciler } = __webpack_require__(1)
const taro = __webpack_require__(12).default

if (typeof CurrentReconciler.initNativeApi === 'function') {
  CurrentReconciler.initNativeApi(taro)
}

module.exports = taro
module.exports.default = module.exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


// import Taro from "@tarojs/taro";


var FreePoster = /*#__PURE__*/function () {
  /**
   * 初始化canvas
   * @param options
   */
  function FreePoster(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FreePoster);

    var obj = {
      x: 0,
      y: 0,
      width: 750,
      height: 1334,
      quality: 1,
      canvasId: 'posterCanvasId',
      debug: false,
      canvasBackground: 'rgba(0, 0, 0, 0.1)'
    };
    this.params = Object.assign(obj, options);
    this.canvasContext = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.createCanvasContext(this.params.canvasId);
    this.posterImgSrc = "";
  }
  /**
   * 默认绘制矩形图片
   * @param src 图片地址
   * @param x  相对canvas左上角的x坐标
   * @param y  相对canvas左上角的y坐标
   * @param width   图片宽度
   * @param height   图片高度
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FreePoster, [{
    key: "paintImg",
    value: function () {
      var _paintImg = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(imgInfo) {
        var _this = this;

        var src, x, y, width, height, newSrc;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                src = imgInfo.src, x = imgInfo.x, y = imgInfo.y, width = imgInfo.width, height = imgInfo.height;
                _context.next = 3;
                return this._downloadFile(src);

              case 3:
                newSrc = _context.sent;

                if (this.params.debug) {
                  console.log("开始绘制图片", newSrc);
                }

                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  try {
                    _this.canvasContext.drawImage(newSrc, x, y, width, height);

                    if (_this.params.debug) {
                      console.log("开始绘制图片完成");
                    }

                    resolve();
                  } catch (e) {
                    reject(e);
                  }

                  _this.canvasContext.draw(true);
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function paintImg(_x) {
        return _paintImg.apply(this, arguments);
      }

      return paintImg;
    }()
    /**
     * 绘制带白边自定义背景色的圆形图片
     * @param imgInfo.src
     * @param imgInfo.x
     * @param imgInfo.y
     * @param imgInfo.width
     * @param imgInfo.height
     * @param imgInfo.backgroundColor 带边框的图片的被寄给你色
     * @param imgInfo.padding
     */

  }, {
    key: "drawPaddingCircleImg",
    value: function () {
      var _drawPaddingCircleImg = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2(imgInfo) {
        var src, x, y, width, height, backgroundColor, padding, paddingCircleInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                src = imgInfo.src, x = imgInfo.x, y = imgInfo.y, width = imgInfo.width, height = imgInfo.height, backgroundColor = imgInfo.backgroundColor, padding = imgInfo.padding;
                paddingCircleInfo = Object.assign({}, imgInfo, {
                  x: x - padding,
                  y: y - padding,
                  width: width + 2 * padding,
                  height: height + 2 * padding
                });
                _context2.next = 4;
                return this.paintCircleShape(paddingCircleInfo);

              case 4:
                _context2.next = 6;
                return this.paintCircleImage(imgInfo);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function drawPaddingCircleImg(_x2) {
        return _drawPaddingCircleImg.apply(this, arguments);
      }

      return drawPaddingCircleImg;
    }()
    /**
     * canvas绘制圆形裁切图片
     * @param imgInfo.src 图片链接
     * @param imgInfo.x 图片左上角x坐标
     * @param imgInfo.y 图片左上角y坐标
     * @param imgInfo.width 图片宽度
     * @param imgInfo.height 图片高度
     * @returns {Promise<void>}
     */

  }, {
    key: "paintCircleImage",
    value: function () {
      var _paintCircleImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3(imgInfo) {
        var src, x, y, width, height, newSrc, circleX, circleY, circleR;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                src = imgInfo.src, x = imgInfo.x, y = imgInfo.y, width = imgInfo.width, height = imgInfo.height;
                _context3.next = 3;
                return this._downloadFile(src);

              case 3:
                newSrc = _context3.sent;
                circleX = x + width / 2;
                circleY = y + height / 2;
                circleR = height / 2;
                this.canvasContext.save();
                this.canvasContext.beginPath();
                this.canvasContext.arc(circleX, circleY, circleR, 0, 2 * Math.PI);
                this.canvasContext.clip();
                this.canvasContext.drawImage(newSrc, x, y, width, height);
                this.canvasContext.restore();
                this.canvasContext.draw(true);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function paintCircleImage(_x3) {
        return _paintCircleImage.apply(this, arguments);
      }

      return paintCircleImage;
    }()
    /**
     * 绘制圆形形状
     * @param shapeInfo.x 矩形左上角x坐标
     * @param shapeInfo.y 矩形左上角y坐标
     * @param shapeInfo.width 矩形宽度
     * @param shapeInfo.height 矩形高度
     * @param shapeInfo.backgroundColor 矩形背景颜色
     */

  }, {
    key: "paintCircleShape",
    value: function paintCircleShape(shapeInfo) {
      if (this.params.debug) console.log('开始绘制圆形o', shapeInfo);
      var x = shapeInfo.x,
          y = shapeInfo.y,
          width = shapeInfo.width,
          height = shapeInfo.height,
          backgroundColor = shapeInfo.backgroundColor;
      var circleX, circleY, circleR;
      circleX = x + width / 2;
      circleY = y + height / 2;
      circleR = height / 2;
      this.canvasContext.save();
      this.canvasContext.beginPath();
      this.canvasContext.arc(circleX, circleY, circleR, 0, 2 * Math.PI);
      this.canvasContext.clip();
      this.canvasContext.setFillStyle(backgroundColor);
      this.canvasContext.fillRect(x, y, width, height);
      this.canvasContext.restore();
    }
    /**
     * 绘制矩形形状
     * @param shapeInfo.x
     * @param shapeInfo.y
     * @param shapeInfo.width
     * @param shapeInfo.height
     * @param shapeInfo.backgroundColor
     */

  }, {
    key: "paintRectShape",
    value: function paintRectShape(shapeInfo) {
      if (this.params.debug) console.log('开始绘制矩形', shapeInfo);
      var x = shapeInfo.x,
          y = shapeInfo.y,
          width = shapeInfo.width,
          height = shapeInfo.height,
          backgroundColor = shapeInfo.backgroundColor;
      this.canvasContext.save();
      this.canvasContext.setFillStyle(backgroundColor);
      this.canvasContext.fillRect(x, y, width, height);
      this.canvasContext.restore();
    }
    /**
     * 绘制单行文本
     * @param textInfo.x:文本x坐标
     * @param textInfo.y:文本y坐标
     * @param textInfo.fontSize:文字字体大小
     * @param textInfo.color:文本颜色
     * @param textInfo.MaxTextNum:最多多少文字，超过这个范围截取文字并且用。。。代替
     * @param textInfo.font:设置字体所有的属性，如果有front,则覆盖现有的字体大小，颜色。（font-style, font-variant, font-weight, font-size, line-height 和 font-family ）
     */

  }, {
    key: "paintOneLineText",
    value: function paintOneLineText(textInfo) {
      if (this.params.debug) console.log('开始绘制单行文字', textInfo);
      var x = textInfo.x,
          y = textInfo.y,
          fontSize = textInfo.fontSize,
          color = textInfo.color,
          MaxTextNum = textInfo.MaxTextNum;
      var txt = textInfo.txt;
      var font = textInfo.font || '';
      this.canvasContext.save();
      this.canvasContext.setTextAlign('left');
      this.canvasContext.setFontSize(fontSize);
      this.canvasContext.setFillStyle(color);

      if (font) {
        this.canvasContext.font = font;
      } else {
        this.canvasContext.font = 'normal "Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif';
      }

      var txtWidth = this.canvasContext.measureText(txt).width;
      if (this.params.debug) console.log("单行文字的宽度--" + txt, txtWidth);
      if (this.params.debug) console.log("文字的位数--" + txt, txt.length);

      if (txt && MaxTextNum) {
        var len = txt.length;

        if (len > MaxTextNum) {
          txt = txt.substr(0, MaxTextNum) + '...';
        }
      }

      this.canvasContext.fillText(txt, x, y);
      this.canvasContext.restore();
      this.canvasContext.draw(true);
    }
    /**
     * canvas绘制带环形文字居中
     * @param textInfo.txt 文字
     * @param textInfo.x
     * @param textInfo.y
     * @param textInfo.fontSize  字体大小
     * @param textInfo.color  字体颜色
     * @param textInfo.circularH 环形的高度
     * @param textInfo.circularW 环形额宽度
     * @param textInfo.circularColor 环形的背景色
     * @param textInfo.circularY 环形的y坐标
     * @param textInfo
     */

  }, {
    key: "paintCircularText",
    value: function paintCircularText(textInfo) {
      if (this.params.debug) console.log('开始绘制环形文字', textInfo);
      var txt = textInfo.txt,
          x = textInfo.x,
          y = textInfo.y,
          fontSize = textInfo.fontSize,
          color = textInfo.color,
          circularH = textInfo.circularH,
          circularW = textInfo.circularW,
          circularColor = textInfo.circularColor,
          circularY = textInfo.circularY; // let circularW=''

      var txtWidth = this.canvasContext.measureText(txt).width; // let circularW = txtWidth + 300;
      // let circularW = txtWidth*6;
      // if(txtWidth < 30) {circularW = txtWidth + 60}
      // if(txtWidth >= 30 && txtWidth < 60) {circularW = txtWidth + 160}
      // if(txtWidth >= 60 && txtWidth < 200) {circularW = txtWidth + 360}

      var circularX = (this.params.width - circularW) / 2;
      if (this.params.debug) console.log("环形文字的宽度--" + txt, txtWidth);
      if (this.params.debug) console.log('环形的宽度', circularW);
      var halfCircularH = circularH / 2;
      var halfCircularW = circularW / 2;
      this.canvasContext.setFillStyle(circularColor);
      this.canvasContext.arc(circularX, circularY + halfCircularH, halfCircularH, 0, 2 * Math.PI);
      this.canvasContext.arc(circularX + circularW, circularY + halfCircularH, halfCircularH, 0, 2 * Math.PI);
      this.canvasContext.rect(circularX, circularY, circularW, circularH);
      this.canvasContext.fill();
      this.canvasContext.setFillStyle(color);
      this.canvasContext.setFontSize(fontSize);
      this.canvasContext.setTextAlign("center"); // this.canvasContext.fillText(txt,x,y)

      this.canvasContext.fillText(txt, circularX + halfCircularW, circularY + halfCircularH + fontSize / 4 + 2);
      this.canvasContext.draw(true);
    }
    /**
     * 绘制多行文本,折行可控
     * @param textInfo.txt 文本
     * @param textInfo.x 文本第一行文字x坐标
     * @param textInfo.y 文本第一行文字y坐标
     * @param textInfo.fontSize  字体大小
     * @param textInfo.color  字体颜色
     * @param textInfo.lineDistance 行间距
     * @param textInfo.oneLineTextNum 一行有几个文字
     */

  }, {
    key: "paintMultiLine",
    value: function paintMultiLine(textInfo) {
      if (this.params.debug) console.log('开始多行文本', textInfo);
      var txt = textInfo.txt,
          x = textInfo.x,
          y = textInfo.y,
          fontSize = textInfo.fontSize,
          color = textInfo.color,
          _textInfo$lineDistanc = textInfo.lineDistance,
          lineDistance = _textInfo$lineDistanc === void 0 ? 36 : _textInfo$lineDistanc,
          oneLineTextNum = textInfo.oneLineTextNum;
      if (!txt) return;
      var multiText = txt;
      var multiTextLen = txt.length; // 如果设置的单行文字数量大于文字总数

      if (oneLineTextNum > multiText.length) {
        console.error('多行文本字数 < 设置的允许单行文字的字数', textInfo);
        this.paintOneLineText(textInfo);
        return;
      }

      var multiLineArr = [];
      var totalLineNum = Math.ceil(multiTextLen / oneLineTextNum);
      var startIndex = 0;
      var endIndex = oneLineTextNum;

      for (var i = 0; i < totalLineNum; i++) {
        startIndex = i * oneLineTextNum;
        endIndex = (i + 1) * oneLineTextNum;
        var temStr = multiText.slice(startIndex, endIndex);
        multiLineArr.push(temStr);
      }

      if (this.params.debug) console.log('多行文本的分割结果', multiLineArr);

      for (var _i = 0; _i < multiLineArr.length; _i++) {
        var tempTxt = multiLineArr[_i];
        var tempY = y + _i * lineDistance;

        var params = _objectSpread(_objectSpread({}, textInfo), {}, {
          y: tempY,
          txt: tempTxt
        });

        this.paintOneLineText(params);
      }
    }
    /**
     * canvas绘制带环形边框文字居中
     * @param textInfo.txt 文本
     * @param textInfo.x
     * @param textInfo.y
     * @param textInfo.fontSize  文字大小
     * @param textInfo.color  文本颜色
     * @param textInfo.borderColor  边框颜色
     * @param textInfo.circularH 环形边框高度
     * @param textInfo.circularW  环形边框宽度
     * @param textInfo.circularX  环形x坐标
     * @param textInfo.circularY 环形y坐标
     */

  }, {
    key: "paintBorderCircularText",
    value: function paintBorderCircularText(textInfo) {
      if (this.params.debug) console.log('开始绘制环形文字', textInfo);
      var txt = textInfo.txt,
          x = textInfo.x,
          y = textInfo.y,
          fontSize = textInfo.fontSize,
          color = textInfo.color,
          borderColor = textInfo.borderColor,
          circularH = textInfo.circularH,
          circularW = textInfo.circularW,
          circularColor = textInfo.circularColor,
          circularX = textInfo.circularX,
          circularY = textInfo.circularY; // let circularW=''

      var txtWidth = this.canvasContext.measureText(txt).width; // let circularW = txtWidth + 300;
      // let circularW = txtWidth*6;
      // if(txtWidth < 30) {circularW = txtWidth + 60}
      // if(txtWidth >= 30 && txtWidth < 60) {circularW = txtWidth + 160}
      // if(txtWidth >= 60 && txtWidth < 200) {circularW = txtWidth + 360}
      // let circularX = (this.params.width - circularW)/2;

      if (this.params.debug) console.log("环形文字的宽度--" + txt, txtWidth);
      if (this.params.debug) console.log('环形的宽度', circularW);
      var halfCircularH = circularH / 2;
      var halfCircularW = circularW / 2; // this.canvasContext.setFillStyle(circularColor);

      this.canvasContext.setStrokeStyle(borderColor || 'red');
      this.canvasContext.arc(circularX, circularY + halfCircularH, halfCircularH, 0.5 * Math.PI, 1.5 * Math.PI);
      this.canvasContext.arc(circularX + circularW, circularY + halfCircularH, halfCircularH, 1.5 * Math.PI, 0.5 * Math.PI); // this.canvasContext.strokeRect(circularX, circularY, circularW, circularH);

      this.canvasContext.moveTo(circularX, circularY);
      this.canvasContext.lineTo(circularX + circularW, circularY);
      this.canvasContext.moveTo(circularX, circularY + circularH);
      this.canvasContext.lineTo(circularX + circularW, circularY + circularH); // this.canvasContext.fill();

      this.canvasContext.stroke();
      this.canvasContext.setFillStyle(color);
      this.canvasContext.setFontSize(fontSize);
      this.canvasContext.setTextAlign("center"); // this.canvasContext.fillText(txt,x,y)

      if (this.params.debug) console.log("\u73AF\u5F62\u6587\u5B57\u7684\u5750\u6807--x:".concat(circularX + halfCircularW, ",y:").concat(circularY + halfCircularH + fontSize / 4 + 2));
      this.canvasContext.fillText(txt, circularX + halfCircularW, circularY + halfCircularH + fontSize / 4 + 2);
      this.canvasContext.draw(true);
    }
    /**
     * 预览图片
     */

  }, {
    key: "previewPoster",
    value: function () {
      var _previewPoster = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._canvasToTempFilePath();

              case 2:
                console.log('预览海报,海报临时地址:', this.posterImgSrc);
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  if (_this2.posterImgSrc) {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.previewImage({
                      current: _this2.posterImgSrc,
                      // 当前显示图片的http链接
                      urls: [_this2.posterImgSrc] // 需要预览的图片http链接列表

                    }).then(function () {
                      resolve();
                    })["catch"](function (e) {
                      reject(e);
                    });
                  } else {
                    console.log('海报图地址获取失败,海报临时地址:', _this2.posterImgSrc);
                    reject('海报图地址获取失败,海报临时地址:');
                  }
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function previewPoster() {
        return _previewPoster.apply(this, arguments);
      }

      return previewPoster;
    }()
    /**
     * 保存海报到相册
     * @returns {Promise<unknown>}
     */

  }, {
    key: "savePosterToPhoto",
    value: function () {
      var _savePosterToPhoto = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5() {
        var self, src;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                self = this;
                _context5.next = 3;
                return this._canvasToTempFilePath();

              case 3:
                src = this.posterImgSrc;

                if (this.params.debug) {
                  console.time("canvas图片保存");
                  console.log('开始保存图片到相册', src);
                } //保存相册授权后方可执行
                // app.checkAuthorize("scope.writePhotosAlbum").then(res => {


                return _context5.abrupt("return", new Promise(function (resoleve, reject) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.saveImageToPhotosAlbum({
                    filePath: src,
                    success: function success() {
                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.hideToast();
                      resoleve('图片保存到相册');
                      console.log('成功保存图片到相册', src);

                      if (self.params.debug) {
                        console.timeEnd("canvas图片保存");
                      }
                    },
                    fail: function fail(err) {
                      console.log(333, err); // if (err.errMsg == "saveImageToPhotosAlbum:fail authorize no response" || err.errMsg == "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg == "saveImageToPhotosAlbum:fail auth deny") {

                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.hideLoading();
                      console.log(444, err);
                      self.getAuth(); // }

                      reject(err);
                    }
                  });
                }));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function savePosterToPhoto() {
        return _savePosterToPhoto.apply(this, arguments);
      }

      return savePosterToPhoto;
    }()
    /**
     * 获取授权
     */

  }, {
    key: "getAuth",
    value: function getAuth() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.hideLoading();

      if (this.params.debug) {
        console.log('拒绝保存');
      } // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用


      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showModal({
        content: '需要您授权保存相册',
        confirmColor: "#E23A4E",
        showCancel: false,
        success: function success(modalSuccess) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.openSetting({
            success: function success(settingdata) {
              console.log("settingdata", settingdata);

              if (settingdata.authSetting['scope.writePhotosAlbum']) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showToast({
                  title: '获取权限成功,再次点击图片即可保存',
                  icon: 'none',
                  duration: 3000
                });
              } else {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showToast({
                  title: '获取权限失败，将无法保存到相册',
                  icon: 'none',
                  duration: 3000
                });
              }
            },
            fail: function fail(failData) {
              console.log("failData", failData);
            },
            complete: function complete(finishData) {
              console.log("finishData", finishData);
            }
          });
        }
      });
    }
    /**
     * 下载网络图片到本地
     * @param targetSrc
     * @returns {Promise<FreePoster._downloadFile.props|string|any>}
     * @private
     */

  }, {
    key: "_downloadFile",
    value: function _downloadFile(targetSrc) {
      var _this3 = this;

      if (this.params.debug) {
        console.log("开始下载网络图片", targetSrc);
        console.time('网络图片下载时间', targetSrc);
      }

      if (targetSrc.indexOf('http') == -1) {
        return Promise.resolve(targetSrc);
      }

      return new Promise( /*#__PURE__*/function () {
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6(resolve, reject) {
          var localSrc;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.downloadFile({
                    url: targetSrc
                  });

                case 3:
                  localSrc = _context6.sent;

                  if (_this3.params.debug) {
                    console.log('网络图片下载成功', localSrc.tempFilePath);
                    console.timeEnd('网络图片下载时间', targetSrc);
                  }

                  resolve(localSrc.tempFilePath);
                  _context6.next = 12;
                  break;

                case 8:
                  _context6.prev = 8;
                  _context6.t0 = _context6["catch"](0);

                  if (_this3.params.debug) {
                    console.log('网络图片下载失败');
                  }

                  reject(_context6.t0);

                case 12:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, null, [[0, 8]]);
        }));

        return function (_x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * canvas截取临时图片
     * @private
     */

  }, {
    key: "_canvasToTempFilePath",
    value: function _canvasToTempFilePath() {
      var _this4 = this;

      var self = this;

      if (this.posterImgSrc) {
        console.log('canvas临时文件已存在', this.posterImgSrc);
        return Promise.resolve(this.posterImgSrc);
      }

      return new Promise(function (resolve, reject) {
        setTimeout( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee7() {
          var res;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;

                  if (_this4.params.debug) {
                    console.log('开始截取canvas目前的图像');
                    console.time("canvas截取图片");
                  }

                  _context7.next = 4;
                  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    quality: _this4.params.quality,
                    canvasId: _this4.params.canvasId
                  });

                case 4:
                  res = _context7.sent;

                  if (_this4.params.debug) {
                    console.log('截取canvas目前的图像成功', res.tempFilePath);
                    console.timeEnd("canvas截取图片");
                  }

                  _this4.posterImgSrc = res.tempFilePath;
                  resolve();
                  _context7.next = 13;
                  break;

                case 10:
                  _context7.prev = 10;
                  _context7.t0 = _context7["catch"](0);
                  reject(_context7.t0);

                case 13:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, null, [[0, 10]]);
        })), 300);
      });
    }
  }]);

  return FreePoster;
}();

/* harmony default export */ __webpack_exports__["default"] = (FreePoster);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_typeof(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_typeof(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var _i = 0; _i < descs.length; _i++) {
      Object.defineProperty(obj, descs[_i][0], descs[_i][1]);
    }

    return obj;
  };
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

var Chain = /*#__PURE__*/function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _createClass(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p["catch"](function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link = /*#__PURE__*/function () {
  function Link(interceptor) {
    _classCallCheck(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _createClass(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_objectSpread2({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    })["catch"](function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (p !== undefined && typeof p.abort === 'function') res.abort = p.abort;
  return res;
}
function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url; // eslint-disable-next-line no-console

  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    // eslint-disable-next-line no-console
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});

function Behavior(options) {
  return options;
}
function getPreload(taro) {
  return function (key, val) {
    if (_typeof(key) === 'object') {
      taro.preloadData = key;
    } else if (key !== undefined && val !== undefined) {
      taro.preloadData = _defineProperty({}, key, val);
    }
  };
}
function getInitPxTransform(taro) {
  return function (config) {
    var _config$designWidth = config.designWidth,
        designWidth = _config$designWidth === void 0 ? 700 : _config$designWidth,
        _config$deviceRatio = config.deviceRatio,
        deviceRatio = _config$deviceRatio === void 0 ? {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    } : _config$deviceRatio;
    taro.config = taro.config || {};
    taro.config.designWidth = designWidth;
    taro.config.deviceRatio = deviceRatio;
  };
}
function getPxTransform(taro) {
  return function (size) {
    var _ref = taro.config || {},
        _ref$designWidth = _ref.designWidth,
        designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
        _ref$deviceRatio = _ref.deviceRatio,
        deviceRatio = _ref$deviceRatio === void 0 ? {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    } : _ref$deviceRatio;

    if (!(designWidth in deviceRatio)) {
      throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
    }

    return parseInt(size, 10) * deviceRatio[designWidth] + 'rpx';
  };
}

/* eslint-disable camelcase */
var Taro = {
  Behavior: Behavior,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  Link: Link,
  interceptors: interceptors,
  Current: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["Current"],
  getCurrentInstance: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"],
  options: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["options"],
  nextTick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["nextTick"],
  eventCenter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["eventCenter"],
  Events: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["Events"],
  useDidShow: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useDidShow"],
  useDidHide: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useDidHide"],
  usePullDownRefresh: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["usePullDownRefresh"],
  useReachBottom: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useReachBottom"],
  usePageScroll: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageScroll"],
  useResize: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useResize"],
  useShareAppMessage: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useShareAppMessage"],
  useTabItemTap: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useTabItemTap"],
  useTitleClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useTitleClick"],
  useOptionMenuClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useOptionMenuClick"],
  usePullIntercept: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["usePullIntercept"],
  useShareTimeline: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useShareTimeline"],
  useAddToFavorites: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useAddToFavorites"],
  useReady: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useReady"],
  useRouter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useRouter"]
};
Taro.initPxTransform = getInitPxTransform(Taro);
Taro.preload = getPreload(Taro);
Taro.pxTransform = getPxTransform(Taro);

/* harmony default export */ __webpack_exports__["default"] = (Taro);
//# sourceMappingURL=index.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ })
/******/ ])["default"];
});