
'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const joindir = p => path.join(__dirname, p)

module.exports = {
  devtool: 'source-map',

  entry: {
    main: ['webpack-hot-middleware/client', joindir('view/main')],
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.NoErrorsPlugin(),
  ]
}
