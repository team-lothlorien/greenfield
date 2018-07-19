var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: {
    app: ['babel-polyfill', `${SRC_DIR}/app.jsx`,]
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        options: {
          presets: ['react', 'env', 'stage-0']
        }
      }
    ]
  }
};