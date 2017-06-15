const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: ['babel-polyfill', './src/entry.ts'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 200
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : 'eval',
    resolve: {
        // changed from extensions: [".js", ".jsx"]
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      USER: process.env.USER
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true
    // }),
    new HtmlWebpackPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            presets: ['es2017', 'es2016', 'es2015'],
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  }
};
