import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'
import Portfolio from '../views/portfolio.vue'
import Contact from '../views/contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next('/404')
    },
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/NotFound'),
    meta: { access: false },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

const originalPush = router.push
router.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }

  return originalPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      return err
    }

    return Promise.reject(err)
  })
}

router.beforeEach((to, from, next) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
  next()

  // for authentication
  // const access = to.meta.access
  // let token = store.getters['users/getToken'] || null

  // if (access) {
  //   if (token) next()
  //   else router.push('/login').catch(() => {})
  // } else if (!access) {
  //   if (token) router.push('/').catch(() => {})
  //   else next()
  // } else next()
})

router.afterEach((to) => {
  const DEFAULT_TITLE = process.env.VUE_APP_NAME || 'Twincode'
  Vue.nextTick(() => {
    document.title = DEFAULT_TITLE + ' | ' + to.name || DEFAULT_TITLE
  })
})
export default router
