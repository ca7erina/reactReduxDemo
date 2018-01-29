const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FlowtypePlugin = require('flowtype-loader/plugin');

const ROOT_PATH = path.resolve(__dirname);
const DIST_DIR = path.resolve(ROOT_PATH, 'dist');
const SRC_DIR = path.resolve(ROOT_PATH, 'src');
const PUBLIC_DIR = path.resolve(ROOT_PATH, 'public');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),

  output: {
    publicPath: '/',
    path: DIST_DIR,
    filename: 'static/js/[name]-[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-2'],
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'eslint-loader' }],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'flowtype-loader' }],
        enforce: 'pre',
      },

      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { root: '.' } }],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './static/media/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    open: true,
    port: 3031,
    stats: {
      colors: true,
    },
  },

  devtool: 'source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.join(PUBLIC_DIR, 'index.html'),
      filename: './index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new FlowtypePlugin({ failOnError: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.NamedModulesPlugin(),
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
