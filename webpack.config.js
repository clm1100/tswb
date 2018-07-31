const HtmlWebpackPlugin = require('html-webpack-plugin')
const template = require('art-template');
console.log(template);
module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}