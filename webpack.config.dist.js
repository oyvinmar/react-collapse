'use strict';


const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: `${require('./package.json').name}.js`,
    path: path.resolve('build'),
    library: 'ReactCollapse',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true},
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-motion': {
      root: 'ReactMotion',
      commonjs2: 'react-motion',
      commonjs: 'react-motion',
      amd: 'react-motion'
    },
    'react-height': {
      root: 'ReactHeight',
      commonjs2: 'react-height',
      commonjs: 'react-height',
      amd: 'react-height'
    }
  }
};
