const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
      test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: [['@babel/preset-env']] }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
    ]
  }
}