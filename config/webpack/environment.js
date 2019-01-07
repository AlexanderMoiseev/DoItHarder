const { environment } = require('@rails/webpacker')
const path = require('path')
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

  environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  )


module.exports = environment