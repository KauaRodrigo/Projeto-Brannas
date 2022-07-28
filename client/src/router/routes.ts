import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'
import Quadros from '../views/Quadros/Quadros.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/quadros',
    name: 'Quadros',
    component: Quadros
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
