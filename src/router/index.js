import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import LandingView from '../views/LandingView.vue'
const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/LandingView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },


  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },

  
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/UploadView.vue')
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
