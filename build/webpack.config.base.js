'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const utils = require('./utils')

module.exports = {
  entry: {
    app: ['core-js', 'regenerator-runtime', './src/index.ts']
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: utils.resolve('dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'static': utils.resolve('static'),
      '@': utils.resolve('src'),
      "@styles": utils.resolve('src/assets/styles'),
      "@images": utils.resolve('src/assets/images'),
      "@components": utils.resolve('src/components'),
      "@global": utils.resolve('src/global'),
      "@http": utils.resolve('src/http'),
      "@pages": utils.resolve('src/pages'),
      "@plugins": utils.resolve('src/plugins'),
      "@utils": utils.resolve('src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ]
      },
      {
        test: /\.(ts|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.js$/,
        exclude: [/node_modules/, /static/],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[ext]')
          }
        }
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[ext]')
          }
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[ext]')
          }
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: utils.resolve('static'),
      to: 'static',
      ignore: ['.*']
    }])
  ]
}
