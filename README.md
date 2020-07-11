# Next React Svg
[![npm version](https://badge.fury.io/js/next-react-svg.svg)](https://badge.fury.io/js/next-react-svg)

Transform your svg image to a React component.

## Features

* Svg properties
* React props and events

## Installation

```
yarn add next-react-svg -E
```

## Usage

Create a `next.config.js` in your project and pass an `include` to define the svg folder localization.

```js
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  }
})
```

```jsx
import Logo from 'assets/svg/Logo.svg';

export default () => (
  <Logo />
);
```
