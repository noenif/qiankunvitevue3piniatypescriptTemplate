import type { Router } from 'vue-router'

export function createTitleGuard(router: Router): void {
  router.beforeEach((to) => {
    document.title = (to.meta?.title as string) || document.title
    return true
  })
}
