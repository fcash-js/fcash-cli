'use strict';

var fcash = require('fcash-lib');

var scaffold = {};
scaffold.create = require('./lib/create');
scaffold.getDefaultConfig = require('./lib/create');
fcash.scaffold = scaffold;

module.exports = scaffold;
