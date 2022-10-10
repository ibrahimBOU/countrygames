import { createStore } from 'vuex'

export default createStore({
  state: {
    nom : '',
    prenom:'',
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
  },
  actions: {
  },
  modules: {
  }
})
