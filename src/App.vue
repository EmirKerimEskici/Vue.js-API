<template>
  <div id="App">
  <img alt="Vue logo" src="./assets/api12.jpeg" class="api">
  <users></users>
  </div>
</template>
<script>
import users from './components/users'
export default {
  name: 'App',
  components: {
    users,
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.api{
  width: 500px;
  margin-bottom: 55px;
}
</style>
