<script setup>
import ClearedFloats from '../components/clearfix/ClearedFloats.vue';
import UnClearedFloats from '../components/clearfix/UnClearedFloats.vue';
</script>

# Clearfix

When floats are used for layouts—they need a clearfix solution.
This helps prevent layout problems caused by the elements being
removed from the block context of the surrounding elements.

## Examples

### Cleared Floats

This example shows two floated elements wrapped in an element with
a solid red border. In the top version where the floats are cleared,
the red element wraps around the elements. In the second example—the parent
element is collapsed and the two floated elements sit outside of it.
It should be noted you don’t have to clear floated elements that are
inside another floated element.

```vue
<template>
  <div v-cf>
    <div v-fl></div>
    <div v-fl></div>
  </div>
</template>
```

<ClearedFloats />

### UnCleared Floats

```vue
<template>
  <div>
    <div v-fl></div>
    <div v-fl></div>
  </div>
</template>
```

<UnClearedFloats />

### See Also

* [Floats](./floats.md)

## Reference

* [Clearfix Source Docs | Tachyons](https://tachyons.io/docs/layout/clearfix/)
* [clear | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
