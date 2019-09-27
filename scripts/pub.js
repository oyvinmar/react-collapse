#!/usr/bin/env node


const {bash, CWD} = require('./utils/bash');


const webpack = require.resolve('webpack-cli/bin/cli');
const rimraf = require.resolve('rimraf/bin');

bash(`${rimraf} pub`, {cwd: CWD});
bash(`${webpack} --config ${require.resolve('./utils/webpack/pub.config.js')}`, {
  cwd: CWD,
  env: {NODE_ENV: 'production'}
});
