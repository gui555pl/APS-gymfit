import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Treinos from '../views/Treinos'
import EditarConta from '../views/EditarConta'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/editar-conta/:id',
    name: 'editar-conta',
    component: EditarConta
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
