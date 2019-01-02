const { environment } = require('@rails/webpacker')
var webpack = require('webpack')
environment.config.set('resolve.extensions', ['.html'])

environment.loaders.append('html', {
    test: /\.html$/,
    exclude: /node_modules/,
    use: 'html-loader'
  })

  environment.loaders.append('ts', {
    test: /\.ts$/,
    loaders: ['ts-loader']
  })

module.exports = environment