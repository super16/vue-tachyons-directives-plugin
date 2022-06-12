<script setup>
import FiveMeasure from '../components/measure/FiveMeasure.vue';
import FiveMeasureNarrow from '../components/measure/FiveMeasureNarrow.vue';
import FourMeasure from '../components/measure/FourMeasure.vue';
import FourMeasureNarrow from '../components/measure/FourMeasureNarrow.vue';
import FourMeasureWide from '../components/measure/FourMeasureWide.vue';
import SixMeasure from '../components/measure/SixMeasure.vue';
import SixMeasureNarrow from '../components/measure/SixMeasureNarrow.vue';
import SixMeasureWide from '../components/measure/SixMeasureWide.vue';
import TruncationExample from '../components/measure/TruncationExample.vue';
</script>

# Measure

Measure refers to the length of a line of text.
It is one of the most important aspects of readability.

> Anything from 45 to 75 characters is widely regarded
as a satisfactory length of line for a single-column page…
the 66-character line (counting both letters and spaces)
is widely regarded as ideal. For multiple-column work,
a better average is 40 to 50 characters.

—Robert Bringhurst, *The Elements of Typographic Style*

Plugin provides 3 directives for setting measure with
the following line lengths.

* `v-measure` (~66 characters)
* `v-measure.narrow` (~45 characters)
* `v-measure.wide` (~80 characters)

## Examples

### 1.25rem/20px at 34em

```vue
<p v-f="4" v-measure.wide>
  Designers create hierarchy and contrast. Changes in scale
  help create visual contrast, movement, and depth as well
  as express hierarchies of importance. 
</p>
```

<FourMeasureWide />

### 1.25rem/20px at 30em

```vue
<p v-f="4" v-measure>
  Designers create hierarchy and contrast. Changes in scale
  help create visual contrast, movement, and depth as well
  as express hierarchies of importance. 
</p>
```

<FourMeasure />

### 1.25rem (20px) at 20em

```vue
<p v-f="4" v-measure.narrow>
  Designers create hierarchy and contrast. Changes in scale
  help create visual contrast, movement, and depth as well
  as express hierarchies of importance. 
</p>
```

<FourMeasureNarrow />

### 1rem (16px) at 30em

```vue
<p v-f="5" v-measure>
  Scale is the size of design elements in comparison to other elements
  in a layout as well as to the physical context of the work. Scale is relative.
  12-pt type displayed on a 32-inch monitor can look very small, while 12-pt type
  printed on a book page clook flabby and overweight.
</p>
```

<FiveMeasure />

### 1rem (16px) at 20em

```vue
<p v-f="5" v-measure.narrow>
  Designers create hierarchy and contrast. Changes in scale
  help create visual contrast, movement, and depth as well
  as express hierarchies of importance. 
</p>
```

<FiveMeasureNarrow />

### .875rem (14px) at 34em

```vue
<p v-f="6" v-measure.wide>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<SixMeasureWide />

### .875rem (14px) at 30em

```vue
<p v-f="6" v-measure>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<SixMeasure />

### .875rem (14px) at 20em

```vue
<p v-f="6" v-measure.narrow>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<SixMeasureNarrow />

### Truncation

If you want to truncate text that exceeds past a certain width
you can use the truncate directive combined with a width.

```vue
<p v-mw="4" v-truncate>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua.
</p>
```

<TruncationExample />

## Reference

* [Measure Source Docs | Tachyons](https://tachyons.io/docs/typography/measure/)
* [width | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
