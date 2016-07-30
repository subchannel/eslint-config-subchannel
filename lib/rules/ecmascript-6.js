'use strict';

module.exports = {
  'arrow-body-style': ['error', 'as-needed'],
  'arrow-parens': ['error', 'as-needed'],
  'arrow-spacing': ['error', {
    before: true,
    after: true
  }],
  'constructor-super': 'error',
  'generator-star-spacing': ['error', {
    before: true,
    after: false
  }],
  'no-class-assign': 'error',
  'no-confusing-arrow': ['error', {
    allowParens: false
  }],
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-duplicate-imports': ['error', {
    includeExports: true
  }],
  'no-new-symbol': 'error',
  'no-restricted-imports': 'off',
  'no-this-before-super': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': ['error', {
    ignoreImport: false,
    ignoreExport: false,
    ignoreDestructuring: false
  }],
  'no-var': 'error',
  'object-shorthand': ['error', 'never'],
  'prefer-arrow-callback': 'off',
  'prefer-const': ['error', {
    destructuring: 'any',
    ignoreReadBeforeAssign: false
  }],
  'prefer-reflect': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'require-yield': 'error',
  'rest-spread-spacing': ['error', 'never'],
  'sort-imports': ['error', {
    ignoreCase: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
  }],
  'template-curly-spacing': ['error', 'never'],
  'yield-star-spacing': ['error', {
    before: true,
    after: false
  }]
};
