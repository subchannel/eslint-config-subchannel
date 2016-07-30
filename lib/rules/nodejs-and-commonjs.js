'use strict';

module.exports = {
  'callback-return': ['error', ['callback', 'cb', 'next']],
  'global-require': 'error',
  'handle-callback-err': ['error', 'err'],
  'no-mixed-requires': ['error', {
    grouping: true,
    allowCall: true
  }],
  'no-new-require': 'error',
  'no-path-concat': 'error',
  'no-process-env': 'error',
  'no-process-exit': 'error',
  'no-restricted-modules': 'off',
  'no-sync': 'warn'
};
