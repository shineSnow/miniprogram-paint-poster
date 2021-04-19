(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Taro"));
	else if(typeof define === 'function' && define.amd)
		define(["Taro"], factory);
	else if(typeof exports === 'object')
		exports["FreePoster"] = factory(require("Taro"));
	else
		root["FreePoster"] = factory(root["Taro"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taro = __webpack_require__(1);

var _taro2 = _interopRequireDefault(_taro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FreePoster = function () {
  /**
   * 初始化canvas
   * @param options
   */
  function FreePoster(options) {
    _classCallCheck(this, FreePoster);

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
    this.canvasContext = _taro2.default.createCanvasContext(this.params.canvasId);
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


  _createClass(FreePoster, [{
    key: 'paintImg',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(imgInfo) {
        var _this = this;

        var src, x, y, width, height, newSrc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
                return _context.abrupt('return', new Promise(function (resolve, reject) {
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
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function paintImg(_x) {
        return _ref.apply(this, arguments);
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
    key: 'drawPaddingCircleImg',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(imgInfo) {
        var src, x, y, width, height, backgroundColor, padding, paddingCircleInfo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                src = imgInfo.src, x = imgInfo.x, y = imgInfo.y, width = imgInfo.width, height = imgInfo.height, backgroundColor = imgInfo.backgroundColor, padding = imgInfo.padding;
                paddingCircleInfo = Object.assign({}, imgInfo, { x: x - padding, y: y - padding, width: width + 2 * padding, height: height + 2 * padding });
                _context2.next = 4;
                return this.paintCircleShape(paddingCircleInfo);

              case 4:
                _context2.next = 6;
                return this.paintCircleImage(imgInfo);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function drawPaddingCircleImg(_x2) {
        return _ref2.apply(this, arguments);
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
    key: 'paintCircleImage',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(imgInfo) {
        var src, x, y, width, height, newSrc, circleX, circleY, circleR;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function paintCircleImage(_x3) {
        return _ref3.apply(this, arguments);
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
    key: 'paintCircleShape',
    value: function paintCircleShape(shapeInfo) {
      if (this.params.debug) console.log('开始绘制圆形o', shapeInfo);
      var x = shapeInfo.x,
          y = shapeInfo.y,
          width = shapeInfo.width,
          height = shapeInfo.height,
          backgroundColor = shapeInfo.backgroundColor;

      var circleX = void 0,
          circleY = void 0,
          circleR = void 0;
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
    key: 'paintRectShape',
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
    key: 'paintOneLineText',
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
    key: 'paintCircularText',
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
          circularY = textInfo.circularY;
      // let circularW=''

      var txtWidth = this.canvasContext.measureText(txt).width;
      // let circularW = txtWidth + 300;
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
      this.canvasContext.setTextAlign("center");
      // this.canvasContext.fillText(txt,x,y)
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
    key: 'paintMultiLine',
    value: function paintMultiLine(textInfo) {
      if (this.params.debug) console.log('开始多行文本', textInfo);
      var txt = textInfo.txt,
          x = textInfo.x,
          y = textInfo.y,
          fontSize = textInfo.fontSize,
          color = textInfo.color,
          _textInfo$lineDistanc = textInfo.lineDistance,
          lineDistance = _textInfo$lineDistanc === undefined ? 36 : _textInfo$lineDistanc,
          oneLineTextNum = textInfo.oneLineTextNum;

      if (!txt) return;
      var multiText = txt;
      var multiTextLen = txt.length;
      // 如果设置的单行文字数量大于文字总数
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
        var params = _extends({}, textInfo, { y: tempY, txt: tempTxt });
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
    key: 'paintBorderCircularText',
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
          circularY = textInfo.circularY;
      // let circularW=''

      var txtWidth = this.canvasContext.measureText(txt).width;
      // let circularW = txtWidth + 300;
      // let circularW = txtWidth*6;
      // if(txtWidth < 30) {circularW = txtWidth + 60}
      // if(txtWidth >= 30 && txtWidth < 60) {circularW = txtWidth + 160}
      // if(txtWidth >= 60 && txtWidth < 200) {circularW = txtWidth + 360}

      // let circularX = (this.params.width - circularW)/2;
      if (this.params.debug) console.log("环形文字的宽度--" + txt, txtWidth);
      if (this.params.debug) console.log('环形的宽度', circularW);
      var halfCircularH = circularH / 2;
      var halfCircularW = circularW / 2;
      // this.canvasContext.setFillStyle(circularColor);
      this.canvasContext.setStrokeStyle(borderColor || 'red');
      this.canvasContext.arc(circularX, circularY + halfCircularH, halfCircularH, 0.5 * Math.PI, 1.5 * Math.PI);
      this.canvasContext.arc(circularX + circularW, circularY + halfCircularH, halfCircularH, 1.5 * Math.PI, 0.5 * Math.PI);
      // this.canvasContext.strokeRect(circularX, circularY, circularW, circularH);
      this.canvasContext.moveTo(circularX, circularY);
      this.canvasContext.lineTo(circularX + circularW, circularY);
      this.canvasContext.moveTo(circularX, circularY + circularH);
      this.canvasContext.lineTo(circularX + circularW, circularY + circularH);
      // this.canvasContext.fill();
      this.canvasContext.stroke();
      this.canvasContext.setFillStyle(color);
      this.canvasContext.setFontSize(fontSize);
      this.canvasContext.setTextAlign("center");
      // this.canvasContext.fillText(txt,x,y)
      if (this.params.debug) console.log('\u73AF\u5F62\u6587\u5B57\u7684\u5750\u6807--x:' + (circularX + halfCircularW) + ',y:' + (circularY + halfCircularH + fontSize / 4 + 2));
      this.canvasContext.fillText(txt, circularX + halfCircularW, circularY + halfCircularH + fontSize / 4 + 2);
      this.canvasContext.draw(true);
    }

    /**
     * 预览图片
     */

  }, {
    key: 'previewPoster',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._canvasToTempFilePath();

              case 2:
                console.log('预览海报,海报临时地址:', this.posterImgSrc);
                return _context4.abrupt('return', new Promise(function (resolve, reject) {
                  if (_this2.posterImgSrc) {
                    _taro2.default.previewImage({
                      current: _this2.posterImgSrc, // 当前显示图片的http链接
                      urls: [_this2.posterImgSrc] // 需要预览的图片http链接列表
                    }).then(function () {
                      resolve();
                    }).catch(function (e) {
                      reject(e);
                    });
                  } else {
                    console.log('海报图地址获取失败,海报临时地址:', _this2.posterImgSrc);
                    reject('海报图地址获取失败,海报临时地址:');
                  }
                }));

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function previewPoster() {
        return _ref4.apply(this, arguments);
      }

      return previewPoster;
    }()

    /**
     * 保存海报到相册
     * @returns {Promise<unknown>}
     */

  }, {
    key: 'savePosterToPhoto',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var self, src;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                self = this;
                _context5.next = 3;
                return this._canvasToTempFilePath();

              case 3:
                src = this.posterImgSrc;

                if (this.params.debug) {
                  console.time("canvas图片保存");console.log('开始保存图片到相册', src);
                }
                //保存相册授权后方可执行
                // app.checkAuthorize("scope.writePhotosAlbum").then(res => {
                return _context5.abrupt('return', new Promise(function (resoleve, reject) {
                  _taro2.default.saveImageToPhotosAlbum({
                    filePath: src,
                    success: function success() {
                      _taro2.default.hideToast();
                      resoleve('图片保存到相册');
                      console.log('成功保存图片到相册', src);
                      if (self.params.debug) {
                        console.timeEnd("canvas图片保存");
                      }
                    },

                    fail: function fail(err) {
                      console.log(333, err);
                      // if (err.errMsg == "saveImageToPhotosAlbum:fail authorize no response" || err.errMsg == "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg == "saveImageToPhotosAlbum:fail auth deny") {
                      _taro2.default.hideLoading();
                      console.log(444, err);
                      self.getAuth();
                      // }
                      reject(err);
                    }
                  });
                }));

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function savePosterToPhoto() {
        return _ref5.apply(this, arguments);
      }

      return savePosterToPhoto;
    }()

    /**
     * 获取授权
     */

  }, {
    key: 'getAuth',
    value: function getAuth() {
      _taro2.default.hideLoading();
      if (this.params.debug) {
        console.log('拒绝保存');
      }
      // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
      _taro2.default.showModal({
        content: '需要您授权保存相册',
        confirmColor: "#E23A4E",
        showCancel: false,
        success: function success(modalSuccess) {
          _taro2.default.openSetting({
            success: function success(settingdata) {
              console.log("settingdata", settingdata);
              if (settingdata.authSetting['scope.writePhotosAlbum']) {
                _taro2.default.showToast({ title: '获取权限成功,再次点击图片即可保存', icon: 'none', duration: 3000 });
              } else {
                _taro2.default.showToast({ title: '获取权限失败，将无法保存到相册', icon: 'none', duration: 3000 });
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
    key: '_downloadFile',
    value: function _downloadFile(targetSrc) {
      var _this3 = this;

      if (this.params.debug) {
        console.log("开始下载网络图片", targetSrc);
        console.time('网络图片下载时间', targetSrc);
      }
      if (targetSrc.indexOf('http') == -1) {
        return Promise.resolve(targetSrc);
      }

      return new Promise(function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
          var localSrc;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return _taro2.default.downloadFile({ url: targetSrc });

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
                  _context6.t0 = _context6['catch'](0);

                  if (_this3.params.debug) {
                    console.log('网络图片下载失败');
                  }
                  reject(_context6.t0);

                case 12:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this3, [[0, 8]]);
        }));

        return function (_x4, _x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    }

    /**
     * canvas截取临时图片
     * @private
     */

  }, {
    key: '_canvasToTempFilePath',
    value: function _canvasToTempFilePath() {
      var _this4 = this;

      var self = this;
      if (this.posterImgSrc) {
        console.log('canvas临时文件已存在', this.posterImgSrc);
        return Promise.resolve(this.posterImgSrc);
      }
      return new Promise(function (resolve, reject) {
        setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var res;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;

                  if (_this4.params.debug) {
                    console.log('开始截取canvas目前的图像');console.time("canvas截取图片");
                  }
                  _context7.next = 4;
                  return _taro2.default.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    quality: _this4.params.quality,
                    canvasId: _this4.params.canvasId
                  });

                case 4:
                  res = _context7.sent;

                  if (_this4.params.debug) {
                    console.log('截取canvas目前的图像成功', res.tempFilePath);console.timeEnd("canvas截取图片");
                  }
                  _this4.posterImgSrc = res.tempFilePath;
                  resolve();
                  _context7.next = 13;
                  break;

                case 10:
                  _context7.prev = 10;
                  _context7.t0 = _context7['catch'](0);

                  reject(_context7.t0);

                case 13:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this4, [[0, 10]]);
        })), 300);
      });
    }
  }]);

  return FreePoster;
}();

exports.default = FreePoster;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ })
/******/ ])["default"];
});