
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http'
import { provide } from '@angular/core'

import { InMemoryDataService } from './service/mock'
import { App } from './component/app'

bootstrap(App, [
  HTTP_PROVIDERS,
  provide(XHRBackend, {
    useClass: InMemoryBackendService
  }),
  provide(SEED_DATA,  {
    useClass: InMemoryDataService
  })
])
