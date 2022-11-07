import MyHomeVue from '@/views/MyHome.vue'
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
        path: '/about',
        name: 'about',
        component: () => import('@/views/MyAbout.vue')
    }
  ]
})

export default router
