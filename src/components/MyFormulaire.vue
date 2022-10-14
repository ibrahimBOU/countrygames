<template>
    <div class="Myformulaire">
        ici mon formulaire
    
        <input placeholder="Nom" v-model="utilisateur.nom">
        <input placeholder="Prenom" v-model="utilisateur.prenom">

    
        <button @click="enrengistrer">Valider</button>
    </div>
</template>
<script>
export default {
    name: 'MyFormulaire',
    data(){
        return{
            utilisateur : {
                nom : "",
                prenom:"",
            }
        }
    },
    methods: {
    enrengistrer () {
        if(this.$store.state.nom == "" && this.$store.state.prenom == ""){
            let tabempty1 = []
            let tabempty2 = []
        
            tabempty1.push(this.utilisateur.nom)
            tabempty2.push(this.utilisateur.prenom)

            this.$store.commit("setNom", tabempty1)
            this.$store.commit("setPrenom", tabempty2)
        }else{
            let tabempty1 = this.$store.state.nom
            let tabempty2 = this.$store.state.prenom

            console.log(tabempty1)
            console.log(tabempty2)

            tabempty1.push(this.utilisateur.nom)
            tabempty2.push(this.utilisateur.prenom)
            
            this.$store.commit("setNom", tabempty1)
            this.$store.commit("setPrenom", tabempty2)
        }
    

        // this.$router.push({})
        // pour rediriger l'utilisateur vers une page souhaiter
    }

    /*Pour accéder a une variable du store c'est "this.$store.state.:nomdevariable:"*/
},
}
</script>