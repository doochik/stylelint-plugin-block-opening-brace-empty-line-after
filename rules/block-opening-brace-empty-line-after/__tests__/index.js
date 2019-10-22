'use strict';

const testRule = require('stylelint-test-rule-tape');

const rule = require('..');
const { messages, ruleName } = rule;

testRule(rule, {
	ruleName,
	config: ['always-multi-line'],
	fix: true,

	accept: [
		{
			code: 'a { color: pink; }',
		},
		{
			code: 'a {\n\ncolor: pink; }',
		},
		{
			code: 'a {\r\n\r\ncolor: pink;}',
		},
		{
			code: 'a {\n\ncolor: pink;\n}',
		},
		{
			code: 'a {\r\n\r\ncolor: pink;\r\n}',
		},
		{
			code: 'a {\n\ncolor: pink; }b {\n\ncolor: red;}',
		},
		{
			code: 'a {\n\n\n\ncolor: pink;\n}',
			description: 'one *or more* empty lines are allowed',
		},
		{
			code: '@media print {\n\n  a {\n\n     color: pink;\n  }\n}',
			description: 'indentation after the newline before the closing braces',
		},
		{
			code:
				'@media print {\n\n\ta {\n\n\t\tcolor: pink;\n\t\t&:hover{\n\n\t\t\tcolor: red;\n\t\t\t}\n\t\t}\n}',
			description:
				'3 level deep nesting with indentation after the newline before the closing braces',
		},
	],

	reject: [
		{
			code: 'a {\ncolor: pink; }',
			fixed: 'a {\n\ncolor: pink; }',
			message: messages.expected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\r\ncolor: pink; }',
			fixed: 'a {\r\n\r\ncolor: pink; }',
			message: messages.expected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\n color: pink;\n }',
			fixed: 'a {\n\n color: pink;\n }',
			message: messages.expected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\n\tcolor: pink; }',
			fixed: 'a {\n\n\tcolor: pink; }',
			message: messages.expected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\r\n  color: pink; }',
			fixed: 'a {\r\n\r\n  color: pink; }',
			message: messages.expected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\ncolor: pink;\n\n}',
			fixed: 'a {\n\ncolor: pink;\n\n}',
			message: messages.expected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\n/* comment here*/\n\ncolor: pink; }',
			fixed: 'a {\n\n/* comment here*/\n\ncolor: pink; }',
			message: messages.expected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\r\n/* comment here*/\r\n\r\ncolor: pink; }',
			fixed: 'a {\r\n\r\n/* comment here*/\r\n\r\ncolor: pink; }',
			message: messages.expected,
			line: 1,
			column: 4,
		},
	],
});

testRule(rule, {
	ruleName,
	config: ['never'],
	fix: true,

	accept: [
		{
			code: 'a { color: pink; }',
		},
		{
			code: 'a {\ncolor: pink; }',
		},
		{
			code: 'a {\r\ncolor: pink;}',
		},
		{
			code: 'a {\ncolor: pink;\n}',
		},
		{
			code: 'a {\r\ncolor: pink;\r\n}',
		},
		{
			code: 'a {\ncolor: pink; }b {\ncolor: red; }',
		},
		{
			code: '@media print {\n  a {\n     color: pink;\n  }\n}',
			description: 'indentation after the newline before the closing braces',
		},
		{
			code:
				'@media print {\n\ta {\n\t\tcolor: pink;\n\t\t&:hover{\n\t\t\tcolor: red;\n\t\t\t}\n\t\t}\n}',
			description:
				'3 level deep nesting with indentation after the newline before the closing braces',
		},
	],

	reject: [
		{
			code: 'a {\n\ncolor: pink; }',
			fixed: 'a {\ncolor: pink; }',
			message: messages.rejected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\r\n\r\ncolor: pink; }',
			fixed: 'a {\r\ncolor: pink; }',
			message: messages.rejected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\n\n color: pink; }',
			fixed: 'a {\n color: pink; }',
			message: messages.rejected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\n\n\tcolor: pink; }',
			fixed: 'a {\n\tcolor: pink; }',
			message: messages.rejected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\r\n\r\n  color: pink; }',
			fixed: 'a {\r\n  color: pink; }',
			message: messages.rejected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\n\ncolor: pink;\n}',
			fixed: 'a {\ncolor: pink;\n}',
			message: messages.rejected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\n\ncolor: pink;\n\n}',
			fixed: 'a {\ncolor: pink;\n\n}',
			message: messages.rejected,
			line: 1,
			column: 4,
		},
		{
			code: 'a {\n\ncolor: pink;\n\n/* comment here */\n\n}',
			fixed: 'a {\ncolor: pink;\n\n/* comment here */\n\n}',
			message: messages.rejected,
			line: 1,
			column: 4,
		},
	],
});
