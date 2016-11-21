
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
    ReactDOM: 'react-dom',
    React: 'react'
  },

  module: {
    loaders: [{
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  devtool: 'source-map'
}
