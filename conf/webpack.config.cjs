const BrotliWebpackPlugin = require('brotli-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;
const path = require('node:path');
require('webpack-merge');

module.exports = (env = process.env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
    entry: './src/index.jsx',
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
      alias: {
        '$': path.resolve(__dirname, './src/server/'),
        '%': path.resolve(__dirname, './electron/'),
        '!': path.resolve(__dirname, './types/'),
        'MCL#': path.resolve(__dirname, './mycontentlinks/'),
        '@': path.resolve(__dirname, './src/'),
        '#M': path.resolve(__dirname, './src/modules/'),
        'P@images': path.resolve(__dirname, './src/assets/images/'),
        'P@html': path.resolve(__dirname, './src/assets/html/'),
        'P@css': path.resolve(__dirname, './src/assets/css/'),
        'P@json': path.resolve(__dirname, './src/assets/json/'),
        'P@fonts': path.resolve(__dirname, './src/assets/fonts/'),
        'P@svg': path.resolve(__dirname, './src/assets/svg/'),
        'P@comps': path.resolve(__dirname, './src/components/'),
        'P@pages': path.resolve(__dirname, './src/pages/'),
        'U!': path.resolve(__dirname, './src/utils/'),
        '@utility': path.resolve(__dirname, './src/utils/utilities'),
        'P@hooks': path.resolve(__dirname, './src/hooks/'),
        'P@styled': path.resolve(__dirname, './src/styled/'),
        'P@assets': path.resolve(__dirname, './src/assets/'),
        'P@types': path.resolve(__dirname, './src/types/'),
        'globals@': path.resolve(__dirname, './types/globals'),
        'T!': path.resolve(__dirname, './types/'),
        'T#': path.resolve(__dirname, './src/theme/'),
        'P@ctx': path.resolve(__dirname, './src/contexts/'),
        "$api": path.resolve(__dirname, "./src/server/api/"),
        "routes": path.resolve(__dirname, "./src/server/routes/"),
        "middleware": path.resolve(__dirname, "./src/server/middleware/"),
        "$config": path.resolve(__dirname, "./src/server/config/"),
        "$models": path.resolve(__dirname, "./src/server/models/"),
        "controllers": path.resolve(__dirname, "./src/server/controllers/"),
        "$services": path.resolve(__dirname, "./src/server/services/"),
        "$utils": path.resolve(__dirname, "./src/server/utils/"),
        "$db": path.resolve(__dirname, "./src/server/db/"),
        "$env": path.resolve(__dirname, "./src/server/environment/"),
        "database": path.resolve(__dirname, "./src/server/db/"),
        "$global": path.resolve(__dirname, "./src/server/global/"),
      },
      plugins: [
        new BundleAnalyzerPlugin(),
        new DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new TsconfigPathsPlugin({
          configFile: './tsconfig.json'
        }),
        new CopyWebpackPlugin({
          patterns: [
            { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets')},
          ],
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
+
