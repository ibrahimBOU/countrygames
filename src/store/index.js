import { createStore } from 'vuex'

export default createStore({
  state: {
    nom : [],
    prenom:[],
    score:[],
  },
  getters: {
  },
  mutations: {
    setNom(state,nom){
      state.nom = nom
    },
    setPrenom(state,prenom){
      state.prenom = prenom
    },
    setScore(state,score){
      state.score = score
    }

  },
  actions: {
  },
  modules: {
  }
})
