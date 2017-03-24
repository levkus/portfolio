var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const vendor = ['react', 'react-dom', 'react-router', 'react-router-dom', 'redux', 'react-redux', 'lodash']

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
    vendor
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
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
        use: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ]
}
