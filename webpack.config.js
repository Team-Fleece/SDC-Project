const webpack = require('webpack')
const path = require('path')

const config = {
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
  // fix "process is not defined" error:
  // (do "npm install process" before running the build)
  new webpack.ProvidePlugin({
    process: 'process/browser'
  })
]

}
module.exports = config

