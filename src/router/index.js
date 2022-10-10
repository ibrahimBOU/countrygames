import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/accueil',
    name:'accueil',
    component: () => import('../views/AccueilView.vue')
  },
  {
    path: '/src/views/QuizView.vue',
    name: 'Quiz',
    component: () => import('../views/QuizView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
