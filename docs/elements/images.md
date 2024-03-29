<script setup>
import NormalImage from '../components/images/NormalImage.vue';
import WideImage from '../components/images/WideImage.vue';
</script>

# Images

## Examples

This photo is more than 6880 pixels wide. The width is set to 100% to ensure
it doesn’t bleed off the viewport and always fills its container.
In some situations, this will make the image stretch to be larger than
its actual width. To avoid the image stretching past its width, set max-width instead.

```vue
<template>
  <img
    v-w.100
    alt="Wide Size Scenic View of Desert Against Clear Sky"
    src="/wide.jpg"
  >
</template>
```

<WideImage />

The image below is 640 pixels wide, it will fill its container until the container
is wider than 640 pixels.

```vue
<template>
  <img
    v-mw.100
    alt="Narrow Size Scenic View of Desert Against Clear Sky"
    src="/narrow.jpg"
  >
</template>
```

<NormalImage />

## Reference

* [Images Source Docs | Tachyons](https://tachyons.io/docs/elements/images/)
* [img | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
* [image | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/image)
