var config = require('./webpack.config.base');

config.entry = './spec/tests/index.js';
config.output = {
  path: __dirname,
  filename: 'dist/test/bundle.js'
};

module.exports = config;
