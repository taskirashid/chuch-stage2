import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'
import AachensMsg from '../views/AachensMsg.vue'
import Parish from '../views/Parish.vue'
import Members from '../views/Members.vue'
import Committee from '../views/Committee.vue'
import AnnouncementPage from '../views/AnnouncementPage.vue'
import Obituary from '../views/Obituary.vue'
import Events from '../views/Events.vue'
import FlashNews from '../views/FlashNews.vue'
import WorshipTime from '../views/WorshipTime.vue'
import Settings from '../views/Settings.vue'
import Login from '../components/Login.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/overview',
    name: 'Overview',
    component: Overview,
  },
  {
    path: '/aachensMsg',
    name: 'aachensmsg',
    component: AachensMsg
  },
  {
    path: '/parish',
    name: 'Parish',
    component: Parish
  },
  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  {
    path: '/committee',
    name: 'Committee',
    component: Committee
  },
  {
    path: '/announcementPage',
    name: 'AnnouncementPage',
    component: AnnouncementPage
  },
  {
    path: '/obituary',
    name: 'Obituary',
    component: Obituary
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/flashNews',
    name: 'FlashNews',
    component: FlashNews
  },
  {
    path: '/worshipTime',
    name: 'WorshipTime',
    component: WorshipTime
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
    meta: { isLogin: true },
  },
  // {
  //   path: '/login',
  //   redirect: '/login',
  //   name: 'Login',
  //   component: Login,
  // },
  {
    path: '/:pathMatch(.*)*',
    name: "notFound",
    component: NotFound,
    meta: { isLogin: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

export default router