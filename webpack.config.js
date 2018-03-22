const path = require('path');

module.exports = {
  entry: './src/public/index.html',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, 'build', 'public')
  }
};