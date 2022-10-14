<template >
    <div class="MyQuiz">
        <div v-if="this.compteur>9">
            <h1>Le Jeu est terminé</h1>
            <router-link to="/Score"><button v-on:click="this.setScore()">Score</button></router-link>
          <router-link to="/accueil">  <button v-on:click="this.setScore()">Retour Accueil</button></router-link>
        </div>
        <div v-else>
            <img :src="randompays.image" alt="">
            <h1>{{ randompays.name }}</h1>
            <input placeholder="ta reponse" v-model="answer">
            <h1 v-if="valid == true ">True</h1>
            <h1 v-else>False</h1>
            <button v-on:click="QuestionXTime()">Valider la reponse</button>
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
         randompays : {
                name:"",
                image:"",
         },
         answer : null,
         valid : null,
         compteur : 0,
         compteurjuste: 0,
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
                this.randompays.name = this.pays[randomcountry]["translations"]["fra"]["common"]
                this.randompays.image = this.pays[randomcountry]["flags"]["png"]
            
            },
            QuestionXTime() {
                if(this.answer == this.randompays.name){
                this.valid = true
                }
                else{
                    this.valid = false
                }
                this.compteur++
                if(this.valid == true){
                    this.compteurjuste++
                }
                this.getRandomCountry()
                this.answer = ""
             },
            setScore(){
                if(this.$store.state.score == "" ){
                    let tabempty3 = []
                

                    tabempty3.push(this.compteurjuste)

                    this.$store.commit("setScore",tabempty3)   
                }else{
                    let tabempty3 = this.$store.state.score
                    

                    tabempty3.push(this.compteurjuste)

                    this.$store.commit("setScore",tabempty3)
                }
                
                // this.$router.push({})
                // pour rediriger l'utlilisateur vers une page
            }

    },
}
</script> 