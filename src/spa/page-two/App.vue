<template>
  <div>
    <h1>Hello from {{ name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Page two'
    }
  }
};
</script>

<style lang="scss">
h1 {
  color: tomato;
}
</style>

