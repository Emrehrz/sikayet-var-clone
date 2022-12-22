import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addComp',
    name: 'addComp',
    component: () => import(/* webpackChunkName: "addComp" */ '../views/addCompView.vue')
  },
  {
    path: '/sing-in-up',
    name: 'login-register',
    component: () => import(/* webpackChunkName: "sing-in-up" */ '../views/logRegView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profileView.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import(/* webpackChunkName: "staff" */ '../views/staffView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
