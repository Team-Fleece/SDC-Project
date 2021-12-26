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
      }
    ]
  }
}
module.exports = config

// module.exports = {
//   entry: path.join(SRC_DIR, 'index.js'),
//   output: {
//     path: OUT_DIR,
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test:/\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: 'babel-loader'
//       }
//     ]
//   },
//   mode: 'development',
//   resolve: {
//     extensions: ['.js', '.jsx']
//   }
// };
