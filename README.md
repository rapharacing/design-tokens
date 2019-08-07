# Rapha Design Tokens

[![MIT License][license-image]][license-url]

Design tokens are atomic pieces that store visual design attributes. They help us make our UI more consistent and consistent and support custom themes. We use them instead of static values like HEX codes for color or sizing units.

## Installation
Run [npm](https://www.npmjs.com/) to add the package to your project:

`npm i @rapharacing/design-tokens --save`

or do so with [Yarn](https://yarnpkg.com/):

`yarn add @rapharacing/design-tokens`

## How to use
```jsx
import * as tokens from "@rapharacing/design-tokens"
```
## Formats

The main structure of the package is written in `JavaScript` for better usage in `JavaScript` projects. We are also able to generate a `JSON` file which will allow us to transform this type of file into different ones. It should be possible to transform `JSON` into `SASS`, `LESS`, `Stylus`, `XML` or others.

## License

Design tokens are freely distributable under the terms of the [MIT license] (https://github.com/rapharacing/design-tokens/blob/develop/Licence).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://github.com/moment/moment/blob/develop/LICENSE