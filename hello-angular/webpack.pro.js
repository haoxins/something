
'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const join = p => path.join(__dirname, p)

module.exports = {
  entry: {
    app: './app/main',
    vendor: './app/vendor'
  },

  output: {
    path: join('build'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
    }]
  },

  postcss: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-cssnext')
  ],

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['vendor']
    // }),
    new ExtractTextPlugin('[name].css')
  ]
}
