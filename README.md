# Vue Tachyons Directives Plugin

Ridiculously useless plugin for Vue.js 3.x to use
[Tachyons CSS UI Kit](https://tachyons.io/) selectors as v-directives
inside components.

## Installation

```shell
# npm
npm i tachyons github:super16/vue-tachyons-directives-plugin

# yarn
yarn add tachyons github:super16/vue-tachyons-directives-plugin

# pnpm
pnpm add tachyons github:super16/vue-tachyons-directives-plugin
```

## Usage

Import Tachyons CSS stylesheet and add plugin to your application mount in `main.js`.

```js
import { createApp } from 'vue';
import App from './App.vue';
import VueTachyonsPlugin from 'vue-tachyons-directives-plugin';
import 'tachyons/css/tachyons.css';

createApp(App).use(VueTachyonsPlugin).mount('#app');
```

Instead of such syntax (taken from
[Large Paragraph](https://tachyons.io/components/text/large-paragraph/index.html)
example):

```vue
<template>
  <main class="pa3 pa5-ns">
    <p class="f4 lh-copy measure">
      Typography has one plain duty before it and that is to convey information
      in writing. No argument or consideration can absolve typography from this
      duty. A printed work which cannot be read becomes a product without
      purpose.
    </p>
  </main>
</template>
```

You can use v-directives like that:

```vue
<template>
  <main v-pa="3" v-pa.ns="5">
    <p v-f="4" v-lh.copy v-measure>
      Typography has one plain duty before it and that is to convey information
      in writing. No argument or consideration can absolve typography from this
      duty. A printed work which cannot be read becomes a product without
      purpose.
    </p>
  </main>
</template>
```

All class selectors modifiers such as `copy` in `lh-copy` can be added like v-directive modifier: `v-lh.copy`.

![Stupid picture](docs/public/stupid-picture-dark.png#gh-dark-mode-only)
![Stupid picture](docs/public/stupid-picture.png#gh-light-mode-only)

## Documentation

Checkout [here](https://super16.github.io/vue-tachyons-directives-plugin/) (🚧 Under Construction).

## License

[MIT](./LICENSE)
