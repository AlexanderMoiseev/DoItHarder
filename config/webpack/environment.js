const { environment } = require('@rails/webpacker')
var webpack = require('webpack')
environment.config.set('resolve.extensions', ['.html'])

environment.loaders.append('html', {
    test: /\.html$/,
    exclude: /node_modules/,
    use: 'html-loader'
  })

module.exports = environment