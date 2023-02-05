<script setup>
import AnimateBackgroundColor from '../components/links/AnimateBackgroundColor.vue';
import BackgroundColorOnHover from '../components/links/BackgroundColorOnHover.vue';
import DimOnHover from '../components/links/DimOnHover.vue';
import LinksColors from '../components/links/LinksColors.vue';
import LinksDarkColors from '../components/links/LinksDarkColors.vue';
import UnderlineLinks from '../components/links/UnderlineLinks.vue';
import UnderlineOnHover from '../components/links/UnderlineOnHover.vue';
</script>

# Links

Tachyons doesn’t style links by default, but provides the necessary
classes to generate a wide variety of link styles.

## Underline Links and Animate to Color

To keep the default underline, but animate the color transition,
combine classes from skins and skins-pseudo.

```vue
<template>
  <a v-blue v-hover.orange v-link v-underline href="#">
    link text
  </a>
</template>
```

<UnderlineLinks />

## Underline on Hover

To add an underline on hover and focus, use the `v-underline.hover` directive.

```vue
<template>
  <a v-link v-red v-underline.hover href="#">
    link text
  </a>
</template> 
```

<UnderlineOnHover />

## Dim on Hover

To dim a link on hover, add the `v-dim` directive.

```vue
<template>
  <a v-dim href="#">link text</a>
</template>
```

<DimOnHover />

## Add Background Color on Hover

You can add any background color from the skins-pseudo module.

```vue
<template>
  <a v-black v-hover.bg-light-blue v-link href="#">
    link text
  </a>
</template>
```

<BackgroundColorOnHover />

## Animate Background Color on Hover

You can add any background color from the skins-pseudo module.

```vue
<template>
  <a v-bg.animate v-black v-hover.bg-light-blue v-link href="#">
    link text
  </a>
</template>
```

<AnimateBackgroundColor />

## Colors

Below are examples of combining each color in the skins module
with the dim class.

<LinksColors />

<LinksDarkColors />

## Reference

* [Links Source Docs | Tachyons](https://tachyons.io/docs/elements/links/)
* [:hover | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover)
* [:focus | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Afocus)