import router from '@/router'

import { createTitleGuard } from './titleGuard'
import { createScrollGuard } from './scrollGuard'

export function setupRouterGuard() {
  createTitleGuard(router)
  createScrollGuard(router)
}
