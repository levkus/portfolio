var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// Config
module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    path.join(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap'
        ],
        exclude: /node-modules/
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

// var path = require('path')
// var webpack = require('webpack')
//
// var postcssPlugins = [
//   require('postcss-advanced-variables'),
//   require('postcss-color-function'),
//   require('precss'),
//   require('autoprefixer')
// ]
//
// // Config
// module.exports = {
//   devtool: 'cheap-module-source-map',
//   context: path.join(__dirname, 'src'),
//   entry: [
//     'react-hot-loader/patch',
//     'webpack-hot-middleware/client',
//     path.join(__dirname, 'src', 'index.js')
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'app.js',
//     publicPath: '/static/'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         loaders: ['babel'],
//         include: path.join(__dirname, 'src')
//       },
//       {
//         test: /\.css$/,
//         loaders: [
//           'style?sourceMap',
//           'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
//           'postcss?sourceMap'
//         ],
//         exclude: /node-modules/
//       },
//       {
//         test: /\.(jpe?g|png|gif)$/i,
//         loaders: [
//           'file?hash=sha512&digest=hex&name=[hash].[ext]'
//         ]
//       },
//       { test: /\.svg$/, loader: 'svg-inline' }
//     ]
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   postcss: function () {
//     return postcssPlugins
//   }
// }
