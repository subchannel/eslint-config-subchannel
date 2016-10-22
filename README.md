# JavaScript

A _hopefully_ sane JavaScript code styleguide for [Subchannel](https://subchannel.io) projects. To maintain conformance we created a shareable [ESLint](http://eslint.org) configuration package which is included in this repository.

![](assets/javascript-logo.png)
![](assets/eslint-logo.png)

[![Codeship Status for subchannel/javascript](https://codeship.com/projects/09cfc470-3761-0134-69ff-2a5bcb0fc348/status?branch=master)](https://codeship.com/projects/165791)
[![Code Climate](https://codeclimate.com/repos/58080aa40cb08c0073001dcd/badges/f1cb85248528413cd869/gpa.svg)](https://codeclimate.com/repos/58080aa40cb08c0073001dcd/feed)

## Installation and Usage

First install ESLint and the Subchannel configuration and save them to your project’s `devDependencies` using [Yarn](https://yarnpkg.com) or [npm](https://npmjs.com). _You may choose to install them globally but that is up to you._

```
$ yarn add --dev eslint eslint-config-subchannel
$ npm install --save-dev eslint eslint-config-subchannel
```

Create or modify your project’s `.eslintrc` file to extend from the Subchannel configuration.

```json
{
  "extends": "subchannel"
}
```

Now when you run `eslint` it will use the Subchannel configuration.

_More detailed and thorough guides for installing and integrating ESLint with developer tools like [Atom](https://atom.io) and [Sublime Text](https://www.sublimetext.com) can be found on their website, [http://eslint.org](http://eslint.org)._
