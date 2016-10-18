
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http'
import { provide } from '@angular/core'

import { APP_ROUTER_PROVIDERS } from './component/route'
import { InMemoryDataService } from './service/mock'
import { App } from './component/app'

import '@angular2-material/core'
import '@angular2-material/button'
import '@angular2-material/input'
import '@angular2-material/icon'

bootstrap(App, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  provide(XHRBackend, {
    useClass: InMemoryBackendService
  }),
  provide(SEED_DATA,  {
    useClass: InMemoryDataService
  })
])
