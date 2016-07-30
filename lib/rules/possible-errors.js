'use strict';

module.exports = {
  'no-cond-assign': ['error', 'always'],
  'no-console': ['error', {
    allow: ['warn', 'error']
  }],
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty-character-class': 'error',
  'no-empty': ['error', {
    allowEmptyCatch: false
  }],
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-parens': ['error', 'all', {
    nestedBinaryExpressions: true
  }],
  'no-extra-semi': 'error',
  'no-func-assign': 'error',
  'no-inner-declarations': ['error', 'both'],
  'no-invalid-regexp': ['error', {
    allowConstructorFlags: ['u', 'y']
  }],
  'no-irregular-whitespace': ['error', {
    skipStrings: false,
    skipComments: false,
    skipRegExps: false,
    skipTemplates: false
  }],
  'no-negated-in-lhs': 'error',
  'no-obj-calls': 'error',
  'no-prototype-builtins': 'off',
  'no-regex-spaces': 'error',
  'no-sparse-arrays': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'use-isnan': 'error',
  'valid-jsdoc': ['error', {
    prefer: {
      virtual: 'abstract',
      augments: 'extends',
      const: 'constant',
      defaultvalue: 'default',
      desc: 'description',
      host: 'external',
      fileoverview: 'file',
      overview: 'file',
      fires: 'emits',
      func: 'function',
      method: 'function',
      member: 'var',
      arg: 'param',
      argument: 'param',
      prop: 'property',
      return: 'returns',
      exception: 'throws'
    },
    requireReturn: true,
    requireParamDescription: true,
    requireReturnDescription: true,
    requireReturnType: true,
    preferType: {
      String: 'string',
      object: 'Object',
      promise: 'Promise'
    }
  }],
  'valid-typeof': 'error'
};
