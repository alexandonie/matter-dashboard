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
        loader: 'html-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          inlineRequires: '/images/'
        }
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
