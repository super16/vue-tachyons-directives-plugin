<script setup>
import NoUnderline from '../components/text-decoration/NoUnderline.vue';
import StrikethroughDecoration from '../components/text-decoration/StrikethroughDecoration.vue';
import UnderlineDecoration from '../components/text-decoration/UnderlineDecoration.vue';
</script>

# Text Decoration

Utilities for decorating text with underlines,
or removing the default underlines browsers put on links.

## Examples

### None

```vue
<a v-no-underline href="#">no-underline</a>
```

<NoUnderline />

### Underline

```vue
<p v-underline>underline</p>
```

<UnderlineDecoration />

### Strikethrough

```vue
<p v-strike>strikethrough</p>
```

<StrikethroughDecoration />

## Reference

* [Text Decoration Source Docs | Tachyons](https://tachyons.io/docs/typography/text-decoration/)
* [text-decoration | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
