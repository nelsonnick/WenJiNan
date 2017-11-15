'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const glob = require('glob')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'html/template.html',
    //   inject: true
    // }),
    new FriendlyErrorsPlugin()
  ]
})

//构建生成多页面的HtmlWebpackPlugin配置，主要是循环生成
var pages = getEntries('./src/module/**/index.js')
for (var pathname in pages) {
  var conf = {
    filename: pathname + '.html',
    template: 'src/module/' + pathname + '/' + pathname + '.html',
    chunks: ['vendor', 'manifest', pathname],
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    chunksSortMode: 'dependency'
  };
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}

function getEntries(globPath) {
  let entries = {}, splits, filename;
  glob.sync(globPath).forEach(function (entry) {
    splits = entry.split('/');
    filename = splits[splits.length - 2];
    entries[filename] = entry;
  });
  return entries;
}
