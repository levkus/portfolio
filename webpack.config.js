const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const poststylus = require('poststylus')

const vendor = [
  'react', 'react-dom', 'react-router',
  'react-router-dom', 'redux', 'react-redux',
  'lodash', 'moment', 'react-fontawesome'
]

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src', 'index.js')
    ],
    vendor
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
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
        test: /\.styl$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'stylus-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: 'file-loader?name=assets/fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [poststylus(['autoprefixer'])]
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
