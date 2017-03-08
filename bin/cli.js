#!/usr/bin/env node
'use strict';
const meow = require('meow');
const cheese = require('../');

meow({
  help: [
    'Examples',
    '  $ cheese-name',
    " Cabecou Feuille D'Armagnac"
  ].join('\n')
});

process.stdout.write(cheese() + '\n');
