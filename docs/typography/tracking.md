<script setup>
import TrackedMega from '../components/tracking/TrackedMega.vue';
import TrackedText from '../components/tracking/TrackedText.vue';
import TrackedTight from '../components/tracking/TrackedTight.vue';
import WithoutTracking from '../components/tracking/WithoutTracking.vue';
</script>

# Tracking

Letter-spacing is the consistent white-space between letters in a
piece of text. In typography, letter-spacing is commonly known
as tracking. Text that is set to uppercase should be tracked to
improve readability.

::: tip
Lowercase text should never be tracked.
:::

For some larger text, depending on the typeface, a negative
tracking might be desirable.

## Default

<WithoutTracking />

## Tracked

```vue
<template>
  <h1 v-f="1" v-tracked v-ttu>
    Title Example
  </h1>
</template> 
```

<TrackedText />

## Tracked Mega

```vue
<template>
  <h1 v-f="1" v-tracked.mega v-ttu>
    Title Example
  </h1>
</template> 
```

<TrackedMega />

## Tracked Tight

```vue
<template>
  <h4 v-f="1" v-tracked.tight v-ttu>
    Title Example
  </h4>
</template> 
```

<TrackedTight />

## Reference

* [Tracking Source Docs | Tachyons](https://tachyons.io/docs/typography/tracking/)
* [letter-spacing | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
