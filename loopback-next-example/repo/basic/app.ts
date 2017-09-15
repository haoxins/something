
// 配置数据源

import {
  DataSourceConstructor
} from '@loopback/repository'

const db = new DataSourceConstructor({
  connector: 'memory',
  name: 'db'
})

// 定义 Model

import {
  property,
  Entity,
  model
} from '@loopback/repository'

@model()
class User extends Entity {
  @property({type: 'number', id: true})
  id: number

  @property({type: 'string'})
  name: string
}

// 定义 Repository

import {
  DefaultCrudRepository
} from '@loopback/repository'

class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
  constructor() {
    super(User, db)
  }
}

// 定义 Controller, 并绑定 Repository

import {
  repository
} from '@loopback/repository'

import {
  Application,
  inject,
  param,
  post,
  get
} from '@loopback/core'

const app = new Application()

class UserController {
  constructor(
    @repository('user')
    public repository: UserRepository
  ) {}
  @post('/')
  @param.body('userInstance', {type: 'object'})
  async create(userInstance: User) {
    return await this.repository.create(userInstance)
  }
  @get('/')
  async query() {
    return await this.repository.find()
  }
}

app.bind('repositories.user').toClass(UserRepository)

app.controller(UserController)

app.start()
