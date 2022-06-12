<script setup>
import DefaultHeight from '../components/line-height/DefaultHeight.vue';
import DefaultTitleLeading from '../components/line-height/DefaultTitleLeading.vue';
import ProseLeading from '../components/line-height/ProseLeading.vue';
import SolidLeading from '../components/line-height/SolidLeading.vue';
import TitleLeading from '../components/line-height/TitleLeading.vue';
</script>

# Line Height

::: info
**lead** [*rhyming with red*]:  
Originally a strip of soft metal used for vertical
spacing between lines of type. Now meaning the vertical
distance from the baseline of one line to the baseline
of the next. Also called **leading**.
:::

> Many people with cognitive disabilities have trouble tracking
lines of text when a block of text is single spaced. Providing
spacing between 1.5 to 2 allows them to start a new line more
easily once they have finished the previous one.

—*[WCAG 2.0 Compliance Techniques](https://www.w3.org/TR/WCAG20-TECHS/C21.html)*

Line-height affects how easy it is to read a piece of text,
so having a well constructed set of values can help make your
text easier to read, increasing the chances that people will
read it. Tachyons provides classes to set text at three common
line-height values. 1.5 for body copy, 1.25 for titles, and 1
for text that doesn’t wrap.

## Examples

### Default

<DefaultHeight />

### Prose Leading (1.5)

```vue
<p v-lh.copy>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<ProseLeading />

### Default Title Leading

<DefaultTitleLeading />

### Title Leading (1.25)

```vue
<h1 v-lh.title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
```

<TitleLeading />

### Solid Leading

```vue
<h1 v-lh.solid>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
```

<SolidLeading />

## References

* [Line Height Source Docs | Tachyons](https://tachyons.io/docs/typography/line-height/)
* [line-height | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
