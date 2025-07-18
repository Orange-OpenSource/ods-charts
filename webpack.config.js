const path = require('path');

const commonDef = {
  mode: 'production',
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
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'ods-charts.js',
      libraryTarget: 'umd',
      library: 'ODSCharts',
      globalObject: 'this', // pour que ça fonctionne dans tous les environnements
    },
    ...commonDef,
  },
  {
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'ods-charts.esm.js',
      library: {
        type: 'module', // pour ESM
      },
    },
    experiments: {
      outputModule: true, // nécessaire pour output en module
    },
    ...commonDef,
  },
  {
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'ods-charts.cjs.js',
      library: {
        type: 'commonjs2',
      },
    },
    ...commonDef,
  },
];
