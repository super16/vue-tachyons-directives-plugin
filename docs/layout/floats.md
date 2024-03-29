<script setup>
import FloatLeft from '../components/floats/FloatLeft.vue';
import FloatNone from '../components/floats/FloatNone.vue';
import FloatRight from '../components/floats/FloatRight.vue';
import ImageExample from '../components/floats/ImageExample.vue';
</script>

# Floats

Single purpose classes for setting the display of an element at any breakpoint.

Floats may be set on any element, but it will only affect elements that aren’t
absolutely positioned. When you float an element you inherently set its display to block.

There are only three values that can be declared for float: `left`, `right`, or `none`.
These three base classes are very easy to memorize: `v-fl`, `v-fr`, `v-fn`.
Combine float left/right with width utilities to create fluid multi-column layouts.

## Float Left

```vue
<template>
  <p v-fl>Float Left</p>
</template>
```

<FloatLeft />

## Float Right

```vue
<template>
  <p v-fr>Float Right</p>
</template>
```

<FloatRight />

## Float None

```vue
<template>
  <p v-fn>Float None</p>
</template>
```

<FloatNone />

## Float With Images

Originally floats were used to wrap text around images as in the example below.

```vue
<template>
  <div v-cf>
    <img v-fl :alt="altText" :src="imgSrc" />
    <p v-measure>
      {{ loremIpsum }}
    </p>
  </div>
</template>
```

<ImageExample />

## See Also

* [Clearfix](./clearfix.md)

## Reference

* [Floats Source Docs | Tachyons](https://tachyons.io/docs/layout/floats/)
* [float | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
