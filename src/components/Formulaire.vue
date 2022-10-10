<template>
    <div>
        ici mon formaulaire
    </div>
    <input placeholder="Nom" v-model="utilisateur.nom">
        <input placeholder="Prenom" v-model="utilisateur.prenom">

    
    <button @click="enrengistrer">Valider</button>
</template>
<script>
export default {
    name: 'Formulaire',
    data(){
        return{
            utilisateur : {}
        }
    },
    methods: {
    enrengistre () {
        alert("ok")
    }
},
}
</script>