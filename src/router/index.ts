import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from './guard'

import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // meta: {
    //   keepAlive: true,
    // },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App): void {
  app.use(router)
  // 创建路由守卫
  setupRouterGuard()
}

export default router
