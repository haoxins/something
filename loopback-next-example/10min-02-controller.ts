
import {
  Application,
  param,
  get
} from '@loopback/core'

const app = new Application()

class MyController {
  @get('/')
  @param.query.string('name')
  hello(name: string) {
    return `hello, ${name}`
  }
}

app.controller(MyController)

app.start()
