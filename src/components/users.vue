<template>
<div class="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">e-Mail</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <button v-on:click="show" class="btn btn-warning">Get API</button>
      <tr v-for="user in users" :key="user.id"> <!--basit bir şekilde id'leri for ile döndürdüm -->
      <th scope="row"><router-link :to="'/detail/'+user.id">{{user.id}}</router-link></th>
      <td>{{user.name}}</td>
      <td>{{user.username}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
import axios from 'axios'
export default {
data(){
    return{
        users:null,
    }},
  methods:{
    show: function (){
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        this.users = response.data;
        })
  }
}
}
</script>
<style>
</style>

