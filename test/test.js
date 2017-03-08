'use strict';
const cheese = require('../');
const assert = require('assert');

describe('Cheese', function() {
  it('Returns a random cheese name', function() {
    assert.ok(cheese().length > 0);
  });
});
