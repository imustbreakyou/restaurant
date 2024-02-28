const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    index: path.join(__dirname, './src/index.js'),
    menu: path.join(__dirname, './src/menu.js'),
    contact: path.join(__dirname, './src/contact.js'),
    home: path.join(__dirname, './src/home.js')
},
  output: {

    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
 
  plugins: [new HtmlWebpackPlugin()],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
