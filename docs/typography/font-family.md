<script setup>
import AthelasFont from '../components/font-family/AthelasFont.vue';
import AvenirFont from '../components/font-family/AvenirFont.vue';
import BaskervilleFont from '../components/font-family/BaskervilleFont.vue';
import BodoniFont from '../components/font-family/BodoniFont.vue';
import CalistoFont from '../components/font-family/CalistoFont.vue';
import CourierFont from '../components/font-family/CourierFont.vue';
import GaramondFont from '../components/font-family/GaramondFont.vue';
import GeorgiaFont from '../components/font-family/GeorgiaFont.vue';
import HelveticaFont from '../components/font-family/HelveticaFont.vue';
import MonospaceFont from '../components/font-family/MonospaceFont.vue';
import SansSerif from '../components/font-family/SansSerif.vue';
import SystemSansSerif from '../components/font-family/SystemSansSerif.vue';
import SystemSerif from '../components/font-family/SystemSerif.vue';
import TimesFont from '../components/font-family/TimesFont.vue';
</script>

# Font Family

There are several pre-defined directives for setting the typeface of a page
or element. It is suggested that you customize or extend this module to suit
your own needs. As tachyons is a toolkit for designing performant webpages
it comes with a variety of font stacks that utilize attractive system fonts
with appropriate fallbacks.

Relying on systems fonts greatly improves page performance and can also help
your web application/site blend in with the user’s operating system.
Readability is strongly linked to familiarity, so this helps create a more
fluid reading experience, allowing your users to focus on your content.

::: tip
If you don't have the following fonts at your system, they will fallback to
system fonts. That's why examples can look alike.
:::

## Examples

### Default System Sans Serif

```vue
<p v-system-sans-serif>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<SystemSansSerif />

### Default System Serif

```vue
<p v-system-serif>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<SystemSerif />

### System Sans Serif with Fallbacks

```vue
<p v-sans-serif>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<SansSerif />

### Consolas, monaco

::: info
Fallback to system monospace.
:::

```vue
<p v-code>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<MonospaceFont />

### Courier

::: info
Fallback to system monospace.
:::

```vue
<p v-courier>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<CourierFont />

### Helvetica

::: info
Fallback to system sans-serif.
:::

```vue
<p v-helvetica>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<HelveticaFont />

### Avenir

::: info
Fallback to system sans-serif.
:::

```vue
<p v-avenir>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<AvenirFont />

### Athelas

::: info
Fallback to system serif.
:::

```vue
<p v-athelas>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<AthelasFont />

### Georgia

::: info
Fallback to system serif.
:::

```vue
<p v-georgia>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<GeorgiaFont />

### Times

::: info
Fallback to system serif.
:::

```vue
<p v-times>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<TimesFont />

### Bodoni MT

::: info
Fallback to system serif.
:::

```vue
<p v-bodoni>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<BodoniFont />

### Calisto

::: info
Fallback to system serif.
:::

```vue
<p v-calisto>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<CalistoFont />

### Garamond

::: info
Fallback to system serif.
:::

```vue
<p v-garamond>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<GaramondFont />

### Baskerville

::: info
Fallback to system serif.
:::

```vue
<p v-baskerville>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</p>
```

<BaskervilleFont />

## References

* [Font Family Source Docs | Tachyons](https://tachyons.io/docs/typography/font-family/)
* [font-family | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
