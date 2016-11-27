module.exports = process.env.NODE_ENV === 'test' ? require('./webpack.config.test') : require('./webpack.config.production');
