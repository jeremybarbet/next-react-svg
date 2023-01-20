# Next React Svg

[![npm version](https://badge.fury.io/js/next-react-svg.svg)](https://badge.fury.io/js/next-react-svg)

Transform your svg image to a React component.

## Features

- Svg properties
- React props and events

## Installation

```
yarn add next-react-svg -E
```

> **Note**
> Supports Next.js >= 12

## Usage

Create a `next.config.js` in your project and pass an `include` to define the svg folder localization.

```js
const path = require('path');

/**
 * @type {import('next-react-svg').NextReactSvgConfig}
 */
const nextReactSvgConfig = {
  include: path.resolve(__dirname, 'src/assets/svg'),
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // ...
};

const withReactSvg = require('next-react-svg')(nextReactSvgConfig);

module.exports = withReactSvg(nextConfig);
```

```jsx
import Logo from 'assets/svg/Logo.svg';

export default () => <Logo />;
```

## Typescript

Create an `additional.d.ts` file at the root of your project. Add the following reference:

```ts
/// <reference types="next-react-svg" />
```
