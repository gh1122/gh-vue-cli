'use strict';

const ciConfig = require('./f2eci.json');
const {urlPrefix} = ciConfig;

module.exports = {
  pages: {
    'index': 'src/main.js'
  },
  baseUrl: urlPrefix,
  devServer: {
    hot: true,
    disableHostCheck: true
  }
};