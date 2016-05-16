var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');


module.exports = {
    context: path.join(__dirname, 'app'),
    entry: "./main.js",
    output: {
        path: './public',
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
  ].concat([
          new webpack.optimize.UglifyJsPlugin()
      ]),
    devServer: {
        contentBase: "./public"

    }
};