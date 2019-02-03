const { environment } = require('@rails/webpacker')
const path = require('path')
var webpack = require('webpack')
environment.config.set('resolve.extensions', ['.html'])

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const vue =  require('./loaders/vue')

environment.plugins.append('VueLoaderPlugin', new VueLoaderPlugin())

environment.loaders.append('vue', vue)

environment.loaders.append('html', {
    test: /\.html$/,
    exclude: /node_modules/,
    use: 'html-loader'
  })


  // module.exports = {
  //   test: /\.(ts|tsx)?(\.erb)?$/,
  //   use: [{
  //     loader: 'ts-loader',
  //     options: {
  //       appendTsSuffixTo: [/\.vue$/]
  //     }
  //   }]
  // }

  // environment.loaders.append('ts', {
  //   test: /\.ts$/,
  //   use: [{
  //     loader: 'ts-loader',
  //     options: {
  //       appendTsSuffixTo: [/\.vue$/]
  //     }
  //   }]
  // })



  environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      Popper: ['popper.js', 'default']
    })
  )

  environment.loaders.append('ts', {
    test: /\.css$/,
    use: [{
      loader: 'style-loader'
    },
    {
      loader: 'css-loader'
    }
    ]
  })

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
module.exports = environment