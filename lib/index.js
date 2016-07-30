'use strict';

const rules = require('./rules');

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    mocha: true
  },

  rules: rules
};
