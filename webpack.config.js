const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
// const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ],
  },

    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: `${DIST_DIR}`,
    },
    devtool: "source-map",
    // plugins: [
    //   new HtmlWebPackPlugin({
    //     template: "./client/dist/index.html",
    //     filename: "./index.html"
    //   })
    // ]
  };

