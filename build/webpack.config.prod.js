'use strict'

const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const config = require('./config')
const utils = require('./utils')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: `${config.assetsSubDirectory}/js/[name].[contenthash:8].js`,
    path: config.path,
    publicPath: config.publicPath
  },
  devtool: config.productionSourceMap ? config.devtool : false,
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        uip: {
          test: /uip\.min/,
          chunks: 'initial',
          name: 'uip.min'
        }
      },
    },
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:12].css'),
      allChunks: true,
      ignoreOrder: true
    }),
    new OptimizeCSSPlugin({
			cssProcessor: require('cssnano'),
				canPrint: true,
				cssProcessorOptions: config.productionSourceMap
					? {
						parser: require('postcss-safe-parser'),
						map: {inline: false},
						autoprefixer: true,
						// 避免 cssnano 重新计算z-index
						safe: true
					}
					:
					{
						parser: require('postcss-safe-parser'),
						autoprefixer: true,
						safe: true
					}
    }),
    // new BundleAnalyzerPlugin(),
  ]
})
