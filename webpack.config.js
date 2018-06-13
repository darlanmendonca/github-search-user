const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.NODE_ENV || 'development',
  entry: './sources/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
    compress: true,
    port: process.PORT || 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({template: './sources/index.html'}),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
    ],
  },
}
