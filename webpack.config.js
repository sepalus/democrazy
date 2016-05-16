var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'app', 'main.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js'
    },
    node: {
      fs: "empty"
    },
    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          },
          {
            test: /\.scss$/,
            exclude: [path.resolve(__dirname, 'app', 'styles')],
            loaders: ['style', 'css', 'postcss', 'sass']
          },
          {
            test: /\.scss$/,
            include: [path.resolve(__dirname, 'app', 'styles')],
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
          },
          {
            test: /\.(eot|ttf|woff|woff2|otf)$/,
            loader: 'file?name=assets/fonts/[name].[ext]'
          },
        ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'app', 'index.html')
      }),
      new CopyWebpackPlugin([
        {
          from: './app/assets/',
          to: 'assets/'
        }
      ])
  ],
  devServer: {
      contentBase: path.join(__dirname, 'public')
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
};
