const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
      app:'./app.js',
      app2:'./app2.js',
      vendor:['jquery']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name:["vendor","runtime"],
        filename:'[name].js',
        minChunks:Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'[name].js',
        chunks:['app','app2']
    })
  ]
}