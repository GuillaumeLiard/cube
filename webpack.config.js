module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  watch: true,
  devtool: 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
