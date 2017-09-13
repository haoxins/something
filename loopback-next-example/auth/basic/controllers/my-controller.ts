
import {
  authenticate,
  UserProfile
} from '@loopback/authentication'

import {inject, get} from '@loopback/core'

export class MyController {
  constructor(
    @inject('authentication.currentUser')
    private user: UserProfile) {}

  @authenticate('BasicStrategy')
  @get('/whoAmI')
  whoAmI() {
    return this.user.id
  }
}
