'use strict';

const assert = require('assert');
const lib = require('../lib');

describe('eslint-config-subchannel', function () {
  it('exported lib should contain `rules` property', function () {
    assert.ok('rules' in lib);
  });
});
