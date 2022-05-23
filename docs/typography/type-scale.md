<script setup>
import TypeScale from '../components/TypeScale.vue';
</script>

# Type Scale

Often times, websites devote a non-trivial amount of css to setting font-size.
They declare an unnecessary amount of different font-sizes that upon
inspection, don’t come close to resembling a sane type scale.

To create and design an easily readable interface, you don’t need more than
40 font-sizes. A simple ratio-based scale with 8 options should suffice.
Using the class extension namespaces you can set the font-size for any
particular breakpoint that you desire.

Don’t spend time constantly overriding font-sizes in your css. If you don’t
like a default font-size for an element, use the utilities to quickly make
the text larger or smaller until it looks just right. 

> The simplest scale is a single note, and sticking with a single note draws more attention
to other parameters, such as rhythm and inflection… In the sixteenth century, a series
of common sizes developed among European typographers, and the series survived with little
change and few additions for 400 years… This is the typographic equivalent of the diatonic scale. 

—Robert Bringhurst, *The Elements of Typographic Style*

## Directive

Use `v-f` directive to scale text. Directive allowed values are from `1` to `6`,
also there're two modifiers: `headline` and `subheadline`.

```vue
<template>
  <h1 v-f.headline>Headline</h1>
  <p v-f="4">Scaled paragraph.</p>
</template>
```

## Examples

<TypeScale />

## Reference

* [Type Scale Source Docs | Tachyons](https://tachyons.io/docs/typography/scale/)
* [font-size | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
