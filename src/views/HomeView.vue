<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted() {
    this.getAllcountry()
  },
  methods: {  

    getAllcountry(){
      axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
          console.log(res.data)
      })
    }
  },
}
</script>
