# Rapha Design Tokens

<h3 align="center">Breakpoints, Colors and Typography for all platforms</h3>

<p align="center"><em>JavaScript · JSON · SCSS · Sketch</em></p>

[![MIT License][license-image]][license-url]

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Installation

Using [npm](https://www.npmjs.com/):

```console
npm i @rapharacing/design-tokens --save
```

Using [Yarn](https://yarnpkg.com/):

```console
yarn add @rapharacing/design-tokens
```

## How to use

### JavaScript

If the project supports ECMAScript Modules, you can use the `import` syntax

```js
import * as tokens from "@rapharacing/design-tokens";

console.log(tokens.colorPink); // hsl(343, 88%, 71%)
```

otherwise

```js
const tokens = require('@rapharacing/design-tokens');

console.log(tokens.colorPink); // hsl(343, 88%, 71%)
```

In JSON, design token names are formatted in [kebab-case](http://wiki.c2.com/?KebabCase).

```js
const tokens = require('@rapharacing/design-tokens/dist/index.json');

console.log(tokens['color-pink']); // hsl(343, 88%, 71%)
```

### Sass

Sass variables are formatted in [kebab-case](http://wiki.c2.com/?KebabCase).

```scss
// Using variables
@import '~@rapharacing/design-tokens/dist/index';

a {
  color: $color-pink;
}
```

## License

Design tokens are freely distributable under the terms of the [MIT license](https://github.com/rapharacing/design-tokens/blob/develop/Licence).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://github.com/moment/moment/blob/develop/LICENSE