<template >
    <div class="MyQuiz">
        <div>
            <img src="paysUnique.flag" alt="">
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"MyQuiz",
    data() {
        return {
         flag : this.$route.params.flag,
         PaysUnique: []   
        }
    },
    mounted() {
       this.getCountryById()
    },
    methods: {
        getCountryById() {
            axios
            .get('https://restcountries.com/v3.1/name/$(this.id)')
            .then((response) => {
                this.PaysUnique = response.data[0];
                console.log(response)
            });
        }
},
}
</script> 