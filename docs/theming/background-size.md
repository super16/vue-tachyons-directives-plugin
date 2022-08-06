<script setup>
import ContainSize from '../components/background-size/ContainSize.vue';
import CoverSize from '../components/background-size/CoverSize.vue';
</script>

# Background Size

Background-size affects how background images fill their containing elements.
While measurements can be declared explicitly to size an image, the values
that seem most reusable are `v-contain` and `v-cover`.

## Examples

### Contain

Directive `v-contain` will make sure that the entire image is displayed
within the element, regardless of the elements dimensions.

```vue
<template>
  <div v-contain></div>
</template>
```

<ContainSize />

### Cover

Directive `v-cover` will make sure the entire element is covered.
But won’t guarantee that the entire image will be shown.

```vue
<template>
  <div v-cover></div>
</template>
```

<CoverSize />

## Reference

* [Background Size Source Docs | Tachyons](https://tachyons.io/docs/themes/background-size/)
* [background-size | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
