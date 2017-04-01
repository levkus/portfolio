const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
    filename: './js/[name].[hash].js'
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader?sourceMap',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]_[hash:base64:5]&url=false',
            'stylus-loader'
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: 'file-loader?hash=sha512&digest=hex&name=assets/img/[hash].[ext]'
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
    }),
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ])
  ]
}
