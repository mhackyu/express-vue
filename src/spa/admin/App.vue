<template>
  <div>
    <h1>Hello from {{ name }}</h1>
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'ADMIN PAGES'
    }
  }
};
</script>

<style lang="scss">
h1 {
  color: tomato;
}

p {
  color: red;
}
</style>

