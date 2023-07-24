const path = require('path');

const rules = [{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
      loader: 'babel-loader'
  }
}]

module.exports = {
  entry: './src/editor-in-solid.js',
  module: {rules},
  resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['*', '.js', '.scss', '.css']
  },
  mode: "development",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'src', 'text-editor'),
    library: {
      name: 'pulsarTextEditor',
      type: 'commonjs',
    },
  },
};
