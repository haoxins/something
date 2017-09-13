
import {
  AuthenticationBindings,
  AuthenticationMetadata,
  UserProfile,
} from '@loopback/authentication'

import {
  ValueOrPromise,
  Provider,
  inject
} from '@loopback/context'

import {BasicStrategy} from 'passport-http'
import {Strategy} from 'passport'

export class MyAuthStrategyProvider implements Provider<Strategy | undefined> {
  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata
  ) {}

  value() : ValueOrPromise<Strategy> {
    if (!this.metadata) {
      return Promise.reject('Authentication metadata not found')
    }

    const name = this.metadata.strategy;
    if (name === 'BasicStrategy') {
      return new BasicStrategy(this.verify)
    } else {
      return Promise.reject(`The strategy ${name} is not available.`)
    }
  }

  verify(username: string, password: string, cb: Function) {
    cb(null, {id: '110'})
  }
}
