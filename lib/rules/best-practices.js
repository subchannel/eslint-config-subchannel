'use strict';

module.exports = {
  'accessor-pairs': ['error', {
    setWithoutGet: true,
    getWithoutSet: false
  }],
  'array-callback-return': 'error',
  'block-scoped-var': 'error',
  complexity: ['error', {
    max: 20
  }],
  'consistent-return': 'error',
  curly: ['error', 'all'],
  'default-case': 'error',
  'dot-location': ['error', 'property'],
  'dot-notation': ['error', {
    allowKeywords: true
  }],
  eqeqeq: ['error', 'allow-null'],
  'guard-for-in': 'error',
  'no-alert': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-div-regex': 'error',
  'no-else-return': 'error',
  'no-empty-function': 'error',
  'no-empty-pattern': 'error',
  'no-eq-null': 'error',
  'no-eval': ['error', {
    allowIndirect: false
  }],
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-coercion': ['error', {
    boolean: true,
    number: true,
    string: true
  }],
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': ['error', {
    allowLoop: false,
    allowSwitch: false
  }],
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': ['error', {
    ignoreArrayIndexes: true,
    enforceConst: true,
    detectObjects: false
  }],
  'no-multi-spaces': ['error', {
    exceptions: {
      Property: false,
      BinaryExpression: false,
      VariableDeclarator: false,
      ImportDeclaration: false
    }
  }],
  'no-multi-str': 'error',
  'no-native-reassign': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-new': 'error',
  'no-octal-escape': 'error',
  'no-octal': 'error',
  'no-param-reassign': ['error', {
    props: true
  }],
  'no-proto': 'error',
  'no-redeclare': ['error', {
    builtinGlobals: true
  }],
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unused-expressions': ['error', {
    allowShortCircuit: false,
    allowTernary: false
  }],
  'no-unused-labels': 'error',
  'no-useless-call': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-void': 'error',
  'no-warning-comments': ['warn', {
    terms: ['todo', 'fixme'],
    location: 'start'
  }],
  'no-with': 'error',
  radix: ['error', 'as-needed'],
  'vars-on-top': 'error',
  'wrap-iife': ['error', 'inside'],
  yoda: ['error', 'never', {
    exceptRange: false,
    onlyEquality: false
  }]
};
