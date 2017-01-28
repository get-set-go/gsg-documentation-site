'use strict';

/**
 * Import module dependencies from node_modules
 */
const _babelJest = require('babel-jest');

/**
 * Export Jest Preprocessor configuration
 */
module.exports = {
  process: function(src, filename) {
    if (filename.match(/\.[css|less]/)) {
        return '';
    }
    return _babelJest.process(src, filename);
  }
};
