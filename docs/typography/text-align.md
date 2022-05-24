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
<p v-tl>Aligned Left</p>
```

<AlignedLeft />

### Aligned Right

```vue
<p v-tr>Aligned Right</p>
```

<AlignedRight />

### Aligned Center

```vue
<p v-tc>Aligned Center</p>
```

<AlignedCenter />

### Justified Alignment

```vue
<p v-tj>Justified Alignment</p>
```

<JustifiedAlignment />

## Reference

* [Text Align Source Docs | Tachyons](https://tachyons.io/docs/typography/text-align/)
* [text-align | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
