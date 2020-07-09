'use strict'
const { resolve } = require('./utils')
const isProduction = process.argv[2].split('=')[1] === 'PROD'


module.exports = {
	path: resolve('dist'),
	publicPath: './',
	assetsSubDirectory: 'static',
	proxyTable: {
		'/keyAccount': {
			target: 'http://public-int-gw.intsit.sfdc.com.cn:1080',
			changeOrigin: true
		}
	},
	isProduction,
	productionSourceMap: !isProduction,
	devtool: '#source-map',
	productionGzip: isProduction,
	productionGzipExtensions: ['js', 'css']
}
