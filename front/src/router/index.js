import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Presenca from '../views/Presenca'
import Treinos from '../views/Treinos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/presenca',
    name: 'presenca',
    component: Presenca
  },
  {
    path: '/treinos',
    name: 'treinos',
    component: Treinos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
