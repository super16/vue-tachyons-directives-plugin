<script setup>
import BoldWeight from '../components/font-weight/BoldWeight.vue';
import NormalWeight from '../components/font-weight/NormalWeight.vue';
import NumberValues from '../components/font-weight/NumberValues.vue';
</script>

# Font Weight

Single purpose directives to set the font-weight
of any element at any breakpoint.

Varying the font-weight of different pieces of text
can help create contrast between pieces of information.
It can help call attention to a piece of content, or help
to make a smaller font-size a bit more readable.
*In Elements of Typographic Style*, Robert Bringhurst
suggests we keep two things in mind when playing
with font-weight. Use bold weights sparingly.
Font-weight should decrease as font-size increases.

## Examples

### Normal

```vue
<p v-normal>Font-weight: normal</p>
```

<NormalWeight />

### Bold

```vue
<p v-b>Font-weight: bold</p>
```

<BoldWeight />

### Number Values

```vue
<p v-fw="1">Font-weight: 100</p>
<p v-fw="2">Font-weight: 200</p>
<p v-fw="3">Font-weight: 300</p>
<p v-fw="4">Font-weight: 400</p>
<p v-fw="5">Font-weight: 500</p>
<p v-fw="6">Font-weight: 600</p>
<p v-fw="7">Font-weight: 700</p>
<p v-fw="8">Font-weight: 800</p>
<p v-fw="9">Font-weight: 900</p>
```

<NumberValues />

## Reference

* [Font Weight Source Docs | Tachyons](https://tachyons.io/docs/typography/font-weight/)
* [font-weight | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
