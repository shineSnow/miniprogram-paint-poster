class FreePoster {
  
  /**
   * 初始化canvas
   * @param options
   */
  constructor(options) {
    const obj = {
      x:0,
      y:0,
      width:750,
      height:1334,
      quality:1,
      canvasId:'posterCanvasId',
      debug:false,
      globalEnv:window.wx,
    };
    this.params = Object.assign(obj,options);
    this.GLOBAL_ENV= this.params.globalEnv;
    this.canvasContext = this.GLOBAL_ENV.createCanvasContext(this.params.canvasId);
    this.posterImgSrc="";
  }

  /**
   * canvas绘制背景色
   */
  setCanvasBackground(canvasBackground) {
    if(canvasBackground) {
      let color = canvasBackground;
      const {width,height} = this.params;
      if (this.params.debug) console.log('canvas的背景色为：',color);
      this.canvasContext.save()
      this.canvasContext.setFillStyle(color);
      this.canvasContext.fillRect(0, 0, width, height)
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
  async paintImg(imgInfo) {
    const {src,x,y,width,height} = imgInfo;
    const newSrc = await this._downloadFile(src);
    if (this.params.debug) {console.log("开始绘制图片",newSrc)}
    return new Promise((resolve,reject) =>{
      try {
        this.canvasContext.drawImage(newSrc, x, y, width, height);
        if (this.params.debug) {console.log("开始绘制图片完成")}
        resolve()
      }catch (e) {
        reject(e)
      }
      this.canvasContext.draw(true);
    })

  }

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
  async drawPaddingCircleImg(imgInfo) {
    const {src,x,y,width,height,backgroundColor,padding} = imgInfo;
    let paddingCircleInfo = Object.assign({},imgInfo,{x:x-padding,y:y-padding,width:width+2*padding,height:height+2*padding});
    await this.paintCircleShape(paddingCircleInfo);
    await this.paintCircleImage(imgInfo);
  }

  /**
   * canvas绘制圆形裁切图片
   * @param imgInfo.src 图片链接
   * @param imgInfo.x 图片左上角x坐标
   * @param imgInfo.y 图片左上角y坐标
   * @param imgInfo.width 图片宽度
   * @param imgInfo.height 图片高度
   * @returns {Promise<void>}
   */
  async paintCircleImage(imgInfo) {
    const {src,x,y,width,height} = imgInfo;
    const newSrc = await this._downloadFile(src);
    let circleX = x + width/2;
    let circleY = y + height/2;
    let circleR = height/2;
    this.canvasContext.save();
    this.canvasContext.beginPath();
    this.canvasContext.arc(circleX,circleY,circleR,0,2*Math.PI);
    this.canvasContext.clip()
    this.canvasContext.drawImage(newSrc, x, y, width, height);
    this.canvasContext.restore();
    this.canvasContext.draw(true)
  }

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
  async paintRadiusImage(imgInfo) {
    if (this.params.debug) console.log('开始圆角矩形图片', imgInfo);
    const {x,y,width,height,r,src} = imgInfo
    let circleR = r;
    const newSrc = await this._downloadFile(src);
    if (width< 2 * r) circleR = width / 2;
    if (height < 2 * r) circleR = height / 2;
    this.canvasContext.save();
    this.canvasContext.beginPath()
    this.canvasContext.moveTo(x + circleR, y);
    this.canvasContext.arcTo(x + width, y, x + width, y + height, circleR);
    this.canvasContext.arcTo(x + width, y + height, x, y + height, circleR);
    this.canvasContext.arcTo(x, y + height, x, y, circleR);
    this.canvasContext.arcTo(x, y, x + width, y, circleR);
    this.canvasContext.clip()
    this.canvasContext.drawImage(newSrc, x, y, width, height);
    this.canvasContext.restore();
    this.canvasContext.draw(true);
  }


  /**
   * 绘制圆形形状
   * @param shapeInfo.x 矩形左上角x坐标
   * @param shapeInfo.y 矩形左上角y坐标
   * @param shapeInfo.width 矩形宽度
   * @param shapeInfo.height 矩形高度
   * @param shapeInfo.backgroundColor 矩形背景颜色
   */
  paintCircleShape(shapeInfo) {
    if (this.params.debug) console.log('开始绘制圆形o', shapeInfo);
    const {x,y,width,height,backgroundColor} = shapeInfo;
    let circleX,circleY,circleR;
    circleX = x + width/2;
    circleY = y + height/2;
    circleR = height/2;
    this.canvasContext.save();
    this.canvasContext.beginPath();
    this.canvasContext.arc(circleX,circleY,circleR,0,2*Math.PI);
    this.canvasContext.clip()
    this.canvasContext.setFillStyle(backgroundColor);
    this.canvasContext.fillRect(x, y, width, height)
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
  paintRectShape(shapeInfo) {
    if (this.params.debug) console.log('开始绘制矩形', shapeInfo);
    const {x,y,width,height,backgroundColor} = shapeInfo;
    this.canvasContext.save();
    this.canvasContext.setFillStyle(backgroundColor);
    this.canvasContext.fillRect(x, y, width, height)
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
  paintOneLineText(textInfo) {
    if (this.params.debug) console.log('开始绘制单行文字', textInfo);
    const {x,y,fontSize,color,MaxTextNum} = textInfo;
    let txt = textInfo.txt;
    let font = textInfo.font || '';
    this.canvasContext.save()
    this.canvasContext.setTextAlign('left');
    this.canvasContext.setFontSize(fontSize);
    this.canvasContext.setFillStyle(color);
    if(font) {
      this.canvasContext.font = font;
    } else {
      this.canvasContext.font='normal "Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif'
    }
    let txtWidth =  this.canvasContext.measureText(txt).width;
    if (this.params.debug) console.log("单行文字的宽度--"+txt, txtWidth);
    if (this.params.debug) console.log("文字的位数--"+txt, txt.length);
    if(txt && MaxTextNum) {
      let len = txt.length;
      if(len > MaxTextNum) {
        txt = txt.substr(0,MaxTextNum) + '...'
      }
    }
    this.canvasContext.fillText(txt,x,y);
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
  paintCircularText(textInfo) {
    if (this.params.debug) console.log('开始绘制环形文字', textInfo);
    const {txt,fontSize,color,circularH,circularW,circularColor,circularY,circularX} = textInfo;
    // let circularW=''
    let txtWidth =  this.canvasContext.measureText(txt).width;
    // let circularW = txtWidth + 300;
    // let circularW = txtWidth*6;
    // if(txtWidth < 30) {circularW = txtWidth + 60}
    // if(txtWidth >= 30 && txtWidth < 60) {circularW = txtWidth + 160}
    // if(txtWidth >= 60 && txtWidth < 200) {circularW = txtWidth + 360}

    // let circularX = (this.params.width - circularW)/2;
    if (this.params.debug) console.log("环形文字的宽度--"+txt, txtWidth);
    if (this.params.debug) console.log('环形的宽度', circularW);
    let halfCircularH = circularH/2;
    let halfCircularW = circularW/2;
    this.canvasContext.setFillStyle(circularColor);
    this.canvasContext.arc(circularX,circularY + halfCircularH,halfCircularH,0,2*Math.PI);
    this.canvasContext.arc(circularX + circularW,circularY + halfCircularH,halfCircularH,0,2*Math.PI);
    this.canvasContext.rect(circularX, circularY, circularW, circularH);
    this.canvasContext.fill();
    this.canvasContext.setFillStyle(color);
    this.canvasContext.setFontSize(fontSize);
    this.canvasContext.setTextAlign("center")
    // this.canvasContext.fillText(txt,x,y)
    this.canvasContext.fillText(txt,circularX + halfCircularW ,(circularY + halfCircularH +fontSize/4)+2)
    this.canvasContext.draw(true)
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
  paintMultiLine(textInfo) {
    if (this.params.debug) console.log('开始多行文本', textInfo);
    const {txt,x,y,fontSize,color,lineDistance=36,oneLineTextNum} = textInfo;
    if(!txt) return;
    let multiText = txt;
    let multiTextLen = txt.length;
    // 如果设置的单行文字数量大于文字总数
    if(oneLineTextNum > multiText.length){
      console.error('多行文本字数 < 设置的允许单行文字的字数', textInfo);
      this.paintOneLineText(textInfo)
      return;
    }
    let multiLineArr = [];
    let totalLineNum = Math.ceil(multiTextLen/oneLineTextNum);
    let startIndex = 0;
    let endIndex =oneLineTextNum;
    for(let i = 0; i < totalLineNum; i++ ){
      startIndex = i*oneLineTextNum;
      endIndex = (i+1)*oneLineTextNum;
      let temStr = multiText.slice(startIndex,endIndex);
      multiLineArr.push(temStr);
    }
    if (this.params.debug) console.log('多行文本的分割结果', multiLineArr);
    for(let i=0;i<multiLineArr.length;i++) {
      let tempTxt = multiLineArr[i];
      let tempY = y + i*lineDistance;
      let params ={...textInfo,y:tempY,txt:tempTxt}
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
  paintBorderCircularText(textInfo) {
    if (this.params.debug) console.log('开始绘制环形文字', textInfo);
    const {txt,x,y,fontSize,color,borderColor,circularH,circularW,circularColor,circularX,circularY} = textInfo;
    // let circularW=''
    let txtWidth =  this.canvasContext.measureText(txt).width;
    // let circularW = txtWidth + 300;
    // let circularW = txtWidth*6;
    // if(txtWidth < 30) {circularW = txtWidth + 60}
    // if(txtWidth >= 30 && txtWidth < 60) {circularW = txtWidth + 160}
    // if(txtWidth >= 60 && txtWidth < 200) {circularW = txtWidth + 360}

    // let circularX = (this.params.width - circularW)/2;
    if (this.params.debug) console.log("环形文字的宽度--"+txt, txtWidth);
    if (this.params.debug) console.log('环形的宽度', circularW);
    let halfCircularH = circularH/2;
    let halfCircularW = circularW/2;
    // this.canvasContext.setFillStyle(circularColor);
    this.canvasContext.setStrokeStyle(borderColor || 'red');
    this.canvasContext.arc(circularX,circularY + halfCircularH,halfCircularH,0.5*Math.PI,1.5*Math.PI);
    this.canvasContext.arc(circularX + circularW,circularY + halfCircularH,halfCircularH,1.5*Math.PI,0.5*Math.PI);
    // this.canvasContext.strokeRect(circularX, circularY, circularW, circularH);
    this.canvasContext.moveTo(circularX, circularY);
    this.canvasContext.lineTo((circularX + circularW),circularY);
    this.canvasContext.moveTo(circularX, (circularY + circularH));
    this.canvasContext.lineTo((circularX + circularW),(circularY + circularH));
    // this.canvasContext.fill();
    this.canvasContext.stroke()
    this.canvasContext.setFillStyle(color);
    this.canvasContext.setFontSize(fontSize);
    this.canvasContext.setTextAlign("center")
    // this.canvasContext.fillText(txt,x,y)
    if (this.params.debug) console.log(`环形文字的坐标--x:${circularX + halfCircularW},y:${(circularY + halfCircularH +fontSize/4)+2}`);
    this.canvasContext.fillText(txt,circularX + halfCircularW ,(circularY + halfCircularH +fontSize/4)+2)
    this.canvasContext.draw(true)
  }

  /**
   * 预览图片
   */
  async previewPoster() {
    await this._canvasToTempFilePath();
    console.log('预览海报,海报临时地址:',this.posterImgSrc);
    return new Promise((resolve,reject) =>{
      if(this.posterImgSrc){
        this.GLOBAL_ENV.previewImage({
          current: this.posterImgSrc, // 当前显示图片的http链接
          urls: [this.posterImgSrc] // 需要预览的图片http链接列表
        }).then(() =>{
          resolve()
        }).catch(e =>{
          reject(e)
        })
      } else {
        console.log('海报图地址获取失败,海报临时地址:',this.posterImgSrc);
        reject('海报图地址获取失败,海报临时地址:')
      }
    })
  }

  /**
   * 保存海报到相册
   * @returns {Promise<unknown>}
   */
  async savePosterToPhoto() {
    let self = this;
    await this._canvasToTempFilePath();
    let src = this.posterImgSrc;
    if (this.params.debug){ console.time("canvas图片保存");console.log('开始保存图片到相册',src)}
    //保存相册授权后方可执行
    // app.checkAuthorize("scope.writePhotosAlbum").then(res => {
    return new Promise((resoleve, reject) => {
      this.GLOBAL_ENV.saveImageToPhotosAlbum({
        filePath: src,
        success() {
          self.GLOBAL_ENV.hideToast()
          resoleve('图片保存到相册')
          console.log('成功保存图片到相册', src)
          if (self.params.debug) { console.timeEnd("canvas图片保存") }
        },
        fail: function (err) {
          console.log(333, err)
          // if (err.errMsg == "saveImageToPhotosAlbum:fail authorize no response" || err.errMsg == "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg == "saveImageToPhotosAlbum:fail auth deny") {
          self.GLOBAL_ENV.hideLoading()
          console.log(444, err)
          self.getAuth()
          // }
          reject(err)
        }
      })
    })
  }

  /**
   * 获取授权
   */
  getAuth() {
    const self = this;
    this.GLOBAL_ENV.hideLoading()
    if (this.params.debug) { console.log('拒绝保存') }
    // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
    this.GLOBAL_ENV.showModal({
      content: '需要您授权保存相册',
      confirmColor: "#E23A4E",
      showCancel: false,
      success: modalSuccess => {
        this.GLOBAL_ENV.openSetting({
          success(settingdata) {
            console.log("settingdata", settingdata)
            if (settingdata.authSetting['scope.writePhotosAlbum']) {
              self.GLOBAL_ENV.showToast({ title: '获取权限成功,再次点击图片即可保存', icon: 'none', duration: 3000 })
            } else {
              self.GLOBAL_ENV.showToast({ title: '获取权限失败，将无法保存到相册', icon: 'none', duration: 3000 })
            }
          },
          fail(failData) {
            console.log("failData", failData)
          },
          complete(finishData) {
            console.log("finishData", finishData)
          }
        })
      }
    })
  }

  /**
   * 下载网络图片到本地
   * @param targetSrc
   * @returns {Promise<FreePoster._downloadFile.props|string|any>}
   * @private
   */
   _downloadFile(targetSrc) {
    if (this.params.debug) {
      console.log("开始下载网络图片",targetSrc)
      console.time('网络图片下载时间',targetSrc);
    }
    if(targetSrc.indexOf('http') == -1) {
      return Promise.resolve(targetSrc);
    }

    return new Promise(async (resolve,reject) =>{
      try {
        const localSrc = await this.GLOBAL_ENV.downloadFile({url:targetSrc});
        if (this.params.debug) {
          console.log('网络图片下载成功', localSrc.tempFilePath);
          console.timeEnd('网络图片下载时间',targetSrc);
        }
        resolve(localSrc.tempFilePath)
      }catch (e) {
        if (this.params.debug) {
          console.log('网络图片下载失败');
        }
        reject(e)
      }

    })
  }

  /**
   * canvas截取临时图片
   * @private
   */
  _canvasToTempFilePath() {
    const self = this;
    if(this.posterImgSrc) {
      console.log('canvas临时文件已存在',this.posterImgSrc);
      return Promise.resolve(this.posterImgSrc)
    }
    return new Promise((resolve,reject) =>{
        setTimeout(async () =>{
        try {
          if (this.params.debug){ console.log('开始截取canvas目前的图像');console.time("canvas截取图片")}
          const res = await this.GLOBAL_ENV.canvasToTempFilePath({
            x: 0,
            y: 0,
            quality: this.params.quality,
            canvasId: this.params.canvasId,
          })
          if (this.params.debug) { console.log('截取canvas目前的图像成功',res.tempFilePath); console.timeEnd("canvas截取图片")}
          this.posterImgSrc = res.tempFilePath;
          resolve()
        }catch (e) {
          reject(e)
        }
        },300);
    });


  }

}

export default FreePoster;
