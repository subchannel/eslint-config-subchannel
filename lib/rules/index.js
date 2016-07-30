'use strict';

const bestPractices = require('./best-practices');
const ecmaScript6 = require('./ecmascript-6');
const nodejsAndCommonjs = require('./nodejs-and-commonjs');
const possibleErrors = require('./possible-errors');
const strictMode = require('./strict-mode');
const stylisticIssues = require('./stylistic-issues');
const variables = require('./variables');

module.exports = Object.assign({}, bestPractices, ecmaScript6,
  nodejsAndCommonjs, possibleErrors, strictMode, stylisticIssues, variables);
