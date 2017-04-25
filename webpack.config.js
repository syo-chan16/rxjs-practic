module.exports = {
  entry: __dirname + "/src/index.ts",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      }
    ]
  },
  devtool: 'source-map',
};