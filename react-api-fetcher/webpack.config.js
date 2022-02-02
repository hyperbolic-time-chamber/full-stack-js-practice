const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: `${DIST_DIR}`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
};
