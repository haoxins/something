
import {Application} from '@loopback/core'

import {
  AuthenticationComponent,
  AuthenticationBindings
} from '@loopback/authentication'

import {MyAuthStrategyProvider} from './providers/auth-strategy'
import {MyController} from './controllers/my-controller'
import {MySequence} from './sequence'

class MyApp extends Application {
  constructor() {
    super({
      components: [AuthenticationComponent],
    })

    this.bind(AuthenticationBindings.STRATEGY)
      .toProvider(MyAuthStrategyProvider)

    this.sequence(MySequence)

    this.controller(MyController)
  }
}

const app = new MyApp()

app.start()
