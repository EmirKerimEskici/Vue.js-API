<template>
    <div>
        <h3>User Details</h3>
       <ul class="list-group" v-for="person in users" :key="person">
  <li class="list-group-item list-group-item-dark">{{person}}</li>
</ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Details',
    data(){
        return{
            users:null
        }
    },
    mounted(){
        console.log(this.$route.params.id);
        var userid=this.$route.params.id
        axios.get('https://jsonplaceholder.typicode.com/users/'+userid).then((response) => {

        this.users = response.data;
        console.log(this.users);
        })
    }
}
</script>