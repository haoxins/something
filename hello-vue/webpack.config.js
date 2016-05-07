
'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const joindir = p => path.join(__dirname, p)
const isDev = process.env.NODE_ENV !== 'build'

const commons = isDev ? ['webpack-hot-middleware/client'] : []
const plugins = isDev ? [
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('[name].css'),
  new webpack.NoErrorsPlugin(),
] : [
  new ExtractTextPlugin('[name].css'),
]

module.exports = {
  devtool: 'source-map',

  entry: {
    main: [...commons, joindir('view/main')],
  },

  output: {
    path: joindir('build'),
    publicPath: '/build/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.css']
  },

  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      exclude: /node_modules/
    }]
  },

  plugins
}
