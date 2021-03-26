import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Menu from '../views/Menu.vue'
import Songs from '../views/Songs.vue'
import TopSecret from '../views/TopSecret.vue'
import Privacy from '../views/Privacy.vue'
import Photos from '../views/Photos.vue'
import share from '../views/share.vue'
import Notite from '../views/Notite.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/keep',
    name: 'Notite',
    component: Notite
  },
  {
    path: '/share',
    name: 'share',
    component: share
  },
  {
    path: '/Photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/TopSecret',
    name: 'TopSecret',
    component: TopSecret
  },
  {
    path: '/Privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/Songs',
    name: 'Songs',
    component: Songs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
