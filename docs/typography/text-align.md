<script setup>
import AlignedCenter from '../components/text-align/AlignedCenter.vue';
import AlignedLeft from '../components/text-align/AlignedLeft.vue';
import AlignedRight from '../components/text-align/AlignedRight.vue';
import JustifiedAlignment from '../components/text-align/JustifiedAlignment.vue';
</script>

# Text Align

Designing for readability across infinite screen-sizes often times
requires setting elements to have different text-alignments across
breakpoints.

These are simple utilities for setting text-alignment to the left,
right, or center of an element.

## Examples

### Aligned Left

```vue
<template>
  <p v-tl>Aligned Left</p>
</template>
```

<AlignedLeft />

### Aligned Right

```vue
<template>
  <p v-tr>Aligned Right</p>
</template>
```

<AlignedRight />

### Aligned Center

```vue
<template>
  <p v-tc>Aligned Center</p>
</template>
```

<AlignedCenter />

### Justified Alignment

```vue
<template>
  <p v-tj>Justified Alignment</p>
</template>
```

<JustifiedAlignment />

## Reference

* [Text Align Source Docs | Tachyons](https://tachyons.io/docs/typography/text-align/)
* [text-align | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
