# stylelint-plugin-block-opening-brace-empty-line-after

[![TravisCI Status](https://travis-ci.org/doochik/stylelint-plugin-block-opening-brace-empty-line-after.svg?branch=master)](https://travis-ci.org/doochik/stylelint-plugin-block-opening-brace-empty-line-after)
[![NPM
version](https://img.shields.io/npm/v/stylelint-plugin-block-opening-brace-empty-line-after.svg)](https://www.npmjs.org/package/stylelint-plugin-block-opening-brace-empty-line-after)

## Deprecated

⚠️ This plugin is deprecated since [stylelint-order@4.0.0](https://github.com/hudochenkov/stylelint-order/releases/tag/4.0.0).
* https://github.com/hudochenkov/stylelint-order/commit/a84d26470bea56099f5169b9dc179ef5af0efa75
* https://github.com/hudochenkov/stylelint-order/issues/95
* https://github.com/stylelint/stylelint/issues/4366

## Motivation

This is symmetric rule to [block-closing-brace-empty-line-before](https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before)

`npm install --save-dev stylelint-plugin-block-opening-brace-empty-line-after`

```js
// stylelint.config.js

module.exports = {
    plugins: [
        // ...
        'stylelint-plugin-block-opening-brace-empty-line-after',
    ],
    rules: {
        // ...
        'plugin/block-opening-brace-empty-line-after': 'never',
    },
};  
```

## block-opening-brace-empty-line-after

Require or disallow an empty line after the opening brace of blocks.

```css

/** This line
     ↓ */
a /* ↓ */
{ /* ↓ */
  /* ← */
  color: pink;
}
```

The `--fix` option on the [command line](https://stylelint.io/user-guide/cli#autofixing-errors) can automatically fix all of the problems reported by this rule.

### Options

`string`: `"always-multi-line"|"never"`

#### `always-multi-line`

The following patterns are considered violations:

```css
a {
  color: pink;
}
```

The following patterns are *not* considered violations:

```css
a {

  color: pink;
}
```

```css
a { color: pink; }
```

#### `never`

The following patterns are considered violations:

```css
a {

  color: pink;
}
```

The following patterns are *not* considered violations:

```css
a {
  color: pink;
}
```

```css
a { color: pink; }
```

