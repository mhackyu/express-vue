<template>
  <button type="submit" :class="btnType" :disabled="disabled"> {{label}} </button>
</template>
<script>
export default {
  props: {
    label: String,
    btnType: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: green;
}
</style>

