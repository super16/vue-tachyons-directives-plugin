<script setup>
import BasicGrid from '../components/BasicGrid.vue';
</script>

# Basic Grid

You can combine display, float, padding, and widths to construct a wide variety of grids.
Here is a basic example of some options for constructing a simple grid.

## Directive

Use `v-fl` directive to float element to the left and add `v-w` directive to set the width value.

```vue
<template>
  <div>
    <div v-fl v-w.90></div>
    <div v-fl v-w.10></div>
  </div>
</template>
```

## Examples

<BasicGrid />

## Reference

* [Grids Source Docs | Tachyons](https://tachyons.io/docs/layout/grid/)
* [width | MDN](https://developer.mozilla.org/en-US/docs/Web/css/width)
