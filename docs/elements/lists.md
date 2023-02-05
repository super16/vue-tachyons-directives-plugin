<script setup>
import OrderedList from '../components/lists/OrderedList.vue';
import UnorderedList from '../components/lists/UnorderedList.vue';
</script>

# Lists

A simple reset for `list-style-type` to remove the default bullets. 

## Unordered List

```vue
<template>
  <ul v-list v-pl="0">
    <li>Apples</li>
    <li>Oranges</li>
    <li>Banana</li>
    <li>Golf balls</li>
  </ul>
</template>
```

<UnorderedList />

## Ordered List

```vue
<template>
  <ol v-list v-pl="0">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </ol>
</template>
```

<OrderedList />

## Reference

* [Lists Source Docs | Tachyons](https://tachyons.io/docs/elements/lists/)
* [list-style-type | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
