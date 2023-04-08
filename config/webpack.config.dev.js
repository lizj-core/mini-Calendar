const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');

const devServer = {
	hot: true,
	port: 3000,
	host: '127.0.0.1',
	compress: true,
	open: true,
	proxy: {
		'/api': {
			target: 'http://localhost:8000',
			pathRewrite: { '^/api': '' },
			secure: false,
		},
	},
};
const devConfig = {
	mode: 'development',
	devServer: devServer,
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
