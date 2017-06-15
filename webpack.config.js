const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: ['babel-polyfill', './src/entry.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
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
    new HtmlWebpackPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2017', 'es2016', 'es2015'],
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  }
};
