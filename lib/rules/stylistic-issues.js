'use strict';

const INDENT_SIZE = 2;

module.exports = {
  'array-bracket-spacing': ['error', 'never', {
    singleValue: false,
    objectsInArrays: false,
    arraysInArrays: false
  }],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs', {
    allowSingleLine: false
  }],
  camelcase: ['error', {
    properties: 'always'
  }],
  'comma-dangle': ['error', 'never'],
  'comma-spacing': ['error', {
    before: false,
    after: true
  }],
  'comma-style': ['error', 'last', {
    exceptions: {
      ArrayExpression: false,
      ObjectExpression: false,
      VariableDeclaration: false
    }
  }],
  'computed-property-spacing': ['error', 'never'],
  'consistent-this': 'off',
  'eol-last': ['error', 'unix'],
  'func-names': 'off',
  'func-style': ['error', 'expression', {
    allowArrowFunctions: true
  }],
  'id-blacklist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  indent: ['error', INDENT_SIZE, {
    SwitchCase: 0,
    VariableDeclarator: 1
  }],
  'jsx-quotes': ['error', 'prefer-double'],
  'key-spacing': ['error', {
    beforeColon: false,
    afterColon: true,
    mode: 'strict'
  }],
  'keyword-spacing': ['error', {
    before: true,
    after: true
  }],
  'linebreak-style': ['error', 'unix'],
  'lines-around-comment': ['error', {
    beforeBlockComment: true,
    afterBlockComment: false,
    beforeLineComment: true,
    afterLineComment: false,
    allowBlockStart: true,
    allowBlockEnd: false,
    allowObjectStart: true,
    allowObjectEnd: false,
    allowArrayStart: false,
    allowArrayEnd: false
  }],
  'max-depth': ['error', {
    max: 4
  }],
  'max-len': ['error', {
    code: 80,
    tabWidth: 4,
    ignoreComments: false,
    ignoreTrailingComments: false,
    ignoreUrls: true
  }],
  'max-lines': ['error', {
    max: 300,
    skipBlankLines: true,
    skipComments: true
  }],
  'max-nested-callbacks': ['error', {
    max: 4
  }],
  'max-params': 'off',
  'max-statements-per-line': 'off',
  'max-statements': 'off',
  'multiline-ternary': 'off',
  'new-cap': ['error', {
    newIsCap: true,
    capIsNew: true,
    properties: true
  }],
  'new-parens': 'error',
  'newline-after-var': ['error', 'always'],
  'newline-before-return': 'error',
  'newline-per-chained-call': ['error', {
    ignoreChainWithDepth: 2
  }],
  'no-array-constructor': 'error',
  'no-bitwise': ['error', {
    int32Hint: true
  }],
  'no-continue': 'error',
  'no-inline-comments': 'error',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multiple-empty-lines': ['error', {
    max: 2,
    maxEOF: 1,
    maxBOF: 0
  }],
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-plusplus': ['error', {
    allowForLoopAfterthoughts: true
  }],
  'no-restricted-syntax': 'off',
  'no-spaced-func': 'error',
  'no-ternary': 'off',
  'no-trailing-spaces': ['error', {
    skipBlankLines: false
  }],
  'no-underscore-dangle': 'off',
  'no-unneeded-ternary': ['error', {
    defaultAssignment: false
  }],
  'no-whitespace-before-property': 'error',
  'object-curly-newline': 'off',
  'object-curly-spacing': ['error', 'always', {
    objectsInObjects: true,
    arraysInObjects: true
  }],
  'object-property-newline': ['error', {
    allowMultiplePropertiesPerLine: false
  }],
  'one-var-declaration-per-line': 'off',
  'one-var': 'off',
  'operator-assignment': ['error', 'always'],
  'operator-linebreak': ['error', 'after'],
  'padded-blocks': ['error', 'never'],
  'quote-props': ['error', 'as-needed', {
    keywords: false,
    unnecessary: true,
    numbers: false
  }],
  quotes: ['error', 'single', {
    avoidEscape: true,
    allowTemplateLiterals: false
  }],
  'require-jsdoc': ['warn', {
    require: {
      FunctionDeclaration: true,
      ClassDeclaration: true,
      MethodDefinition: true
    }
  }],
  'semi-spacing': ['error', {
    before: false,
    after: true
  }],
  semi: ['error', 'always', {
    omitLastInOneLineBlock: true
  }],
  'sort-vars': ['error', {
    ignoreCase: false
  }],
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': ['error', 'always'],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': ['error', {
    int32Hint: true
  }],
  'space-unary-ops': ['error', {
    words: true,
    nonwords: false
  }],
  'spaced-comment': ['error', 'always'],
  'unicode-bom': ['error', 'never'],
  'wrap-regex': 'error'
};
