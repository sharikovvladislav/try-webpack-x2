const webpack = require('webpack');

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
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2017&presets[]=es2015'
      }
    ]
  }
};
