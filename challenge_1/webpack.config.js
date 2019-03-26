var path = require('path');
var publicPath = path.join(__dirname, '/public');
var clientPath = path.join(__dirname, '/client');


module.exports = {
  entry: `${clientPath}/app.jsx`,
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    path: publicPath
  },
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      }, 
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader"}
        ]
      }
    ]
  },
}