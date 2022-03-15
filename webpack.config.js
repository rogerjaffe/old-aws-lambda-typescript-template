module.exports = {
  entry: ['./src/index.ts'],
  target: 'node',
  output: {
    path: `${process.cwd()}/dist`,
    filename: 'index.js',
    library: 'lambda-name',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {}
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
};
