<script setup>
import CapitalizeTransform from '../components/text-transform/CapitalizeTransform.vue';
import LowercaseTransform from '../components/text-transform/LowercaseTransform.vue';
import UppercaseTransform from '../components/text-transform/UppercaseTransform.vue';
</script>

# Text Transform

Use these directives to set the capitalization of text.

If you use the uppercase directive, don’t forget to combine
it with a [tracking utility](./tracking.md).

## Examples

### Uppercase

```vue
<template>
  <p v-tracked v-ttu>
    Uppercase
  </p>
</template>
```

<UppercaseTransform />

### Lowercase

```vue
<template>
  <p v-ttl>LOWERCASE</p>
</template>
```

<LowercaseTransform />

### Capitalize

```vue
<template>
  <p v-ttc>
    capitalize multiple words
  </p>
</template>
```

<CapitalizeTransform />

## Reference

* [Text Transform Source Docs | Tachyons](https://tachyons.io/docs/typography/text-transform/)
* [text-transform | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
