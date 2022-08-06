<script setup>
import LightGrayTable from '../components/tables/LightGrayTable.vue';
import NearWhiteTable from '../components/tables/NearWhiteTable.vue';
</script>

# Tables

Tachyons has some basic utilities for styling tables
that are easy to customize and extend.

## Examples

### Striped | Light Gray

```vue
<template>
  <table v-collapse>
    <tbody>
      <tr v-striped:light-gray></tr>
      <tr v-striped:light-gray></tr>
    </tbody>
  </table>
</template>
```

<LightGrayTable />

### Striped | Near white

```vue
<template>
  <table v-collapse>
    <tbody>
      <tr v-striped:near-white></tr>
      <tr v-striped:near-white></tr>
    </tbody>
  </table>
</template>
```

<NearWhiteTable />

## Reference

* [Tables Source Docs | Tachyons](https://tachyons.io/docs/elements/tables/)
