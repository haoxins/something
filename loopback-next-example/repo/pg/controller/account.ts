
import {AccountRepository} from '../repository/account'
import {Account} from '../model/account'

import {
  repository
} from '@loopback/repository'

import {
  inject,
  param,
  post,
  get
} from '@loopback/core'

export class AccountController {
  constructor(
    @repository('account')
    public repository: AccountRepository
  ) {}
  @post('/')
  @param.body('accountInstance', {type: 'object'})
  async create(accountInstance: Account) {
    return await this.repository.create(accountInstance)
  }
  @get('/')
  async query() {
    return await this.repository.find()
  }
}
