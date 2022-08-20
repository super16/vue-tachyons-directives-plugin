<script setup>
import WidthScale from '../components/widths/WidthScale.vue';
import WidthPercentages from '../components/widths/WidthPercentages.vue';
</script>


# Widths

The widths module contains both a five-step width scale based
on powers of two as well as a series of percentage values that
can be combined with floats for an infinitely nestable and
fully responsive grid system.

## Directive

Use `v-w` directive to set the width value.

```vue
<template>
  <div v-w.100>
    <span>100% width</span>
  </div>
</template>
```

## Examples

### Width Scale

<WidthScale />

### Width Percentages

<WidthPercentages />

## Reference

* [Widths Source Docs | Tachyons](https://tachyons.io/docs/layout/widths/)
* [width | MDN](https://developer.mozilla.org/en-US/docs/Web/css/width)
