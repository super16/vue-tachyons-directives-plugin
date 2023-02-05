<script setup>
import DimCard from '../components/hovers/DimCard.vue';
import DimText from '../components/hovers/DimText.vue';
import GrowOnHover from '../components/hovers/GrowOnHover.vue';
import PointerHover from '../components/hovers/PointerHover.vue';
import RevealChildren from '../components/hovers/RevealChildren.vue';
</script>

# Hovers

There are several classes for adding hover effects to elements.
Hover effects can be used to give visual affordance to the user
that an element can be interacted with.

## Dim Text

You can dim any element, including text links on hover and focus
with the dim class. It will fade the element to an opacity of 50% in 150ms.

```vue
<template>
  <a v-b v-black v-dim v-link href="#">
    link text
  </a>
</template>
```

<DimText />

## Dim Card

You can dim any element on hover and focus with the dim element.
Not just text. Here is a card component that will dim on hover.

```vue
<template>
  <a v-db v-dim v-link href="#">
    <img v-db v-mw.100 alt="SF at night" src="#" />
    <span>Card title</span>
  </a>
</template>
```

<DimCard />

## Reveal Children on Hover

```vue
<template>
  <a v-link v-dt v-hide-child href="#">
    <span v-child v-white>
      Card title
    </span>
  </a>
</template>
```

<RevealChildren />

## Add pointer on Hover

```vue
<template>
  <div v-dim v-pointer>
    Add pointer on hover to element.
  </div>
</template>
```

<PointerHover />

## Grow on Hover

Using the grow class on an element will cause it to scale to 1.05%
of its normal size on hover.

```vue
<template>
  <a v-grow v-dib href="#">
    Portfolio Project #11
  </a>
</template>
```

<GrowOnHover />

## Reference

* [Hovers Source Docs | Tachyons](https://tachyons.io/docs/themes/hovers/)
* [:hover | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover)
* [:focus | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Afocus)
