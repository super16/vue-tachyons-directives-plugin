<script setup>
import NormalImage from '../components/images/NormalImage.vue';
import WideImage from '../components/images/WideImage.vue';
</script>

# Images

## Examples

This photo is more than 3000 pixels wide. The width is set to 100% to ensure
it doesn’t bleed off the viewport and always fills its container.
In some situations, this will make the image stretch to be larger than
its actual width. To avoid the image stretching past its width, set max-width instead.

```vue
<img
  v-w.100
  alt="night sky over land"
  src="https://tachyons.io/img/over-canvas.jpg"
>
```

<WideImage />

The image below is 720 pixels wide, it will fill its container until the container
is wider than 720 pixels.

```vue
<img
  v-mw.100
  alt="night sky over water"
  src="https://tachyons.io/img/under-canvas.jpg"
>
```

<NormalImage />

## Reference

* [Images Source Docs | Tachyons](https://tachyons.io/docs/elements/images/)
* [img | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
* [image | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/image)
