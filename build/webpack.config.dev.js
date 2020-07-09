'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const utils = require('./utils')
const portfinder = require('portfinder')
const config = require('./config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const HOST = 'localhost'
const PORT = process.env.PORT && Number(process.env.PORT) || 8080

const devWebpackConfig = merge(baseConfig, {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false,
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    proxy: config.proxyTable,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true,
    historyApiFallback: true
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      usePostCSS: true
    })
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = PORT
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err)
		} else {
			process.env.PORT = port
			devWebpackConfig.devServer.port = port
			resolve(devWebpackConfig)
		}
	})
})
