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
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/access',
      name: 'access',
      component: () => import('../views/AccessView.vue')
    }
    ,
    {
      path: '/price',
      name: 'price',
      component: () => import('../views/PriceView.vue')
    },
    {
      path: '/room_list',
      name: 'room_list',
      component: () => import('../views/RoomListView.vue')
    }
    ,
    {
      path: '/room',
      name: 'room',
      component: () => import('../views/RoomDetailView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/surprise',
      name: 'surprise',
      component: () => import('../views/SurpriseView.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router