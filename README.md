# eslint-config-subchannel

### Introduction

A shared [ESLint](http://eslint.org) config for Subchannel projects, built on top of the [Airbnb ESLint config](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb).

### Usage

To install ESLint and the Subchannel config you simply use a version of [npm](https://www.npmjs.com) later than 3.0.0 and install them.

```
$ npm install --save-dev eslint eslint-config-subchannel
```

Then extend the Subchannel config in your project’s `.eslintrc` file.

```json
{
    "extends": "subchannel"
}
```

If your project is using ES5 and below you can extend `subchannel/legacy` instead.

Or if your project is using [React](http://facebook.github.io/react) and `.jsx` files, you can install the `eslint-plugin-react` package and extend `subchannel/react`.
