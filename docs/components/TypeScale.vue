<template>
  <code class="code">
    {{ headline }}
  </code>
  <h1 class="f-headline lh-solid">
    {{ loremIpsum }}
  </h1>
  <code class="code">
    {{ subheadline }}
  </code>
  <h1 class="f-subheadline lh-title">
    {{ loremIpsum }}
  </h1>
  <code class="code">
    {{ f1 }}
  </code>
  <h1 class="f1 lh-copy">
    {{ loremIpsum }}
  </h1>
  <template
    v-for="n in numbersList"
    :key="n"
  >
    <code class="code">
      {{ f(n) }}
    </code>
    <h1 :class="`f${n} lh-copy`">
      {{ loremIpsum }}
    </h1>
  </template>
</template>

<script>
export default {
  name: 'TypeScale',
  data() {
    return {
      loremIpsum: 'Title',
      numbersList: ['2', '3', '4', '5', '6'],
    };
  },
  computed: {
    f1() {
      return `<h1 v-f="1" v-lh.title>${this.loremIpsum}</h1>`;
    },
    headline() {
      return `<h1 v-f.headline v-lh.solid>${this.loremIpsum}</h1>`;
    },
    subheadline() {
      return `<h1 v-f.subheadline v-lh.title>${this.loremIpsum}</h1>`;
    }
  },
  methods: {
    f(number) {
      return `<h1 v-f="${number}" v-lh.copy>${this.loremIpsum}</h1>`;
    },
  }
};
</script>

<style scoped>
@import '../../node_modules/tachyons/css/tachyons.css';
</style>
