<template>
  <div class="flex flex-wrap mv4">
    <div class="mr3 tc mt3 ba b--black-10 bg-washed-blue br0 pa3 dib">
      <code class="code">v-br="0"</code>
    </div>
    <div class="mr3 mt3 tc ba b--black-10 bg-washed-blue br1 pa3 dib">
      <code class="code">v-br="1"</code>
    </div>
    <div class="mr3 mt3 tc ba b--black-10 br2 pa3 dib">
      <code class="f6">v-br="2"</code>
    </div>
    <div class="mr3 mt3 tc ba b--black-10 br3 pa3 dib">
      <code class="f6">v-br="3"</code>
    </div>
    <div class="mr3 mt3 tc ba b--black-10 br4 pa3 dib">
      <code class="f6">v-br="4"</code>
    </div>
    <div class="mt3 tc ba bw2 black br-pill pa3 dib">
      <code class="f6">v-br.pill</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BorderRadiusExample',
};
</script>

<style scoped>
@import '../../../node_modules/tachyons/css/tachyons.css';
</style>
