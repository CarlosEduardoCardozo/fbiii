import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import catalagoVag from '../views/catalagoVag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: catalagoVag
    },

  ]
})

export default router
