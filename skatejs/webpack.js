
'use strict'

const path = require('path')

module.exports = {
  entry: {
    index: path.join(__dirname, 'index.js'),
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },

  externals: {
    skatejs: 'skate'
  },

  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/
    }]
  },

  devtool: 'source-map'
}