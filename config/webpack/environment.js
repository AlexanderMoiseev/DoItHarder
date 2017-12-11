const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

module.exports = {
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    }
  }
}


// new webpack.ProvidePlugin({
//   $: 'jquery',
//   jQuery: 'jquery'
// })

// environment.plugins.prepend(
//   'Provide',
//   new webpack.ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery',
//   })
// )

plugins: [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery'
  })
]


module.exports = environment