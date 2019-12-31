const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    entry: [path.join(__dirname, 'src/index.js')],
    output: {
      filename: 'main.js',
      path: path.join(__dirname, '/dist')
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    },
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin ({
        template: 'src/index.html'
      })
    ]
  };
};
