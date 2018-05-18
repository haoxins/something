
// component

import {Component, ProviderMap} from '@loopback/core'

class MyComponent implements Component {
  providers?: ProviderMap
  constructor() {
    this.providers = {
      'my-component.my-value': MyValueProvider
    }
  }
}

// provider

import {Provider} from '@loopback/context';

export class MyValueProvider implements Provider<string> {
  // 这里使用 async 仅仅是说明: provider 可以是异步的
  async value() {
    return 'Hello world'
  }
}

// application

import {
  Application,
  inject,
  param,
  get
} from '@loopback/core'

const app = new Application()

app.component(MyComponent)

class MyController {
  greeting: string

  constructor(@inject('my-component.my-value') greeting: string) {
    this.greeting = greeting
  }

  @get('/')
  hello() {
    return this.greeting
  }
}

app.controller(MyController)

app.start()
