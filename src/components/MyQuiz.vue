<template >
    <div class="MyQuiz">
        <div :key="index" v-for="(pays, index) in pays">
            <img :src="pays.flags.png" alt="">
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"MyQuiz",
    data() {
        return {
         pays : null   
        }
    },
    mounted() {
       this.getCountries()
    },
    methods: {
        getCountries() {
            axios
            .get(`https://restcountries.com/v3.1/all`)
            .then((response) => {
                this.pays = response.data;
                console.log(this.pays)
            });
        }
},
}
</script> 