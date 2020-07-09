'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  resolve: function (dir) {
    return path.join(__dirname, '..', dir)
  },
  assetsPath: function (_path) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
  },
  cssLoaders: function (options) {
    options = options || {}
    const cssLoader = {
      loader: 'css-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }
    const px2remLoader = {
      loader: 'px2rem-loader',
      options: {
        remUnit: 100
      }
    }
    const postcssLoader = {
      loader: 'postcss-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }
    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
      const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
      if (loader === 'less') {
        loaders.push(px2remLoader)
      }

      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
          })
        })
      }
      // Extract CSS when that option is specified
      // (which is the case during production build)
      if (options.extract) {
        return [MiniCssExtractPlugin.loader].concat(loaders)
      } else {
        return ['vue-style-loader'].concat(loaders)
      }
    }
    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
      css: generateLoaders(),
      postcss: generateLoaders(),
      less: generateLoaders('less'),
      sass: generateLoaders('sass', {indentedSyntax: true}),
      scss: generateLoaders('sass'),
      stylus: generateLoaders('stylus'),
      styl: generateLoaders('stylus')
    }
  },
  styleLoaders: function (options) {
    const output = []
    const loaders = this.cssLoaders(options)
    for (const extension in loaders) {
      const loader = loaders[extension]
      output.push({
        test: new RegExp('\\.' + extension + '$'),
        use: loader
      })
    }
    return output
  }
}
