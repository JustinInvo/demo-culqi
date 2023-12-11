import { createRouter, createWebHistory } from 'vue-router'

const lazyLoad = (view) => {
  return () => import(`../views/${view}.vue`);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad("home")
    },
    {
      path: '/recargas',
      name: 'recargas',
      component: lazyLoad("recharge")
    },
    {
      path: '/401',
      name: 'unauthorized',
      component: lazyLoad("errors/Unauthorized")
    },
    {
      path: '/error',
      name: 'error',
      component: lazyLoad("errors/UnknownError")
    },
  ]
})

export default router
