var path = require('path');

  module.exports = {
    context: process.cwd(),
    entry: {
      script: './scr.js'
  },
    output: {
      path: './',
      filename: "script.js",
      chunkFilename: "[id].js"
    },

    devtools: 'eval-source-map',

    module: {
      loaders: [
        { test: /\.js$/, exclude: (/node_modules/), loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
    resolve: {
      extensions: ['', '.js']
    }
  };
