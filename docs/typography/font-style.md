<script setup>
import ItalicsStyle from '../components/font-style/ItalicsStyle.vue';
import RegularStyle from '../components/font-style/RegularStyle.vue';
</script>

# Font Style

Single purpose classes to set the font-style of any element
at any breakpoint.

## Examples

### Italics

Italics can be used to emphasize a piece of content.
Some common uses of italics include: titles, vehicle names,
letters of the alphabet, scientific terms, and quotes.

```vue
<p v-i>
  Readers want what is important to be clearly laid out;
  they will not read what is too troublesome.
</p>
```

<ItalicsStyle />

### Regular

```vue
<p v-fs-normal>A quote from Jan Tschichold about typography.</p>
```

<RegularStyle />

## Reference

* [Font Style Source Docs | Tachyons](https://tachyons.io/docs/typography/font-style/)
* [font-style | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
