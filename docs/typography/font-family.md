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

## Default System Sans Serif

```vue
<template>
  <p v-system-sans-serif>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<SystemSansSerif />

## Default System Serif

```vue
<template>
  <p v-system-serif>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<SystemSerif />

## System Sans Serif with Fallbacks

```vue
<template>
  <p v-sans-serif>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<SansSerif />

## Consolas, monaco

::: info
Fallbacks to system monospace font.
:::

```vue
<template>
  <p v-code>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<MonospaceFont />

## Courier

::: info
Fallbacks to system monospace font.
:::

```vue
<template>
  <p v-courier>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<CourierFont />

## Helvetica

::: info
Fallbacks to system sans-serif font.
:::

```vue
<template>
  <p v-helvetica>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<HelveticaFont />

## Avenir

::: info
Fallbacks to system sans-serif font.
:::

```vue
<template>
  <p v-avenir>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<AvenirFont />

## Athelas

::: info
Fallbacks to system serif font.
:::

```vue
<template>
  <p v-athelas>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<AthelasFont />

## Georgia

::: info
Fallbacks to system serif font.
:::

```vue
<template>
  <p v-georgia>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<GeorgiaFont />

## Times

::: info
Fallbacks to system serif font.
:::

```vue
<template>
  <p v-times>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<TimesFont />

## Bodoni MT

::: info
Fallbacks to system serif font.
:::

```vue
<template>
  <p v-bodoni>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<BodoniFont />

## Calisto

::: info
Fallbacks to system serif font.
:::

```vue
<template>
  <p v-calisto>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<CalistoFont />

## Garamond

::: info
Fallbacks to system serif font.
:::

```vue
<template>
  <p v-garamond>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<GaramondFont />

## Baskerville

::: info
Fallbacks to system serif font.
:::

```vue
<template>
  <p v-baskerville>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</template>
```

<BaskervilleFont />

## References

* [Font Family Source Docs | Tachyons](https://tachyons.io/docs/typography/font-family/)
* [font-family | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
