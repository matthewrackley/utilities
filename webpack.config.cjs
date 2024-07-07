const BrotliWebpackPlugin = require('brotli-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
//const { DefinePlugin } = require('webpack');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
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
      alias: {
        '$server': path.resolve(__dirname, './src/server/'),
        '@modules': path.resolve(__dirname, './src/modules/'),
        // '@assets': path.resolve(__dirname, './src/assets/'),
        '@classes': path.resolve(__dirname, './src/classes/'),
        '@countries': path.resolve(__dirname, './src/modules/countries/'),
        '@components': path.resolve(__dirname, './src/react/components/'),
        '@hooks': path.resolve(__dirname, './src/react/hooks/'),
        '@context': path.resolve(__dirname, './src/react/context/'),
        '@styles': path.resolve(__dirname, './src/react/styles/'),
        '@utilities': path.resolve(__dirname, './src/utilities/'),
        '@pages': path.resolve(__dirname, './src/react/pages/'),
        '@types': path.resolve(__dirname, './src/types/'),
        '@assets': path.resolve(__dirname, './src/react/assets/'),
        '@app': path.resolve(__dirname, './src/react/app/'),
        '@preview': path.resolve(__dirname, './src/react/app/preview/'),
        'U!': path.resolve(__dirname, './src/utils/'),
        '@util': path.resolve(__dirname, './src/utilities/'),
        '@utilTypes': path.resolve(__dirname, './src/types/'),
        '@global': path.resolve(__dirname, './src/global/'),
        "$api": path.resolve(__dirname, "./src/server/api/"),
        "$routes": path.resolve(__dirname, "./src/server/routes/"),
        "$mw": path.resolve(__dirname, "./src/server/middleware/"),
        "$config": path.resolve(__dirname, "./src/server/config/"),
        "$services": path.resolve(__dirname, "./src/server/services/"),
        "$db": path.resolve(__dirname, "./src/server/database/"),
        "$env": path.resolve(__dirname, "./src/server/environment/"),
        "$database": path.resolve(__dirname, "./src/server/db/")
      },
      plugins: [
        // new BundleAnalyzerPlugin(),
        // new DefinePlugin({
        //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        // }),
        new TsconfigPathsPlugin({
          configFile: './tsconfig.json'
        }),
        // new CopyWebpackPlugin({
        //   patterns: [
        //     { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets')},
        //   ],
        // }),
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
          exclude: /node_modules|server/,
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src/react/index.html'),
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
