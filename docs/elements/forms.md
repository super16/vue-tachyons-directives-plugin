<script setup>
import InputReset from '../components/InputReset.vue';
</script>

# Forms

Tachyons has some basic form control resets to remove default styles
for mobile devices.

## Example

```vue
<form>
  <label for="inputReset">
    <code v-f="6" v-db>input-reset</code>
  </label>
  <input id="inputReset" v-input-reset type="text">
</form>
```

<InputReset />

## Reference

* [Forms Source Docs | Tachyons](https://tachyons.io/docs/elements/forms/)
* [:hover | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover)
* [:focus | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Afocus)
