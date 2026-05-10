/**
 * @file babel.config.js
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

'use strict';

/** @type {import('@babel/core').ConfigFunction} */
module.exports = function babelConfig (api) {
  api.cache(process.env.NODE_ENV !== 'production');

  return {
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
      ['@babel/preset-env', { modules: false }],
    ],
    plugins: [
      ['babel-plugin-styled-components', { ssr: false }],
    ],
  };
};
