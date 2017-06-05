const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: ['babel-polyfill', './entry.js'],
  output: {
    filename: './main.js'
  },
  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 200
  },
  devtool: NODE_ENV === 'development' ? 'source-map' : 'eval',

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      USER: process.env.USER
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2017', 'es2015'],
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  }
};
