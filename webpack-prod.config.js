var webpack = require('webpack');
var config = require('./webpack.config');

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

delete config.devtool;

module.exports = config;
