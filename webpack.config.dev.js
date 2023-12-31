const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.config.common');

module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
});
