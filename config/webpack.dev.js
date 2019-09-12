const common = require('./webpack.common');
const merge = require('webpack-merge');
const paths = require('./paths');
const { generateHtmlPluginTemplates } = require('./helpers');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: paths.dist
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    ...generateHtmlPluginTemplates()
  ],
  devServer: {
    contentBase: paths.dist,
    host: process.env.HOST || '0.0.0.0',
    port: 3000,
    public: 'http://localhost:3000',
    overlay: true,
    progress: true,
    stats: {
      children: false,
      maxModules: 0
    }
  }
});
