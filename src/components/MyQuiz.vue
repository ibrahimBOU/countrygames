<template >
    <div class="MyQuiz">
        <div v-if="randompays != null">
            <img :src="randompays.flags.png" alt="">
            <h1>{{ randompays.translations.fra.common }}</h1>
            <input placeholder="ta reponse" v-model="answer">
            <h1 v-if="valid == true ">True</h1>
            <h1 v-else>False</h1>
            <button @click="checkAnswer">Valider la reponse</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"MyQuiz",
    data() {
        return {
         pays : null ,
         randompays : null,
         answer : null,
         valid : null,
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
                    this.getRandomCountry()
                    
                });
            },
            getRandomCountry(){
                let randomcountry = Math.floor(Math.random() * this.pays.length)
                this.randompays = this.pays[randomcountry]
                console.log(this.randompays)
            },
            checkAnswer(){
                if(this.answer == this.randompays.translations.fra.common){
                this.valid = true
                }
                else{
                    this.valid = false
                }
                console.log(this.valid)
            }

    },
}
</script> 