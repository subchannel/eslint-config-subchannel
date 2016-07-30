'use strict';

module.exports = {
  'init-declarations': 'off',
  'no-catch-shadow': 'error',
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': 'off',
  'no-shadow-restricted-names': 'error',
  'no-shadow': ['error', {
    builtinGlobals: true,
    hoist: 'all'
  }],
  'no-undef-init': 'error',
  'no-undef': ['error', {
    typeof: true
  }],
  'no-undefined': 'error',
  'no-unused-vars': ['error', {
    vars: 'all',
    args: 'after-used',
    caughtErrors: 'all'
  }],
  'no-use-before-define': ['error', {
    functions: true,
    classes: true
  }]
};
