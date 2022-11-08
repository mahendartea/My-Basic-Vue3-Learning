import MyHomeVue from '@/views/MyHome.vue'
import ReactivePage from '@/views/ReactivePage.vue'
import ComputedPage from '@/views/ComputedPage.vue'
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
    },
    {
      path: '/computed',
      name: 'computed',
      component: ComputedPage
    }

  ]
})

export default router
