<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/api12.jpeg" class="api">
   <router-view></router-view>
  </div>
</template>
<script>
export default {
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

.btn{
  float: left;
}
.person{
  list-style: none;
}
</style>
