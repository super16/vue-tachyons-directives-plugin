<template>
  <table>
    <tbody>
      <tr>
        <td>
          <code>v-w="1"</code>
        </td>
        <td class="w-100">
          <div class="w1 bg-black-10 pv2"></div>
        </td>
      </tr>
      <tr>
        <td>
          <code>v-w="2"</code>
        </td>
        <td class="w-100">
          <div class="w2 bg-black-10 pv2"></div>
        </td>
      </tr>
      <tr>
        <td>
          <code>v-w="3"</code>
        </td>
        <td class="w-100">
          <div class="w3 bg-black-10 pv2"></div>
        </td>
      </tr>
      <tr>
        <td>
          <code>v-w="4"</code>
        </td>
        <td class="w-100">
          <div class="w4 bg-black-10 pv2"></div>
        </td>
      </tr>
      <tr>
        <td>
          <code>v-w="5"</code>
        </td>
        <td class="w-100">
          <div class="w5 bg-black-10 pv2"></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'WidthScale',
};
</script>

<style scoped>
@import '../../../node_modules/tachyons/css/tachyons.css';
</style>
