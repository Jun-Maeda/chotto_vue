import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/info_list',
      name: 'info_list',
      component: () => import('../views/InfoList.vue')
    },
    {
      path: '/event_list',
      name: 'event_list',
      component: () => import('../views/EventList.vue')
    },
    {
      path: '/info_detail',
      name: 'info_detail',
      component: () => import('../views/InfoDetail.vue')
    },
     {
      path: '/event_detail',
      name: 'event_detail',
      component: () => import('../views/EventDetail.vue')
    },
     {
      path: '/services',
      name: 'services',
      component: () => import('../views/Service.vue')
    },
     {
      path: '/entory_room',
      name: 'entory_room',
      component: () => import('../views/EntoryRoom.vue')
    }
  ]
})

export default router