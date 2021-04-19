const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin') // 引入压缩插件
module.exports = {
  mode: 'none',
  externals:{
    "@tarojs/taro":'Taro'
  },
  entry: {
    freePoster:path.join(__dirname, 'src', 'index'),
    'freePoster.min':path.join(__dirname, 'src', 'index')
  },
  output: {
    filename: "[name].js",
    libraryExport:"default",
    library:"FreePoster",
    libraryTarget:'umd'
  },
  optimization:{
    minimize:true,
    minimizer:[
      new UglifyJsPlugin({
        include: /\.min\.js$/,
    }),
  //   new TerserPlugin({ // 使用压缩插件
  //     include: /\.min\.js$/
  // })
    ]
  },

};