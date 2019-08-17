const paths = require('./paths');

module.exports = {
  entry: {
    main: paths.appEntry
  },
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.html/,
        loader: 'html-loader',
        options: {
          interpolate: true
        }
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader'
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader',
            options: {
              interpolate: true
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.(js|mjs)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
