
import { DashboardCom } from './dashboard'
import { HeroInfoCom } from './hero-info'
import { HeroListCom } from './hero-list'

import {
  provideRouter,
  RouterConfig
} from '@angular/router'

const routes: RouterConfig = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: DashboardCom,
}, {
  path: 'heroes/:id',
  component: HeroInfoCom
}, {
  path: 'heroes',
  component: HeroListCom
}]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]
