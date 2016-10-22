'use strict';

const lib = require('../lib');

describe('eslint-config-subchannel export', function () {
  it('should contain `rules` property', function () {
    expect(lib.rules).toBeDefined();
  });
});
