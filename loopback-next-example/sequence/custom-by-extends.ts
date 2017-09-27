
import {
  DefaultSequence,
  ParsedRequest,
  CoreBindings,
  Application,
  inject,
  Send
} from '@loopback/core'

import {
  ServerResponse
} from 'http'

const app = new Application()

class MySequence extends DefaultSequence {
  async handle(req: ParsedRequest, res: ServerResponse) {
    console.log('oh ~')
    res.end('bingo ~')
  }
}

app.sequence(MySequence)

app.start()
