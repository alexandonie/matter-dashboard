const { resolvePath } = require('./helpers');

module.exports = {
  src: resolvePath('src'),
  dist: resolvePath('dist'),
  appEntry: resolvePath('src/index.js')
};
