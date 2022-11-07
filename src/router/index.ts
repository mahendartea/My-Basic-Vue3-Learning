import MyHomeVue from '@/views/MyHome.vue'
import ReactivePage from '@/views/ReactivePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyHomeVue
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: ReactivePage
    }
  ]
})

export default router
