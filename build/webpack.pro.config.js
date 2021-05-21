/*
 * @Author: lux
 * @Date: 2021-05-21 10:28:15
 * @LastEditTime: 2021-05-21 14:36:46
 * @LastEditors: lux
 * @FilePath: \luxUtil\build\webpack.pro.config.js
 */
const webpack = require('webpack')
const path = require('path')

const { name } = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

module.exports = {
  mode: 'production',
  entry: {
    luxutil: path.resolve(rootPath, 'src/index.js')
  },
  output: {
    filename: `[name].min.js`,
    path: path.resolve(rootPath, 'dist'),
    library: `${name}`,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // 启用作用域提升，作用是让代码文件更小、运行的更快
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
