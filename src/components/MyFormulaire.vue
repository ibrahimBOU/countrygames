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
            utilisateur : {}
        }
    },
    methods: {
    enrengistrer () {
        this.$store.commit("setNom", this.utilisateur.nom)
        this.$store.commit("setPrenom", this.utilisateur.prenom)
        this.$router.push({
        })
    }

    /*Pour accéder a une variable du store c'est "this.$store.state.:nomdevariable:"*/
},
}
</script>