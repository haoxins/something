
import {AccountController} from './controller/account'
import {AccountRepository} from './repository/account'

import {Application} from '@loopback/core'

const app = new Application()

app.bind('repositories.account').toClass(AccountRepository)
app.controller(AccountController)

app.start()
