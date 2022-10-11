<template>
    <div class="formulaire">
        <h1>Quiz</h1>
        <template v-if="this.$store.state.nom == ''">
            <MyFormulaire/>
        </template>
        <template v-else>
       <MyQuiz/>
            
        </template>
    </div>
</template>
<script>
import MyFormulaire from "../components/MyFormulaire.vue";
import MyQuiz from "@/components/MyQuiz.vue";

export default {
    components: { MyFormulaire, MyQuiz },

    data() {
        return {
         name: "",   
        }
    },

    mounted() {
        this.$store.commit("setNom",'')
        this.$store.commit("setPrenom", '')
    },

    methods: {
        setName(){
          
        }
    },
}
</script>
<style lang="fr">
    
</style>