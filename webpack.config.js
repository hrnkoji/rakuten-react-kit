/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

var smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  mode: "development",
  devtool: "source-map",

  entry: "./src/main",
  cache: true,

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: '/'
  },

  resolve: {

    modules: [
      path.resolve("node_modules"),
      path.resolve("src")
    ] ,

    extensions:
      [".webpack.js", ".web.js", ".js", ".jsx", ".scss", ".sass" ]

  },

  devServer: {
    quiet: false,
    historyApiFallback: {
      index: "index.html"
    }
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new HardSourceWebpackPlugin()
  ],
  module: {
    rules: [
      // ESLint checking
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },

      // Babel automatic loading
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true
        }
      },

      // CSS automatic loading
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      },

      // Sass automatic loading
      {
        test: /\.scss$|\.saas$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader', 'sass-loader'
        ]
      },

      // Files
      { test: /\.(png|jpg|jpeg|svg|woff|woff2|eot|ttf)$/,
        use: "file-loader"
      }

    ]

  }
});
