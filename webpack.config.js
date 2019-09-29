const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill/noConflict', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        ],
      },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    overlay: true,
    historyApiFallback: true,
    // writeToDisk: true,
    headers: {
      'X-Custom-Header': 'Richard-N-Cook',
      'App-Location': 'EastAfrica',
      'App-Developers': '100-200',
    },
  },
};
