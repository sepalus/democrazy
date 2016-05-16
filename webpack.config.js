var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'index.html',
          force: true
        },
        {
          from: './public/css/*.css',
          force: true
        },
        {
          from: 'img/*',
          force: true
        }
      ])
  ],
  devServer: {
      contentBase: path.join(__dirname, 'public')
  }
};
