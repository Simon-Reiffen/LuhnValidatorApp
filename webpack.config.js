const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
 }
}
