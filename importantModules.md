# Important Modules for Development

## Table of Contents
1. [Introduction](#introduction)
2. [Configurations](#configurations)
  1. [Node.js](#nodejs)
  2. [Webpack](#webpack)
  3. [Babel](#babel)
  4. [ESLint](#eslint)
  5. [Prettier](#prettier)
  6. [Jest](#jest)
  7. [Express](#express)
  8. [MongoDB](#mongodb)
  9. [React](#react)
  10. [React Native](#react-native)
  11. [React Router](#react-router)
  12. [Styled Components](#styled-components)
  13. [Axios](#axios)
3. [Database](#database)
4. [Backend Development](#backend-development)
5. [Frontend Development](#frontend-development)
6. [Testing](#testing)
7. [Hosting](#hosting)
8. [Version Control](#version-control)
9.  [Web Development](#web-development)
10. [Mobile Development](#mobile-development)

## Introduction
This document is a guide to the important modules that are used in the development of web and mobile applications. It is
important to understand the use of these modules and how they are used in the development process.
All the modules are important and are used in the development of web and mobile applications.
Some of the information is taken from the official documentation of the modules and some of the information is taken
from personal experience. There will also be guides included in the document to help you understand how to use the
modules in the development process.

## Configurations

### Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O
model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source
libraries in the world.

### Webpack
Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it
internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

  - [Webpack Official Documentation](https://webpack.js.org/concepts/)
  - [Webpack Configuration Guide](https://webpack.js.org/guides/getting-started/)
  - [Webpack for Production](https://webpack.js.org/guides/production/)
  - [Webpack for Development](https://webpack.js.org/guides/development/)
  - [Webpack Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
  - [Webpack Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
  - [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/)
  - [Webpack Caching](https://webpack.js.org/guides/caching/)
  - [Webpack Output Management](https://webpack.js.org/guides/output-management/)
  - [Webpack Environment Variables](https://webpack.js.org/guides/environment-variables/)
  - [Webpack Author Libraries](https://webpack.js.org/guides/author-libraries/)
  - [Webpack Shimming](https://webpack.js.org/guides/shimming/)
  - [Webpack PWA](https://webpack.js.org/guides/progressive-web-application/)

#### Configuration Files
 - **Basic Configuration**
This is a basic configuration file for webpack. This configuration file is used to bundle the JavaScript files in the
`src` directory and output the bundled file in the `dist` directory.

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

 - **Advanced Configuration**
This is an advanced configuration file for webpack. This configuration file is used to bundle the JavaScript files in
the `src` directory and output the bundled file in the `dist` directory. This configuration file also includes the
`html-webpack-plugin` and `clean-webpack-plugin` to clean the `dist` directory and generate the `index.html` file in
the `dist` directory. It also includes the `webpack-dev-server` to serve the bundled file in the `dist` directory.
The `style-loader` and `css-loader` are also included to bundle the CSS files in the `src` directory. The `file-loader`
is also included to bundle the image files in the `src` directory. The `mini-css-extract-plugin` is also included to
extract the CSS files in the `src` directory. The `babel-loader` is also included to bundle the JavaScript files in the
`src` directory as well as handle the typescript files in the `src` directory.

  - **Modules Needed:**
    - `@babel/preset-typescript` - This is a Babel preset for all TypeScript plugins.
    - `@babel/preset-env` - This is a Babel preset for compiling JavaScript to a specific version of ECMAScript.
    - `@babel/preset-react` - This is a Babel preset for all React plugins.
    - `webpack` - This is a static module bundler for modern JavaScript applications.
    - `webpack-cli` - This is the Command Line Interface for webpack.
    - `webpack-dev-server` - This is a development server for webpack.
    - `html-webpack-plugin` - This is a plugin that simplifies the creation of HTML files to serve your webpack bundles.
    - `clean-webpack-plugin` - This is a plugin that cleans the `dist` directory before building the project.
    - `style-loader` - This is a loader for webpack that adds CSS to the DOM by injecting a `<style>` tag.
    - `css-loader` - This is a loader for webpack that interprets x@xxxxxxx and `url()` like `import/require()` and will
      resolve them.
    - `file-loader` - This is a loader for webpack that resolves `import/require()` on a file into a url and emits the
    - `mini-css-extract-plugin` - This is a plugin that extracts CSS into separate files.
    - `babel-loader` - This is a loader for webpack that allows transpiling JavaScript files using Babel.
    - `@babel/core` - This is the core of Babel.
    - `tsconfig-paths-webpack-plugin` - This is a plugin that allows you to use the paths in your tsconfig.json file in
      your webpack configuration.
    - `babel-plugin-styled-components` - This is a plugin that allows you to use the styled-components library with
      Babel.


```javascript
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

module.exports = (env = process.env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
    entry: './src/react/index.tsx',
    resolve: {
      extensions: ['.jsx', '.js', '.json', '.ts', '.tsx', '.d.ts'],
      extensionAlias: {
        ".js": [".js", ".ts"],
        ".cjs": [".cjs", ".cts"],
        ".mjs": [".mjs", ".mts"],
        ".jsx": [".jsx", ".tsx"],
        ".ts": [".ts"],
        ".tsx": [".tsx"]
      },
      plugins: [
        new BundleAnalyzerPlugin(),
        new DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new TsconfigPathsPlugin({
          configFile: './tsconfig.json'
        }),
      ]
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.c?(j|t)sx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              sourceMap: true,
              presets: [
                '@babel/preset-typescript',
              ]
            }
          },
          exclude: /node_modules/,
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src/index.html'),
        inject: 'head',
      }),
      new MiniCssExtractPlugin(),
      new BrotliWebpackPlugin(),
    ],
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'app.[contenthash].js' : 'app.js',
    },
    devServer: isProduction ? undefined : {
      // Serve static files from the 'dist' folder
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      // WebSocket server for Hot Module Replacement
      webSocketServer: 'ws', // Default is 'ws', but you can also use 'sockjs'
      compress: false,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api/v2'],
          target: 'http://localhost:8080',
        },
      ],
    },
  };
  return config;
};
```
