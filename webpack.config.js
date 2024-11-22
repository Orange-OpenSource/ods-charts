const path = require('path');

const defaultConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: './index.ts',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
};

module.exports = [
  {
    ...defaultConfig,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'ods-charts.js',
      library: {
        type: 'umd',
        name: 'ODSCharts',
      },
    },
  },
  {
    ...defaultConfig,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'ods-charts.esm.js',
      library: {
        type: 'module',
      },
    },
    experiments: {
      outputModule: true,
    },
  },
];
