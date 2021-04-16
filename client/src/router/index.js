import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Newsfeed from '../views/Newsfeed.vue'
import Comment from '../views/Comment.vue'
import Profil from '../views/Profil.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/newsfeed',
    name: 'newsfeed',
    component: Newsfeed
  },
  {
    path: '/comment',
    name: 'comment',
    component: Comment
  },
  {
    path: '/profil/',
    name: 'profil',
    component: Profil
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
