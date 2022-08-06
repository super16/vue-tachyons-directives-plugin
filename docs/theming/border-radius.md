<script setup>
import BorderRadiusExample from '../components/border-radius/BorderRadiusExample.vue';
import RoundedBorder from '../components/border-radius/RoundedBorder.vue';
</script>

# Border Radius

There is a four step scale for border radius in addition to a utility
that sets border radius to 100%, which when combined with an explicit height
and width will produce a circle.

## Examples

```vue
<template>
  <div v-br="0"></div>
</template>
```

<BorderRadiusExample />

Combine `v-br.100` with a fixed height and width to make a circle.

```vue
<template>
  <div v-dt v-w="4">
    <div v-br.100></div>
  </div>
</template>
```

<RoundedBorder />

## Reference

* [Border Radius Source Docs | Tachyons](https://tachyons.io/docs/themes/border-radius/)
* [border-radius | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
