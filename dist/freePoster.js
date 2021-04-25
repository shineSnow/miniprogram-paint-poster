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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



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
      globalEnv: window.wx
    };
    this.params = Object.assign(obj, options);
    this.GLOBAL_ENV = this.params.globalEnv;
    this.canvasContext = this.GLOBAL_ENV.createCanvasContext(this.params.canvasId);
    this.posterImgSrc = "";
  }
  /**
   * canvas绘制背景色
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FreePoster, [{
    key: "setCanvasBackground",
    value: function setCanvasBackground(canvasBackground) {
      if (canvasBackground) {
        var color = canvasBackground;
        var _this$params = this.params,
            width = _this$params.width,
            height = _this$params.height;
        if (this.params.debug) console.log('canvas的背景色为：', color);
        this.canvasContext.save();
        this.canvasContext.setFillStyle(color);
        this.canvasContext.fillRect(0, 0, width, height);
        this.canvasContext.restore();
        this.canvasContext.draw(true);
      }
    }
    /**
     * 默认绘制矩形图片
     * @param src 图片地址
     * @param x  相对canvas左上角的x坐标
     * @param y  相对canvas左上角的y坐标
     * @param width   图片宽度
     * @param height   图片高度
     */

  }, {
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
     * canvas绘制圆角矩形图片
     * @param imgInfo.x  矩形左上角的横坐标（非圆角矩形时左上角横坐标）。
     * @param imgInfo.y  矩形左上角的纵坐标（非圆角矩形时左上角纵坐标）。
     * @param imgInfo.width  矩形的宽度。
     * @param imgInfo.height  矩形的高度。
     * @param imgInfo.r  圆角所处圆的半径尺寸。理解上面自定义方法的关键在于对它所用到方法的理解
     * @param imgInfo.src  图片地址
     * @returns {Promise<void>}
     */

  }, {
    key: "paintRadiusImage",
    value: function () {
      var _paintRadiusImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4(imgInfo) {
        var x, y, width, height, r, src, circleR, newSrc;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.params.debug) console.log('开始圆角矩形图片', imgInfo);
                x = imgInfo.x, y = imgInfo.y, width = imgInfo.width, height = imgInfo.height, r = imgInfo.r, src = imgInfo.src;
                circleR = r;
                _context4.next = 5;
                return this._downloadFile(src);

              case 5:
                newSrc = _context4.sent;
                if (width < 2 * r) circleR = width / 2;
                if (height < 2 * r) circleR = height / 2;
                this.canvasContext.save();
                this.canvasContext.beginPath();
                this.canvasContext.moveTo(x + circleR, y);
                this.canvasContext.arcTo(x + width, y, x + width, y + height, circleR);
                this.canvasContext.arcTo(x + width, y + height, x, y + height, circleR);
                this.canvasContext.arcTo(x, y + height, x, y, circleR);
                this.canvasContext.arcTo(x, y, x + width, y, circleR);
                this.canvasContext.clip();
                this.canvasContext.drawImage(newSrc, x, y, width, height);
                this.canvasContext.restore();
                this.canvasContext.draw(true);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function paintRadiusImage(_x4) {
        return _paintRadiusImage.apply(this, arguments);
      }

      return paintRadiusImage;
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
     * @param textInfo.txt:文本
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
     * @param textInfo.fontSize  字体大小
     * @param textInfo.color  字体颜色
     * @param textInfo.circularH 环形的高度
     * @param textInfo.circularW 环形额宽度
     * @param textInfo.circularColor 环形的背景色
     * @param textInfo.circularY 环形的y坐标
     * @param textInfo.circularX 环形的x坐标
     */

  }, {
    key: "paintCircularText",
    value: function paintCircularText(textInfo) {
      if (this.params.debug) console.log('开始绘制环形文字', textInfo);
      var txt = textInfo.txt,
          fontSize = textInfo.fontSize,
          color = textInfo.color,
          circularH = textInfo.circularH,
          circularW = textInfo.circularW,
          circularColor = textInfo.circularColor,
          circularY = textInfo.circularY,
          circularX = textInfo.circularX; // let circularW=''

      var txtWidth = this.canvasContext.measureText(txt).width; // let circularW = txtWidth + 300;
      // let circularW = txtWidth*6;
      // if(txtWidth < 30) {circularW = txtWidth + 60}
      // if(txtWidth >= 30 && txtWidth < 60) {circularW = txtWidth + 160}
      // if(txtWidth >= 60 && txtWidth < 200) {circularW = txtWidth + 360}
      // let circularX = (this.params.width - circularW)/2;

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
      var _previewPoster = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._canvasToTempFilePath();

              case 2:
                console.log('预览海报,海报临时地址:', this.posterImgSrc);
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  if (_this2.posterImgSrc) {
                    _this2.GLOBAL_ENV.previewImage({
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
                return _context5.stop();
            }
          }
        }, _callee5, this);
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
      var _savePosterToPhoto = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6() {
        var _this3 = this;

        var self, src;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = this;
                _context6.next = 3;
                return this._canvasToTempFilePath();

              case 3:
                src = this.posterImgSrc;

                if (this.params.debug) {
                  console.time("canvas图片保存");
                  console.log('开始保存图片到相册', src);
                } //保存相册授权后方可执行
                // app.checkAuthorize("scope.writePhotosAlbum").then(res => {


                return _context6.abrupt("return", new Promise(function (resoleve, reject) {
                  _this3.GLOBAL_ENV.saveImageToPhotosAlbum({
                    filePath: src,
                    success: function success() {
                      self.GLOBAL_ENV.hideToast();
                      resoleve('图片保存到相册');
                      console.log('成功保存图片到相册', src);

                      if (self.params.debug) {
                        console.timeEnd("canvas图片保存");
                      }
                    },
                    fail: function fail(err) {
                      console.log(333, err); // if (err.errMsg == "saveImageToPhotosAlbum:fail authorize no response" || err.errMsg == "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg == "saveImageToPhotosAlbum:fail auth deny") {

                      self.GLOBAL_ENV.hideLoading();
                      console.log(444, err);
                      self.getAuth(); // }

                      reject(err);
                    }
                  });
                }));

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
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
      var _this4 = this;

      var self = this;
      this.GLOBAL_ENV.hideLoading();

      if (this.params.debug) {
        console.log('拒绝保存');
      } // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用


      this.GLOBAL_ENV.showModal({
        content: '需要您授权保存相册',
        confirmColor: "#E23A4E",
        showCancel: false,
        success: function success(modalSuccess) {
          _this4.GLOBAL_ENV.openSetting({
            success: function success(settingdata) {
              console.log("settingdata", settingdata);

              if (settingdata.authSetting['scope.writePhotosAlbum']) {
                self.GLOBAL_ENV.showToast({
                  title: '获取权限成功,再次点击图片即可保存',
                  icon: 'none',
                  duration: 3000
                });
              } else {
                self.GLOBAL_ENV.showToast({
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
      var _this5 = this;

      if (this.params.debug) {
        console.log("开始下载网络图片", targetSrc);
        console.time('网络图片下载时间', targetSrc);
      }

      if (targetSrc.indexOf('http') == -1) {
        return Promise.resolve(targetSrc);
      }

      return new Promise( /*#__PURE__*/function () {
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee7(resolve, reject) {
          var localSrc;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return _this5.GLOBAL_ENV.downloadFile({
                    url: targetSrc
                  });

                case 3:
                  localSrc = _context7.sent;

                  if (_this5.params.debug) {
                    console.log('网络图片下载成功', localSrc.tempFilePath);
                    console.timeEnd('网络图片下载时间', targetSrc);
                  }

                  resolve(localSrc.tempFilePath);
                  _context7.next = 12;
                  break;

                case 8:
                  _context7.prev = 8;
                  _context7.t0 = _context7["catch"](0);

                  if (_this5.params.debug) {
                    console.log('网络图片下载失败');
                  }

                  reject(_context7.t0);

                case 12:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, null, [[0, 8]]);
        }));

        return function (_x5, _x6) {
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
      var _this6 = this;

      var self = this;

      if (this.posterImgSrc) {
        console.log('canvas临时文件已存在', this.posterImgSrc);
        return Promise.resolve(this.posterImgSrc);
      }

      return new Promise(function (resolve, reject) {
        setTimeout( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee8() {
          var res;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.prev = 0;

                  if (_this6.params.debug) {
                    console.log('开始截取canvas目前的图像');
                    console.time("canvas截取图片");
                  }

                  _context8.next = 4;
                  return _this6.GLOBAL_ENV.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    quality: _this6.params.quality,
                    canvasId: _this6.params.canvasId
                  });

                case 4:
                  res = _context8.sent;

                  if (_this6.params.debug) {
                    console.log('截取canvas目前的图像成功', res.tempFilePath);
                    console.timeEnd("canvas截取图片");
                  }

                  _this6.posterImgSrc = res.tempFilePath;
                  resolve();
                  _context8.next = 13;
                  break;

                case 10:
                  _context8.prev = 10;
                  _context8.t0 = _context8["catch"](0);
                  reject(_context8.t0);

                case 13:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, null, [[0, 10]]);
        })), 300);
      });
    }
  }]);

  return FreePoster;
}();

/* harmony default export */ __webpack_exports__["default"] = (FreePoster);

/***/ }),
/* 6 */
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


/***/ })
/******/ ])["default"];
});