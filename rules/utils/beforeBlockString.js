'use strict';

module.exports = function(statement, options) {
	options = options || {};

	let result = '';
	let rule;
	let atRule;

	if (statement.type === 'rule') {
		rule = statement;
	}

	if (statement.type === 'atrule') {
		atRule = statement;
	}

	if (!rule && !atRule) {
		return result;
	}

	const before = statement.raws.before || '';

	if (!options.noRawBefore) {
		result += before;
	}

	if (rule) {
		result += rule.selector;
	}

	if (atRule) {
		result += '@' + atRule.name + (atRule.raws.afterName || '') + atRule.params;
	}

	const between = statement.raws.between;

	if (between !== undefined) {
		result += between;
	}

	return result;
};
