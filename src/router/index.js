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
      component: () => import('../views/InfoListView.vue')
    },
    {
      path: '/event_list',
      name: 'event_list',
      component: () => import('../views/EventListView.vue')
    },
    {
      path: '/info_detail',
      name: 'info_detail',
      component: () => import('../views/InfoDetailView.vue')
    },
     {
      path: '/event_detail',
      name: 'event_detail',
      component: () => import('../views/EventDetailView.vue')
    },
     {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServiceView.vue')
    },
     {
      path: '/entry_room',
      name: 'entry_room',
      component: () => import('../views/EntryRoomView.vue')
    }
  ]
})

export default router