'use strict';

const sample = require('lodash.sample');
const cheeses = require('./lib/cheeses');

module.exports = function () {
  return sample(cheeses);
};
