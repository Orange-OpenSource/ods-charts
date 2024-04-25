const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      main: './index.ts',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'ods-charts.js',
      libraryTarget: 'umd',
      library: 'ODSCharts',
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
  },
  {
    mode: 'development',
    devtool: false,
    entry: {
      main: './index.ts',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'ods-charts.min.js',
      libraryTarget: 'umd',
      library: 'ODSCharts',
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
  * SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
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
  },
];
