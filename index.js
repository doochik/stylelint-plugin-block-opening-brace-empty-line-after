'use strict';

const stylelint = require('stylelint');

const ruleName = 'plugin/block-opening-brace-empty-line-after';
const rule = require('./rules/block-opening-brace-empty-line-after');

module.exports = stylelint.createPlugin(ruleName, rule);
