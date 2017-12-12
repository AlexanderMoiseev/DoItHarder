const { environment } = require('@rails/webpacker')

var webpack = require('webpack')

// plugins: [
//   new webpack.ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery',
//     jquery: 'jquery'
//   })
// ]

	
	
// module.exports = {
//   resolve: {
//     alias: {
//       jquery: 'jquery/src/jquery',
//     }
//   }
// }


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


module.exports = environment