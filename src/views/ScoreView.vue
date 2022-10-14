<template>
    <div class="Score">
        <h1>Scores</h1>
        <table>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Score</th>
                </tr>
            <tr>
                <td>{{this.$store.state.nom}}</td>
                <td>{{this.$store.state.prenom}}</td>
                <td>{{this.$store.state.score}}</td>
            </tr>
        </table>
    </div>
</template>
<script>

export default {
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
}
</script>
<style lang="">
    
</style>