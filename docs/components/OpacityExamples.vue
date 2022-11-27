<template>
  <section class="mv4">
    <template v-for="opacity in opacities">
      <p>
        <code class="code">
          {{ `<img v-o.${opacity} src="#">` }}
        </code>
      </p>
      <img
        :alt="`Image with opacity ${opacity}%`"
        :class="`o-${opacity}`"
        class="w-100"
        src="/panoramic.jpg"
      >
    </template>
  </section>
</template>

<script>
export default {
  name: 'OpacityExamples',
  data() {
    return {
      opacities: [
        '90',
        '80',
        '70',
        '60',
        '50',
        '40',
        '30',
        '20',
        '10',
        '05',
        '025',
        '0',
      ],
    };
  },
};
</script>

<style scoped>
@import '../../node_modules/tachyons/css/tachyons.css';
</style>
