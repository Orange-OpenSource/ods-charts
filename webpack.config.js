const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const commonDef = {
  mode: 'production',
  devtool: 'source-map',
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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
            preamble: `/*!
  * Software Name: Orange Design System Charts
  * SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
  * SPDX-License-Identifier: MIT
  * 
  * This software is distributed under the MIT license.
  */
  `,
          },
        },
        extractComments: false,
      }),
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
