<template >
    <div class="MyQuiz">
        <div v-if="randompays != null">
            <img :src="randompays.flags.png" alt="">
            <h1>{{ randompays.translations.fra }}</h1>
            <input placeholder="ta reponse" v-model="answer">
            <h1 v-if="answer === true ">True</h1>
            <h1 v-else>False</h1>
            <button @click="valid">Valider la reponse</button>
        

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
                if(this.valid === this.randompays)
                this.answer = "true"
                else{
                    this.answer = "false"
                }
                console.log(this.answer)
            }

    },
}
</script> 