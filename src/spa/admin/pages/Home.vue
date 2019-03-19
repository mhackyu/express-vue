<template>
  <div>
    <img src="../assets/logo.png">
    <h1>Hello from Home SPA router</h1>
    <base-button label="Sample"></base-button>
  </div>
</template>

<script>
import baseButton from '../../../components/BaseButton.vue';
export default {
  components: {
    baseButton,
  }
}
</script>



<style lang="scss" scoped>
h1 {
  color: tomato;
}
</style>

