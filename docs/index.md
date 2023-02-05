<script setup>
import LargeParagraph from './components/LargeParagraph.vue';
</script>

# Vue Tachyons Directives Plugin

Plugin for Vue.js 3.x to use [Tachyons CSS UI Kit](https://tachyons.io/)
selectors as directives in components. 

::: info
Directives documentation with examples is not fully ready yet and is under construction.

Checkout finished sections at sidebar on the left. 
:::

::: tip
Supported version of Tachyons CSS is **4.12.0**.
:::

## Installation

### NPM

```sh
npm i tachyons github:super16/vue-tachyons-directives-plugin
```

### Yarn

```sh
yarn add tachyons github:super16/vue-tachyons-directives-plugin
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

<LargeParagraph />

All class selectors modifiers such as `copy` in `lh-copy` can be added like
v-directive modifier: `v-lh.copy`.

![Stupid picture](/stupid-picture.png)

## License

[MIT](https://github.com/super16/vue-tachyons-directives-plugin/blob/main/LICENSE)
